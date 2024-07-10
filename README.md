# 🎬 AluraFlix

![Logo de AluraFlix](/src/assets/AluraFlux%20Logo%20Final%20912x426.png)

## 🌟 Descripción General

AluraFlix es una aplicación web dinámica basada en React que trae el mundo de los videos educativos a tus manos. Diseñada pensando tanto en la funcionalidad como en la estética, AluraFlix permite a los usuarios curar, categorizar y gestionar su contenido educativo favorito en una interfaz elegante y fácil de usar.

## 🚀 Características Principales

- **📹 Gestión de Videos**: Añade, edita y elimina videos fácilmente
- **🏷️ Organización por Categorías**: Organiza los videos en categorías personalizables
- **🖼️ Interfaz Intuitiva**: Diseño amigable y responsivo
- **🔍 Acceso Rápido**: Navega por los videos por categoría sin esfuerzo
- **🎨 Personalización**: Personaliza las categorías con colores a tu gusto
- **💾 Almacenamiento Local**: Almacenamiento persistente de datos usando el localStorage del navegador
- **🔄 Datos de Demostración**: Genera datos aleatorios para poblar la aplicación y probarla

## 🛠️ Stack Tecnológico

- **React**: Biblioteca de JavaScript para construir interfaces de usuario
- **React Router**: Para una navegación fluida dentro de la aplicación
- **Context API**: Para una gestión eficiente del estado a través de los componentes
- **CSS3**: Para el diseño y la adaptabilidad a diferentes dispositivos
- **API de Local Storage**: Para la persistencia de datos en el lado del cliente
- **Vite**: Como herramienta de construcción y servidor de desarrollo

## 🏗️ Estructura del Proyecto

```
aluraflix/
│
├── public/
│   └── vite.svg
│
├── src/
│   ├── assets/
│   │   └── AluraFlux Logo Final 912x426.png
│   │
│   ├── components/
│   │   ├── Banner.jsx
│   │   ├── CategoryForm.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── VideoCard.jsx
│   │   ├── VideoForm.jsx
│   │   └── VideoList.jsx
│   │
│   ├── contexts/
│   │   └── VideoContext.jsx
│   │
│   ├── hooks/
│   │   └── useVideos.js
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── NewCategory.jsx
│   │   └── NewVideo.jsx
│   │
│   ├── styles/
│   │   ├── components/
│   │   │   ├── Banner.css
│   │   │   ├── CategoryForm.css
│   │   │   ├── Footer.css
│   │   │   ├── Header.css
│   │   │   ├── VideoCard.css
│   │   │   ├── VideoForm.css
│   │   │   └── VideoList.css
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.css
│   │   │   ├── NewCategory.css
│   │   │   └── NewVideo.css
│   │   │
│   │   └── global.css
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- Node.js (versión 14.0.0 o superior)
- npm (normalmente viene con Node.js)

## 🚀 Instalación y Configuración

1. Clona el repositorio:
   ```bash
   git clone xxx
   cd aluraflix
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Abre tu navegador y visita `http://localhost:5173` para ver la aplicación en funcionamiento.

## 🎮 Uso

1. **Página de Inicio**: Muestra todos los videos organizados por categorías.
2. **Agregar Video**: Haz clic en "Registrar Nuevo Video" en el header para añadir un nuevo video.
3. **Editar/Eliminar Video**: En cada tarjeta de video, encontrarás opciones para editar o eliminar.
4. **Gestionar Categorías**: Accede a "Editar o Crear Categoría" para administrar las categorías existentes o crear nuevas.

## 🧪 Funcionalidades Especiales

- **Generación de Datos Aleatorios**: Utiliza el botón "Generar Información Aleatoria" para poblar la aplicación con datos de prueba.
- **Limpieza de Base de Datos**: El botón "Limpiar DB" elimina todos los datos almacenados localmente.

## 🖌️ Personalización

Siéntete libre de modificar los estilos en los archivos CSS dentro de la carpeta `src/styles` para adaptar la apariencia de la aplicación a tus preferencias.

## 🤝 Contribución

Las contribuciones son siempre bienvenidas. Si tienes alguna idea para mejorar la aplicación:

1. Haz un Fork del proyecto
2. Crea tu rama de característica (`git checkout -b feature/AmazingFeature`)
3. Haz commit de tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Haz Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request


---

⭐️ ¡Si te gusta este proyecto, no dudes en darle una estrella en GitHub! ⭐️
