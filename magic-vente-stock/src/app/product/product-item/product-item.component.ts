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

  isConnected() {
    return this.loginService.checkAuth();
  }
}
