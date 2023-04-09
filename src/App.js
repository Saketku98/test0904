import React from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const App = () => {


  return (
    <>
      <div className="container">
      <div className="second">
        <h1 className="title">ToDos</h1>
        </div>
        <div className="third">
        <div className="fourth">
        <TaskForm />
        </div>
       
        <TaskList/>
        </div>
      </div>
    </>
  );
};

export default App;