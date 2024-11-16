// Registro del service-worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.js') // Asegúrate de que la ruta sea correcta
            .then((registration) => {
                console.log('Service Worker registrado con éxito:', registration);
            })
            .catch((error) => {
                console.error('Error al registrar el Service Worker:', error);
            });
    });
}

// Selección de elementos iniciales y destinos
const elementos = [
    { inicial: 'craneo', destino: 'destino-craneo' },
    { inicial: 'cabeza', destino: 'destino-cabeza' },
    { inicial: 'hombro', destino: 'destino-hombro' },
    { inicial: 'humero', destino: 'destino-humero' },
    { inicial: 'pecho', destino: 'destino-pecho' },
    { inicial: 'mano', destino: 'destino-mano' },
    { inicial: 'costilla', destino: 'destino-costilla' },
    { inicial: 'abdomen', destino: 'destino-abdomen' },
    { inicial: 'pelvis', destino: 'destino-pelvis' },
    { inicial: 'muslo', destino: 'destino-muslo' },
    { inicial: 'femur', destino: 'destino-femur' },
    { inicial: 'rodilla', destino: 'destino-rodilla' },
    { inicial: 'rotula', destino: 'destino-rotula' },
    { inicial: 'pie', destino: 'destino-pie' }
].map(({ inicial, destino }) => ({
    inicial: document.getElementById(inicial),
    destino: document.getElementById(destino)
}));

// Para el modal
const modal = document.getElementById('modal');
const test = document.getElementById('resolver-test');
// Redirecciones
document.addEventListener('DOMContentLoaded', function() {
    const botonRedireccionarDefiniciones = document.getElementById("ver-definiciones");
    const botonRedireccionarPracticas = document.getElementById("practicas");
    if (botonRedireccionarDefiniciones) {
        botonRedireccionarDefiniciones.addEventListener('click', function() {
            window.location.href = '../../src/pages/definiciones.html'; // Ruta según tu estructura
        });
    } else {
        console.error("Elemento no encontrado");
    }
    if (botonRedireccionarPracticas) {
        botonRedireccionarPracticas.addEventListener('click', function() {
            window.location.href = '../../src/pages/practica.html'; // Ajusta la ruta según tu estructura
        });
    } else {
        console.error("Elemento no encontrado");
    }
});

// Contador de respuestas correctas
let contador = 0;

// Función para restablecer colores y contenidos
function restablecerColores() {
    elementos.forEach(({ inicial, destino }) => {
        inicial.style.color = ''; // Restablece el color
        inicial.style.pointerEvents = ''; // Permitir arrastre
        destino.textContent = 'Arrastra aquí'; // Texto por defecto
    });
}

// Manejar el arrastre y la suelta
function manejarDrop(event, data, destino, inicial) {
    event.preventDefault(); // Prevenir comportamiento por defecto

    if (data === destino.id.split('-')[1]) {
        destino.textContent = destino.id.split('-')[1].charAt(0).toUpperCase() + destino.id.split('-')[1].slice(1);
        inicial.style.pointerEvents = 'none';
        inicial.style.color = 'gray';
        contador++;
        alert('¡Felicidades! La respuesta es correcta.');
        
        if (contador === elementos.length) { // Verifica si se completó
            contador = 0;
            completarActividad();
        }
    } else {
        alert("Respuesta incorrecta.");
    }
}

// Asignar eventos de arrastre y soltado a los elementos
elementos.forEach(({ inicial, destino }) => {
    inicial.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text/plain', event.target.id);
    });

    destino.addEventListener('dragover', (event) => {
        event.preventDefault(); // Necesario para permitir el drop
    });

    destino.addEventListener('drop', (event) => {
        const data = event.dataTransfer.getData('text/plain');
        manejarDrop(event, data, destino, inicial);
    });
});

// Función para cerrar el modal
test.onclick = function() {
    modal.style.display = 'none';
};

// ------------------API de tiempo ----------------------//
let db, inicio, fin, intervalo;
let tiempoTranscurrido = 0;

// Inicialización de la base de datos
const request = indexedDB.open('actividadDB', 1);

request.onupgradeneeded = (event) => {
    db = event.target.result;
    const objectStore = db.createObjectStore('tiempos', { keyPath: 'id', autoIncrement: true });
    objectStore.createIndex('duracion', 'duracion', { unique: false });
};

request.onsuccess = (event) => {
    db = event.target.result;
};

request.onerror = (event) => {
    console.error('Error al abrir la base de datos:', event.target.errorCode);
};

// Iniciar la actividad
function iniciarActividad() {
    inicio = Date.now();
    tiempoTranscurrido = 0;
    document.getElementById('tiempo').textContent = "Tiempo: 0 segundos";
    document.getElementById('tiemposGuardados').innerHTML = ''; // Resetear visualización
    intervalo = setInterval(actualizarContador, 1000);
    modal.style.display = 'none'; // Cerrar el modal
}

// Función para completar la actividad
function completarActividad() {
    fin = Date.now();
    clearInterval(intervalo); // Detener el contador
    const duracion = fin - inicio; // Tiempo en milisegundos
    guardarTiempo(duracion);
    restablecerColores(); // Restablecer colores y contenidos
    alert(`Actividad completada en ${duracion / 1000} segundos`);
}

// Actualizar contador de tiempo
function actualizarContador() {
    tiempoTranscurrido += 1; // Incrementa el tiempo transcurrido en segundos
    document.getElementById('tiempo').textContent = `Tiempo: ${tiempoTranscurrido} segundos`;
}

// Guardar tiempo en la base de datos
function guardarTiempo(duracion) {
    const transaction = db.transaction(['tiempos'], 'readwrite');
    const objectStore = transaction.objectStore('tiempos');
    const registro = { duracion: duracion };

    objectStore.add(registro).onsuccess = () => {
        console.log('Tiempo guardado:', duracion);
        mostrarTiempoReciente(duracion); // Mostrar solo el tiempo más reciente
    };
}

// Mostrar tiempo reciente
function mostrarTiempoReciente(duracion) {
    const tiemposDiv = document.getElementById('tiemposGuardados');
    tiemposDiv.innerHTML = `<h3>Tiempo transcurrido:</h3><p>Duración: ${duracion / 1000} segundos</p>`;
    tiemposDiv.innerHTML += `<button onclick="iniciarActividad()">Retomar test</button>`;
}

// Asignar el evento para iniciar la actividad
test.addEventListener('click', iniciarActividad);
