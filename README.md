# Portafolio Web Personal — Laboratorio 4

Página web personal desarrollada con **HTML5** y **CSS3** puro, sin frameworks ni librerías externas.  
Proyecto correspondiente al Laboratorio 4 del curso de Desarrollo Web.

---

## Estructura de carpetas

```
laboratorio4/
├── index.html          → Página principal (hero + habilidades)
├── README.md
├── css/
│   └── estilos.css     → Hoja de estilos única para todo el sitio
├── img/                → Carpeta para imágenes (vacía por ahora)
└── pages/
    ├── sobre-mi.html   → Información personal, formación y tabla de datos
    ├── proyectos.html  → Grilla de 4 proyectos destacados
    ├── contacto.html   → Formulario con método GET
    └── resultado.html  → Página de confirmación de envío
```

---

## Características implementadas

- HTML5 semántico: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- CSS3 con tema oscuro estilo Catppuccin Mocha
- Layout responsivo con Flexbox y CSS Grid (`auto-fit / minmax`)
- Header sticky con navegación horizontal y clase `.activo`
- Sección hero con gradiente diagonal
- Grilla de tarjetas con efecto hover (`translateY`)
- Tabla de datos con header coloreado y hover en filas
- Formulario completo: text, email, tel, select, radio, textarea, checkbox
- Transferencia de datos entre páginas mediante método GET (visible en URL)
- Página de resultado con explicación técnica del método GET
- Diseño responsive para móvil (breakpoint 600 px)
- Sin JavaScript, sin Bootstrap, sin Tailwind, sin dependencias externas

---

## Paleta de colores — Catppuccin Mocha

| Variable       | Color     | Uso                        |
|----------------|-----------|----------------------------|
| `--fondo`      | `#1e1e2e` | Fondo general              |
| `--texto`      | `#cdd6f4` | Texto principal            |
| `--acento`     | `#89b4fa` | Azul — botones, links      |
| `--acento-sec` | `#f5c2e7` | Rosa — subtítulos, labels  |
| `--header-pie` | `#181825` | Header y footer            |
| `--tarjeta`    | `#313244` | Tarjetas y formulario      |
| `--exito`      | `#a6e3a1` | Verde — página de resultado|

---

## Cómo ver el proyecto localmente

1. Clonar o descargar la carpeta `laboratorio4/`
2. Abrir `index.html` en cualquier navegador moderno
3. No requiere servidor ni instalación adicional

---

## Subir a GitHub

```bash
# Dentro de la carpeta laboratorio4/
git init
git add .
git commit -m "feat: portafolio web — Laboratorio 4"
git remote add origin https://github.com/TU_USUARIO/laboratorio4.git
git branch -M main
git push -u origin main
```

---

## Publicar en GitHub Pages

1. En tu repositorio ve a **Settings → Pages**
2. En *Source* selecciona la rama `main` y la carpeta `/ (root)`
3. Clic en **Save** — GitHub generará la URL automáticamente:  
   `https://TU_USUARIO.github.io/laboratorio4/`

## Publicar en Netlify

1. Crea una cuenta en [netlify.com](https://netlify.com)
2. **Add new site → Import an existing project** y conecta tu repositorio de GitHub
3. En *Publish directory* escribe `.` (punto — raíz del proyecto)
4. Clic en **Deploy site**

## Publicar en Vercel

1. Crea una cuenta en [vercel.com](https://vercel.com)
2. **New Project → Import** tu repositorio de GitHub
3. Framework preset: **Other** (HTML estático)
4. Clic en **Deploy**

---

## Autor

**Sebastián**  
Medellín, Colombia  
Laboratorio 4 — Desarrollo Web · 2026
