
import { useState } from 'react'
import ShowPassword from './Day-3/ShowPassword'
import ToggleMessage from './Day-3/ToggleMessage'
import NameList from './Day-4/NameList'
import TodoList from './Day-4/TodoList'
import FetchPostsWithStatus from './Day-5/FetchPostsWithStatus'
import FetchUsers from './Day-5/FetchUsers'
import MouseTracker from './Day-6/MouseTracker'
import Timer from './Day-6/Timer'
import { Home } from './Day-7/Home'
import ThemeContext from './Day-7/ThemeContext'
import ReducerCounter from './Day-8/ReducerCounter'
import ThemeReducer from './Day-8/ThemeReducer'
import ToggleExample from './Day-9/ToggleExample'
import LocalStorageExample from './Day-9/LocalStorageExample'


function App() {

  const [theme, setTheme] = useState("light")
  return (
    <>
      {/* <h1>Team Members</h1> */}
      {/* <BusinessCard name="Obaid Ullah" title="Frontend Developer" email="abc@gmail.com" /> */}
      {/* <UserCard /> */}

      {/* {<Counter /> } */}
      {/* <SimpleForm/> */}

      {/* <ToggleMessage /> */}
      {/* <ShowPassword /> */}

      {/* <NameList /> */}
      {/* <TodoList /> */}

      {/* <FetchUsers /> */}
      {/* <FetchPostsWithStatus /> */}

      {/* <Timer /> */}
      {/* <MouseTracker /> */}
      {/* 
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Home />
      </ThemeContext.Provider> */}

      {/* <ReducerCounter /> */}
      {/* <ThemeReducer /> */}

      {/* <ToggleExample /> */}
      <LocalStorageExample />
    </>
  )
}

export default App
