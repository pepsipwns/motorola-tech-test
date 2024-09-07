# Motorola Login Page Tech Test - Anthony Brown

## Prerequisites

1. Node.js
2. npm

## Configuration

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

### Typescript

This project uses TypeScript for type safety and improved developer experience. TypeScript is configured to work with Next.js, React, and Jest. You can write and edit TypeScript files (`.ts` and `.tsx`) throughout the project. The TypeScript configuration file (`tsconfig.json`) defines compiler options and project settings.

### Tailwind CSS:

Tailwind CSS is used for styling and is configured out of the box with Next.js

### Testing

React Testing Library is used for testing, with Jest configured as the test runner.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/pepsipwns/motorola-tech-test
cd motorola-tech-test
```

2. Install dependencies

```bash
npm install
```

## Usage

1. Run the development server

```bash
npm run dev
```

2. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

3. You will be redirected automatically to the /login page. It includes a form with fields for username and password. Upon successful login (username: user, password: pass), the user is redirected back to the homepage ("/"), now authorised.

## Running Tests

1. Run unit tests:

```bash
npm test
```

There are multiple tests for the login page, checking the validation and the redirecting.

## Folder Structure

1. All configuration files are located outside the /src/ director.
2. All project files (components, pages, tests etc.) are located inside the /src/ directory.
3. We are using the Next.js 13 and above AppRouter, so any folders within the /app/ directory are immediately assumed as page routes. `So for example the /app/login/page.tsx becomes the /login route.`

### Important files of note

1. `/app/login/page.tsx`: Contains the login page.
2. `/tests/login.test.tsx`: Contains the unit tests for the login page.
3. `/context/AuthContext.tsx`: Handles the authorisation in the context, tracking the authorisation status throughout the app.
4. `/tailwind.config.ts`: Tailwind CSS configuration file. Adjusting colours, screensizes, fonts etc. is all handled here.
5. `/jest.config.ts`: Jest configuration file for testing setup.

## Packages of Note

### [https://www.npmjs.com/package/class-variance-authority](Class Variance Authority)

This library helps in managing conditional and variant classes efficiently. It allows for the creation of reusable, composable class utilities by defining the possible variants and conditions directly in your component code.

### [https://www.npmjs.com/package/clsx](clsx)

A utility for constructing className strings conditionally. It simplifies the process of applying dynamic class names based on component state or props, making it easier to handle conditional rendering scenarios.

### [https://www.npmjs.com/package/tailwind-merge](TailwindMerge)

This package is used to handle merging of Tailwind CSS classes, ensuring that conflicting classes are resolved correctly. It helps in avoiding redundant or conflicting class names, keeping your styles consistent and manageable. I use this in combination with clsx for one nifty function "classMerge" which can be found in `/helpers/functions.ts`

### [https://react-hook-form.com/](React Hook Form)

This project uses React Hook Form to manage form state and validation. React Hook Form provides a simple and efficient way to handle forms in React, offering minimal re-renders, improved performance, and an intuitive API.
