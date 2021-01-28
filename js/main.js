let ubicacionPrincipal = window.pageYOffset;

window.addEventListener("scroll", function(){
    if(ubicacionPrincipal<=125){
        this.document.getElementsByTagName("div")[2].style.position = "static"
        this.document.getElementsByTagName("div")[1].style.height = "0px"
    }else{
        if(ubicacionPrincipal>=230){
            this.document.getElementsByTagName("div")[2].style.position = "fixed"
            this.document.getElementsByTagName("div")[1].style.height = "90px"
        }
    }

    let desplazamientoActual = window.pageYOffset;
    if(ubicacionPrincipal>desplazamientoActual){
        this.document.getElementsByTagName("div")[2].style.top = "0px"
    }else{
        document.getElementsByTagName("div")[2].style.top = "-100px"
    }

    ubicacionPrincipal = desplazamientoActual;
})