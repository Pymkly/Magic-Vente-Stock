import { Component } from '@angular/core';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css']
})
export class AllProductComponent {
  products = [
    { imageSrc: 'assets/image/Orcrist-epee-de-Thorin-Le-Seigneur-des-Anneaux-forge-Gondolin-dent-de-dragon.jpg', name: 'Orcrist epée de Thorin', price: '10 Gondariar'},
    { imageSrc: 'assets/image/10000003882905-0-700x700.jpg', name: 'Herugrim', price: '14 Gondariar'},
    { imageSrc: 'assets/image/epee-arwen-seigneur-des-anneaux.jpg', name: 'Epée Arwen', price: '7 Gondariar'},
  ];
}
