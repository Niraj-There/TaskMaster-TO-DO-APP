import React, { useState, useEffect, useRef } from 'react';

// Website Header Component
const WebsiteHeader = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#1E2022] bg-opacity-80 backdrop-blur-md shadow-xl fixed top-0 left-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => onNavigate('home')}>
            <i className="bi bi-check-circle-fill text-[#F0F5F9] text-2xl mr-2"></i> {/* Lightest color for icon */}
            <span className="text-white text-2xl font-bold font-montserrat">TaskMaster</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" onClick={() => onNavigate('home')} className="text-[#F0F5F9] hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 font-montserrat">Home</a>
            <a href="#" onClick={() => onNavigate('tasks')} className="text-[#F0F5F9] hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 font-montserrat">My Tasks</a>
            <a href="#" onClick={() => onNavigate('features')} className="text-[#F0F5F9] hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 font-montserrat">Features</a>
            <a href="#" onClick={() => onNavigate('about')} className="text-[#F0F5F9] hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 font-montserrat">About Us</a>
            <a href="#" onClick={() => onNavigate('contact')} className="text-[#F0F5F9] hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 font-montserrat">Contact Us</a>
          </div>

          {/* Auth Buttons (Dark mode toggle moved outside) */}
          <div className="hidden md:flex items-center space-x-4">
            <button onClick={() => onNavigate('signin')} className="text-[#F0F5F9] hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 font-montserrat">Sign In</button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#F0F5F9] hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <i className="bi bi-x-lg h-6 w-6"></i>
              ) : (
                <i className="bi bi-list h-6 w-6"></i>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#1E2022] pb-3 pt-2">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" onClick={() => { onNavigate('home'); setIsMenuOpen(false); }} className="text-[#F0F5F9] hover:bg-gray-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium font-montserrat">Home</a>
            <a href="#" onClick={() => { onNavigate('tasks'); setIsMenuOpen(false); }} className="text-[#F0F5F9] hover:bg-gray-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium font-montserrat">My Tasks</a>
            <a href="#" onClick={() => { onNavigate('features'); setIsMenuOpen(false); }} className="text-[#F0F5F9] hover:bg-gray-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium font-montserrat">Features</a>
            <a href="#" onClick={() => { onNavigate('about'); setIsMenuOpen(false); }} className="text-[#F0F5F9] hover:bg-gray-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium font-montserrat">About Us</a>
            <a href="#" onClick={() => { onNavigate('contact'); setIsMenuOpen(false); }} className="text-[#F0F5F9] hover:bg-gray-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium font-montserrat">Contact Us</a>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-800">
            <div className="mt-3 px-5">
              <button onClick={() => { onNavigate('signin'); setIsMenuOpen(false); }} className="w-full text-center px-4 py-2 text-[#F0F5F9] hover:text-white hover:bg-gray-800 rounded-md text-base font-medium font-montserrat">Sign In</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

// Website Footer Component
const WebsiteFooter = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-[#1E2022] bg-opacity-80 backdrop-blur-md shadow-xl py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-400">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-1">
            <h3 className="text-white text-xl font-bold mb-4 font-montserrat">TaskMaster</h3>
            <p className="text-sm font-montserrat">Your ultimate productivity companion.</p>
            <p className="text-sm mt-2 font-montserrat">
              Made with <i className="bi bi-heart-fill text-red-500 mx-1"></i> by Niraj.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-white text-lg font-semibold mb-4 font-montserrat">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" onClick={() => onNavigate('home')} className="hover:text-white transition-colors duration-200 text-sm font-montserrat">Home</a></li>
              <li><a href="#" onClick={() => onNavigate('tasks')} className="hover:text-white transition-colors duration-200 text-sm font-montserrat">My Tasks</a></li>
              <li><a href="#" onClick={() => onNavigate('features')} className="hover:text-white transition-colors duration-200 text-sm font-montserrat">Features</a></li>
              <li><a href="#" onClick={() => onNavigate('about')} className="hover:text-white transition-colors duration-200 text-sm font-montserrat">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200 text-sm font-montserrat">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200 text-sm font-montserrat">Sitemap</a></li>
            </ul>
          </div>

          {/* Legal & Support */}
          <div className="col-span-1">
            <h3 className="text-white text-lg font-semibold mb-4 font-montserrat">Legal & Support</h3>
            <ul className="space-y-2">
              <li><a href="#" onClick={() => onNavigate('privacyPolicy')} className="hover:text-white transition-colors duration-200 text-sm font-montserrat">Privacy Policy</a></li>
              <li><a href="#" onClick={() => onNavigate('termsOfService')} className="hover:text-white transition-colors duration-200 text-sm font-montserrat">Terms of Service</a></li>
              <li><a href="#faq" onClick={() => onNavigate('about')} className="hover:text-white transition-colors duration-200 text-sm font-montserrat">FAQ</a></li>
              <li><a href="#" onClick={() => onNavigate('contact')} className="hover:text-white transition-colors duration-200 text-sm font-montserrat">Contact Us</a></li>
            </ul>
          </div>

          {/* Feedback Form Link */}
          <div className="col-span-1">
            <h3 className="text-white text-lg font-semibold mb-4 font-montserrat">Connect</h3>
            <p className="text-sm font-montserrat">Reach out to us for support or feedback.</p>
            <button onClick={() => onNavigate('contact')} className="mt-4 px-4 py-2 bg-[#F0F5F9] text-[#1E2022] rounded-md shadow-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-[#F0F5F9] transition-colors duration-200 font-montserrat">
              Send Feedback
            </button>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="flex space-x-4 text-2xl">
            <a href="#" className="hover:text-white transition-colors duration-200" aria-label="Twitter"><i className="bi bi-twitter"></i></a>
            <a href="#" className="hover:text-white transition-colors duration-200" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
            <a href="#" className="hover:text-white transition-colors duration-200" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
            <a href="#" className="hover:text-white transition-colors duration-200" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
            <a href="#" className="hover:text-white transition-colors duration-200" aria-label="GitHub"><i className="bi bi-github"></i></a>
          </div>
          <p className="text-sm font-montserrat">&copy; {new Date().getFullYear()} TaskMaster. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Home Page Component
const HomePage = ({ onNavigate }) => {
  return (
    <div className="flex flex-col items-center justify-center flex-grow text-center px-4 sm:px-6 lg:px-8">
      <section className="hero-section py-20 md:py-32 max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-[#1E2022] dark:text-[#F0F5F9] leading-tight mb-6 drop-shadow-lg font-montserrat">
          Master Your Tasks, Master Your Day.
        </h1>
        <p className="text-xl sm:text-2xl text-[#1E2022] dark:text-[#F0F5F9] mb-10 max-w-2xl mx-auto font-montserrat">
          Effortlessly organize your life with TaskMaster's intuitive and powerful tools.
        </p>
        <button
          onClick={() => onNavigate('tasks')}
          className="px-8 py-4 bg-[#1E2022] text-[#F0F5F9] text-xl font-semibold rounded-lg shadow-xl hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-[#1E2022] focus:ring-opacity-50 transition-all duration-300 transform hover:-translate-y-1 font-montserrat"
        >
          Get Started Now <i className="bi bi-arrow-right ml-2"></i>
        </button>
      </section>

      <section className="features-section py-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="feature-card bg-[#F0F5F9] bg-opacity-90 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-gray-200 dark:bg-[#232323] dark:bg-opacity-70 dark:border-gray-800 hover:shadow-2xl hover:border-[#1E2022] dark:hover:border-[#F0F5F9] transition-all duration-300">
          <i className="bi bi-list-check text-[#1E2022] text-5xl mb-4 dark:text-[#F0F5F9]"></i>
          <h3 className="text-2xl font-semibold text-[#1E2022] mb-3 font-montserrat dark:text-[#F0F5F9]">Intuitive Task Management</h3>
          <p className="text-[#1E2022] font-montserrat dark:text-[#F0F5F9]">Easily add, edit, and track your tasks with a clean, minimalist interface.</p>
        </div>
        <div className="feature-card bg-[#F0F5F9] bg-opacity-90 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-gray-200 dark:bg-[#232323] dark:bg-opacity-70 dark:border-gray-800 hover:shadow-2xl hover:border-[#1E2022] dark:hover:border-[#F0F5F9] transition-all duration-300">
          <i className="bi bi-shield-lock text-[#1E2022] text-5xl mb-4 dark:text-[#F0F5F9]"></i>
          <h3 className="text-2xl font-semibold text-[#1E2022] mb-3 font-montserrat dark:text-[#F0F5F9]">Secure & Reliable</h3>
          <p className="text-[#1E2022] font-montserrat dark:text-[#F0F5F9]">
            Your data is safe with us. TaskMaster uses robust cloud infrastructure to ensure your tasks are always available and protected.
          </p>
        </div>
        <div className="feature-card bg-[#F0F5F9] bg-opacity-90 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-gray-200 dark:bg-[#232323] dark:bg-opacity-70 dark:border-gray-800 hover:shadow-2xl hover:border-[#1E2022] dark:hover:border-[#F0F5F9] transition-all duration-300">
          <i className="bi bi-people text-[#1E2022] text-5xl mb-4 dark:text-[#F0F5F9]"></i>
          <h3 className="text-2xl font-semibold text-[#1E2022] mb-3 font-montserrat dark:text-[#F0F5F9]">Designed for Everyone</h3>
          <p className="text-[#1E2022] font-montserrat dark:text-[#F0F5F9]">
            Whether you're a student, professional, or managing a household, TaskMaster adapts to your workflow, making organization simple.
          </p>
        </div>
      </section>

      {/* New: Why TaskMaster? Section */}
      <section className="py-20 max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1E2022] mb-12 font-montserrat dark:text-[#F0F5F9]">
          Why TaskMaster? Your Path to Clarity and Focus.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
          <div className="bg-[#F0F5F9] bg-opacity-90 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-gray-200 dark:bg-[#232323] dark:bg-opacity-70 dark:border-gray-800 hover:shadow-2xl hover:border-[#1E2022] dark:hover:border-[#F0F5F9] transition-all duration-300">
            <i className="bi bi-lightbulb text-[#1E2022] text-4xl mb-4 dark:text-[#F0F5F9]"></i>
            <h3 className="text-2xl font-semibold text-[#1E2022] mb-3 font-montserrat dark:text-[#F0F5F9]">Cut Through the Noise</h3>
            <p className="text-[#1E2022] font-montserrat dark:text-[#F0F5F9]">
              In a world full of distractions, TaskMaster helps you identify what's truly important. Focus on your high-priority tasks and eliminate the clutter.
            </p>
          </div>
          <div className="bg-[#F0F5F9] bg-opacity-90 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-gray-200 dark:bg-[#232323] dark:bg-opacity-70 dark:border-gray-800 hover:shadow-2xl hover:border-[#1E2022] dark:hover:border-[#F0F5F9] transition-all duration-300">
            <i className="bi bi-arrow-repeat text-[#1E2022] text-4xl mb-4 dark:text-[#F0F5F9]"></i>
            <h3 className="text-2xl font-semibold text-[#1E2022] mb-3 font-montserrat dark:text-[#F0F5F9]">Build Consistent Habits</h3>
            <p className="text-[#1E2022] font-montserrat dark:text-[#F0F5F9]">
              With clear organization and reminders, you'll effortlessly build routines that lead to greater productivity and peace of mind.
            </p>
          </div>
          <div className="bg-[#F0F5F9] bg-opacity-90 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-gray-200 dark:bg-[#232323] dark:bg-opacity-70 dark:border-gray-800 hover:shadow-2xl hover:border-[#1E2022] dark:hover:border-[#F0F5F9] transition-all duration-300">
            <i className="bi bi-shield-lock text-[#1E2022] text-4xl mb-4 dark:text-[#F0F5F9]"></i>
            <h3 className="text-2xl font-semibold text-[#1E2022] mb-3 font-montserrat dark:text-[#F0F5F9]">Secure & Reliable</h3>
            <p className="text-[#1E2022] font-montserrat dark:text-[#F0F5F9]">
              Your data is safe with us. TaskMaster uses robust cloud infrastructure to ensure your tasks are always available and protected.
            </p>
          </div>
          <div className="bg-[#F0F5F9] bg-opacity-90 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-gray-200 dark:bg-[#232323] dark:bg-opacity-70 dark:border-gray-800 hover:shadow-2xl hover:border-[#1E2022] dark:hover:border-[#F0F5F9] transition-all duration-300">
            <i className="bi bi-people text-[#1E2022] text-4xl mb-4 dark:text-[#F0F5F9]"></i>
            <h3 className="text-2xl font-semibold text-[#1E2022] mb-3 font-montserrat dark:text-[#F0F5F9]">Designed for Everyone</h3>
            <p className="text-[#1E2022] font-montserrat dark:text-[#F0F5F9]">
              Whether you're a student, professional, or managing a household, TaskMaster adapts to your workflow, making organization simple.
            </p>
          </div>
        </div>
      </section>

      {/* New: Testimonials Section */}
      <section className="py-20 w-full bg-[#F0F5F9] bg-opacity-90 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200 dark:bg-[#232323] dark:bg-opacity-70 dark:border-gray-800">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1E2022] mb-12 font-montserrat dark:text-[#F0F5F9]">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="testimonial-card bg-[#F0F5F9] rounded-xl p-6 shadow-lg border border-gray-200 text-left dark:bg-[#232323] dark:border-gray-800 hover:shadow-2xl hover:border-[#1E2022] dark:hover:border-[#F0F5F9] transition-all duration-300">
              <p className="text-[#1E2022] italic mb-4 font-montserrat dark:text-[#F0F5F9]">
                "TaskMaster has completely transformed how I manage my daily tasks. The clean interface and intuitive features make staying organized a breeze!"
              </p>
              <p className="text-[#1E2022] font-semibold font-montserrat dark:text-[#F0F5F9]">- Jane Doe, Freelance Designer</p>
            </div>
            <div className="testimonial-card bg-[#F0F5F9] rounded-xl p-6 shadow-lg border border-gray-200 text-left dark:bg-[#232323] dark:border-gray-800 hover:shadow-2xl hover:border-[#1E2022] dark:hover:border-[#F0F5F9] transition-all duration-300">
              <p className="text-[#1E2022] italic mb-4 font-montserrat dark:text-[#F0F5F9]">
                "I've tried countless to-do apps, but TaskMaster stands out. The priority feature is a game-changer for my productivity."
              </p>
              <p className="text-[#1E2022] font-semibold font-montserrat dark:text-[#F0F5F9]">- John Smith, Marketing Manager</p>
            </div>
          </div>
          <div className="mt-8">
            <button
              onClick={() => onNavigate('tasks')}
              className="px-6 py-3 bg-[#1E2022] text-[#F0F5F9] text-lg font-semibold rounded-lg shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#1E2022] transition-all duration-200 font-montserrat"
            >
              Join Thousands of Productive Users <i className="bi bi-check-circle ml-2"></i>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};


// Main App Component
const App = () => {
  const [tasks, setTasks] = useState([
    {
        id: '1',
        title: 'Welcome to TaskMaster!',
        description: 'This is a sample task. You can edit or delete it.',
        dueDate: new Date(new Date().setDate(new Date().getDate() + 1)).toISOString(),
        priority: 'high',
        category: 'Getting Started',
        completed: false,
        createdAt: new Date().toISOString(),
        completedAt: null,
        subtasks: [
          { id: 'sub1', text: 'Explore the features', completed: false },
          { id: 'sub2', text: 'Add your own task', completed: false }
        ]
    },
    {
        id: '2',
        title: 'Buy groceries',
        description: 'Milk, Bread, Cheese, and Fruits',
        dueDate: null,
        priority: 'medium',
        category: 'Personal',
        completed: false,
        createdAt: new Date(new Date().setDate(new Date().getDate() - 1)).toISOString(),
        completedAt: null,
        subtasks: []
    },
    {
        id: '3',
        title: 'Complete project report',
        description: 'Finish the Q3 report for the marketing team.',
        dueDate: new Date(new Date().setDate(new Date().getDate() + 3)).toISOString(),
        priority: 'high',
        category: 'Work',
        completed: true,
        createdAt: new Date(new Date().setDate(new Date().getDate() - 2)).toISOString(),
        completedAt: new Date().toISOString(),
        subtasks: []
    }
  ]);
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('newest');
  const [searchTerm, setSearchTerm] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true';
  });
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentEditTask, setCurrentEditTask] = useState(null);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [confirmAction, setConfirmAction] = useState(null);
  const [toast, setToast] = useState(null); // { message, type }
  const [currentPage, setCurrentPage] = useState('home'); // New state for current page

  // Dark Mode Toggle Effect
  useEffect(() => {
    console.log('Dark mode state:', isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      console.log('Added dark class');
    } else {
      document.documentElement.classList.remove('dark');
      console.log('Removed dark class');
    }
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);

  // Toast Management Effect
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  // Show Toast Notification
  const showToast = (message, type = 'success') => {
    setToast({ message, type });
  };

  // Handle Add Task
  const handleAddTask = (title, description, dueDate, priority, category) => {
    if (!title) {
      showToast('Please enter a task title.', 'warning');
      return;
    }
    
    const newTask = {
      id: crypto.randomUUID(),
      title,
      description,
      dueDate: dueDate || null,
      priority: priority || 'medium',
      category: category || 'General',
      completed: false,
      createdAt: new Date().toISOString(),
      completedAt: null,
      subtasks: []
    };
    setTasks(prevTasks => [newTask, ...prevTasks]);
    showToast('Task added successfully!', 'success');
  };

  // Handle Delete Task
  const handleDeleteTask = (id) => {
    setConfirmAction(() => () => {
      setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
      showToast('Task deleted successfully!', 'success');
      setShowConfirmModal(false);
      setConfirmAction(null);
    });
    setShowConfirmModal(true);
  };

  // Handle Toggle Task Completion
  const handleToggleTask = (id, currentStatus) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id
          ? {
              ...task,
              completed: !currentStatus,
              completedAt: !currentStatus ? new Date().toISOString() : null
            }
          : task
      )
    );
    showToast(`Task marked as ${!currentStatus ? 'completed' : 'incomplete'}!`, 'success');
  };

  // Handle Toggle Subtask Completion
  const handleToggleSubtask = (taskId, subtaskId) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId
          ? {
              ...task,
              subtasks: task.subtasks.map(subtask =>
                subtask.id === subtaskId
                  ? { ...subtask, completed: !subtask.completed }
                  : subtask
              )
            }
          : task
      )
    );
    showToast('Subtask updated!', 'success');
  };

  // Handle Edit Task
  const handleEditTask = (task) => {
    setCurrentEditTask(task);
    setShowEditModal(true);
  };

  // Handle Save EditedTask
  const handleSaveEditedTask = (updatedTask) => {
    setTasks(prevTasks =>
      prevTasks.map(task => (task.id === updatedTask.id ? updatedTask : task))
    );
    showToast('Task updated successfully!', 'success');
    setShowEditModal(false);
    setCurrentEditTask(null);
  };

  // Handle Clear Completed Tasks
  const handleClearCompletedTasks = () => {
    const completedTasks = tasks.filter(task => task.completed);
    if (completedTasks.length === 0) {
      showToast('No completed tasks to clear!', 'warning');
      return;
    }

    setConfirmAction(() => () => {
      setTasks(prevTasks => prevTasks.filter(task => !task.completed));
      showToast(`${completedTasks.length} completed task(s) cleared!`, 'success');
      setShowConfirmModal(false);
      setConfirmAction(null);
    });
    setShowConfirmModal(true);
  };

  // Filter and Sort Tasks
  const getFilteredAndSortedTasks = () => {
    let filtered = [...tasks];

    // Apply search
    if (searchTerm) {
      filtered = filtered.filter(task =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (task.description && task.description.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Apply category filter
    if (filter !== 'all' && filter !== 'completed' && filter !== 'incomplete') {
      filtered = filtered.filter(task => task.category === filter);
    } else if (filter === 'completed') {
      filtered = filtered.filter(task => task.completed);
    } else if (filter === 'incomplete') {
      filtered = filtered.filter(task => !task.completed);
    }

    // Apply sort
    filtered.sort((a, b) => {
      switch (sort) {
        case 'oldest':
          return new Date(a.createdAt) - new Date(b.createdAt);
        case 'title':
          return a.title.localeCompare(b.title);
        case 'dueDate':
          if (!a.dueDate && !b.dueDate) return 0;
          if (!a.dueDate) return 1;
          if (!b.dueDate) return -1;
          return new Date(a.dueDate) - new Date(b.dueDate);
        case 'priority':
          const priorityOrder = { 'high': 3, 'medium': 2, 'low': 1 };
          return priorityOrder[b.priority || 'medium'] - priorityOrder[a.priority || 'medium'];
        case 'newest':
        default:
          return new Date(b.createdAt) - new Date(a.createdAt);
      }
    });

    return filtered;
  };

  const filteredAndSortedTasks = getFilteredAndSortedTasks();
  const totalTasks = tasks.length;
  const completedTasksCount = tasks.filter(task => task.completed).length;
  const incompleteTasksCount = totalTasks - completedTasksCount;


  // Get unique categories for filtering
  const uniqueCategories = ['All Categories', ...new Set(tasks.map(task => task.category).filter(Boolean))];


  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F0F5F9] to-[#F0F5F9] text-[#1E2022] font-montserrat flex flex-col dark:from-[#191919] dark:to-[#191919] dark:text-[#F0F5F9]">
        {/* Website Header */}
        <WebsiteHeader onNavigate={setCurrentPage} />

        {/* Theme Toggle Button - Repositioned to bottom-right corner */}
        <div className="fixed bottom-4 right-4 z-50">
          <button
            className="p-2 rounded-full bg-[#1E2022] text-[#F0F5F9] hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#F0F5F9] transition-all duration-300 transform hover:rotate-180"
            onClick={() => setIsDarkMode(!isDarkMode)}
            title="Toggle Dark Mode"
          >
            {isDarkMode ? (
              <i className="bi bi-sun-fill text-xl"></i>
            ) : (
              <i className="bi bi-moon-fill text-xl"></i>
            )}
          </button>
        </div>

        {/* Main Content Area */}
        {currentPage === 'home' && <HomePage onNavigate={setCurrentPage} />}
        {currentPage === 'tasks' && (
          <div className="flex-grow pt-20 pb-12 p-4 sm:p-6 lg:p-8 flex flex-col items-center">
            {/* Main App Title for Task Management Section */}
            <header className="w-full max-w-3xl text-center py-4 mb-6">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E2022] dark:text-[#F0F5F9] flex items-center justify-center drop-shadow-lg">
                Your Tasks
              </h1>
            </header>

            {/* Add Task Form */}
            <div className="w-full max-w-3xl bg-[#F0F5F9] bg-opacity-90 backdrop-blur-md rounded-2xl shadow-xl p-6 mb-6 border border-gray-200 dark:bg-[#232323] dark:bg-opacity-70 dark:border-gray-800">
              <AddTaskForm onAddTask={handleAddTask} showToast={showToast} />
            </div>

            {/* Controls */}
            <div className="w-full max-w-3xl bg-[#F0F5F9] bg-opacity-90 backdrop-blur-md rounded-2xl shadow-xl p-6 mb-6 border border-gray-200 dark:bg-[#232323] dark:bg-opacity-70 dark:border-gray-800">
              <Controls
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                filter={filter}
                setFilter={setFilter}
                sort={sort}
                setSort={setSort}
                uniqueCategories={uniqueCategories} // Pass categories to controls
              />
            </div>

            {/* Task Statistics */}
            <div className="w-full max-w-3xl flex flex-col sm:flex-row justify-between items-center mb-6">
              <TaskStats
                total={totalTasks}
                completed={completedTasksCount}
                incomplete={incompleteTasksCount}
              />
              <button
                onClick={handleClearCompletedTasks}
                disabled={completedTasksCount === 0}
                className="mt-4 sm:mt-0 px-5 py-2 bg-[#F0F5F9] text-[#1E2022] rounded-lg shadow-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1E2022] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center dark:bg-[#232323] dark:text-[#F0F5F9] dark:hover:bg-gray-700 dark:focus:ring-[#F0F5F9]"
              >
                <i className="bi bi-trash mr-2"></i>
                Clear Completed
              </button>
            </div>

            {/* Tasks List */}
            <div className="w-full max-w-3xl flex-grow">
              {filteredAndSortedTasks.length === 0 ? (
                <EmptyState />
              ) : (
                <TaskList
                  tasks={filteredAndSortedTasks}
                  onToggleTask={handleToggleTask}
                  onToggleSubtask={handleToggleSubtask}
                  onEditTask={handleEditTask}
                  onDeleteTask={handleDeleteTask}
                />
              )}
            </div>
          </div>
        )}

        {/* Contact Page */}
        {currentPage === 'contact' && <ContactPage showToast={showToast} />}

        {/* About Page */}
        {currentPage === 'about' && <AboutPage />}

        {/* Sign In Page */}
        {currentPage === 'signin' && <SignInPage showToast={showToast} />}

        {/* Features Page */}
        {currentPage === 'features' && <FeaturesPage />}

        {/* Privacy Policy Page */}
        {currentPage === 'privacyPolicy' && <PrivacyPolicyPage />}

        {/* Terms of Service Page */}
        {currentPage === 'termsOfService' && <TermsOfServicePage />}

        {/* Website Footer */}
        <WebsiteFooter onNavigate={setCurrentPage} /> {/* Pass onNavigate to footer */}

        {/* Edit Task Modal */}
        {showEditModal && (
          <EditTaskModal
            task={currentEditTask}
            onSave={handleSaveEditedTask}
            onClose={() => setShowEditModal(false)}
            showToast={showToast}
            uniqueCategories={uniqueCategories} // Pass categories to edit modal
          />
        )}

        {/* Confirmation Modal */}
        {showConfirmModal && (
          <ConfirmationModal
            message="Are you sure you want to proceed?"
            onConfirm={confirmAction}
            onCancel={() => setShowConfirmModal(false)}
          />
        )}

        {/* Toast Notification */}
        {toast && <ToastNotification message={toast.message} type={toast.type} />}
      </div>
  );
};

// Add Task Form Component
const AddTaskForm = ({ onAddTask, showToast }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('medium');
  const [category, setCategory] = useState('General'); // New state for category
  const [titleError, setTitleError] = useState('');
  const titleInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setTitleError('Task title is required.');
      titleInputRef.current.focus();
      return;
    }
    setTitleError('');

    onAddTask(title, description, dueDate, priority, category); // Pass category
    setTitle('');
    setDescription('');
    setDueDate('');
    setPriority('medium');
    setCategory('General'); // Reset category
    titleInputRef.current.focus();
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        if (document.activeElement === titleInputRef.current || title.trim()) {
          handleSubmit(e);
        }
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [title, priority, category]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="taskTitle" className="block text-sm font-medium text-[#1E2022] dark:text-[#F0F5F9] mb-1">Task Title <span className="text-red-500">*</span></label>
          <input
            type="text"
            id="taskTitle"
            className={`w-full px-4 py-2 bg-[#F0F5F9] border rounded-lg focus:ring-2 focus:ring-[#1E2022] focus:border-transparent outline-none text-[#1E2022] placeholder-gray-500 transition-colors duration-200 font-montserrat dark:bg-[#1E2022] dark:text-[#F0F5F9] dark:placeholder-gray-400 dark:border-gray-800 dark:focus:ring-[#F0F5F9] ${titleError ? 'border-red-500' : 'border-gray-200 dark:border-gray-800'}`}
            placeholder="What needs to be done?"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              if (e.target.value.trim()) setTitleError(''); // Clear error on input
            }}
            required
            ref={titleInputRef}
          />
          {titleError && <p className="text-red-500 text-xs mt-1 font-montserrat">{titleError}</p>}
        </div>
        <div>
          <label htmlFor="taskDueDate" className="block text-sm font-medium text-[#1E2022] dark:text-[#F0F5F9] mb-1">Due Date</label>
          <input
            type="datetime-local"
            id="taskDueDate"
            className="w-full px-4 py-2 bg-[#F0F5F9] border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1E2022] focus:border-transparent outline-none text-[#1E2022] transition-colors duration-200 font-montserrat dark:bg-[#1E2022] dark:border-gray-800 dark:text-[#F0F5F9] dark:focus:ring-[#F0F5F9]"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
      </div>
      <div>
        <label htmlFor="taskDescription" className="block text-sm font-medium text-[#1E2022] dark:text-[#F0F5F9] mb-1">Description</label>
        <textarea
          id="taskDescription"
          rows="2"
          className="w-full px-4 py-2 bg-[#F0F5F9] border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1E2022] focus:border-transparent outline-none text-[#1E2022] placeholder-gray-500 transition-colors duration-200 font-montserrat dark:bg-[#1E2022] dark:border-gray-800 dark:text-[#F0F5F9] dark:placeholder-gray-400 dark:focus:ring-[#F0F5F9]"
          placeholder="Add more details (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="taskPriority" className="block text-sm font-medium text-[#1E2022] dark:text-[#F0F5F9] mb-1">Priority</label>
          <select
            id="taskPriority"
            className="w-full px-4 py-2 bg-[#F0F5F9] border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1E2022] focus:border-transparent outline-none text-[#1E2022] transition-colors duration-200 appearance-none custom-select font-montserrat dark:bg-[#1E2022] dark:border-gray-800 dark:text-[#F0F5F9] dark:focus:ring-[#F0F5F9]"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
        <div>
          <label htmlFor="taskCategory" className="block text-sm font-medium text-[#1E2022] dark:text-[#F0F5F9] mb-1">Category</label>
          <select
            id="taskCategory"
            className="w-full px-4 py-2 bg-[#F0F5F9] border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1E2022] focus:border-transparent outline-none text-[#1E2022] transition-colors duration-200 appearance-none custom-select font-montserrat dark:bg-[#1E2022] dark:border-gray-800 dark:text-[#F0F5F9] dark:focus:ring-[#F0F5F9]"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="General">General</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Groceries">Groceries</option>
            <option value="Study">Study</option>
          </select>
        </div>
      </div>
      <button
        type="submit"
        className="w-full px-6 py-3 bg-[#1E2022] text-[#F0F5F9] rounded-lg shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#1E2022] transition-all duration-200 flex items-center justify-center text-lg font-semibold font-montserrat dark:bg-[#F0F5F9] dark:text-[#1E2022] dark:hover:bg-gray-200 dark:focus:ring-[#F0F5F9]"
      >
        <i className="bi bi-plus-circle mr-2"></i>
        Add Task
      </button>
    </form>
  );
};

