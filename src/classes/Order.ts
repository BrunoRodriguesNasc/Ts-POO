import { OrderedItem } from "./OrderedItem";
import { Client } from "./client";

export class Order {
    private client: Client;
    private OrderedItems!: OrderedItem[];
    private status: string = "Pending"; // Inicialmente, o status é definido como "Pendente"
  
    constructor(client: Client) {
      this.client = client;
    }
  
    addItem(item: OrderedItem): void {
      this.OrderedItems.push(item);
    }
  
    removeItem(item: OrderedItem): void {
      const index = this.OrderedItems.indexOf(item);
      if (index !== -1) {
        this.OrderedItems.splice(index, 1);
      }
    }
  
    calcTotal(): number {
      return 0; // Implementar
    }
  
    // Outros métodos relacionados ao pedido (opcional)
  
    // Getters e Setters (opcional)
    getClient(): Client {
      return this.client;
    }
  
    getStatus(): string {
      return this.status;
    }

    getOrderedItems(): OrderedItem[] {
        return this.OrderedItems;
    }
  }