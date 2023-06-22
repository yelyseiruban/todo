import './App.css';
import {useEffect, useMemo, useState} from "react";
import Task from "./Task";
import AddTask from "./forms/AddTask";
import {nanoid} from "nanoid";
import {Tasks} from "./DataObjects/Tasks";


function App() {
    const [tasksDataJSON, setTasksDataJSON] = useState([])
    // eslint-disable-next-line no-unused-vars
    const [refresh, setRefresh] = useState(false);
    const [addingTask, setAddingTask] = useState(false);
    const sharedTasks = useMemo(() => new Tasks(), []);


    useEffect(()=>{
        const fetchTasks = async () => {
            fetch('http://localhost:8080/tasks').then( response => {
                if (!response.ok){
                    throw new Error('Failed to fetch resource: ' + response.status);
                }
                return response.json();
            })
            .then(async data => {
                await sharedTasks.setTasksObjects(data);
                setTasksDataJSON(sharedTasks.tasks);
            })
            .catch(error => {
                console.log("Failed to fetch resource");
                console.error('Error:', error);
            });

        }
        console.log("fetch one more timed")
        fetchTasks().then(r=> console.log(r));
    }, )

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
