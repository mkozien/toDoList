export class Task {
    id?: number;
    name: string;
    priority: boolean;

    constructor(id: number, name: string, priority: boolean) {
        this.id = id;
        this.name = name;
        this.priority = priority;
    }
}