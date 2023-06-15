import { Component } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})


export class ProductoComponent {
  public Productos: Producto[] = [
    {

      id: 27, title: "Ergonomic", price: 1000, description: "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients", images: ["https://api.escuelajs.co/api/v1/files/f5b9.png"], creationAt: new Date("2023-05-25T09:43:06.000Z"), updatedAt: new Date("2023-05-25T09:43:06.000Z"), category: { id: 5, name: "Others", image: "https://picsum.photos/640/640?r=9827", creationAt: new Date("2023-05-25T09:43:06.000Z"), updatedAt: new Date("2023-05-25T09:43:06.000Z"), },
    },
    {
      id: 28, title: "Awesome Rubber Car", price: 177, description: "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality", images: ["https://picsum.photos/640/640?r=3491", "https://picsum.photos/640/640?r=6370", "https://picsum.photos/640/640?r=3931",], creationAt: new Date("2023-05-25T09:43:06.000Z"), updatedAt: new Date("2023-05-25T09:43:06.000Z"), category: { id: 4, name: "Shoes", image: "https://picsum.photos/640/640?r=804", creationAt: new Date("2023-05-25T09:43:06.000Z"), updatedAt: new Date("2023-05-25T09:43:06.000Z"), },
    }, { id: 29, title: "Rustic Wooden Tuna", price: 48, description: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016", images: ["https://picsum.photos/640/640?r=7744", "https://picsum.photos/640/640?r=3452", "https://picsum.photos/640/640?r=4708",], creationAt: new Date("2023-05-25T09:43:06.000Z"), updatedAt: new Date("2023-05-25T09:43:06.000Z"), category: { id: 4, name: "Shoes", image: "https://picsum.photos/640/640?r=804", creationAt: new Date("2023-05-25T09:43:06.000Z"), updatedAt: new Date("2023-05-25T09:43:06.000Z"), }, }, { id: 30, title: "Oriental Rubber Table", price: 545, description: "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart", images: ["https://picsum.photos/640/640?r=5804", "https://picsum.photos/640/640?r=5554", "https://picsum.photos/640/640?r=342",], creationAt: new Date("2023-05-25T09:43:06.000Z"), updatedAt: new Date("2023-05-25T09:43:06.000Z"), category: { id: 4, name: "Shoes", image: "https://picsum.photos/640/640?r=804", creationAt: new Date("2023-05-25T09:43:06.000Z"), updatedAt: new Date("2023-05-25T09:43:06.000Z"), }, }, { id: 31, title: "Oriental Bronze Pizza", price: 483, description: "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients", images: ["https://picsum.photos/640/640?r=6416", "https://picsum.photos/640/640?r=6919", "https://picsum.photos/640/640?r=1602",], creationAt: new Date("2023-05-25T09:43:06.000Z"), updatedAt: new Date("2023-05-25T09:43:06.000Z"), category: { id: 4, name: "Shoes", image: "https://picsum.photos/640/640?r=804", creationAt: new Date("2023-05-25T09:43:06.000Z"), updatedAt: new Date("2023-05-25T09:43:06.000Z"), }, },];

    misProductos():void{
      console.log(this.Productos);

      //alert('hola mundo');
      prompt("hola?");

    }

}

export interface Producto {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  creationAt: Date;
  updatedAt: Date;
  category: Category;

}

export interface Category {
  id: number;
  name: string;
  image: string;
  creationAt: Date;
  updatedAt: Date;


}
