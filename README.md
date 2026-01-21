# React-Revise

Welcome to **React-Revise** 👋
This repository is part of my React learning journey where I am revising React **from scratch**, step by step, using a clear roadmap and a simple teaching style.

Think of this repository as a classroom.
I am the student, and this README explains concepts as if a teacher is sitting beside me and explaining everything calmly, in real-world language, without jumping into advanced or confusing patterns.

The goal is not speed.
The goal is **clarity, confidence, and strong fundamentals**.

---

## How this repository is structured

Every topic in this repository follows the same learning model:

First, we understand the **concept** in simple words.
Then we go through the **learning or theory** part where things are explained in detail.
After that, we do **practice** with very basic code examples.
Finally, we build a **small project** to connect everything together.

This way, nothing feels random or overwhelming.

---

## My React Learning Roadmap

I am following a 4-week React roadmap.
At the time of writing this README, I have already learned up to **Week 4**, but Week 4 is not fully completed yet.
Before moving forward, I decided to **revise everything from the beginning**, starting again from Week 1, Day 1.

This repository is that revision.

---

## Week 1: React Basics and JSX

### What this week is about

In Week 1, the focus is on understanding **what React actually is**, why people use it, and how React applications are structured.
There is no complex logic here.
This week is about building a strong base.

We learn how components work, how JSX looks, and how data moves between components using props.

---

## Week 1 – Day 1

### Installing Node.js and creating the first React app

### Concept

Before we can use React, we need an environment where React can run.
React applications are built using JavaScript, and JavaScript outside the browser needs something called **Node.js**.

Node.js allows us to run JavaScript on our computer, not just inside a browser.
React tools depend on Node.js, so installing it is the first step.

---

### Learning and Theory

Once Node.js is installed, we use a tool called **Create React App**.
This tool sets up everything for us automatically.
It creates folders, installs required files, and gives us a ready-to-run React project.

At this stage, we do not need to understand every file.
It is completely fine if many things look confusing.
The goal is only to understand **where React starts** and **how to run it**.

---

### Practice

After installing Node.js, we create our first React app using this command:

```
npx create-react-app my-first-react-app
```

This command creates a new folder with a working React application inside it.

Then we move into that folder and start the app:

```
cd my-first-react-app
npm start
```

When the app runs, the browser opens automatically, and we see a React welcome screen.
This confirms that React is working correctly on our system.

At this point, we are not writing React code yet.
We are only making sure the setup works.

---

### Mini Practice Task

Open the project folder and look at the `src` folder.
Inside it, you will see a file called `App.js`.

This file contains a simple React component.
Do not try to understand everything yet.
Just notice that the page you see in the browser comes from this file.

Change some text inside `App.js`, save the file, and notice how the browser updates automatically.
This is called **hot reload**, and it is one of the reasons developers love React.

---

### Project for Week 1

At the end of Week 1, we build a **Business Card Component**.

This project helps us understand how components and props work together.

The idea is simple.

We create a reusable business card component.
We pass data like name, title, email, and image as props.
Then we reuse the same component multiple times with different data.
Basic CSS is added to make it look clean.

No databases.
No APIs.
Only React basics.

---

## Upcoming Weeks Overview

After Week 1, the roadmap continues like this:

In **Week 2**, we learn about state, events, and user interaction.
We build counters and a todo list where users can add and manage tasks.

In **Week 3**, we learn about side effects using `useEffect`.
We fetch data from APIs and build a weather dashboard.

In **Week 4**, we focus on better app structure, global state using Context, and reusable logic using custom hooks.

Each week builds slowly on the previous one.
Nothing is rushed.

---

## Final Note

This repository is not about showing advanced React skills.
It is about **learning React properly**, the way it should be learned.

If you are also learning React and feel confused by complex tutorials, this repository is for you.
Simple explanations.
Simple code.
Strong fundamentals.

Let’s revise React the right way 🚀
