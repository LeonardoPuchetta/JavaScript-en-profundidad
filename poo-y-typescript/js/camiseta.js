// CLASES (molde para instanciar objetos)
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Decoradores 
function estampar(logo) {
    return function (target) {
        target.prototype.estampacion = function () {
            // cuando es void no retorna nada 
            console.log('Camiseta estampada con el logo de : ' + logo); // cuerpo del metodo a agregar 
        };
    };
}
;
var Camiseta = /** @class */ (function () {
    //Metodos o funciones asociadas al objeto 
    //Constructores 
    function Camiseta(color, modelo, marca, talla, precio) {
        this.color = color;
        this.precio = precio;
        this.talla = talla;
        this.modelo = modelo;
        this.marca = marca;
    }
    //creacion de un metodo para cambiar un atributo 
    //private 
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    //metodo para devolver el color 
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    Camiseta = __decorate([
        estampar('Nike')
    ], Camiseta);
    return Camiseta;
}());
// Clase Hija 
var Camisa = /** @class */ (function (_super) {
    __extends(Camisa, _super);
    function Camisa() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //public cuello:string;
    Camisa.prototype.setBotones = function (botones) {
        this.botones = botones;
    };
    Camisa.prototype.getBotones = function () {
        return this.botones;
    };
    return Camisa;
}(Camiseta));
var cami = new Camiseta("rojo", 'Manga_Larga', "Hering", 'L', 150);
console.log(cami);
var Hola = new Camisa('rojo', 'Cam', 'Hering', 'L', 150);
Hola.setColor('Amarillo');
console.log(Hola);
//cami.estampacion()
