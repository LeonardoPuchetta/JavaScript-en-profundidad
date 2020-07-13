$(document).ready(function(){

 //Slider 
if (window.location.href.indexOf('index')> -1 ){

    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        adaptiveHeight: true ,

      });
    }
// Posts   , creamos un array de json  
if (window.location.href.indexOf('index')> -1 ){

var posts=[
{
   title:"Cien años de soledad ",
   date: 'Publicado el dia ' +  moment().date() + ' de ' + moment().format("MMMM") + ' del año ' + moment().format("YYYY"),    content: 'Muchos años después, frente al pelotón de fusilamiento, el coronel Aureliano Buendía había de recordar aquella tarde remota en que su padre lo llevó a conocer el hielo. Macondo era entonces una aldea de veinte casas de barro y cañabrava construidas a la orilla de un río de aguas diáfanas que se precipitaban por un lecho de piedras pulidas, blancas y enormes como huevos prehistóricos. El mundo era tan reciente, que muchas cosas carecían de nombre, y para mencionarlas había que señalarlas con el dedo. Todos los años, por el mes de marzo, una familia de gitanos desarrapados plantaba su carpa cerca de la aldea, y con un grande alboroto de pitos y timbales daban a conocer los nuevos inventos. Primero llevaron el imán. Un gitano corpulento, de barba montaraz y manos de gorrión, que se presentó con el nombre de Melquíades, hizo una truculenta demostración pública de lo que él mismo llamaba la octava maravilla de los sabios alquimistas de Macedonia. Fue de casa en casa arrastrando dos lingotes metálicos, y todo el mundo se espantó al ver que los calderos, las pailas, las tenazas y los anafes se caían de su sitio, y las maderas crujían por la desesperación de los clavos y los tornillos tratando de desenclavarse, y aun los objetos perdidos desde hacía mucho tiempo aparecían por donde más se les había buscado, y se arrastraban en desbandada turbulenta detrás de los fierros mágicos de Melquíades. «Las cosas tienen vida propia —pregonaba el gitano con áspero acento—, todo es cuestión de despertarles el ánima». José Arcadio Buendía, cuya desaforada imaginación iba siempre más lejos que el ingenio de la naturaleza, y aun más allá del milagro y la magia, pensó que era posible servirse de aquella invención inútil para desentrañar el oro de la tierra. Melquíades, que era un hombre honrado, le previno: «Para eso no sirve». Pero José Arcadio Buendía no creía en aquel tiempo en la honradez de los gitanos, así que cambió su mulo y una partida de chivos por los dos lingotes imantados. Úrsula Iguarán, su mujer, que contaba con aquellos animales para ensanchar el desmedrado patrimonio doméstico, no consiguió disuadirlo. «Muy pronto ha de sobrarnos oro para empedrar la casa», replicó su marido. Durante varios meses se empeñó en demostrar el acierto de sus conjeturas. Exploró palmo a palmo la región, inclusive el fondo del río, arrastrando los dos lingotes de hierro y recitando en voz alta el conjuro de Melquíades. Lo único que logró desenterrar fue una armadura del siglo XV con todas sus partes soldadas por un cascote de óxido, cuyo interior tenía la resonancia hueca de un enorme calabazo lleno de piedras. Cuando José Arcadio Buendía y los cuatro hombres de su expedición lograron desarticular la armadura, encontraron dentro un esqueleto calcificado que llevaba colgado en el cuello un relicario de cobre con un rizo de mujer.',
   content : 'Muchos años después, frente al pelotón de fusilamiento, el coronel Aureliano Buendía había de recordar aquella tarde remota en que su padre lo llevó a conocer el hielo. Macondo era entonces una aldea de veinte casas de barro y cañabrava construidas a la orilla de un río de aguas diáfanas que se precipitaban por un lecho de piedras pulidas, blancas y enormes como huevos prehistóricos. El mundo era tan reciente, que muchas cosas carecían de nombre, y para mencionarlas había que señalarlas con el dedo. Todos los años, por el mes de marzo, una familia de gitanos desarrapados plantaba su carpa cerca de la aldea, y con un grande alboroto de pitos y timbales daban a conocer los nuevos inventos. Primero llevaron el imán. Un gitano corpulento, de barba montaraz y manos de gorrión, que se presentó con el nombre de Melquíades, hizo una truculenta demostración pública de lo que él mismo llamaba la octava maravilla de los sabios alquimistas de Macedonia. Fue de casa en casa arrastrando dos lingotes metálicos, y todo el mundo se espantó al ver que los calderos, las pailas, las tenazas y los anafes se caían de su sitio, y las maderas crujían por la desesperación de los clavos y los tornillos tratando de desenclavarse, y aun los objetos perdidos desde hacía mucho tiempo aparecían por donde más se les había buscado, y se arrastraban en desbandada turbulenta detrás de los fierros mágicos de Melquíades. «Las cosas tienen vida propia —pregonaba el gitano con áspero acento—, todo es cuestión de despertarles el ánima». José Arcadio Buendía, cuya desaforada imaginación iba siempre más lejos que el ingenio de la naturaleza, y aun más allá del milagro y la magia, pensó que era posible servirse de aquella invención inútil para desentrañar el oro de la tierra. Melquíades, que era un hombre honrado, le previno: «Para eso no sirve». Pero José Arcadio Buendía no creía en aquel tiempo en la honradez de los gitanos, así que cambió su mulo y una partida de chivos por los dos lingotes imantados. Úrsula Iguarán, su mujer, que contaba con aquellos animales para ensanchar el desmedrado patrimonio doméstico, no consiguió disuadirlo. «Muy pronto ha de sobrarnos oro para empedrar la casa», replicó su marido. Durante varios meses se empeñó en demostrar el acierto de sus conjeturas. Exploró palmo a palmo la región, inclusive el fondo del río, arrastrando los dos lingotes de hierro y recitando en voz alta el conjuro de Melquíades. Lo único que logró desenterrar fue una armadura del siglo XV con todas sus partes soldadas por un cascote de óxido, cuyo interior tenía la resonancia hueca de un enorme calabazo lleno de piedras. Cuando José Arcadio Buendía y los cuatro hombres de su expedición lograron desarticular la armadura, encontraron dentro un esqueleto calcificado que llevaba colgado en el cuello un relicario de cobre con un rizo de mujer.'
},
{
    title:"El Pozo ",
    date: 'Publicado el dia ' +  moment().date() + ' de ' + moment().format("MMMM") + ' del año ' + moment().format("YYYY"),
    content: ' En 1939, en la literatura uruguaya seguía prevaleciendo la narración de la ya anacrónica vida del gaucho y en general un costumbrismo rural, que si bien tenía unas características propias, no se alejaba mucho de esa corriente narrativa hispanoamericana llamada indigenismo. Ese año, un joven periodista llamado Juan Carlos Onetti escribe una novela absolutamente diferente a lo que se había publicado hasta entonces. El pozo no es su obra más conocida, eclipsada por su brillante carrera posterior, pero reviste una importancia fundamental dentro de la literatura hispanoamericana, y acaso, de las letras en lengua castellana.'           
  
},
{
title:"Primavera con una esquina rota ",
date: 'Publicado el dia ' +  moment().date() + ' de ' + moment().format("MMMM") + ' del año ' + moment().format("YYYY"),
content :  'Libertad es una palabra enorme. Por ejemplo, cuando terminan las clases, se dice que una está en libertad. Mientras dura la libertad, una pasea, una juega, una no tiene por qué estudiar. Se dice que un país es libre cuando una mujer cualquiera o un hombre cualquiera hace lo que se le antoja. Pero hasta los países libres tienen cosas muy prohibidas. Por ejemplo matar. Eso sí, se pueden matar mosquitos y cucarachas, y también vacas para hacer churrascos. Por ejemplo está prohibido robar, aunque no es grave que una se quede con algún vuelto cuando Graciela, que es mi mami, me encarga alguna compra. Por ejemplo está prohibido llegar tarde a la escuela, aunque en ese caso hay que hacer una cartilla mejor dicho la tiene que hacer Graciela, justificando por qué. Así dice la maestra; justificado.Libertad quiere decir muchas cosas. Por ejemplo, si una no está presa, se dice que está en libertad. Pero mi papá está preso y sin embrago está en Libertad, porque así se llama la cárcel donde está hace ya muchos años. A eso el tío Rolando lo llama qué sarcasmo. Un día le conté a mi amiga Angélica que la cárcel en que está mi papi se llama Libertad y que el tío Rolando había dicho que era un sarcasmo y a mi amiga Angélica le gustó tanto la palabra que cuando su padrino le regaló un perrito le puso de nombre Sarcasmo. Mi papá es un preso, pero no porque haya matado o robado o llegado tarde a la escuela. Graciela dice que papá está en libertad, o sea está preso, por sus ideas. Parece que mi papá era famoso por sus ideas. Yo también a veces tengo ideas, pero todavía no soy famosa. Por eso no estoy en Libertad, o sea que no estoy presa.',
   
   
},
{
    title:"La voragine",
   date: 'Publicado el dia ' +  moment().date() + ' de ' + moment().format("MMMM") + ' del año ' + moment().format("YYYY"),    content: 'Muchos años después, frente al pelotón de fusilamiento, el coronel Aureliano Buendía había de recordar aquella tarde remota en que su padre lo llevó a conocer el hielo. Macondo era entonces una aldea de veinte casas de barro y cañabrava construidas a la orilla de un río de aguas diáfanas que se precipitaban por un lecho de piedras pulidas, blancas y enormes como huevos prehistóricos. El mundo era tan reciente, que muchas cosas carecían de nombre, y para mencionarlas había que señalarlas con el dedo. Todos los años, por el mes de marzo, una familia de gitanos desarrapados plantaba su carpa cerca de la aldea, y con un grande alboroto de pitos y timbales daban a conocer los nuevos inventos. Primero llevaron el imán. Un gitano corpulento, de barba montaraz y manos de gorrión, que se presentó con el nombre de Melquíades, hizo una truculenta demostración pública de lo que él mismo llamaba la octava maravilla de los sabios alquimistas de Macedonia. Fue de casa en casa arrastrando dos lingotes metálicos, y todo el mundo se espantó al ver que los calderos, las pailas, las tenazas y los anafes se caían de su sitio, y las maderas crujían por la desesperación de los clavos y los tornillos tratando de desenclavarse, y aun los objetos perdidos desde hacía mucho tiempo aparecían por donde más se les había buscado, y se arrastraban en desbandada turbulenta detrás de los fierros mágicos de Melquíades. «Las cosas tienen vida propia —pregonaba el gitano con áspero acento—, todo es cuestión de despertarles el ánima». José Arcadio Buendía, cuya desaforada imaginación iba siempre más lejos que el ingenio de la naturaleza, y aun más allá del milagro y la magia, pensó que era posible servirse de aquella invención inútil para desentrañar el oro de la tierra. Melquíades, que era un hombre honrado, le previno: «Para eso no sirve». Pero José Arcadio Buendía no creía en aquel tiempo en la honradez de los gitanos, así que cambió su mulo y una partida de chivos por los dos lingotes imantados. Úrsula Iguarán, su mujer, que contaba con aquellos animales para ensanchar el desmedrado patrimonio doméstico, no consiguió disuadirlo. «Muy pronto ha de sobrarnos oro para empedrar la casa», replicó su marido. Durante varios meses se empeñó en demostrar el acierto de sus conjeturas. Exploró palmo a palmo la región, inclusive el fondo del río, arrastrando los dos lingotes de hierro y recitando en voz alta el conjuro de Melquíades. Lo único que logró desenterrar fue una armadura del siglo XV con todas sus partes soldadas por un cascote de óxido, cuyo interior tenía la resonancia hueca de un enorme calabazo lleno de piedras. Cuando José Arcadio Buendía y los cuatro hombres de su expedición lograron desarticular la armadura, encontraron dentro un esqueleto calcificado que llevaba colgado en el cuello un relicario de cobre con un rizo de mujer.',
   content: 'Los que un tiempo creyeron que mi inteligencia irradiaría extraordinariamente, cual una aureola de mi juventud; los que se olvidaron de mí apenas mi planta descendió al infortunio; los que al recordarme alguna vez piensen en mi fracaso y se pregunten por qué no fui lo que pude haber sido, sepan que el destino implacable me desarraigó de la prosperidad incipiente y me lanzó a las pampas, para que ambulara vagando, como los vientos, y me extinguiera, como ellos, sin dejar más que ruido y desolación.'
},

] ; 

//recorrida de array de posts 

posts.forEach((item,index)=>{

    var post =`
    <article class="post">
        <h2> ${item.title} </h2>
        <span class="date">${item.date}</span>
        <p>
         ${item.content}   
        </p>

        <a href="#" class="button_more">Leer mas</a>

    </article>`;

// con la plantilla terminada la incrustamos 
//en el div de posts
$('#posts').append(post)
})

}
//Selector de temas 

