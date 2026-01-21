# React-Revise

Welcome to **React-Revise** 👋

This repository is my personal React revision space. I am learning React step by step, and instead of rushing forward, I decided to pause and **revise everything from scratch** using a clear roadmap and a calm learning approach.

In this repository, React is explained the way a teacher would explain it to a student sitting in front of them.
No shortcuts.
No advanced syntax too early.
No assumptions that the learner already knows things.

The focus is **understanding**, not memorizing.

---

## Why this repository exists

While learning React, it is very easy to move forward without fully understanding the basics.
Things start working, but the *why* stays unclear.

This repository fixes that problem.

Every concept is revisited slowly.
Every feature is practiced with simple code.
Every project connects learning with real usage.

This is not a showcase repository.
This is a **learning and revision repository**.

---

## Teaching style used in this repo

This repo follows a consistent learning model for every week and topic.

First, we clearly explain the **concept** in simple words.
Then we go into **learning or theory**, explained in paragraphs like a real lesson.
After that, we do **practice**, using very basic examples that are easy to read and understand.
Finally, we build a **small project** so the concept makes sense in a real scenario.

This approach keeps things structured and removes confusion.

---

## React Roadmap Followed in This Repository

I am following a 4-week React roadmap.
At the time of writing this README, I have learned up to Week 4, but Week 4 is still in progress.
Instead of pushing forward, I chose to **revise everything again from the beginning** using the same roadmap.

Below is a complete overview of what this repository covers.

---

## Week 1: React Basics and JSX

### What this week teaches

Week 1 focuses on understanding **what React is** and **why it is used**.
Before writing logic, it is important to understand how React thinks.

This week explains what components are, how JSX works, and how data moves between components using props.

Nothing complex happens here.
This week builds the foundation.

---

### Concepts covered in Week 1

We start by understanding what React actually is and why developers prefer it over plain JavaScript for building user interfaces.

Then we learn about **components**, which are the building blocks of any React app.
We understand how JSX looks like HTML but works like JavaScript.

We also learn how components communicate using **props**, and how multiple components can be combined together.

The idea of the **Virtual DOM** is introduced at a high level so React behavior makes sense.

Finally, we learn how to set up a React project using Create React App.

---

### Project for Week 1: Business Card Component

At the end of this week, we build a **Business Card Component**.

The goal of this project is to understand reusability.
We create one component and reuse it multiple times with different data.

Each card receives props like name, title, email, and image.
Simple CSS is used to make it presentable.

This project proves that React components are reusable and flexible.

---

## Week 2: State and Events

### What this week teaches

Week 2 is where React starts to feel interactive.
Here, we learn how data changes over time and how users interact with the UI.

This week explains how React remembers values using state and how user actions trigger changes.

---

### Concepts covered in Week 2

We learn about the **useState** hook and understand why React needs state.

We handle user actions like clicks, typing, and form submissions using event handlers.

We learn what **controlled components** are and why React should control form inputs.

Conditional rendering is introduced so the UI can change based on state.

We also learn how to render lists and why keys are important in React.

---

### Project for Week 2: Counter and Todo List

This week includes two small projects.

First, we build a simple **counter** with increment and decrement buttons.
This helps understand how state updates work.

Then we build a **Todo List application**.

Users can add todos, mark them as complete, delete them, and filter between all, active, and completed tasks.

All data is stored only in React state.
No database is used yet.

This project helps connect state, events, lists, and conditional rendering together.

---

## Week 3: useEffect and Side Effects

### What this week teaches

Week 3 explains how React handles things that happen **outside the component**, like fetching data or reacting to changes.

This is where we learn about side effects and how React components behave over time.

---

### Concepts covered in Week 3

We learn about the **useEffect** hook and why it exists.

The idea of component lifecycle is explained in simple terms, such as when a component loads or updates.

We learn how to fetch data from external APIs and store it in state.

Dependency arrays are explained carefully so effects do not run unnecessarily.

Cleanup functions are introduced to avoid unwanted behavior.

---

### Project for Week 3: Weather Dashboard

In this project, we build a **Weather Dashboard**.

The app fetches weather data from the OpenWeatherMap API.
Users can search for a city and see current weather information.

A loading message is shown while data is being fetched.
Errors are handled gracefully if something goes wrong.

The last searched city is stored so the app feels more user friendly.

This project shows how real data works in React.

---

## Week 4: App Architecture, Context, and Custom Hooks

### What this week teaches

Week 4 focuses on writing **cleaner and more scalable React apps**.

As apps grow, passing props everywhere becomes messy.
This week teaches how to manage global state properly and reuse logic.

---

### Concepts covered in Week 4

We learn how to structure components in a clean way and manage props flow.

The problem of **props drilling** is explained clearly.

We use **Context API** to manage global state like themes.

We introduce **useReducer** to handle complex state logic in an organized way.

Custom hooks are created to reuse logic without duplicating code.

---

### Project for Week 4: Theme Switcher and User Preferences App

This project ties everything together.

We build a **light and dark theme switcher** using Context.

Global state is managed using Context and useReducer.

Custom hooks are used for reusable logic.

User preferences are stored in localStorage so settings persist after refresh.

This project focuses more on structure and clean design than flashy features.

---

## Final Thoughts

This repository is my React classroom.

It is slow by design.
It is simple by intention.
It is detailed so concepts actually stick.

If you are revising React or learning it for the first time, this repository is meant to guide you calmly without overwhelming you.

Strong basics create strong developers.
This repo exists to build those basics 🚀
