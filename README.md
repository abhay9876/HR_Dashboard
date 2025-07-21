<h1>HR Dashboard</h1>

## Project Overview

HR Dashboard is a modern, responsive frontend web application built using React, Tailwind CSS, and DaisyUI.

This dashboard mimics a Human Resource Management interface, where users can:

- View a list of employees (user cards)
- Bookmark/unbookmark employees they want to keep track of
- View detailed user profiles via dynamic routing
- Switch between visual themes like Light, Dark.

The application uses **Zustand** for global state management (bookmarks), and **React Router** for client-side navigation.  
It’s designed to be clean, fast, and fully responsive across devices. While there is no backend integration, dummy data is used to simulate a real-world scenario.

This project is perfect for learning or demonstrating:

- Component-based architecture
- State management
- UI theming and styling using utility classes
- Clean code organization in a React application

## Features

- View detailed employee information (image, name, location, etc.)
- Bookmark or unbookmark users using a single click
- Toggle between Light, Dark, and Synthwave themes (DaisyUI)
- Fully responsive design across desktop and mobile
- Fast routing with `react-router-dom` (View Details page)
- Global state management using Zustand for bookmarks
- Clean and modern UI with Tailwind CSS & DaisyUI components


## Installation & Setup

Follow the steps below to run this project on your local machine:

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/hr-dashboard.git
   cd hr-dashboard

2. **Install dependencies**
   ```bash
   npm install

3. **Start the development server**
    ```bash
    npm run dev
## Conclusion

This HR Dashboard project is a frontend-only application built with React and styled using Tailwind CSS + DaisyUI. It demonstrates core concepts like component-based architecture, routing, global state management, and responsive UI.

The app is ideal for beginners to understand how to build a real-world, scalable frontend using modern tools and libraries. It can be further extended with authentication, backend APIs, charts, or admin controls to make it more robust.

Feel free to fork, clone, and build on top of this project. Happy coding! 
