import './Task.css'
function Task(props) {
    console.log(props)
    return (
        <div className="task">
            <span className="checkbox">
                <i className={props.isCompleted ? "check active" : "check"}>&nbsp;</i>
            </span>
            <div className="task-text">{props.content}</div>
            <span className="close"></span>
        </div>
    );
}

export default Task;
