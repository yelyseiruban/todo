import './Task.css'
import './closeBtn.scss'
import {useState} from "react";
import {checkTask, removeTask} from "./redux/tasks";
import {useDispatch} from "react-redux";

function Task(props) {
    const [task, changeTask] = useState({id: props.id, content: props.content, isCompleted: props.isCompleted});
    const dispatch = useDispatch();
    function handleCheckTask() {
        changeTask(prevState => {
            return {...prevState, isCompleted: !prevState.isCompleted}
        })
        dispatch(checkTask(props.id))
    }

    function handleDeleteTask(){
        dispatch(removeTask(props.id))
    }

    return (
        <div className="task">
            <span className="checkbox centered-element">
                <i onClick={handleCheckTask} className={task.isCompleted ? "check active" : "check"}>&nbsp;</i>
            </span>
            <div className="task-text">
                <div className="centered-element">
                    <p>{task.content}</p>
                </div>
            </div>
            <a href="#" className="close-button" onClick={handleDeleteTask}>
                <div className="in">
                    <div className="close-button-block"></div>
                    <div className="close-button-block"></div>
                </div>
                <div className="out">
                    <div className="close-button-block"></div>
                    <div className="close-button-block"></div>
                </div>
            </a>
        </div>
    );
}

export default Task;
