export class Task {
    id: number;
    name: string;
    priority: boolean;

    constructor(name: string, priority: boolean) {
        this.id = 0;
        this.name = name;
        this.priority = priority;
    }
}