// Controls Component (Search, Filter, Sort)
const Controls = ({ searchTerm, setSearchTerm, filter, setFilter, sort, setSort, uniqueCategories }) => {
  // Keyboard shortcut for clearing search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (searchTerm) {
          setSearchTerm('');
          document.activeElement.blur(); // Remove focus
        }
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [searchTerm, setSearchTerm]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
      <div>
        <label htmlFor="searchTasks" className="block text-sm font-medium text-[#1E2022] dark:text-[#F0F5F9] mb-1">Search Tasks</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <i className="bi bi-search text-[#1E2022] dark:text-[#F0F5F9]"></i>
          </div>
          <input
            type="text"
            id="searchTasks"
            className="w-full pl-10 pr-4 py-2 bg-[#F0F5F9] border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1E2022] focus:border-transparent outline-none text-[#1E2022] placeholder-gray-500 transition-colors duration-200 font-montserrat dark:bg-[#1E2022] dark:border-gray-800 dark:text-[#F0F5F9] dark:placeholder-gray-400 dark:focus:ring-[#F0F5F9]"
            placeholder="Search by title or description..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div>
        <label htmlFor="filterTasks" className="block text-sm font-medium text-[#1E2022] dark:text-[#F0F5F9] mb-1">Filter</label>
        <select
          id="filterTasks"
          className="w-full px-4 py-2 bg-[#F0F5F9] border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1E2022] focus:border-transparent outline-none text-[#1E2022] transition-colors duration-200 appearance-none custom-select font-montserrat dark:bg-[#1E2022] dark:border-gray-800 dark:text-[#F0F5F9] dark:focus:ring-[#F0F5F9]"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All Tasks</option>
          <option value="incomplete">Incomplete</option>
          <option value="completed">Completed</option>
          <option disabled>──────────</option> {/* Separator */}
          {uniqueCategories.filter(cat => cat !== 'All Categories').map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="sortTasks" className="block text-sm font-medium text-[#1E2022] dark:text-[#F0F5F9] mb-1">Sort By</label>
        <select
          id="sortTasks"
          className="w-full px-4 py-2 bg-[#F0F5F9] border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1E2022] focus:border-transparent outline-none text-[#1E2022] transition-colors duration-200 appearance-none custom-select font-montserrat dark:bg-[#1E2022] dark:border-gray-800 dark:text-[#F0F5F9] dark:focus:ring-[#F0F5F9]"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
          <option value="title">Title A-Z</option>
          <option value="dueDate">Due Date</option>
          <option value="priority">Priority</option> {/* New sort option */}
        </select>
      </div>
    </div>
  );
};

