import './addTask.css';
import './forms.css';
import {useState} from "react";
import {ValidationError} from "../errors/ValidationError";
import {nanoid} from "nanoid";
import {Tasks} from "../DataObjects/Tasks";
import {getNextId} from "../getNextId";
import axios from "axios";
function AddTask() {
    console.log('2');
    const [taskText, setTaskText] = useState('');
    const [errors, setErrors] = useState([]);
    const sharedTasks = new Tasks()

    const handleChange = event => {
        console.log(taskText)
        setTaskText(event.target.value);
    };

    const handleClick = event => {
        event.preventDefault();

        if (taskText.trim().length === 0) {
            !errors.some(item => item instanceof ValidationError) &&
            setErrors(prevState => [...prevState, new ValidationError("Field Task Text must be filled before proceeding")]);
        } else {
            console.log(sharedTasks)
            const nextId = getNextId(sharedTasks.tasks);
            console.log(nextId);
            const taskJSON = { id: nextId, content: taskText, isCompleted: false };
            sharedTasks.addTask(sharedTasks.transformSingleJSONToTask(taskJSON))
            axios.post('http://localhost:8080/task', taskJSON)
                .then(response => console.log(response.data))
                .catch(error => {
                    if (error.response) {
                        // The request was made, but the server responded with a status code outside of the 2xx range
                        console.log('Server responded with an error status:', error.response.status);
                        console.log('Error response data:', error.response.data);
                    } else if (error.request) {
                        // The request was made, but no response was received
                        console.log('No response received from the server:', error.request);
                    } else {
                        // Something else happened in setting up the request
                        console.log('Error during request setup:', error.message);
                    }
                });
        }

    };

    const errorBanner =
        <div className="errors">
            {errors.map(error => <div className="error" key={nanoid()}> {error.message} </div> )}
        </div>

    return (
        <div className="add-task form">
            {errors.length>0 && errorBanner}
            <div className="add-task-line">
                <label htmlFor="taskContent">Task:</label>
                <textarea autoFocus={true} name="taskContent" className="textarea-field" onChange={handleChange} value={taskText}></textarea>
            </div>
            <button className="btn" onClick={handleClick} >Add</button>
        </div>
    );
}

export default AddTask;
