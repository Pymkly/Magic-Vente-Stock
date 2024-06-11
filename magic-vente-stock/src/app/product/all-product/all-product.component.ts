import { Component } from '@angular/core';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css']
})
export class AllProductComponent {
  allProducts  = [
    { imageSrc: 'assets/image/Orcrist-epee-de-Thorin-Le-Seigneur-des-Anneaux-forge-Gondolin-dent-de-dragon.jpg', name: 'Orcrist epée de Thorin', price: '10 Gondariar'},
    { imageSrc: 'assets/image/10000003882905-0-700x700.jpg', name: 'Herugrim', price: '14 Gondariar'},
    { imageSrc: 'assets/image/epee-arwen-seigneur-des-anneaux.jpg', name: 'Epée Arwen', price: '7 Gondariar'},
    { imageSrc: 'assets/image/epee-arwen-seigneur-des-anneaux.jpg', name: 'Epée Arwen', price: '7 Gondariar'},
  ];

  displayedProducts: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 3;

  constructor() {
    this.updateDisplayedProducts();
  }

  updateDisplayedProducts() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.displayedProducts = this.allProducts.slice(startIndex, startIndex + this.itemsPerPage);
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.updateDisplayedProducts();
  }

  get totalPages(): number[] {
    return Array(Math.ceil(this.allProducts.length / this.itemsPerPage)).fill(0).map((x, i) => i + 1);
  }
}