// Task Statistics Component
const TaskStats = ({ total, completed, incomplete }) => (
  <div className="flex flex-wrap gap-3 text-sm font-semibold font-montserrat">
    <span className="px-4 py-2 bg-[#1E2022] text-[#F0F5F9] rounded-full shadow-md dark:bg-[#F0F5F9] dark:text-[#1E2022]">
      {total} Total
    </span>
    <span className="px-4 py-2 bg-[#F0F5F9] text-[#1E2022] rounded-full shadow-md dark:bg-[#1E2022] dark:text-[#F0F5F9]">
      {incomplete} Remaining
    </span>
    <span className="px-4 py-2 bg-[#F0F5F9] text-[#1E2022] rounded-full shadow-md dark:bg-[#1E2022] dark:text-[#F0F5F9]">
      {completed} Completed
    </span>
  </div>
);

// Task List Component
const TaskList = ({ tasks, onToggleTask, onToggleSubtask, onEditTask, onDeleteTask }) => (
  <div className="space-y-4">
    {tasks.map(task => (
      <TaskItem
        key={task.id}
        task={task}
        onToggle={onToggleTask}
        onToggleSubtask={onToggleSubtask}
        onEdit={onEditTask}
        onDelete={onDeleteTask}
      />
    ))}
  </div>
);

