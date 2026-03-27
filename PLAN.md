# TotemRobot — Plan de la Landing Page

## Estado: Aprobado — Listo para empezar

---

## 1. Sobre el proyecto

| Campo | Detalle |
|---|---|
| **Nombre** | TotemRobot |
| **Tipo** | Landing page (single page) → evolucionar a web completa |
| **Repo Git** | Conectado |
| **Objetivo** | Aprender a hacer webs desde 0, con tecnología rentable, desplegar a producción gradualmente |

---

## 2. ¿Qué es TotemRobot?

- **Producto físico**: Robot que purifica el ambiente, da olor y sirve como escaparate de marketing (pancartas + expositor)
- **Servicio**: Alquiler de estos robots a empresas
- **Marca registrada**: TotemRobot es marca registrada

---

## 3. Cliente objetivo

- **Modelo**: B2B exclusivamente
- **Perfil 1**: Marcas que quieran publicitarse en el robot (soporte publicitario)
- **Perfil 2**: Empresas / centros comerciales que quieran un robot en sus instalaciones
- **Perfil 3**: Agencias de publicidad y marketing

---

## 4. Objetivos de la landing

- Informar sobre el producto y servicio
- Captar leads vía formulario de contacto (almacena datos + envía email)
- Contacto directo por WhatsApp (botón flotante permanente)
- Contacto por teléfono

---

## 5. Secciones de la web

| # | Sección | Descripción |
|---|---|---|
| 1 | **Hero** | Modelo 3D del robot que rota al hacer scroll (estilo Apple). Texto de impacto + CTA |
| 2 | **En Acción** | Proyectos reales llevados a cabo con fotos y vídeos |
| 3 | **Beneficios** | Qué hace único a este robot — propuestas de valor |
| 4 | **Cómo funciona** | Lo que se ofrece + los diferentes tipos de robot |
| 5 | **Contacto** | Formulario de contacto (almacena datos + envía email) |
| 6 | **WhatsApp** | Botón flotante visible siempre (sticky) |
| 7 | **Footer** | Legal, RRSS |

---

## 6. Identidad visual y tono

### Paleta de colores

| Color | Hex | Uso |
|---|---|---|
| Primario | `#F6CF5B` (dorado/amarillo) | CTAs, acentos, highlights |
| Secundario | `#D8D8D8` (gris claro) | Bordes, fondos secundarios, textos ligeros |
| Fondo principal | `#FFFFFF` / `#FAFAFA` | Limpieza total estilo Apple |
| Texto principal | `#1D1D1F` (negro Apple) | Títulos y cuerpo de texto |
| Fondo contraste | `#000000` / gris muy oscuro | Hero, sección CTA final — ritmo visual |

### Estilo visual

- **Referente**: Apple.com — amplios espacios en blanco, tipografía grande y limpia, animaciones suaves
- **Minimalismo**: Mucho "aire", sin saturar de elementos. Cada sección respira
- **Tipografía**: Sans-serif moderna (Inter), peso ligero para cuerpo, bold para títulos
- **Imágenes**: Grandes, alta calidad, con espacio alrededor. Fotos reales del robot en acción
- **Modelo 3D**: Protagonista absoluto del hero, rotación vinculada al scroll
- **Animaciones**: Fade-in suaves al scroll, elementos que aparecen progresivamente. Nada brusco
- **Ritmo**: Alternar secciones blancas y oscuras para crear contraste visual

### Tono de comunicación

- **Profesional pero no corporativo** — lenguaje directo, frases cortas y contundentes
- **Confianza y expertise**: "Somos expertos en captar, en marketing y en publicidad"
- **Moderno/tech**: transmitir innovación, tecnología punta, futuro
- **Aspiracional**: el cliente debe pensar "quiero esto en mi negocio"
- **Sin jerga técnica**: hablar de resultados y beneficios, no de especificaciones del robot
- **Ejemplos de tono**:
  - *"Captamos miradas. Generamos impacto."*
  - *"El futuro de la publicidad ya está aquí."*
  - *"Purifica. Aromatiza. Impacta."*

---

## 7. Assets disponibles

| Asset | Estado |
|---|---|
| Modelo 3D del robot | Disponible (para probar) |
| Fotos del robot y eventos | Disponibles |
| Vídeos del robot y eventos | Disponibles |
| Textos / copys | Gran parte ya escrita |
| Logo | PNG (convertir a SVG para web) |

