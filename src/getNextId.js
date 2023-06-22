
export function getNextId(tasks){
    tasks.sort((a, b) => a.age - b.age);

    return tasks[tasks.length-1].id + 1;
}