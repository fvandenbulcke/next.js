# 🦸 Next.js Tutorial – Super Heroes Manager

This project is a step-by-step tutorial to learn **Next.js** through the development of a **Super Heroes Manager** application.  
Each step introduces a **core feature of Next.js**, explained and then implemented in the project.

---

## 🎯 Purpose

The goal of this project is to demonstrate the fundamental concepts of React in a structured and progressive manner. Each feature introduces a new fundamental concept through a concrete implementation and unit tests.

This learning program was co-created with ChatGPT, based on the GPT-4 model.

---

## 🦸 Project Theme and Functionality

The application simulates a super-hero management system with the following key features:

- Displaying a list of heroes
- Adding heroes to a personalized team
- Removing heroes from the team
- Enforcing constraints such as a maximum team size and prevention of duplicates

Each interaction is tied to a specific React concept or feature, making the app a self-contained learning environment.

---

## 📚 React Concepts Covered

| Concept | Status |
|---------|--------|
| Project setup and basic structure| ✅ |
| Navigation with Link and Router | ✅ |
| Data fetching | ✅ |
| Global Layouts | 🚧 |
| Server vs Client Components | 🚧 |
| Dynamic routes with parameters | 🚧 |
| API Routes | 🚧 |
| State Management with Context and Hooks | 🚧 |
| Image Optimization | 🚧 |
| Internationalization (i18n) | 🚧 |
| Middleware | 🚧 |
| Testing | 🚧 |
| Deployment and Optimization | 🚧 |

---

## 🛠️ Tech Stack

- **React** with **TypeScript**
- **Vite** for fast development and build performance
- **Context API** and built-in hooks (`useState`, `useEffect`) for state management
- **Jest** and **@testing-library/react** for unit testing
- **CSS Modules** for local and modular styles
- **ESLint** (Airbnb config) and **Prettier** for linting and formatting

---


## ▶️ Getting Started

```bash
yarn install
yarn run dev
```
Open [http://localhost:3000/super-heroes](http://localhost:3000/super-heroes) with your browser to see the result.

---

## 🧪 Running Tests

```bash
yarn run test
```

---

## 📁 Project Structure

The codebase is organized into clearly separated modules:

```
src/
├── __tests__/         # Basic for unit tests
├── app/               # Application
|    ├── components/   # Basic UI components used through the application
|    ├── context/      # Context providers and hooks
|    ├── data/         # Static hero data
|    └── super-heroes/ # Application views (HeroCard, HeroList, etc.)
└── 
```

