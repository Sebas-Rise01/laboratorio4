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

## Autor

**Sebastián**  
Medellín, Colombia  
Laboratorio 4 — Desarrollo Web · 2026
