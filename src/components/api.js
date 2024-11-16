/* 
En este archivo vamos a haer solicitudes al backend 
para llevarlo a nuestro Fronend. Es decir manejarlo como un componente
*/
const API_URL = 'http://127.0.0.1:5000'; // Cambia la URL según tu API

export const getData = async (endpoint) => {
    const response = await fetch(`${API_URL}/${endpoint}`);
    if (!response.ok) {
        throw new Error('Se obtuvo un error al obtener los datos');
    }
    return response.json();
};

export const sendData = async (endpoint, data) => {
    const response = await fetch(`${API_URL}/${endpoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    if (!response.ok) {
        throw new Error('Error al enviar datos');
    }
    return response.json();
};

