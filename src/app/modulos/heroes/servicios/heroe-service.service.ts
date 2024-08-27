import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroeServiceService {

  constructor() { }

  public sumarPoder(num1: string, num2: string) {
    return num1 + num2;
  }
}
