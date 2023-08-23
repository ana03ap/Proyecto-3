// para la api de rick morty
// const url = "https://rickandmortyapi.com/api/character";
const main = document.getElementById("root");
const search = document.getElementById('container-buscador')
const arrowPpl= document.getElementById('arrow-down')
const element1 = document.getElementsByClassName('element')[0]
const obtenerNombres = [];// para guardar todos los nombres 


// para cambiar el modo de la pagina 
const root = document.documentElement;
const btn = document.getElementById("mode")
let sw= false

// crear variables de los botones para las cards
const btnBefore= document.getElementById("beforeBtn")
const btnAfter= document.getElementById("afterBtn")

// para numero de pagi
let numPagina=1
//para controlar los inputs del buscador
const buscar = document.getElementById('buscar')
const input = document.getElementById('input-a-buscar')
const busqueda  = input.value
getInfo(numPagina,busqueda)

// AQUI VOY A PONER EL BUSCADOR PERO DE LA FORMA EN LA QUE LA HICE KEYNER
buscar.addEventListener('click',()=>{// cuando se oprime el boton de buscar qué pasa?!
    const busqueda  = input.value
    console.log(busqueda)
    ompararInputArr(busqueda)
    // cuando obtiene lo que quiere, lo compara con el array de obtenerNombres que tiene toda la info

    getInfo(numPagina,busqueda)
})

function compararInputArr(busqueda){
    // se ejecuta esto que devuelve el array con toda la info
    obtenerNombre();// corre la primera vez para tener la info guardada
    const arrypag=[]

    

}



// FUNCION PARA CAMBIAR DE MODO OSCURO A MODO CLARO 
btn.addEventListener("click",()=>{
    if(sw){
        root.style.setProperty('--bg-body','#000');
        root.style.setProperty('--color-text','#fff');
        sw= false;
    }else{
        root.style.setProperty('--bg-body','#fff');
        root.style.setProperty('--color-text','#000');
        sw= true
    }
})


// function que obtiene la info de todos los nombres

function obtenerNombre(){
    // recibe array obtener nonbres que esta global
    for (let i = 1; i <= 42; i++) {// 42 porque tiene 42 paginas
        // entrar a la api 42 veces y meter todos los nombres en un array de array, para a la vez guardaar la pagina donde esta 
        // siendo la pagina la posicion del array principal 
        const url = `https://rickandmortyapi.com/api/character?page=${i}`;// para que 
        fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            // console.log(data);
            const Info = data.results;
            // agregar a obtenerNombres
            obtenerNombres.push(Info);// el espacio del array es el numero de la pagina, recordar que tiene que ser posición +1
        })
        .catch((err) => {
            console.log(err);
        });
        // more statements
    }
}



function getInfo(numberPage,busqueda){
    const url = `https://rickandmortyapi.com/api/character?page=${numberPage}`;// para que 
    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        // console.log(data);
        const Info = data.results;
        // console.log(Info);
        if(input.value!==''){
            showData(Info,busqueda)
        }else{
            showData(Info, busqueda='')
        }
    })
    .catch((err) => {
        console.log(err);
    });

}


const showData = (Info,busqueda)=>{
    if(busqueda){
        main.innerHTML =""
        const filtro = Info.filter(info=>info.name.toLowerCase().includes(busqueda.toLowerCase()))
        filtro.map(element=>{
            main.innerHTML += `
            <div class="cards">
                <div class="nombre_img">
                    <h1 class = "name">${element.name}</h1>
                    
                    <!-- <br> -->
                    <img class = "image"src="${element.image}" alt=${element.name}/>
                </div>
                <div class="cards_info">
                <p class="status">Status: ${element.status}</p>
                    <p class="species">specie: ${element.species}</p>
                    <p class="gender">gender: ${element.gender}</p>
                    
                </div>
                
            </div>
            `;

        });
    }else{
        main.innerHTML =""
        Info.map((element) => {
            const nameToShow =
                element.name.length > 12
                ? element.name.slice(0, 11) + ".."
                : element.name; // si es mayor de 12 escribir 10 y concatenarle ".."
            
            main.innerHTML += `
                <div class="cards">
                    <div class="nombre_img">
                        <h1 class = "name">${nameToShow}</h1>
                        
                        <!-- <br> -->
                        <img class = "image"src="${element.image}" alt=${element.name}/>
                    </div>
                    <div class="cards_info">
                    <p class="status">Status: ${element.status}</p>
                        <p class="species">specie: ${element.species}</p>
                        <p class="gender">gender: ${element.gender}</p>
                        
                    </div>
                    
                </div>
                `;
            });
    }
}


// getinfo(numPagina,busqueda);

btnBefore.addEventListener('click',()=>{
    numPagina--;
    getInfo(numPagina,busqueda);
    search.scrollIntoView({behavior: 'smooth'})
})

btnAfter.addEventListener('click',()=>{
    numPagina++;
    getInfo(numPagina,busqueda);
    search.scrollIntoView({behavior: 'smooth'})
})


arrowPpl.addEventListener('click',()=>{
    element1.scrollIntoView({behavior: 'smooth'})
})
