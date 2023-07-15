import {TaskObj} from "./TaskJSON";

export class Tasks{
    instance
    tasks;

    constructor() {
        if (!Tasks.instance) {
            // Initialization code here
            this.tasks = [];
            Tasks.instance = this;
        }

        return Tasks.instance;
    }

    setTasksObjects(tasksJSON){
        const tasks = []
        tasksJSON.forEach(taskJSON => tasks.push(this.transformSingleJSONToTask(taskJSON)));
        this.tasks = tasks;
    }

    addTask(task) {
        this.tasks.push(task);
    }

    transformSingleJSONToTask(taskJSON){
        return new TaskObj(taskJSON.id, taskJSON.content, taskJSON.isCompleted)

    }
}