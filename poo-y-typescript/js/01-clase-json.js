

// creacion de una CLASE : 

var bicicleta ={
color:'Rojo',
modelo: 'bmx',
frenos: 'disco',
vmax:'60km/h',

        //creacion de metodos dentro del json 
cambiaColor : function(nuevo_color){

this.color=nuevo_color 
console.log(this)
}

}
console.log(bicicleta)
bicicleta.cambiaColor('Verde');
