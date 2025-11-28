# 🚀 Learning Full Testing - Modern React 19 Application

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

A comprehensive, modern React 19 application built to demonstrate best practices in **full-stack testing**, **authentication flows**, **state management**, and **advanced routing**. This project serves as a reference implementation for a production-ready frontend architecture.

---

## 🌟 Key Features

### 🔐 Robust Authentication System
- **Secure Route Guards**: Automatic redirection based on auth state (Public, Protected, Unauthenticated).
- **Persistent Sessions**: Authentication state persists across reloads using `localStorage` and Zustand.
- **Complete Flow**: Login, Register, and Logout functionality with form validation.
- **Mock Backend**: Simulation of real-world API delays and responses.

### 🧭 Advanced Routing (TanStack Router)
- **File-Based Routing**: Intuitive `src/routes` directory structure.
- **Type-Safe Navigation**: Full TypeScript support for routes and parameters.
- **Layout Nesting**: Efficient layout composition (Auth, Public, Dashboard layouts).
- **Active Link States**: Automatic visual feedback for current routes.

### 🎨 Modern UI/UX
- **TailwindCSS v4**: Cutting-edge utility-first styling.
- **Responsive Design**: Mobile-first approach ensuring perfect rendering on all devices.
- **Interactive Elements**: Smooth transitions, hover effects, and micro-animations.
- **Lucide Icons**: Consistent and beautiful iconography.

### 🧪 Comprehensive Testing Setup
- **Vitest**: Blazing fast unit and integration testing.
- **React Testing Library**: Component testing best practices.
- **Test Utilities**: Custom renderers and setup for robust test environments.

---

## 🛠️ Tech Stack

| Category | Technology | Description |
|----------|------------|-------------|
| **Core** | [React 19](https://react.dev/) | The latest version of the library for web and native user interfaces. |
| **Build Tool** | [Vite 7](https://vitejs.dev/) | Next Generation Frontend Tooling. |
| **Routing** | [TanStack Router](https://tanstack.com/router) | Type-safe routing for React applications. |
| **State** | [Zustand](https://github.com/pmndrs/zustand) | A small, fast and scalable bearbones state-management solution. |
| **Styling** | [TailwindCSS 4](https://tailwindcss.com/) | Rapidly build modern websites without ever leaving your HTML. |
| **Testing** | [Vitest](https://vitest.dev/) | A Vite-native unit test framework. |
| **Icons** | [Lucide React](https://lucide.dev/) | Beautiful & consistent icon toolkit. |

---

## 📂 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── layouts/         # Layout wrappers (Auth, Public, etc.)
│   └── Header.tsx       # Main navigation component
├── routes/              # File-based routing definitions
│   ├── _authenticated/  # Routes requiring login (Dashboard, Profile)
│   ├── _unauthenticated/# Routes for guests only (Login, Register)
│   ├── _public/         # Universally accessible routes (About, Contact)
│   └── __root.tsx       # Root layout configuration
├── stores/              # Global state management (Zustand)
├── test/                # Test configuration and setup
└── main.tsx             # Application entry point
```

---

## 🚀 Getting Started

Follow these steps to get the project running locally.

### Prerequisites
- Node.js (v18 or higher)
- pnpm (recommended) or npm/yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/learning-full-testing.git
   cd learning-full-testing
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   ```
   The app will be available at `http://localhost:3000`.

---

## 📜 Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `dev` | `vite --port 3000` | Starts the development server. |
| `build` | `vite build && tsc` | Builds the app for production. |
| `serve` | `vite preview` | Previews the production build locally. |
| `test` | `vitest run` | Runs the test suite once. |
| `lint` | `eslint` | Lints the codebase. |
| `format` | `prettier` | Formats code using Prettier. |
| `generate:routes` | `tsr generate` | Generates TanStack Router route tree. |

---

## 🔐 Authentication Flow Details

The application implements a strict redirection logic to ensure security and good UX:

1.  **Guest User**:
    - Attempts to access `/dashboard` -> Redirects to `/login`.
    - Can access `/`, `/about`, `/contact`.

2.  **Logged-in User**:
    - Attempts to access `/login` -> Redirects to `/dashboard`.
    - Can access all protected routes.

**Demo Credentials:**
- **Email:** `demo@example.com`
- **Password:** `password123`

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
