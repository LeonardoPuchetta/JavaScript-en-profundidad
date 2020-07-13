import {Pipe , PipeTransform } from '@angular/core';

@Pipe({
    name: 'calculadora'
})

export class CalculadoraPipe implements PipeTransform{

// dato | calculadora: otroDato
// transform tiene dos parametros, param1 y param2
transform( valor1: any, valor2: any){

    let operaciones = `
          Suma: ${valor1 + valor2} -
          Resta:  ${valor1 - valor2}-
          Multiplicacion: ${valor1 * valor2}-
          Division: ${valor1 / valor2}-
    `;
    return operaciones;
}
}