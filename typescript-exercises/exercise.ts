// Create your interfaces and enum below:
interface Task {
    id: number;
    title: string;
    description: string;
    dueDate: Date;
}

enum Priority {
    low,
    medium,
    high
}
// Create your task below:
interface TaskPriority extends Task {
    priority: Priority;
}

let task: TaskPriority = {
    id: 1,
    title: "title",
    description: "description",
    dueDate: new Date(),
    priority: Priority.high
}
// ONCE DONE, UNCOMMENT THE LINE BELOW AND RUN THE FILE
console.log(task);