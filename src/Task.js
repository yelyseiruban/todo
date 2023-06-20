import './Task.css'
import {useState} from "react";
import axios from "axios";

function Task(props) {
    const [task, changeTask] = useState({id: props.id, content: props.content, isCompleted: props.isCompleted});

    const alterCompletedState= () => {
        axios.patch(`http://localhost:8080/task/${task.id}`, {

        })
            .then(response => console.log(response.data))
            .catch(error => console.error(error))
    };

    function handleChangeCompleteState() {
        changeTask(prevState => {
            return {...prevState, isCompleted: !prevState.isCompleted}
        })
        alterCompletedState();
    }

    return (
        <div className="task">
            <span className="checkbox">
                <i onClick={handleChangeCompleteState} className={task.isCompleted ? "check active" : "check"}>&nbsp;</i>
            </span>
            <div className="task-text">{task.content}</div>
            <span className="close"></span>
        </div>
    );
}

export default Task;
