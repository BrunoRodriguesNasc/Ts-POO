export class Product {
  private name: string;
  private price: number;
  private quantity: number;

  constructor(name: string, price: number, quantity: number) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
  getName() {
    return this.name;
  }
  getPrice() {
    return this.price;
  }
  getQuantity() {
    return this.quantity;
  }
}
