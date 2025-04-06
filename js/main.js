//Filtro destinos

const destinoElement = document.querySelectorAll('.destino__card');

const filtrarContinente = (continente)=> {
for(destino of destinoElement) {
    if(destino.classList.contains(continente)) {
        destino.style = "display:flex;"
    } 
    else {
            destino.style.display = "none";
    }
}
}

const filtroTodos = document.querySelectorAll('.filtro__item');

const filtroAmerica = document.querySelector('.filtro__item.america');
const filtroEuropa = document.querySelector('.filtro__item.europa');
const filtroAfrica = document.querySelector('.filtro__item.africa');
const filtroAsia = document.querySelector('.filtro__item.asia');
const filtroAustralia = document.querySelector('.filtro__item.australia');


const filtrarBoton = (filtro,cont)=> {
    filtro.addEventListener("click", ()=>{
                if (filtro.classList.contains("filtro__item--active")) {
            filtro.classList.remove("filtro__item--active");
            for(let destno of destinoElement) {
                destno.style.display = "flex";
            }
        }
        else {
        for(let i of filtroTodos) {
            i.classList.remove('filtro__item--active');
        }
        filtro.classList.toggle('filtro__item--active');
        if(filtro.classList.contains('filtro__item--active')){
            filtrarContinente(cont);
        }
        }
        
    })
}

filtrarBoton(filtroAmerica,"america");
filtrarBoton(filtroEuropa,"europa");
filtrarBoton(filtroAfrica,"africa");
filtrarBoton(filtroAsia,"asia");
filtrarBoton(filtroAustralia,"australia");

console.log(filtroAmerica);


//Placeholder Error

const imagen = document.querySelectorAll('img');
    
for(const img of imagen) {
    let imgLink = img.getAttribute('src');
    if(imgLink === null || imgLink == '') {
        img.src = 'recursos/imgnotfound.png' ;
    }
}






document.addEventListener('keyup', e => {
    if(e.target.matches('.buscador__input')){
        let searchTerm = e.target.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        
        // Primero mostramos todos los elementos
        document.querySelectorAll('.destino__card').forEach(lugar => {
            lugar.style.display = "flex";
        });
        
        // Luego filtramos
        document.querySelectorAll('.destino__card').forEach(lugar => {
            const titulo = lugar.querySelector('.destino__titulo').textContent
                          .toLowerCase()
                          .normalize("NFD")
                          .replace(/[\u0300-\u036f]/g, "");
            
            if(!titulo.includes(searchTerm)) {
                lugar.style.display = "none";
            }
        });
        
        // Desactivar cualquier filtro activo
        document.querySelectorAll('.filtro__item--active').forEach(boton => {
            boton.classList.remove('filtro__item--active');
        });
    }
});