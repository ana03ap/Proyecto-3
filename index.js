// para la api de rick morty
const url = "https://rickandmortyapi.com/api/character";
const main = document.getElementById("root");

// para cambiar el modo de la pagina 
const root = document.documentElement;
const btn = document.getElementById("mode")
let sw= false

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

fetch(url)
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
    const Info = data.results;
    console.log(Info);

    Info.map((element) => {
    const nameToShow =
        element.name.length > 12
        ? element.name.slice(0, 11) + ".."
          : element.name; // si es mayor de 12 escribir 10 y concatenarle ".."
      // if (element.name.length > 12){
      //     nameToShow= element.name.slice(0, 11) + ".."
      // }else{
      //     nameToShow= element.name
      // }

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
