# Prompt paso a paso — Rediseño Mecánica Loja (para tu IA de código)

Pega esto en tu asistente de código (Claude Code, Cursor, etc.) **dentro del repo del proyecto**, un paso a la vez. No pegues todo junto: revisa el resultado de cada paso antes de seguir.

---

## PASO 0 — Contexto (pega esto primero, una sola vez)

```
Estoy rediseñando visualmente el frontend de reparaciondieselloja.com (Next.js + React + TypeScript).
El dominio está muy bien posicionado en SEO, así que la regla #1 es:

NO TOCAR bajo ninguna circunstancia:
- Las URLs/rutas existentes (/motores-diesel, /camionetas, /vehiculos-pesados, /agendamiento)
- Los <title>, meta description, meta keywords, canonical, og:*, twitter:* de cada página
- La jerarquía de encabezados: debe seguir habiendo exactamente un <h1> por página, y los <h2>/<h3>
  deben mantener el mismo texto y el mismo orden relativo que tienen hoy (puedo cambiar el diseño
  visual de esos textos, pero no el texto ni el nivel de heading)
- Los textos de alt de las imágenes
- Los enlaces internos existentes (mismo href, mismo anchor text o muy similar)
- Cualquier structured data / JSON-LD si existe en el proyecto (revisa antes de tocar layout.tsx o
  cualquier archivo con "schema" o "ld+json")
- El sitemap.xml y robots.txt si existen

Lo que SÍ quiero cambiar es 100% visual/estructural a nivel de componentes y CSS:
- Nueva dirección de diseño: estética "taller industrial" — fondo grafito oscuro (#1A1C1F) para header/hero/footer,
  acento ámbar de señalización (#F2A900) usado con moderación, secciones claras en gris cálido (#FAFAF8),
  tipografía Barlow Condensed para títulos + Inter para texto de cuerpo.
- Quiero eliminar el look de "plantilla genérica de IA": nada de cards idénticas con sombra suave y bordes
  redondeados iguales en todo, nada de gradientes decorativos sin propósito.
- Los servicios se muestran como una lista tipo "hoja de trabajo" (fila con rule, no card con sombra).
- Los 3 pasos de pago (Entrada 33% / Avance 33% / Contraentrega 34%) se muestran numerados como una
  secuencia real (orden de trabajo / ticket), porque sí son un proceso secuencial.
- Testimonios como fichas con borde lateral de color, no cards genéricas.

Antes de escribir código: enumera todos los archivos de componentes/páginas que vas a tocar y qué
metadata/headings/links tiene cada uno HOY, para que yo confirme que nada de eso se pierde.
```

---

## PASO 1 — Auditoría antes de tocar nada

```
Antes de cambiar cualquier estilo, haz un inventario:
1. Lista cada page.tsx/layout.tsx de la home y de /motores-diesel, /camionetas, /vehiculos-pesados,
   /agendamiento, con su <title>, meta description y el texto exacto de su H1.
2. Lista todos los <h2> y <h3> de la home en el orden en que aparecen actualmente.
3. Lista todos los internal links (<Link href=...>) presentes en la home, con su anchor text actual.
4. Dime si existe algún archivo con JSON-LD / structured data (busca "application/ld+json", "schema.org").

No cambies nada todavía, solo dame este inventario en una tabla.
```
> Guarda esta tabla — es tu checklist para comparar "antes/después" cuando termine.

---

## PASO 2 — Design tokens (sin tocar contenido)

```
Crea/actualiza el archivo de tokens de diseño (globals.css o tailwind.config si usamos Tailwind) con
esta paleta y tipografía, sin tocar ningún componente todavía:

Colores:
--charcoal: #1A1C1F   (fondo header, hero, footer)
--charcoal-2: #24272B (fondo secciones oscuras secundarias)
--amber: #F2A900       (acento — CTAs, números clave, líneas de énfasis. Úsalo con moderación)
--amber-dim: #B87F00   (texto/detalles sobre fondo claro)
--offwhite: #F1F1EF
--paper: #FAFAF8       (fondo de secciones claras)
--ink: #15171A         (texto principal)
--ash: #6B7178         (texto secundario)
--line: #D9D9D4        (bordes/rules)

Tipografía:
- Títulos (h1, h2, h3): Barlow Condensed, weight 700
- Cuerpo: Inter, weight 400/500/600

Importa las fuentes vía next/font (no <link> en el head, para no afectar performance/CLS).
```

---

## PASO 3 — Rediseñar componente por componente

Repite este bloque por cada sección (Header, Hero, Servicios, Precios/Pasos de pago, Testimonios, Footer), pegando UNA a la vez:

```
Rediseña visualmente el componente [NOMBRE, ej: Hero.tsx] con la nueva dirección de diseño:
- [pega la descripción de esa sección específica del mockup que te compartí, o adjunta la captura]
- El texto exacto del H1/H2/H3 y el href/anchor de los links debe quedar IDÉNTICO al inventario del Paso 1.
- No agregues ni quites encabezados. Puedes reestructurar el HTML alrededor de ellos, pero el heading
  en sí (tag y texto) permanece igual.
- Usa los tokens definidos en el Paso 2. Responsive mobile-first. Respeta prefers-reduced-motion.
- Al terminar, dime explícitamente: "el H1/H2/H3 de esta sección sigue siendo: [texto]" para que yo confirme.
```

---

## PASO 4 — Verificación final SEO (obligatorio, no te lo saltes)

```
Compara el estado actual del proyecto contra el inventario del Paso 1:
1. ¿Sigue habiendo exactamente un <h1> por página, con el mismo texto?
2. ¿Los <h2>/<h3> tienen el mismo texto y aparecen en el mismo orden relativo?
3. ¿Todos los <title> y meta description quedaron igual?
4. ¿Todos los internal links (href) siguen apuntando a las mismas rutas?
5. ¿Los alt de imágenes quedaron igual o mejoraron (nunca peor/vacíos)?
6. Corre `next build` y confirma que no hay errores ni rutas rotas.
7. Si el proyecto usa Lighthouse/PageSpeed localmente, corre una medición antes/después para confirmar
   que el rediseño no afectó performance (LCP, CLS) — las fuentes nuevas y cualquier imagen nueva son
   los sospechosos más comunes de regresión.

Dame un resumen "antes vs. después" de estos 7 puntos.
```

---

### Notas rápidas
- Haz esto en una rama nueva (`git checkout -b rediseno-visual`) y despliega a un preview/staging antes de mergear a producción — nunca sobre el dominio en vivo directo.
- Si tu hosting es Vercel, cada PR genera automáticamente una URL de preview: úsala para revisar visualmente antes de aprobar.
- El chatbot "MecaniBot" y el calendario de turnos que ya tienes son funcionalidad, no solo estilo — en el Paso 3 dedícales su propio prompt aparte, describiendo cómo quieres que se vean dentro de la nueva paleta, sin tocar su lógica.
