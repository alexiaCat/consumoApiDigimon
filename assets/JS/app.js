

// Obtener referencia al elemento donde se mostrarán los digimon
const digimonListElement = document.getElementById('digimon-list');

// todos los digimon
var urlAll = 'https://digimon-api.vercel.app/api/digimon';

//digimon por tipo champion
const urlChampion = 'https://digimon-api.vercel.app/api/digimon/level/champion'




// Hacer una solicitud HTTP a la API
fetch('https://digimon-api.vercel.app/api/digimon')
  .then(response => response.json()) // Parsear la respuesta como JSON
  .then(data => {
    // Recorrer los datos y mostrar cada digimon en la página
    data.forEach(digimon => {
      // Crear un elemento de columna de Bootstrap
      const columnElement = document.createElement('div');
      columnElement.className = 'col-sm-2 mb-4'
      // Crear un elemento de tarjeta de Bootstrap para el digimon
      const cardElement = document.createElement('div');
      cardElement.className = 'card bg-dark border-dark';
      cardElement.style.cursor = 'pointer';
      cardElement.onclick = () => showDigimon(digimon);


      // Agregar la imagen del digimon a la tarjeta
      const imageElement = document.createElement('img');
      imageElement.src = digimon.img;
      imageElement.className = 'card-img-top';
      cardElement.appendChild(imageElement);

      // Agregar el nombre del digimon a la tarjeta
      const nameElement = document.createElement('h1');
      nameElement.innerText = digimon.name;
      nameElement.className = 'text-border mt-4 nameDigimon';
      cardElement.appendChild(nameElement);


      //Agregar el level a la tarjeta
      const lvlElement = document.createElement('p');
      lvlElement.innerText = digimon.level;
      lvlElement.className = 'text-light lvlDigimon'; 
      cardElement.appendChild(lvlElement);

      // Agregar la tarjeta a la columna
      columnElement.appendChild(cardElement);

      // Agregar la columna a la lista de digimon
      digimonListElement.appendChild(columnElement);
    });
  });

// Función para mostrar un digimon en pantalla completa
function showDigimon(digimon) {
  // Seleccionamos el modal a través de su ID
  const modal = $('#exampleModalCenter');

  // Modificamos el contenido del modal con los datos del digimon
  modal.find('.textOneCard').text(digimon.name);
  modal.find('.modal-img').html(`<img src="${digimon.img}" alt="${digimon.name}">`);
  modal.find('.textModal').text(digimon.level);

  // Abrimos el modal
  modal.modal('show');
}

// Para ir al top de mi página
var btnTop = document.getElementById("btn-top");

btnTop.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});