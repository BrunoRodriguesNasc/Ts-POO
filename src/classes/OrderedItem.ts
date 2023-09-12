import { Order } from "./Order";

export class OrderedItem {
    private order: Order
    private quantity: number
    constructor(order: Order, quantity: number) {
        this.order = order;
        this.quantity = quantity;
    }
    
    getOrder(): Order {
        return this.order;
    }

    getQuantity(): number {
        return this.quantity;
    }
}