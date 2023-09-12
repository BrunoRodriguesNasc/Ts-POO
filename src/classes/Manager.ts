import { Employee } from "./Employee";
export class Manager extends Employee {
    constructor(name: string, salary: number, job: string) {
        super(name, salary, job);
    }
    manageInventory() {
        console.log("Gerenciando estoque");
    }

    manageOrders() {
        console.log("Gerenciando pedidos");
    }
}