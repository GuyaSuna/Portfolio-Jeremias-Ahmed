# Chófer Pro - Sitio Web

Este es un sitio web profesional para servicios de chófer construido con Next.js y desplegado en GitHub Pages.

## 🚀 Características

- ✨ Diseño moderno y profesional
- 🎨 Tailwind CSS para estilos
- 📱 Completamente responsivo
- 🌙 Modo oscuro por defecto
- 🚀 Optimizado para GitHub Pages
- ⚡ Generación estática para máximo rendimiento

## 🛠️ Tecnologías

- **Framework:** Next.js 14
- **Estilos:** Tailwind CSS
- **Lenguaje:** JavaScript/JSX
- **Deployment:** GitHub Pages
- **CI/CD:** GitHub Actions

## 🚀 Desarrollo Local

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Ejecutar en desarrollo:**
   ```bash
   npm run dev
   ```

3. **Construir para producción:**
   ```bash
   npm run build
   ```

## 📦 Deployment

El sitio se despliega automáticamente en GitHub Pages cuando se hace push a la rama `main`.

### Configuración inicial en GitHub:

1. Ve a tu repositorio en GitHub
2. Navega a **Settings** > **Pages**
3. En **Source**, selecciona **GitHub Actions**
4. El workflow se ejecutará automáticamente en cada push

## 🌐 URL del sitio

Una vez desplegado, tu sitio estará disponible en:
```
https://[tu-usuario].github.io/[nombre-del-repositorio]/
```

## 📁 Estructura del Proyecto

```
├── app/
│   ├── globals.css
│   ├── layout.js
│   └── page.jsx
├── public/
│   └── .nojekyll
├── .github/
│   └── workflows/
│       └── deploy.yml
├── next.config.js
├── tailwind.config.js
└── package.json
```

## 🎨 Personalización

- **Colores:** Modifica los colores en `tailwind.config.js`
- **Contenido:** Edita el contenido en `app/page.jsx`
- **Estilos globales:** Modifica `app/globals.css`

## 📝 Licencia

Este proyecto está bajo la Licencia MIT.# Force rebuild for CV deployment
