import './App.css';
import {useEffect, useState} from "react";
import Task from "./Task";
import AddTask from "./forms/AddTask";
import {nanoid} from "nanoid";
import {useSelector, useDispatch} from "react-redux";
import {fetchTasks} from "./redux/tasks"


function App() {
    const [addingTask, setAddingTask] = useState(false);

    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks.data);

    useEffect(() => {
        dispatch(fetchTasks());
    }, []);

    let taskComponents = [];

    if (tasks !== undefined) {
        taskComponents = tasks.map(taskData =>
            <Task key={taskData.id} id={taskData.id} content={taskData.content} isCompleted={taskData.isCompleted}/>
        )
    }

    function addTaskHandler() {
        setAddingTask(state => !state);
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
                        {addingTask && <AddTask key={nanoid()}/>}
                    </div>
                    <div className="todo-list">
                        {taskComponents}
                    </div>
                </div>
            </div>

            <nav className="footer"></nav>
        </div>
    );
}

export default App;
