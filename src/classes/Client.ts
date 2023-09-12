import { Order } from "./Order";

export class Client {
    private name: string;
    private addresss: string;
    private phone: string;
  
    constructor(name: string, addresss: string, phone: string) {
      this.name = name;
      this.addresss = addresss;
      this.phone = phone;
    }
  
    makeOrder(): Order {
      return new Order(this);
    }
  
    // Getters e Setters (opcional)
    getName(): string {
      return this.name;
    }
  
    getAddress(): string {
      return this.addresss;
    }
  
    getPhone(): string {
      return this.phone;
    }
  }