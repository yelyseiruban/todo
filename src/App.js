import './App.css';
import Task from "./Task";

const tasksData = [
    {
        id: 1,
        content: "do homework",
        isCompleted: false
    },
    {
        id: 2,
        content: "do workout",
        isCompleted: true
    },
    {
        id: 3,
        content: "read book soadkjfds;oj ;skdja pfojap sdojafposd jpaosfj paosidjfpo asijp",
        isCompleted: false
    }
]

function App() {
    const tasks = tasksData.map(taskData =>
        <Task id={taskData.id} content={taskData.content} isCompleted={taskData.isCompleted}/>
    )

    return (
    <div className="main">
      <nav className="header">

      </nav>

      <div className="todo-wrapper">
          <div className="todo-main">
              <div className="list-header">
                  <button className="btn add-task-btn">Add New Task</button>
              </div>
              <div className="todo-list">
                  {tasks}
              </div>
          </div>
      </div>

      <nav className="footer"></nav>
    </div>
  );
}

export default App;
