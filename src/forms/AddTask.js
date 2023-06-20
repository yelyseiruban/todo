import './addTask.css';

function AddTask() {

    return (
        <div className="add-task form">
            <label htmlFor="taskContent">Task:</label>
            <textarea name="taskContent" className="textarea-field"></textarea>
        </div>
    );
}

export default AddTask;
