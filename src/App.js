import './App.css';
import {useEffect, useState} from "react";
import Task from "./Task";
import AddTask from "./forms/AddTask";
import {nanoid} from "nanoid";
import {Tasks} from "./DataObjects/Tasks";


function App() {
    const [tasksDataJSON, setTasksDataJSON] = useState([])
    const [refresh, setRefresh] = useState(false);
    const [addingTask, setAddingTask] = useState(false);
    const sharedTasks = new Tasks();


    useEffect(()=>{
        const fetchTasks = async () => {
            const res = await fetch('http://localhost:8080/tasks');
            const getData = await res.json();
            await sharedTasks.setTasksObjects(getData);
            setTasksDataJSON(sharedTasks.tasks);

        }
        fetchTasks().then(r => console.log(r));
    }, [sharedTasks])

    const tasks = tasksDataJSON.map(taskData =>
        <Task key={taskData.id} id={taskData.id} content={taskData.content} isCompleted={taskData.isCompleted} />
    )

    function addHandler(){
        console.log("Hello")
        console.log(sharedTasks);
        setTasksDataJSON(sharedTasks.tasks);
        setRefresh(prevState => !prevState);
    }
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
                        {addingTask && <AddTask key={nanoid()} addHanlder={addHandler}/>}
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
