# **Human_Body - PWA Educativa para Aprender las Partes del Cuerpo Humano**

**Human_Body** es una **aplicación web progresiva (PWA)** diseñada para enseñar las partes del cuerpo humano de manera divertida e interactiva. Los usuarios deben arrastrar y soltar palabras (nombres de partes del cuerpo) a las ubicaciones correctas en una imagen del cuerpo humano. Si la palabra está correctamente ubicada, se felicita al usuario; si no, la palabra vuelve a su lugar.

### **Características principales**

- **Arrastrar y soltar**: Los usuarios arrastran palabras con los nombres de las partes del cuerpo humano y las colocan en la ubicación correcta de la imagen.
- **Contador de tiempo**: La aplicación mide el tiempo que tardas en completar el ejercicio y lo muestra al final.
- **Login con Flask**: El sistema de **login** está gestionado con un backend en Flask, donde los usuarios pueden autenticarse para guardar su progreso (falta el guardado de tiempo).
- **Almacenamiento local con IndexedDB**: El tiempo del usuario y otras interacciones se guardan localmente usando **IndexedDB**, lo que permite mantener el progreso incluso cuando el usuario está offline.
- **Instalación como PWA**: Puedes instalar la aplicación como una app nativa en tu dispositivo móvil o de escritorio.
- **Feedback interactivo**: El sistema felicita al usuario cuando coloca una palabra correctamente y vuelve a colocarla si es incorrecta.

---

## **Cómo funciona**

1. **Login con Flask**: Los usuarios se autentican usando Flask para gestionar el acceso a la aplicación.
2. **Arrastra y suelta**: Las palabras de las partes del cuerpo deben arrastrarse a las ubicaciones correctas en la imagen. Si la respuesta es correcta, el sistema felicita al usuario.
3. **Contador de tiempo**: La aplicación mide el tiempo que toma cada usuario para completar el juego y lo guarda localmente en el navegador.
4. **Almacenamiento en IndexedDB**: Los datos del tiempo y progreso se guardan en **IndexedDB**, lo que significa que la información persistirá incluso cuando el usuario cierre el navegador o se quede offline.
5. **API de Flask**: Flask maneja la autenticación de los usuarios, permitiendo a los jugadores crear una cuenta y registrar su tiempo de juego a través de una conexión backend.

---

## **Tecnologías utilizadas**

- **PWA (Progressive Web App)**: La aplicación puede ser instalada como una app nativa en dispositivos móviles y de escritorio.
- **Flask**: Framework de Python utilizado para gestionar el login de usuarios y la autenticación.
- **IndexedDB**: Base de datos local del navegador para almacenar el tiempo y el progreso del usuario.
- **HTML5 / CSS3 / JavaScript**: La estructura básica de la interfaz de usuario y la lógica interactiva.
- **Drag and Drop API**: Permite la funcionalidad de arrastrar y soltar las palabras en la interfaz.

---

## **Instrucciones de instalación**

### **1. Clonar el repositorio:**

Primero, clona el repositorio a tu máquina local:

```bash
git clone https://github.com/tu-usuario/human_body.git
cd human_body
