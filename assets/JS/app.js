

// Obtener referencia al elemento donde se mostrarán los digimon
const digimonListElement = document.getElementById('digimon-list');

// Hacer una solicitud HTTP a la API
fetch('https://digimon-api.vercel.app/api/digimon')
  .then(response => response.json()) // Parsear la respuesta como JSON
  .then(data => {
    // Recorrer los datos y mostrar cada digimon en la página
    data.forEach(digimon => {
      // Crear un elemento de columna de Bootstrap
      const columnElement = document.createElement('div');
      columnElement.className = 'col-sm-4 mb-4'
      // Crear un elemento de tarjeta de Bootstrap para el digimon
      const cardElement = document.createElement('div');
      cardElement.className = 'card card-custom border-dark';
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
      nameElement.className = 'nameDigimon';
      cardElement.appendChild(nameElement);


      //Agregar el level a la tarjeta del
      const lvlElement = document.createElement('p');
      lvlElement.innerText = digimon.level;
      lvlElement.className = 'lvlDigimon'; 
      cardElement.appendChild(lvlElement);

      // Agregar la tarjeta a la columna
      columnElement.appendChild(cardElement);

      // Agregar la columna a la lista de digimon
      digimonListElement.appendChild(columnElement);
    });
  });

// Función para mostrar un digimon en pantalla completa
function showDigimon(digimon) {
  // Ocultar la lista de digimon
  digimonListElement.style.display = 'none';

  // Crear un elemento de imagen para el digimon
  const imageElement = document.createElement('img');
  imageElement.src = digimon.img;
  imageElement.style.width = '50%';

  // Crear un botón para volver a la lista de digimon
  const backButton = document.createElement('button');
  backButton.innerText = 'Volver';
  backButton.className = 'btn btn-primary';
  backButton.onclick = () => {
    // Mostrar la lista de digimon de nuevo
    digimonListElement.style.display = 'flex';
    // Eliminar la imagen y el botón
    imageElement.remove();
    backButton.remove();
  };

  // Agregar la imagen y el botón a la página
  document.body.appendChild(imageElement);
  document.body.appendChild(backButton);
}

const searchButton = document.querySelector('#searchButton');

searchButton.addEventListener('click', searchDigimon);



//Función para buscar un digimon
function searchDigimon() {
  const searchInput = document.querySelector('#searchDig');

  // Filter digimon based on search input
  searchInput.addEventListener('input', () => {
    const searchValue = searchInput.value.toLowerCase();
 
    const filteredDigimon = data.find(digimon => digimon.name.toLowerCase().includes(searchValue));
    showDigimon(filteredDigimon);
  });


}

