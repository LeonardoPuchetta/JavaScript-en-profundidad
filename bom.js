'use strict'

//BOM : browser object mode 


// para ver el tamano de la ventana en el navegador 


function getBom () {

console.log(window.innerHeight); // altura 

console.log(window.innerWidth)  ; // ancho 
//para ver la url actual 

console.log(window.location)  ; 
}

getBom() ; 

function getBom2 () {

    console.log(window.screen.width); // altura 
    
    console.log(window.screen.height)  ; // ancho 
    
    }
    
    getBom2() ; 


function redirect(direccion){

    window.location.href = direccion ; 

}
 
 //redirect("https://myaccount.google.com/signinoptions/recovery-options-collection?utm_source=Web&utm_medium=Web&utm_campaign=interstitial&oev=lytf%3D7%26wvtx%3D2%26trs%3Dli%26stel%3D1&hl=es-419&service=mail&continue=https://accounts.google.com/ServiceLogin?continue%3Dhttps%253A%252F%252Fmail.google.com%252Fmail%252F%26service%3Dmail%26hl%3Des-419%26authuser%3D0%26passive%3Dtrue%26sarp%3D1%26aodrpl%3D1%26checkedDomains%3Dyoutube%26checkConnection%3Dyoutube%253A1971%253A1%26pstMsg%3D1%26osid%3D1%26ss%3D1%26ltmpl%3Ddefault%26rm%3Dfalse&rapt=AEjHL4OQWRjN927jbA-RJz0CXHxhsh5MkVLJLnv7JuGTZMuSGRVSLNf2bk19TkBu78LWgdh9MV-ZoS5MGaIHzrGFje1ma_LMRQ&pli=1");


 function nuevaVentana(direccion){

    window.open(direccion , " " , "width = 400 ", "height = 200") ;

}

//nuevaVentana("https://www.montevideo.com.uy/index.html") ; 

