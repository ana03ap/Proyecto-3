// para la api de rick morty
// const url = "https://rickandmortyapi.com/api/character";
const main = document.getElementById("root");
const search = document.getElementById('container-buscador')
const arrowPpl= document.getElementById('arrow-down')
const element1 = document.getElementsByClassName('element')[0]





// para cambiar el modo de la pagina 
const root = document.documentElement;
const btn = document.getElementById("mode")
let sw= false
// crear variables de los botones para las cards
const btnBefore= document.getElementById("beforeBtn")
const btnAfter= document.getElementById("afterBtn")

// para numero de pagi
let numPagina=1
// const buscar = getElementById('buscar')





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
// cuando se de click a el boton mode se cambia a modo oscuro 
// btn.addEventListener("click",()=>{
//     root.style.setProperty('--bg-body', '#000')
//     root.style.setProperty('--color-text', '#fff')
// })


function getinfo(numberPage){
    const url = `https://rickandmortyapi.com/api/character?page=${numberPage}`;// para que 
    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        const Info = data.results;
        console.log(Info);
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
    })
    .catch((err) => {
        console.log(err);
    });

}

getinfo(numPagina);

btnBefore.addEventListener('click',()=>{
    numPagina--;
    getinfo(numPagina);
    search.scrollIntoView({behavior: 'smooth'})
})

btnAfter.addEventListener('click',()=>{
    numPagina++;
    getinfo(numPagina);
    search.scrollIntoView({behavior: 'smooth'})
})


arrowPpl.addEventListener('click',()=>{
    element1.scrollIntoView({behavior: 'smooth'})
})