---

## 8. Stack tecnológico

| Pieza | Tecnología | Por qué |
|---|---|---|
| Framework | **Next.js 14** (React) | Estándar de React, deploy nativo en Vercel, excelente SEO |
| Lenguaje | **TypeScript** | Más seguro que JS, el usuario ya lo conoce |
| Estilos | **Tailwind CSS** | Rápido, limpio, perfecto para estilo Apple |
| 3D Hero | **React Three Fiber** + @react-three/drei | Modelo 3D con rotación al scroll |
| Animaciones | **Framer Motion** | Animaciones suaves al scroll estilo Apple |
| Email | **Resend** | Gratis hasta 3.000 emails/mes, integración nativa Next.js |
| Base de datos | **Supabase** (o Vercel Postgres) | Gratis, para almacenar leads del formulario |
| Deploy | **Vercel** | Gratis, deploy automático al hacer git push |
| Dominio | **IONOS → Vercel** | Apuntar DNS, SSL automático |

---

## 9. Fases de implementación

### FASE 0: Setup del entorno
- [ ] Instalar Node.js (vía nvm)
- [ ] Crear proyecto Next.js con TypeScript + Tailwind CSS
- [ ] Configurar estructura de carpetas
- [ ] Conectar repo Git + Vercel para deploys automáticos
- [ ] Primer deploy "Hello World" a producción

### FASE 1: Estructura base + Navegación
- [ ] Crear layout principal (navbar sticky transparente + footer)
- [ ] Implementar navegación smooth scroll entre secciones
- [ ] Añadir logo SVG (convertir desde PNG)
- [ ] Responsive design mobile-first desde el principio
- [ ] Botón flotante de WhatsApp (siempre visible)

### FASE 2: Hero con modelo 3D
- [ ] Integrar React Three Fiber
- [ ] Cargar modelo 3D del robot
- [ ] Implementar rotación del modelo vinculada al scroll (estilo Apple)
- [ ] Textos hero + CTA principal
- [ ] Optimizar rendimiento 3D (lazy loading, fallback para móviles lentos)

### FASE 3: Secciones de contenido
- [ ] Sección "En Acción" — grid/carousel de proyectos reales con fotos
- [ ] Sección "Beneficios" — cards con las propuestas de valor únicas
- [ ] Sección "Cómo funciona" — tipos de robot + proceso de alquiler

### FASE 4: Formulario + Backend
- [ ] Crear formulario de contacto (validación client-side)
- [ ] Crear API Route en Next.js para procesar el formulario
- [ ] Configurar Resend para envío de emails
- [ ] Configurar base de datos Supabase para almacenar leads
- [ ] Email de confirmación al usuario + notificación al equipo

### FASE 5: Pulido y producción
- [ ] SEO (meta tags, Open Graph, sitemap, robots.txt)
- [ ] Optimización de imágenes con next/image
- [ ] Animaciones Framer Motion en todas las secciones
- [ ] Testing cross-browser y responsive
- [ ] Configurar dominio IONOS → Vercel (DNS + SSL)
- [ ] Analytics (Vercel Analytics o Google Analytics)

---

## 10. Criterios de verificación

- [ ] Lighthouse score > 90 en Performance, SEO, Accessibility
- [ ] Formulario envía email y almacena datos correctamente
- [ ] Modelo 3D funciona en Chrome, Safari, Firefox (desktop + mobile)
- [ ] Responsive correcto en móvil, tablet, desktop
- [ ] Dominio con HTTPS funcionando

---

## 11. Decisiones clave

| Decisión | Razón |
|---|---|
| Landing (single page) ahora → multipágina después | Next.js permite añadir rutas sin reescribir nada |
| React vía Next.js (no React puro) | Mejor SEO, API routes integradas, deploy Vercel nativo |
| Tailwind CSS sobre CSS puro | Aprendizaje más rápido, resultado más consistente |
| Supabase para datos | Gratis, fácil, escalable si crece |
| Vercel para hosting | Gratis, deploy automático con git push, SSL incluido |

---

## 12. Información técnica del usuario

| Campo | Detalle |
|---|---|
| Lenguajes que conoce | Python, HTML, CSS, JavaScript, TypeScript |
| Frameworks usados | Ninguno (quiere aprender React) |
| Node.js | Pendiente verificar instalación |
| Registrador dominio | IONOS |
| Hosting actual | IONOS (a migrar a Vercel) |
