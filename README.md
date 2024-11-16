# **Human_Body - PWA Educativa para Aprender las Partes del Cuerpo Humano**

**Human_Body** es una **aplicación web progresiva (PWA)** diseñada para enseñar y poner a prueba el conocimiento sobre las partes del cuerpo humano de una manera divertida e interactiva. En esta aplicación, los usuarios deben arrastrar y soltar palabras (nombres de partes del cuerpo) en las ubicaciones correctas en una imagen del cuerpo humano.

Si el usuario coloca correctamente una palabra, recibe una felicitación; si no, la palabra vuelve a su lugar. La aplicación también lleva un contador de tiempo para medir cuánto tardas en completar el desafío, y al final te muestra el tiempo total que has invertido en resolver el ejercicio.

Además, esta PWA se conecta a un **backend en Flask** que simula una API que maneja la base de datos y registra el tiempo de interacción.

## **Características principales**

- **Arrastrar y soltar**: Interactúa con la imagen del cuerpo humano arrastrando los nombres de las partes del cuerpo hacia las ubicaciones correctas.
- **Contador de tiempo**: Registra el tiempo que tomas en completar el ejercicio y lo muestra al final.
- **API en Flask**: Conecta con un backend simulado para gestionar el tiempo del usuario y almacenar las interacciones.
- **Feedback interactivo**: Te felicita cuando colocas una palabra correctamente y te devuelve la palabra a su lugar si no es correcta.
- **Instalación como PWA**: Puedes instalar la aplicación en tu dispositivo móvil o de escritorio como una aplicación nativa.

## **Cómo funciona**

1. **Arrastra y suelta**: Aparecen palabras con los nombres de las partes del cuerpo humano, y debes arrastrarlas a las ubicaciones correctas en la imagen del cuerpo humano.
2. **Felicitaciones**: Si colocas una palabra correctamente, el sistema te felicita.
3. **Tiempo de interacción**: El sistema mantiene un contador de tiempo, que te muestra al final para saber cuánto tardaste en completar el desafío.
4. **Flask API**: La aplicación se conecta a un backend desarrollado con **Flask** para simular la interacción con una base de datos, registrando los tiempos de los usuarios y otras métricas.

---

## **Tecnologías utilizadas**

- **PWA (Progressive Web App)**: La aplicación puede ser instalada como una app nativa en dispositivos móviles y de escritorio.
- **Flask**: Un micro-framework para Python que simula una API y maneja la lógica de backend.
- **HTML5 / CSS3 / JavaScript**: La estructura básica de la interfaz de usuario y la funcionalidad interactiva.
- **Web Storage API**: Para guardar el progreso del usuario y otras configuraciones locales.
- **Drag and Drop API**: Para permitir la funcionalidad de arrastrar y soltar en la interfaz.

---

## **Instrucciones de instalación**

### **1. Clonar el repositorio:**

Para comenzar con el proyecto, clona este repositorio a tu máquina local:

```bash
git clone https://github.com/tu-usuario/human_body.git
cd human_body
