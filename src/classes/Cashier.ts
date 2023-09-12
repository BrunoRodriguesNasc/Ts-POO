import { Employee } from "./Employee";

export class Cashier extends Employee {
  constructor(name: string, salary: number, job: string) {
    super(name, salary, job);
  }
  sayJob() {
    console.log("Eu sou caixa");
  }
  calculateBill() {
    console.log("Calculando conta");
  }
}
