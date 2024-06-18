import { Component } from '@angular/core';
import {LoginService} from "../../login.service";

@Component({
  selector: 'app-productday',
  templateUrl: './productday.component.html',
  styleUrls: ['./productday.component.css'],
})
export class ProductdayComponent {
  product = {
    reference: 'ref4',
    libelle: 'Orcrist épée de Thorin',
    description:
      'L épée de film original de The Hobbit par United Cutlery Au troisième âge de la Terre du Milieu Thorin et sa communauté de Nains rencontre une grotte troll dans Rhudaur.Thorin trouve une vieille lame elfique appelée Orcrist (= orc-splitter), forgée par les hauts elfes de l Ouest à Gondolin .Thorin revendiqua Orcrist pour lui-même et jura de diviser à nouveau les Orcs avec lui. Il guide l épée lors de son voyage vers Erebor et l utilise contre les orcs et les gobelins des Monts Brumeux.',
    prix: 58.4,
    // imageUrl:
    //   '../../assets/image/Orcrist-epee-de-Thorin-Le-Seigneur-des-Anneaux-forge-Gondolin-dent-de-dragon.jpg',
  };

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.loginService.getProductOfTheDay((data)=> {
      console.log(data)
      this.product = data;
    })
  }
}
