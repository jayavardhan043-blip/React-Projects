import { useState, useContext } from "react";
import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";
import useLocalStorage from "./Hooks/UseLocalStorage";
import { ThemeContext } from "./Context/ThemeContext";
import "./App.css";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [filter, setFilter] = useState("all");

  const filteredTasks = tasks.filter((task) => {
  if (filter === "active") {
    return !task.completed;
  }

  if (filter === "completed") {
    return task.completed;
  }

  return true;
});

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text: text,
      completed: false
    };

    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const clearCompleted = () => {
  setTasks(tasks.filter((task) => !task.completed));
};

const clearAllTasks = () => {
  setTasks([]);
};

  const completedCount = tasks.filter(
    (task) => task.completed
  ).length;

  const activeCount = tasks.filter(
  (task) => !task.completed
).length;

  return (
    <div className={theme}>
      <h1>Task Manager</h1>

      <button className="theme-btn" onClick={toggleTheme}>
  {theme === "light" ? "Dark Mode" : "Light Mode"}
</button>

      <TaskForm addTask={addTask} />

      
        <div className="counters">
  <p>Total Tasks: {tasks.length}</p>
  <p>Active Tasks: {activeCount}</p>
  <p>Completed Tasks: {completedCount}</p>
</div>
      
      <div className="filters">
  <button onClick={() => setFilter("all")}>All</button>
  <button onClick={() => setFilter("active")}>Active</button>
  <button onClick={() => setFilter("completed")}>Completed</button>

  <button onClick={clearCompleted}>
  Clear Completed
</button>

<button onClick={clearAllTasks}>
  Clear All
</button>

</div>

      <TaskList
        tasks={filteredTasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;