import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() imageSrc: string | undefined;
  @Input() name: string | undefined;
  @Input() price: string | undefined;
  @Input() isReverse: boolean = false;
}
