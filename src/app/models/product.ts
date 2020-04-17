export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;

  constructor(
    id,
    name,
    description = "",
    price = 0,
    imageUrl = "https://www.promofix.com/wp-content/uploads/2017/01/Laptop-coffe.jpg"
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.imageUrl = imageUrl;
  }
}
