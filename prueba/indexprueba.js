const url = "https://rickandmortyapi.com/api/character";
const main = document.getElementById("root");

// const imagen = document.getElementById("imagen");

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
