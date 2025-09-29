<div align="center">
  
  # TaskMaster: A React To-Do Application
  
  <p>
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
  </p>

  <p>
    A clean, responsive, and modern to-do list application built with React and styled with Tailwind CSS. It provides a full-featured, single-page interface for managing daily tasks, all running completely on the client-side.
  </p>
</div>

---

## Key Features

### Core Task Management
* **Complete Task Lifecycle:** Full **CRUD** (Create, Read, Update, Delete) functionality allows you to manage your tasks from start to finish.
* **Rich Task Details:** Go beyond simple titles. Add detailed **descriptions**, assign **due dates** with times, set **priorities** (High, Medium, Low), and organize tasks with custom **categories**.
* **Subtask Support:** Break down larger tasks into smaller, manageable steps with a simple subtask list.

### Advanced Organization
* **Dynamic Search:** Instantly find any task by searching through titles and descriptions.
* **Powerful Filtering:** Display tasks based on their status (**All**, **Incomplete**, **Completed**) or by any custom **category**.
* **Versatile Sorting:** Organize your list to suit your workflow. Sort tasks by **creation date** (newest/oldest), **title** (A-Z), **due date**, or **priority**.

### Modern User Experience
* **Fully Responsive Design:** The UI is optimized for a seamless experience on all devices, from large desktops to mobile phones.
* **Elegant Dark Mode:** Switch between a clean light theme and a sleek, eye-friendly dark theme with a single click.
* **Simulated Multi-Page UI:** Enjoy the feel of a traditional multi-page website (Home, About, Contact) within a fast, single-page application architecture.
* **Custom Modals & Toasts:** User interactions are handled through non-blocking modals for editing and confirmation, with feedback provided via clean toast notifications.
* **Zero-Backend, Purely Client-Side:** All tasks are managed in the browser's local state via React hooks. This means **no database**, **no sign-up**, and **instant setup**. Your data stays with you.

---

## Technologies Used

* **React:** The core of the application, built with functional components and modern hooks (`useState`, `useEffect`, `useRef`).
* **Tailwind CSS:** A utility-first CSS framework used for all styling, enabling a responsive and highly customizable design.
* **Vite:** A modern frontend build tool that provides a faster and leaner development experience.
* **Bootstrap Icons:** Provides a clean and consistent set of icons used throughout the application.
* **Google Fonts:** The "Montserrat" font is used for a clean, modern typography.

---

## Application Structure

The application is built with a component-based architecture, even though it resides in a single file for portability.

```
/src
|-- App.jsx             # Main application component containing all logic and sub-components
|-- index.css           # Global styles (if any)
|-- main.jsx            # Entry point for the React application
/public
|-- index.html          # Main HTML file
```
The `App.jsx` file is structured internally as follows:
- **Main App Component (`App`)**: Holds the application's state and core logic.
- **Layout Components (`WebsiteHeader`, `WebsiteFooter`)**: The main navigation and footer.
- **Page Components (`HomePage`, `AboutPage`, etc.)**: Each "page" is a separate component rendered based on the current navigation state.
- **Task Components (`TaskList`, `TaskItem`, `AddTaskForm`)**: Components responsible for displaying and managing the to-do list.
- **UI Components (`EditTaskModal`, `ConfirmationModal`, `ToastNotification`)**: Reusable components for user interaction and feedback.

---

## Getting Started

Here’s a simple way to get this project running on your computer, even if you're new to React.

1.  **Create a New Project Folder:**
    * On your computer, create a new folder and name it `taskmaster`.

2.  **Open a Terminal:**
    * Open your terminal or command prompt (like Command Prompt on Windows or Terminal on Mac).
    * Navigate into the new folder you just created:
        ```bash
        cd path/to/your/taskmaster
        ```

3.  **Create a New Vite + React App:**
    * Run the following command in your terminal. This will set up a basic React project for you.
        ```bash
        npm create vite@latest . -- --template react
        ```
    * When it asks if you want to proceed, type `y` and press Enter. The `.` at the end tells Vite to create the project in your current folder.

4.  **Install the Necessary Files:**
    * Once the setup is complete, run this command to download the project's tools:
        ```bash
        npm install
        ```

5.  **Add the Application Code:**
    * Open the `taskmaster` folder in your code editor (like VS Code).
    * Find the file at `src/App.jsx`.
    * Delete all the code inside `App.jsx`.
    * Copy the *entire code* for the TaskMaster application and paste it into the empty `App.jsx` file.

6.  **Start the App:**
    * Go back to your terminal and run this command:
        ```bash
        npm run dev
        ```
    * Your new to-do app will open in your web browser!

---

Made with ❤️ by Niraj
