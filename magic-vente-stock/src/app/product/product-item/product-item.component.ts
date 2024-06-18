import { Component, Input } from '@angular/core';
import {LoginService} from "../../login.service";

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

  constructor(private loginService: LoginService) {

  }

  normalizeString(input: string| undefined) {
    if (input) {
      return input
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '-');
    }
    return ""
  }

  toUrl() {
    return `assets/image/${this.normalizeString(this.imageSrc)}.jpg`
  }

  isConnected() {
    return this.loginService.checkAuth();
  }
}
