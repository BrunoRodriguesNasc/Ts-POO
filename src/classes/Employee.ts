export class Employee {
    private name: string;
    private salary: number;
    private job: string;
    constructor(name: string, salary: number, job: string) {
        this.name = name;
        this.salary = salary;
        this.job = job;
    }

    makeSales(): void {
        console.log("Fazendo vendas");
    }
    
    getName() {
        return this.name;
    }
    getSalary() {
        return this.salary;
    }
    getJob() {
        return this.job;
    }
}