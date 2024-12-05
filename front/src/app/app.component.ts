import { Component, inject, OnInit } from '@angular/core';
import { GatitosService } from './services/gatitos.service';
import { Gatito } from './interfaces/gatito';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  private gatitosService: GatitosService = inject(GatitosService);

  gatitosList: Gatito[] | undefined = [];

  selectedGatito: Gatito | undefined;

  async ngOnInit() {
    this.gatitosList = await this.gatitosService.getAllGatitos();
    console.log(this.gatitosList);
  }

  // public onSearchValue(value: string) {
  //   this.gatitosList = this.gatitosList?.find(
  //     (gatito) => gatito.nombre == value,
  //   );
  // }
}
