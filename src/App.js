import './App.css';
import {useEffect, useState} from "react";
import Task from "./Task";
import AddTask from "./forms/AddTask";


function App() {
    const [tasksData, setTasksData] = useState([])
    const [refresh] = useState(false);
    const [addingTask, setAddingTask] = useState(false);


    console.log(tasksData)
    useEffect(()=>{
        const fetchTasks = async () => {
            const res = await fetch('http://localhost:8080/tasks');
            const getData = await res.json();
            setTasksData(getData);
        }
        fetchTasks().then(r => console.log(r));
    }, [refresh])

    const tasks = tasksData.map(taskData =>
        <Task key={taskData.id} id={taskData.id} content={taskData.content} isCompleted={taskData.isCompleted}/>
    )

    function addTaskHandler() {
        setAddingTask(prevState => !prevState);
    }

    return (
        <div className="main">
            <nav className="header">

            </nav>

            <div className="todo-wrapper">
                <div className="todo-main">
                    <div className="list-header">
                        <button className="btn add-task-btn" onClick={addTaskHandler}>Add New Task</button>
                    </div>
                    <div className="add-task-wrapper">
                        {addingTask && <AddTask />}
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
