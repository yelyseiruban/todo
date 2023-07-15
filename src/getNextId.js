
export function getNextId(tasks){
    tasks.sort((a, b) => a.age - b.age);

    return tasks.length === 0 ? 0 : tasks[tasks.length-1].id + 1;
}