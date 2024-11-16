// Función para cargar y mostrar los conceptos
async function loadConcepts() {
    try {
        const response = await fetch('../../src/components/json/conceptos.json');
        const concepts = await response.json();

        const container = document.getElementById('concepts-container');
        container.innerHTML = ''; // Limpiar el contenido anterior

        concepts.forEach(concept => {
            const conceptDiv = document.createElement('div');
            conceptDiv.classList.add('concepto');
            conceptDiv.style.width = 'fir-content';
            conceptDiv.style.width = '20em';
            conceptDiv.style.height = '20em';
            conceptDiv.style.display = 'flex';
            conceptDiv.style.flexDirection = 'column';
            conceptDiv.style.flexWrap = 'wrap';
            conceptDiv.style.borderRadius = '1em';

            conceptDiv.style.borderStyle = '';

            const titleElement = document.createElement('h3');
            titleElement.textContent = concept.title;

            const imageElement = document.createElement('img'); // Crear el elemento de imagen
            imageElement.src = concept.image; // Asignar la fuente de la imagen
            imageElement.alt = concept.title; // Agregar un texto alternativo
            imageElement.style.width = '100px';
            imageElement.style.height = '100px';
            imageElement.classList.add('concept-image'); // Clase para estilos (opcional)

            const definitionElement = document.createElement('p');
            definitionElement.textContent = concept.definition;

            // Agregar los elementos en el nuevo orden
            conceptDiv.appendChild(titleElement); // Título primero
            conceptDiv.appendChild(imageElement); // Luego la imagen
            conceptDiv.appendChild(definitionElement); // Finalmente la definición
            container.appendChild(conceptDiv);
        });
    } catch (error) {
        console.error('Error loading concepts:', error);
    }
}

// Llamar a la función para cargar los conceptos cuando el documento esté listo
document.addEventListener('DOMContentLoaded', loadConcepts);