// Individual Task Item Component
const TaskItem = ({ task, onToggle, onToggleSubtask, onEdit, onDelete }) => {
  const dueDate = task.dueDate ? new Date(task.dueDate) : null;
  const now = new Date();
  const isOverdue = dueDate && dueDate < now && !task.completed;
  // Due soon: within 24 hours from now, not completed
  const isDueSoon = dueDate && dueDate > now && (dueDate.getTime() - now.getTime()) < 24 * 60 * 60 * 1000 && !task.completed;

  const formatDate = (date) => {
    if (!date) return '';
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return date.toLocaleDateString('en-US', options);
  };

  const formatRelativeTime = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);

    if (diffInSeconds < 60) return 'just now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
    return `${Math.floor(diffInSeconds / 86400)}d ago`;
  };

  // Priority colors now use text color for distinction within the two-color palette
  const getPriorityTextColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'text-red-500'; // Still use a hint of red for high urgency
      case 'medium':
        return 'text-yellow-500'; // Hint of yellow
      case 'low':
        return 'text-green-500'; // Hint of green
      default:
        return 'text-[#1E2022] dark:text-[#F0F5F9]'; // Default text color
    }
  };

  return (
    <div className={`relative bg-[#F0F5F9] bg-opacity-90 backdrop-blur-md rounded-xl shadow-lg p-5 border transition-all duration-300 ease-in-out transform hover:scale-[1.01] ${task.completed ? 'opacity-70 border-gray-200 dark:border-gray-800' : 'border-[#1E2022] dark:border-[#F0F5F9]'}`}>
      {/* Left border indicator */}
      <div className={`absolute left-0 top-0 h-full w-1 rounded-l-xl ${task.completed ? 'bg-gray-200 dark:bg-gray-800' : 'bg-[#1E2022] dark:bg-[#F0F5F9]'}`}></div>

      <div className="flex items-start">
        {/* Checkbox */}
        <input
          type="checkbox"
          className="form-checkbox h-6 w-6 text-[#1E2022] bg-[#F0F5F9] border-gray-200 rounded focus:ring-[#1E2022] cursor-pointer mr-4 mt-1 flex-shrink-0 dark:bg-[#1E2022] dark:border-gray-800 dark:text-[#F0F5F9] dark:focus:ring-[#F0F5F9]"
          checked={task.completed}
          onChange={() => onToggle(task.id, task.completed)}
        />

        {/* Task Content */}
        <div className="flex-grow">
          <h3 className={`text-xl font-semibold font-montserrat ${task.completed ? 'line-through text-gray-500 dark:text-gray-400' : 'text-black !text-black font-bold'}`} style={task.completed ? {} : { color: '#000000' }}>
            {task.title}
          </h3>
          {task.description && (
            <p className="text-black !text-black text-sm mt-1 font-montserrat font-medium dark:text-white" style={{ color: '#000000' }}>{task.description}</p>
          )}
          <div className="flex flex-wrap items-center text-xs text-black !text-black mt-2 space-x-3 font-montserrat font-medium dark:text-white" style={{ color: '#000000' }}>
            {dueDate && (
              <span className={`flex items-center ${isOverdue ? 'text-red-500 font-bold' : isDueSoon ? 'text-yellow-500 font-bold' : ''}`}>
                <i className={`mr-1 ${isOverdue ? 'bi bi-exclamation-triangle-fill' : isDueSoon ? 'bi bi-clock-fill' : 'bi bi-calendar-event'}`}></i>
                {formatDate(dueDate)}
              </span>
            )}
            <span className="flex items-center">
              <i className="bi bi-hourglass-split mr-1"></i>
              Created {formatRelativeTime(task.createdAt)}
            </span>
            {task.priority && ( // Display priority with text color
              <span className={`flex items-center px-2 py-0.5 rounded-full text-xs ${getPriorityTextColor(task.priority)} bg-gray-100 dark:bg-gray-800`}>
                <i className="bi bi-flag-fill mr-1"></i>
                {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
              </span>
            )}
            {task.category && ( // Display category
              <span className="flex items-center px-2 py-0.5 rounded-full bg-gray-200 text-[#1E2022] text-xs dark:bg-gray-800 dark:text-[#F0F5F9]">
                <i className="bi bi-tag-fill mr-1"></i>
                {task.category}
              </span>
            )}
          </div>
          {task.subtasks && task.subtasks.length > 0 && ( // Display subtasks
            <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-800">
              <p className="text-black !text-black text-sm font-bold mb-2 dark:text-white" style={{ color: '#000000' }}>Subtasks:</p>
              <ul className="space-y-1">
                {task.subtasks.map(subtask => (
                  <li key={subtask.id} className={`flex items-center text-sm ${subtask.completed ? 'line-through text-gray-500 dark:text-gray-400' : 'text-black !text-black font-medium dark:text-white'}`} style={subtask.completed ? {} : { color: '#000000' }}>
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-black !text-black bg-white border-2 border-black rounded focus:ring-black cursor-pointer mr-2 flex-shrink-0"
                      style={{ accentColor: '#000000', borderColor: '#000000' }}
                      checked={subtask.completed}
                      onChange={() => onToggleSubtask(task.id, subtask.id)}
                    />
                    {subtask.text}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 ml-4">
          <button
            onClick={() => onEdit(task)}
            className="p-2 rounded-full text-black !text-black hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors duration-200 dark:text-white dark:hover:bg-gray-800 dark:focus:ring-gray-400"
            style={{ color: '#000000' }}
            title="Edit Task"
          >
            <i className="bi bi-pencil text-lg"></i>
          </button>
          <button
            onClick={() => onDelete(task.id)}
            className="p-2 rounded-full text-black !text-black hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors duration-200 dark:text-white dark:hover:bg-gray-800 dark:focus:ring-red-500"
            style={{ color: '#000000' }}
            title="Delete Task"
          >
            <i className="bi bi-trash text-lg"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

// Empty State Component
const EmptyState = () => (
  <div className="text-center py-10 bg-[#F0F5F9] bg-opacity-90 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200 font-montserrat dark:bg-[#232323] dark:bg-opacity-70 dark:border-gray-800">
    <i className="bi bi-clipboard-x text-[#1E2022] text-7xl dark:text-[#F0F5F9]"></i>
    <h3 className="text-[#1E2022] text-2xl font-semibold mt-4 dark:text-[#F0F5F9]">No tasks found</h3>
    <p className="text-[#1E2022] mt-2 dark:text-[#F0F5F9]">Add your first task to get started!</p>
  </div>
);

// Contact Page Component (formerly Feedback Form)
const ContactPage = ({ showToast }) => {
  const [feedbackEmail, setFeedbackEmail] = useState('');
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [feedbackSent, setFeedbackSent] = useState(false);

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend service
    console.log('Feedback Submitted:', { email: feedbackEmail, message: feedbackMessage });
    setFeedbackSent(true);
    setFeedbackEmail('');
    setFeedbackMessage('');
    showToast('Thank you for your feedback!', 'success');
    setTimeout(() => setFeedbackSent(false), 3000); // Reset confirmation after 3 seconds
  };

  return (
    <div className="flex flex-col items-center justify-center flex-grow text-center px-4 sm:px-6 lg:px-8 py-20 pt-24">
      <div className="w-full max-w-md bg-[#F0F5F9] bg-opacity-90 backdrop-blur-md rounded-2xl shadow-xl p-6 mb-6 border border-gray-200 dark:bg-[#232323] dark:bg-opacity-70 dark:border-gray-800">
        <h2 className="text-3xl font-bold text-[#1E2022] mb-4 font-montserrat dark:text-[#F0F5F9]">Contact Us</h2>
        <p className="text-[#1E2022] mb-6 font-montserrat dark:text-[#F0F5F9]">We'd love to hear from you!</p>
        <div className="text-left mb-6 text-[#1E2022] dark:text-[#F0F5F9] font-montserrat">
          <p><strong>Email:</strong> support@taskmaster.com</p>
          <p><strong>Phone:</strong> +1 (555) 123-4567</p>
          <p><strong>Address:</strong> 123 Productivity Lane, Suite 400, Efficiency City, TM 90210</p>
          <p className="mt-4">
            For general inquiries, technical support, or partnership opportunities, please reach out. Our team is available Monday to Friday, 9 AM to 5 PM EST.
          </p>
        </div>
        <h3 className="text-xl font-bold text-[#1E2022] mb-4 font-montserrat dark:text-[#F0F5F9]">Send Us Feedback</h3>
        {feedbackSent ? (
          <p className="text-green-600 font-montserrat">Your feedback has been sent successfully!</p>
        ) : (
          <form onSubmit={handleFeedbackSubmit} className="space-y-4">
            <div>
              <label htmlFor="contactEmail" className="sr-only">Email</label>
              <input
                type="email"
                id="contactEmail"
                className="w-full px-4 py-2 bg-[#F0F5F9] border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1E2022] focus:border-transparent outline-none text-[#1E2022] placeholder-gray-500 transition-colors duration-200 font-montserrat dark:bg-[#1E2022] dark:border-gray-800 dark:text-[#F0F5F9] dark:placeholder-gray-400 dark:focus:ring-[#F0F5F9]"
                placeholder="Your Email (optional)"
                value={feedbackEmail}
                onChange={(e) => setFeedbackEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="contactMessage" className="sr-only">Message</label>
              <textarea
                id="contactMessage"
                rows="5"
                className="w-full px-4 py-2 bg-[#F0F5F9] border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1E2022] focus:border-transparent outline-none text-[#1E2022] placeholder-gray-500 transition-colors duration-200 font-montserrat dark:bg-[#1E2022] dark:border-gray-800 dark:text-[#F0F5F9] dark:placeholder-gray-400 dark:focus:ring-[#F0F5F9]"
                placeholder="Your Message"
                value={feedbackMessage}
                onChange={(e) => setFeedbackMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-[#1E2022] text-[#F0F5F9] rounded-lg shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#1E2022] transition-all duration-200 flex items-center justify-center text-lg font-semibold font-montserrat dark:bg-[#F0F5F9] dark:text-[#1E2022] dark:hover:bg-gray-200 dark:focus:ring-[#F0F5F9]"
            >
              Submit Feedback
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

// About Page Component
const AboutPage = () => {
  const faqRef = useRef(null);

  // This effect will scroll to the FAQ section if the URL contains a hash for it.
  useEffect(() => {
    if (window.location.hash === '#faq' && faqRef.current) {
      faqRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="flex flex-col items-center flex-grow px-4 sm:px-6 lg:px-8 py-20 pt-24">
      <div className="w-full max-w-4xl bg-[#F0F5F9] bg-opacity-90 backdrop-blur-md rounded-2xl shadow-xl p-8 mb-6 border border-gray-200 dark:bg-[#232323] dark:bg-opacity-70 dark:border-gray-800">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E2022] dark:text-[#F0F5F9] mb-6 font-montserrat text-center">
          About TaskMaster
        </h1>
        <p className="text-[#1E2022] dark:text-[#F0F5F9] mb-4 font-montserrat text-lg text-center">
          TaskMaster was born from a simple idea: to create a task management tool that is both powerful and beautiful, helping users find clarity and focus in their busy lives.
        </p>
        
        <div className="my-8 border-t border-gray-300 dark:border-gray-700"></div>

        <h2 className="text-2xl font-bold text-[#1E2022] dark:text-[#F0F5F9] mt-8 mb-4 font-montserrat">
          Our Mission
        </h2>
        <p className="text-[#1E2022] dark:text-[#F0F5F9] mb-4 font-montserrat">
          Our mission is to provide an intuitive, reliable, and secure platform for individuals and teams to manage their tasks effortlessly. We believe that by organizing your tasks, you can organize your life and achieve your goals faster. We are committed to continuous improvement, driven by user feedback and a passion for productivity.
        </p>

        <div className="my-8 border-t border-gray-300 dark:border-gray-700"></div>

        <h2 id="faq" ref={faqRef} className="text-2xl font-bold text-[#1E2022] dark:text-[#F0F5F9] mt-8 mb-4 font-montserrat">
          Frequently Asked Questions (FAQ)
        </h2>
        <div className="space-y-6 text-left">
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-semibold text-lg text-[#1E2022] dark:text-[#F0F5F9]">Is TaskMaster free to use?</h3>
            <p className="text-sm text-[#1E2022] dark:text-[#F0F5F9] mt-2">Yes, the core features of TaskMaster are completely free. We believe everyone deserves access to great productivity tools. We may introduce premium features for power users and teams in the future to support the platform's development.</p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-semibold text-lg text-[#1E2022] dark:text-[#F0F5F9]">How is my data stored and is it secure?</h3>
            <p className="text-sm text-[#1E2022] dark:text-[#F0F5F9] mt-2">Your task data is stored locally in your browser. This means your data is private to you and your current session. It does not persist if you clear your browser data or switch devices.</p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-semibold text-lg text-[#1E2022] dark:text-[#F0F5F9]">Can I use TaskMaster on multiple devices?</h3>
            <p className="text-sm text-[#1E2022] dark:text-[#F0F5F9] mt-2">Since data is stored locally, your tasks will not sync across different devices. The app is best used on a single device for now.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Privacy Policy Page Component
const PrivacyPolicyPage = () => {
  return (
    <div className="flex flex-col items-center flex-grow px-4 sm:px-6 lg:px-8 py-20 pt-24">
      <div className="w-full max-w-3xl bg-[#F0F5F9] bg-opacity-90 backdrop-blur-md rounded-2xl shadow-xl p-6 mb-6 border border-gray-200 dark:bg-[#1E2022] dark:bg-opacity-70 dark:border-gray-800">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E2022] dark:text-[#F0F5F9] mb-6 font-montserrat text-center">
          Privacy Policy
        </h1>
        <p className="text-[#1E2022] dark:text-[#F0F5F9] mb-4 font-montserrat">
          Your privacy is of utmost importance to us. This policy outlines how TaskMaster collects, uses, and protects your personal information.
        </p>
        <h2 className="text-2xl font-bold text-[#1E2022] dark:text-[#F0F5F9] mt-8 mb-4 font-montserrat">
          Information We Collect
        </h2>
        <p className="text-[#1E2022] dark:text-[#F0F5F9] mb-4 font-montserrat">
          This version of TaskMaster does not collect or store any personal information on remote servers. All task data you create is stored locally within your web browser and is not transmitted to us.
        </p>
        <h2 className="text-2xl font-bold text-[#1E2022] dark:text-[#F0F5F9] mt-8 mb-4 font-montserrat">
          Data Security
        </h2>
        <p className="text-[#1E2022] dark:text-[#F0F5F9] mb-4 font-montserrat">
          Your data's security is dependent on the security of your own device and web browser. We do not have access to your task data.
        </p>
        <p className="text-[#1E2022] dark:text-[#F0F5F9] font-montserrat">
          By using TaskMaster, you consent to our Privacy Policy.
        </p>
      </div>
    </div>
  );
};

// Terms of Service Page Component
const TermsOfServicePage = () => {
  return (
    <div className="flex flex-col items-center flex-grow px-4 sm:px-6 lg:px-8 py-20 pt-24">
      <div className="w-full max-w-3xl bg-[#F0F5F9] bg-opacity-90 backdrop-blur-md rounded-2xl shadow-xl p-6 mb-6 border border-gray-200 dark:bg-[#1E2022] dark:bg-opacity-70 dark:border-gray-800">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E2022] dark:text-[#F0F5F9] mb-6 font-montserrat text-center">
          Terms of Service
        </h1>
        <p className="text-[#1E2022] dark:text-[#F0F5F9] mb-4 font-montserrat">
          Welcome to TaskMaster! These Terms of Service govern your use of our application. By accessing or using TaskMaster, you agree to be bound by these terms.
        </p>
        <h2 className="text-2xl font-bold text-[#1E2022] dark:text-[#F0F5F9] mt-8 mb-4 font-montserrat">
          Acceptance of Terms
        </h2>
        <p className="text-[#1E2022] dark:text-[#F0F5F9] mb-4 font-montserrat">
          By using TaskMaster, you confirm that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our application.
        </p>
        <h2 className="text-2xl font-bold text-[#1E2022] dark:text-[#F0F5F9] mt-8 mb-4 font-montserrat">
          Disclaimer of Warranty
        </h2>
        <p className="text-[#1E2022] dark:text-[#F0F5F9] mb-4 font-montserrat">
          This application is provided "as is", without warranty of any kind. Since data is stored locally, we are not responsible for any loss of data.
        </p>
        <h2 className="text-2xl font-bold text-[#1E2022] dark:text-[#F0F5F9] mt-8 mb-4 font-montserrat">
          User Responsibilities
        </h2>
        <p className="text-[#1E2022] dark:text-[#F0F5F9] font-montserrat">
          You are responsible for managing and backing up your own data.
        </p>
      </div>
    </div>
  );
};

// Sign In Page Component
const SignInPage = ({ showToast }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    setEmailError('');
    setPasswordError('');

    let valid = true;
    if (!email.trim()) {
      setEmailError('Email is required.');
      valid = false;
    }
    if (!password.trim()) {
      setPasswordError('Password is required.');
      valid = false;
    }

    if (valid) {
      console.log('Simulating sign-in with:', { email, password });
      showToast('Sign-in functionality is disabled in this version.', 'info');
      setEmail('');
      setPassword('');
    } else {
      showToast('Please correct the form errors.', 'error');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center flex-grow text-center px-4 sm:px-6 lg:px-8 py-20 pt-24">
      <div className="w-full max-w-md bg-[#F0F5F9] bg-opacity-90 backdrop-blur-md rounded-2xl shadow-xl p-6 mb-6 border border-gray-200 dark:bg-[#1E2022] dark:bg-opacity-70 dark:border-gray-800">
        <h2 className="text-3xl font-bold text-[#1E2022] mb-4 font-montserrat dark:text-[#F0F5F9]">Sign In</h2>
        <p className="text-[#1E2022] mb-6 font-montserrat dark:text-[#F0F5F9]">Sign-in is currently disabled.</p>
        <form onSubmit={handleSignIn} className="space-y-4">
          <div>
            <label htmlFor="signInEmail" className="sr-only">Email</label>
            <input
              type="email"
              id="signInEmail"
              className={`w-full px-4 py-2 bg-[#F0F5F9] border rounded-lg focus:ring-2 focus:ring-[#1E2022] focus:border-transparent outline-none text-[#1E2022] placeholder-gray-500 transition-colors duration-200 font-montserrat dark:bg-[#1E2022] dark:text-[#F0F5F9] dark:placeholder-gray-400 dark:border-gray-800 dark:focus:ring-[#F0F5F9] ${emailError ? 'border-red-500' : 'border-gray-200 dark:border-gray-800'}`}
              placeholder="Email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setEmailError(''); }}
              required
              disabled
            />
            {emailError && <p className="text-red-500 text-xs mt-1 font-montserrat">{emailError}</p>}
          </div>
          <div>
            <label htmlFor="signInPassword" className="sr-only">Password</label>
            <input
              type="password"
              id="signInPassword"
              className={`w-full px-4 py-2 bg-[#F0F5F9] border rounded-lg focus:ring-2 focus:ring-[#1E2022] focus:border-transparent outline-none text-[#1E2022] placeholder-gray-500 transition-colors duration-200 font-montserrat dark:bg-[#1E2022] dark:text-[#F0F5F9] dark:placeholder-gray-400 dark:border-gray-800 dark:focus:ring-[#F0F5F9] ${passwordError ? 'border-red-500' : 'border-gray-200 dark:border-gray-800'}`}
              placeholder="Password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setPasswordError(''); }}
              required
              disabled
            />
            {passwordError && <p className="text-red-500 text-xs mt-1 font-montserrat">{passwordError}</p>}
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-[#1E2022] text-[#F0F5F9] rounded-lg shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#1E2022] transition-all duration-200 flex items-center justify-center text-lg font-semibold font-montserrat dark:bg-[#F0F5F9] dark:text-[#1E2022] dark:hover:bg-gray-200 dark:focus:ring-[#F0F5F9] disabled:opacity-50"
            disabled
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

// Features Page Component
const FeaturesPage = () => {
  return (
    <div className="flex flex-col items-center flex-grow px-4 sm:px-6 lg:px-8 py-20 pt-24">
      <div className="w-full max-w-4xl bg-[#F0F5F9] bg-opacity-90 backdrop-blur-md rounded-2xl shadow-xl p-6 mb-6 border border-gray-200 dark:bg-[#1E2022] dark:bg-opacity-70 dark:border-gray-800">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E2022] dark:text-[#F0F5F9] mb-6 font-montserrat text-center">
          Powerful Features for Peak Productivity
        </h1>
        <p className="text-[#1E2022] dark:text-[#F0F5F9] mb-8 font-montserrat text-center">
          TaskMaster is packed with features designed to streamline your workflow and keep you on track.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="feature-item bg-gray-100 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 text-left hover:shadow-lg transition-shadow duration-300">
            <i className="bi bi-check-all text-[#1E2022] text-4xl mb-3 dark:text-[#F0F5F9]"></i>
            <h3 className="text-2xl font-semibold text-[#1E2022] mb-2 font-montserrat dark:text-[#F0F5F9]">Intuitive Task Creation</h3>
            <p className="text-[#1E2022] text-sm font-montserrat dark:text-[#F0F5F9]">
              Quickly add tasks with titles, detailed descriptions, due dates, and priority levels. Get started in seconds!
            </p>
          </div>
          <div className="feature-item bg-gray-100 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 text-left hover:shadow-lg transition-shadow duration-300">
            <i className="bi bi-tags-fill text-[#1E2022] text-4xl mb-3 dark:text-[#F0F5F9]"></i>
            <h3 className="text-2xl font-semibold text-[#1E2022] mb-2 font-montserrat dark:text-[#F0F5F9]">Smart Categorization</h3>
            <p className="text-[#1E2022] text-sm font-montserrat dark:text-[#F0F5F9]">
              Organize tasks with custom categories.
            </p>
          </div>
          <div className="feature-item bg-gray-100 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 text-left hover:shadow-lg transition-shadow duration-300">
            <i className="bi bi-bell-fill text-[#1E2022] text-4xl mb-3 dark:text-[#F0F5F9]"></i>
            <h3 className="text-2xl font-semibold text-[#1E2022] mb-2 font-montserrat dark:text-[#F0F5F9]">Intelligent Reminders</h3>
            <p className="text-[#1E2022] text-sm font-montserrat dark:text-[#F0F5F9]">
              Never miss a deadline with customizable reminders and notifications for your most important tasks.
            </p>
          </div>
          <div className="feature-item bg-gray-100 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 text-left hover:shadow-lg transition-shadow duration-300">
            <i className="bi bi-eye-fill text-[#1E2022] text-4xl mb-3 dark:text-[#F0F5F9]"></i>
            <h3 className="text-2xl font-semibold text-[#1E2022] mb-2 font-montserrat dark:text-[#F0F5F9]">Intuitive Filtering & Sorting</h3>
            <p className="text-[#1E2022] text-sm font-montserrat dark:text-[#F0F5F9]">
              Quickly find what you need with powerful search, filter by status or category, and sort by various criteria.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


// Edit Task Modal Component
const EditTaskModal = ({ task, onSave, onClose, showToast, uniqueCategories }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description || '');
  const [dueDate, setDueDate] = useState(task.dueDate || '');
  const [priority, setPriority] = useState(task.priority || 'medium');
  const [category, setCategory] = useState(task.category || 'General');
  const [titleError, setTitleError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setTitleError('Task title is required.');
      return;
    }
    setTitleError('');

    onSave({ ...task, title, description, dueDate, priority, category });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-[#F0F5F9] rounded-xl shadow-2xl p-6 w-full max-w-md border border-gray-200 font-montserrat dark:bg-[#1E2022] dark:border-gray-800">
        <h2 className="text-2xl font-bold text-[#1E2022] mb-4 dark:text-[#F0F5F9]">Edit Task</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="editTaskTitle" className="block text-sm font-medium text-[#1E2022] dark:text-[#F0F5F9] mb-1">Task Title <span className="text-red-500">*</span></label>
            <input
              type="text"
              id="editTaskTitle"
              className={`w-full px-4 py-2 bg-[#F0F5F9] border rounded-lg focus:ring-2 focus:ring-[#1E2022] focus:border-transparent outline-none text-[#1E2022] placeholder-gray-500 transition-colors duration-200 font-montserrat dark:bg-[#1E2022] dark:text-[#F0F5F9] dark:placeholder-gray-400 dark:border-gray-800 dark:focus:ring-[#F0F5F9] ${titleError ? 'border-red-500' : 'border-gray-200 dark:border-gray-800'}`}
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                if (e.target.value.trim()) setTitleError('');
              }}
              required
            />
            {titleError && <p className="text-red-500 text-xs mt-1 font-montserrat">{titleError}</p>}
          </div>
          <div>
            <label htmlFor="editTaskDueDate" className="block text-sm font-medium text-[#1E2022] dark:text-[#F0F5F9] mb-1">Due Date</label>
            <input
              type="datetime-local"
              id="editTaskDueDate"
              className="w-full px-4 py-2 bg-[#F0F5F9] border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1E2022] focus:border-transparent outline-none text-[#1E2022] transition-colors duration-200 font-montserrat dark:bg-[#1E2022] dark:border-gray-800 dark:text-[#F0F5F9] dark:focus:ring-[#F0F5F9]"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="editTaskDescription" className="block text-sm font-medium text-[#1E2022] dark:text-[#F0F5F9] mb-1">Description</label>
            <textarea
              id="editTaskDescription"
              rows="3"
              className="w-full px-4 py-2 bg-[#F0F5F9] border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1E2022] focus:border-transparent outline-none text-[#1E2022] placeholder-gray-500 transition-colors duration-200 font-montserrat dark:bg-[#1E2022] dark:border-gray-800 dark:text-[#F0F5F9] dark:placeholder-gray-400 dark:focus:ring-[#F0F5F9]"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="editTaskPriority" className="block text-sm font-medium text-[#1E2022] dark:text-[#F0F5F9] mb-1">Priority</label>
              <select
                id="editTaskPriority"
                className="w-full px-4 py-2 bg-[#F0F5F9] border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1E2022] focus:border-transparent outline-none text-[#1E2022] transition-colors duration-200 appearance-none custom-select font-montserrat dark:bg-[#1E2022] dark:border-gray-800 dark:text-[#F0F5F9] dark:focus:ring-[#F0F5F9]"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              >
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
            <div>
              <label htmlFor="editTaskCategory" className="block text-sm font-medium text-[#1E2022] dark:text-[#F0F5F9] mb-1">Category</label>
              <select
                id="editTaskCategory"
                className="w-full px-4 py-2 bg-[#F0F5F9] border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1E2022] focus:border-transparent outline-none text-[#1E2022] transition-colors duration-200 appearance-none custom-select font-montserrat dark:bg-[#1E2022] dark:border-gray-800 dark:text-[#F0F5F9] dark:focus:ring-[#F0F5F9]"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="General">General</option>
                <option value="Work">Work</option>
                <option value="Personal">Personal</option>
                <option value="Groceries">Groceries</option>
                <option value="Study">Study</option>
                {/* Dynamically add existing categories */}
                {uniqueCategories.filter(cat => !['All Categories', 'General', 'Work', 'Personal', 'Groceries', 'Study'].includes(cat)).map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex justify-end space-x-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 bg-[#F0F5F9] text-[#1E2022] rounded-lg shadow-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1E2022] transition-colors duration-220 font-montserrat dark:bg-[#1E2022] dark:text-[#F0F5F9] dark:hover:bg-gray-800 dark:focus:ring-[#F0F5F9]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-[#1E2022] text-[#F0F5F9] rounded-lg shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#1E2022] transition-colors duration-220 font-montserrat dark:bg-[#F0F5F9] dark:text-[#1E2022] dark:hover:bg-gray-200 dark:focus:ring-[#F0F5F9]"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Confirmation Modal Component (replaces browser's confirm)
const ConfirmationModal = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-[#F0F5F9] rounded-xl shadow-2xl p-6 w-full max-w-sm border border-gray-200 font-montserrat dark:bg-[#1E2022] dark:border-gray-800">
        <h3 className="text-xl font-semibold text-[#1E2022] mb-4 dark:text-[#F0F5F9]">Confirm Action</h3>
        <p className="text-[#1E2022] mb-6 dark:text-[#F0F5F9]">{message}</p>
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={onCancel}
            className="px-5 py-2 bg-[#F0F5F9] text-[#1E2022] rounded-lg shadow-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1E2022] transition-colors duration-220 font-montserrat dark:bg-[#1E2022] dark:text-[#F0F5F9] dark:hover:bg-gray-800 dark:focus:ring-[#F0F5F9]"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="px-5 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors duration-220 font-montserrat"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

// Toast Notification Component (replaces Bootstrap toasts)
const ToastNotification = ({ message, type }) => {
  // Map types to shades of the two main colors
  const bgColor = {
    success: 'bg-green-600', // Still using green for success, but it will stand out more
    error: 'bg-red-600',     // Still using red for error
    warning: 'bg-yellow-500',  // Still using yellow for warning
    info: 'bg-[#1E2022]',     // Dark background for info
  }[type] || 'bg-gray-700'; // Fallback

  const textColor = {
    success: 'text-white',
    error: 'text-white',
    warning: 'text-gray-900',
    info: 'text-[#F0F5F9]',
  }[type] || 'text-white';

  return (
    <div className="fixed bottom-4 right-4 z-50 font-montserrat">
      <div className={`${bgColor} ${textColor} px-6 py-3 rounded-lg shadow-xl flex items-center space-x-3 animate-slideInRight`}>
        <i className={`${type === 'success' ? 'bi-check-circle-fill' : type === 'error' ? 'bi-x-circle-fill' : type === 'warning' ? 'bi-exclamation-triangle-fill' : 'bi-info-circle-fill'} text-xl`}></i>
        <span className="font-medium">{message}</span>
      </div>
    </div>
  );
};

// Tailwind CSS for custom select arrow (as appearance-none removes default)
const style = `
  /* Montserrat font from Google Fonts */
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

  body {
    font-family: 'Montserrat', sans-serif;
  }

  /* Custom select arrow for Tailwind's appearance-none */
  .custom-select {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%231E2022' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 0.75rem center;
    background-size: 1rem 0.75rem;
  }
  .dark .custom-select {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23F0F5F9' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
  }

  /* Keyframe for toast animation */
  @keyframes slideInRight {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  .animate-slideInRight {
    animation: slideInRight 0.5s ease-out forwards;
  }
`;

// Inject Tailwind CSS and custom styles
const TailwindInjector = () => {
  return (
    <>
      <script src="https://cdn.tailwindcss.com"></script>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css" />
      <style>{style}</style>
    </>
  );
};

// Service Worker Registration
const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      // Create a dummy sw.js file if it doesn't exist to prevent 404 errors in the sandbox
      fetch('/sw.js')
        .then(response => {
          if (!response.ok) {
            // If sw.js not found, create a minimal one
            const dummySwContent = `
              self.addEventListener('install', (event) => {
                console.log('Service Worker: install');
                event.waitUntil(
                  caches.open('taskmaster-cache-v1').then((cache) => {
                    return cache.addAll([
                      '/',
                      '/index.html',
                      // Add other static assets here if needed for full offline capability
                    ]);
                  })
                );
              });

              self.addEventListener('fetch', (event) => {
                event.respondWith(
                  caches.match(event.request).then((response) => {
                    return response || fetch(event.request);
                  })
                );
              });
            `;
            const blob = new Blob([dummySwContent], { type: 'application/javascript' });
            const url = URL.createObjectURL(blob);
            navigator.serviceWorker.register(url)
              .then(reg => console.log('Dummy Service Worker registered:', reg.scope))
              .catch(err => console.error('Dummy Service Worker registration failed:', err));
          } else {
            // If sw.js exists, register it normally
            navigator.serviceWorker.register('/sw.js')
              .then(reg => console.log('Service Worker registered:', reg.scope))
              .catch(err => console.error('Service Worker registration failed:', err));
          }
        })
        .catch(error => console.error('Error checking for sw.js:', error));
    });
  }
};

export default function Render() {
  // Register service worker once when the component mounts
  useEffect(() => {
    registerServiceWorker();
  }, []);

  return (
    <>
      <TailwindInjector />
      <App />
    </>
  );
}
