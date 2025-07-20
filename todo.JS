
// ===== TASK MANAGER APPLICATION =====
class TaskManager {
  constructor() {
    this.tasks = [];
    this.currentEditId = null;
    this.isDarkMode = localStorage.getItem('darkMode') === 'true';
    
    this.init();
  }

  // ===== INITIALIZATION =====
  init() {
    this.loadTasks();
    this.setupEventListeners();
    this.setupDarkMode();
    this.renderTasks();
    this.updateTaskStats();
  }

  // ===== EVENT LISTENERS SETUP =====
  setupEventListeners() {
    // Form submissions
    document.getElementById('taskForm').addEventListener('submit', (e) => this.handleAddTask(e));
    document.getElementById('editTaskForm').addEventListener('submit', (e) => this.handleEditTask(e));
    
    // Search and filters
    document.getElementById('searchTasks').addEventListener('input', () => this.renderTasks());
    document.getElementById('filterTasks').addEventListener('change', () => this.renderTasks());
    document.getElementById('sortTasks').addEventListener('change', () => this.renderTasks());
    
    // Clear completed tasks
    document.getElementById('clearCompleted').addEventListener('click', () => this.clearCompletedTasks());
    
    // Dark mode toggle
    document.getElementById('darkModeToggle').addEventListener('click', () => this.toggleDarkMode());
    
    // Modal events
    document.getElementById('saveEditTask').addEventListener('click', () => this.saveEditTask());
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => this.handleKeyboardShortcuts(e));
  }

  // ===== DARK MODE =====
  setupDarkMode() {
    if (this.isDarkMode) {
      document.documentElement.setAttribute('data-bs-theme', 'dark');
      document.getElementById('darkModeToggle').innerHTML = '<i class="bi bi-sun-fill"></i>';
    }
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('darkMode', this.isDarkMode);
    
    if (this.isDarkMode) {
      document.documentElement.setAttribute('data-bs-theme', 'dark');
      document.getElementById('darkModeToggle').innerHTML = '<i class="bi bi-sun-fill"></i>';
    } else {
      document.documentElement.removeAttribute('data-bs-theme');
      document.getElementById('darkModeToggle').innerHTML = '<i class="bi bi-moon-fill"></i>';
    }
    
    // this.showToast('Theme updated successfully!', 'success');
  }

  // ===== TASK MANAGEMENT =====
  handleAddTask(e) {
    e.preventDefault();
    
    const title = document.getElementById('taskTitle').value.trim();
    const description = document.getElementById('taskDescription').value.trim();
    const dueDate = document.getElementById('taskDueDate').value;
    
    if (!title) {
      this.showValidationError('taskTitle', 'Please enter a task title.');
      return;
    }

    const task = {
      id: Date.now().toString(),
      title,
      description,
      dueDate: dueDate || null,
      completed: false,
      createdAt: new Date().toISOString(),
      completedAt: null
    };

    this.tasks.unshift(task);
    this.saveTasks();
    this.renderTasks();
    this.updateTaskStats();
    
    // Reset form
    document.getElementById('taskForm').reset();
    document.getElementById('taskTitle').focus();
    
    this.showToast('Task added successfully!', 'success');
  }

  deleteTask(id) {
    const taskIndex = this.tasks.findIndex(task => task.id === id);
    if (taskIndex > -1) {
      const taskElement = document.querySelector(`[data-task-id="${id}"]`);
      if (taskElement) {
        taskElement.classList.add('removing');
        setTimeout(() => {
          this.tasks.splice(taskIndex, 1);
          this.saveTasks();
          this.renderTasks();
          this.updateTaskStats();
          this.showToast('Task deleted successfully!', 'success');
        }, 300);
      }
    }
  }

  toggleTask(id) {
    const task = this.tasks.find(task => task.id === id);
    if (task) {
      task.completed = !task.completed;
      task.completedAt = task.completed ? new Date().toISOString() : null;
      this.saveTasks();
      this.renderTasks();
      this.updateTaskStats();
      
      const status = task.completed ? 'completed' : 'incomplete';
      this.showToast(`Task marked as ${status}!`, 'success');
    }
  }

  editTask(id) {
    const task = this.tasks.find(task => task.id === id);
    if (task) {
      this.currentEditId = id;
      
      document.getElementById('editTaskTitle').value = task.title;
      document.getElementById('editTaskDescription').value = task.description || '';
      document.getElementById('editTaskDueDate').value = task.dueDate || '';
      
      const modal = new bootstrap.Modal(document.getElementById('editTaskModal'));
      modal.show();
    }
  }

  saveEditTask() {
    if (!this.currentEditId) return;
    
    const title = document.getElementById('editTaskTitle').value.trim();
    const description = document.getElementById('editTaskDescription').value.trim();
    const dueDate = document.getElementById('editTaskDueDate').value;
    
    if (!title) {
      this.showValidationError('editTaskTitle', 'Please enter a task title.');
      return;
    }

    const task = this.tasks.find(task => task.id === this.currentEditId);
    if (task) {
      task.title = title;
      task.description = description;
      task.dueDate = dueDate || null;
      
      this.saveTasks();
      this.renderTasks();
      
      const modal = bootstrap.Modal.getInstance(document.getElementById('editTaskModal'));
      modal.hide();
      
      this.currentEditId = null;
      this.showToast('Task updated successfully!', 'success');
    }
  }

  clearCompletedTasks() {
    const completedCount = this.tasks.filter(task => task.completed).length;
    
    if (completedCount === 0) {
      this.showToast('No completed tasks to clear!', 'warning');
      return;
    }

    if (confirm(`Are you sure you want to delete ${completedCount} completed task(s)?`)) {
      this.tasks = this.tasks.filter(task => !task.completed);
      this.saveTasks();
      this.renderTasks();
      this.updateTaskStats();
      this.showToast(`${completedCount} completed task(s) cleared!`, 'success');
    }
  }

  // ===== TASK FILTERING AND SORTING =====
  getFilteredAndSortedTasks() {
    let filteredTasks = [...this.tasks];
    
    // Apply search filter
    const searchTerm = document.getElementById('searchTasks').value.toLowerCase().trim();
    if (searchTerm) {
      filteredTasks = filteredTasks.filter(task => 
        task.title.toLowerCase().includes(searchTerm) ||
        (task.description && task.description.toLowerCase().includes(searchTerm))
      );
    }
    
    // Apply status filter
    const filterValue = document.getElementById('filterTasks').value;
    if (filterValue === 'completed') {
      filteredTasks = filteredTasks.filter(task => task.completed);
    } else if (filterValue === 'incomplete') {
      filteredTasks = filteredTasks.filter(task => !task.completed);
    }
    
    // Apply sorting
    const sortValue = document.getElementById('sortTasks').value;
    filteredTasks.sort((a, b) => {
      switch (sortValue) {
        case 'oldest':
          return new Date(a.createdAt) - new Date(b.createdAt);
        case 'title':
          return a.title.localeCompare(b.title);
        case 'dueDate':
          if (!a.dueDate && !b.dueDate) return 0;
          if (!a.dueDate) return 1;
          if (!b.dueDate) return -1;
          return new Date(a.dueDate) - new Date(b.dueDate);
        case 'newest':
        default:
          return new Date(b.createdAt) - new Date(a.createdAt);
      }
    });
    
    return filteredTasks;
  }

  // ===== RENDERING =====
  renderTasks() {
    const tasksContainer = document.getElementById('tasksList');
    const emptyState = document.getElementById('emptyState');
    const filteredTasks = this.getFilteredAndSortedTasks();
    
    if (filteredTasks.length === 0) {
      tasksContainer.innerHTML = '';
      emptyState.style.display = 'block';
      return;
    }
    
    emptyState.style.display = 'none';
    tasksContainer.innerHTML = filteredTasks.map(task => this.createTaskHTML(task)).join('');
    
    // Add event listeners to task elements
    filteredTasks.forEach(task => {
      const taskElement = document.querySelector(`[data-task-id="${task.id}"]`);
      
      // Checkbox toggle
      const checkbox = taskElement.querySelector('.task-checkbox');
      checkbox.addEventListener('change', (e) => {
        e.stopPropagation();
        this.toggleTask(task.id);
      });
      
      // Edit button
      const editBtn = taskElement.querySelector('.edit-task-btn');
      editBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.editTask(task.id);
      });
      
      // Delete button
      const deleteBtn = taskElement.querySelector('.delete-task-btn');
      deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.deleteTask(task.id);
      });
    });
  }

  createTaskHTML(task) {
    const dueDate = task.dueDate ? new Date(task.dueDate) : null;
    const now = new Date();
    const isOverdue = dueDate && dueDate < now && !task.completed;
    const isDueSoon = dueDate && dueDate > now && (dueDate - now) < 24 * 60 * 60 * 1000 && !task.completed;
    
    let dueDateClass = '';
    let dueDateIcon = 'bi-calendar-event';
    
    if (isOverdue) {
      dueDateClass = 'overdue';
      dueDateIcon = 'bi-exclamation-triangle-fill';
    } else if (isDueSoon) {
      dueDateClass = 'due-soon';
      dueDateIcon = 'bi-clock-fill';
    }

    return `
      <div class="card task-item ${task.completed ? 'completed' : ''}" data-task-id="${task.id}">
        <div class="card-body">
          <div class="row align-items-start">
            <div class="col-auto">
              <div class="form-check">
                <input class="form-check-input task-checkbox" type="checkbox" ${task.completed ? 'checked' : ''}>
              </div>
            </div>
            <div class="col">
              <h5 class="task-title">${this.escapeHtml(task.title)}</h5>
              ${task.description ? `<p class="task-description">${this.escapeHtml(task.description)}</p>` : ''}
              <div class="task-meta d-flex justify-content-between align-items-center">
                <div>
                  ${task.dueDate ? `
                    <span class="task-due-date ${dueDateClass}">
                      <i class="bi ${dueDateIcon}"></i>
                      ${this.formatDate(dueDate)}
                    </span>
                  ` : ''}
                  <small class="text-muted ms-2">
                    Created ${this.formatRelativeTime(new Date(task.createdAt))}
                  </small>
                </div>
              </div>
            </div>
            <div class="col-auto">
              <div class="task-actions">
                <button class="btn btn-outline-primary btn-sm edit-task-btn" title="Edit Task">
                  <i class="bi bi-pencil"></i>
                </button>
                <button class="btn btn-outline-danger btn-sm delete-task-btn" title="Delete Task">
                  <i class="bi bi-trash"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  updateTaskStats() {
    const totalTasks = this.tasks.length;
    const completedTasks = this.tasks.filter(task => task.completed).length;
    const incompleteTasks = totalTasks - completedTasks;
    
    document.getElementById('totalTasks').textContent = totalTasks;
    document.getElementById('completedTasks').textContent = completedTasks;
    document.getElementById('incompleteTasks').textContent = incompleteTasks;
    
    const clearBtn = document.getElementById('clearCompleted');
    clearBtn.disabled = completedTasks === 0;
  }

  // ===== UTILITY FUNCTIONS =====
  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  formatDate(date) {
    const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return date.toLocaleDateString('en-US', options);
  }

  formatRelativeTime(date) {
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);
    
    if (diffInSeconds < 60) return 'just now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
    return `${Math.floor(diffInSeconds / 86400)}d ago`;
  }

  showValidationError(fieldId, message) {
    const field = document.getElementById(fieldId);
    field.classList.add('is-invalid');
    field.focus();
    
    setTimeout(() => {
      field.classList.remove('is-invalid');
    }, 3000);
  }

  showToast(message, type = 'success') {
    const toastContainer = document.getElementById('toastContainer');
    const toastId = 'toast-' + Date.now();
    
    const bgClass = {
      success: 'bg-success',
      error: 'bg-danger',
      warning: 'bg-warning',
      info: 'bg-info'
    }[type] || 'bg-success';
    
    const icon = {
      success: 'bi-check-circle-fill',
      error: 'bi-x-circle-fill',
      warning: 'bi-exclamation-triangle-fill',
      info: 'bi-info-circle-fill'
    }[type] || 'bi-check-circle-fill';
    
    const toastHTML = `
      <div id="${toastId}" class="toast" role="alert">
        <div class="toast-header ${bgClass} text-white">
          <i class="bi ${icon} me-2"></i>
          <strong class="me-auto">TaskMaster</strong>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast"></button>
        </div>
        <div class="toast-body">
          ${message}
        </div>
      </div>
    `;
    
    toastContainer.insertAdjacentHTML('beforeend', toastHTML);
    
    const toastElement = document.getElementById(toastId);
    const toast = new bootstrap.Toast(toastElement, { delay: 3000 });
    toast.show();
    
    toastElement.addEventListener('hidden.bs.toast', () => {
      toastElement.remove();
    });
  }

  handleKeyboardShortcuts(e) {
    // Ctrl/Cmd + Enter to add task
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      const taskTitle = document.getElementById('taskTitle');
      if (document.activeElement === taskTitle || taskTitle.value.trim()) {
        document.getElementById('taskForm').dispatchEvent(new Event('submit'));
      }
    }
    
    // Escape to clear search
    if (e.key === 'Escape') {
      const searchInput = document.getElementById('searchTasks');
      if (searchInput.value) {
        searchInput.value = '';
        this.renderTasks();
        searchInput.blur();
      }
    }
  }

  // ===== LOCAL STORAGE =====
  saveTasks() {
    try {
      localStorage.setItem('taskmaster-tasks', JSON.stringify(this.tasks));
    } catch (error) {
      console.error('Error saving tasks:', error);
      this.showToast('Error saving tasks to local storage!', 'error');
    }
  }

  loadTasks() {
    try {
      const savedTasks = localStorage.getItem('taskmaster-tasks');
      if (savedTasks) {
        this.tasks = JSON.parse(savedTasks);
      }
    } catch (error) {
      console.error('Error loading tasks:', error);
      this.showToast('Error loading tasks from local storage!', 'error');
      this.tasks = [];
    }
  }
}

// ===== APPLICATION INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
  window.taskManager = new TaskManager();
});

// ===== SERVICE WORKER REGISTRATION (OPTIONAL) =====
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // Uncomment to register a service worker for offline functionality
    // navigator.serviceWorker.register('/sw.js');
  });
}