var tema = $('#theme');

$('#to-green').click(function(){
    //cambio de atributo href 
tema.attr("href" , "css/green.css")

})
$('#to-red').click(function(){
    //cambio de atributo href 
tema.attr("href" , "css/red.css")

})
$('#to-gray').click(function(){
    //cambio de atributo href 
tema.attr("href" , "css/gray.css")

})
    
//Scroll hacia arriba de la web 

$('.subir').click(function (e) {
    //hacemos uso de animate() sobre los 
    //elementos hrml y body de la pagina 

    e.preventDefault();
 
    //para que se implemente la funcion sin 
    //redirigir a ninguna parte  

    $('html,body').animate({
        scrollTop: 10   //sube hacia lo mas alto de la pagina 
    }, 1500) ; 

    return false ;

})

//login falso 
//seleccionamos y capturamos el evento submit
$("#logging form").submit(function () {
    
    //recogemos datos de los inputs y guardamos 
    var nombre = $("#nombre").val();

    localStorage.setItem("Nombre" , nombre) ; 

})

//recuperamos el valor guardado 

var nombre = localStorage.getItem("Nombre");

 

if ((nombre != null) && (nombre!="undefined")){

    var about_parrafo= $("#about p") ; 

about_parrafo.html("<br><strong> Bienvenido, "+ nombre + "</strong>");

about_parrafo.append("<br>") ; 

about_parrafo.append("<a href='#' id='logout'>Cerrar sesion</a>") ; 

$("#logging form").hide()
$("#logging h4").hide()

//evento cerrar sesion 
$('#logout').click(function(){

    //limpiamos el LS 

localStorage.clear()

    // actualizamos la pantalla 
location.reload() ; 

})

}


