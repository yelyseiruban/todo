export class TaskObj {
    id;
    content;
    isCompleted;


    constructor(id, content, isCompleted) {
        this.id = id;
        this.content = content;
        this.isCompleted = isCompleted;
    }
}