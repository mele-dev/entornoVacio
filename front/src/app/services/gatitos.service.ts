import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GatitosService {
  constructor() {}

  public async getAllGatitos() {
    const response = await fetch(`/back/gatitos`);
    const gatitos = await response.json();
    return gatitos;
  }
}