//creacion del acordeon 

if (window.location.href.indexOf('about') > -1 ){

$("#acordeon").accordion(); 



}
//creacion del reloj

if (window.location.href.indexOf('reloj') > -1 ){

    setInterval(function(){
    var reloj =moment().format("hh:mm:ss");
    $('#reloj').html(reloj)
    },1000)
    
    };

//Validacion del formulario 

if (window.location.href.indexOf('contact') > -1 ){
   
 $(" form input[name ='date']").datepicker();
   
   
   
    $('#form_contact').validate({
        rules :{
            email : {
                required : true, //para validar campo vacio
                email    : true  //para validar formato email
            },
            name : {
                required : true,
                minlength : 3, //para validar campo con minimo 3 caracteres
                maxlength : 20  //para validar campo con maximo 9 caracteres
            },
            surname : {
                required : true,
                minlength : 3, //para validar campo con minimo 3 caracteres
                maxlength : 20  //para validar campo con maximo 9 caracteres
            },
            years : {
                required : true,
                number : true   //para validar campo solo numeros
            },
            sex : {
                required :true,
            },
            date: {                // fecha de nacimiento 
                required: true,
                date: true

                  }
        },
        messages : {
            email : {
                
                email    : "Debe ingresar un email valido"
            },
            name : {
                
                minlength : "EL nombre debe tener un minimo de 3 caracteres",
                maxlength : "EL nombre debe tener un maximo de 20 caracteres"
            },
            surname : {
                
                minlength : "EL nombre debe tener un minimo de 3 caracteres",
                maxlength : "EL nombre debe tener un maximo de 20 caracteres"
            },
            date :{
                 date  : "La fecha ingresada no es correcta "
            },
        },
 

     })   // cierra validate 
    
     $('#form_contact').validate({

        lang:'es',
        errrorMessagePosition: 'top',
        scrollToTopOnError: true 



     })


    
       } // cierra if 
    
    
    }) // cierra document  


