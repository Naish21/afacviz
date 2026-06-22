# Guía de puesta en marcha del AFAC

Esta guía explica **qué se ha cambiado** en la web y, sobre todo, los pasos que **tú tienes que dar en tu panel de Netlify / GitHub** para que el inicio de sesión funcione (esos botones solo puedes pulsarlos tú, con tu cuenta).

---

## 1. Qué se ha cambiado

- **Aspecto de AMPA/AFAC**: nombre, menú, pie de página y textos están en español y orientados a una asociación de familias.
- **Secciones renombradas** (por dentro siguen llamándose igual para no romper nada):
  - *Noticias* · *Actividades* (extraescolares) · *Eventos* · *Servicios* · *Documentos*
- **Contenido de ejemplo realista**: noticias, actividades, eventos, servicios y documentos típicos de un AMPA, listos para que los edites.
- **Panel de administración en español** (`/admin`) con campos adaptados (título, resumen, imagen, enlace, fecha…).
- El sitio **compila correctamente** con todos estos cambios.

> Todos los textos llevan la coletilla *"Contenido de ejemplo"*. Edítalos y bórrala cuando pongas los datos reales de vuestro colegio.

---

## 2. Subir estos cambios a tu repositorio

Yo no puedo escribir directamente en tu GitHub, así que tienes dos opciones:

**Opción rápida (recomendada):** descomprime el ZIP que acompaña a esta guía y sustituye los archivos de tu proyecto por estos (o súbelos a GitHub desde la web: *Add file → Upload files*). Luego haz *commit*. Netlify reconstruirá la web sola.

**Opción con Git (si te manejas en consola):**
```bash
git add .
git commit -m "Adaptar la web al AFAC y preparar el panel de edición"
git push
```

---

## 3. Activar el inicio de sesión para editar la web

El panel de edición (Decap CMS, lo verás en `https://afacviz.com/admin/`) necesita un sistema de **autenticación**. Aquí está el punto importante: **Netlify Identity y Git Gateway están deprecados**, y en sitios nuevos como el tuyo es probable que Netlify ya no te deje activarlos. Tienes dos caminos.

### Camino A — Netlify Identity (solo si tu panel aún lo ofrece)

1. En Netlify: **Site configuration → Identity → Enable Identity**.
2. Dentro de Identity: **Services → Git Gateway → Enable Git Gateway**.
3. En **Identity → Registration**, pon *Invite only* (para que solo entren las personas de la junta).
4. Pulsa **Invite users** e invita los correos de quienes vayan a editar.
5. Cada persona recibe un email, crea su contraseña y ya puede entrar en `/admin/`.
6. La configuración por defecto del archivo `public/admin/config.yml` ya está lista para esto (usa `git-gateway`). No tienes que tocar nada.

Si en el paso 1 **no aparece la opción Identity**, ve al Camino B.

### Camino B — DecapBridge (recomendado, gratuito y sin que la junta necesite cuenta de GitHub)

DecapBridge es el sustituto que usa hoy la comunidad de Decap CMS para reemplazar a Netlify Identity.

1. Entra en **https://decapbridge.com** y regístrate (es gratis).
2. **Conecta tu repositorio** `Naish21/afacviz` siguiendo sus instrucciones.
3. DecapBridge te dará dos valores: un `identity_url` (con tu *site-id*) y un `gateway_url`.
4. Abre `public/admin/config.yml`:
   - **Comenta** el bloque de la *OPCIÓN A* (pon `#` delante de esas líneas de `backend:`).
   - **Descomenta** el bloque de la *OPCIÓN B* y pega ahí tus valores.
5. Guarda, haz *commit* y *push*. Netlify reconstruye.
6. Invita a la junta desde el panel de DecapBridge. Entrarán por `/admin/` con email y contraseña, **sin necesidad de cuenta de GitHub**.

> En `config.yml` he dejado ese bloque ya escrito y comentado, solo tienes que rellenar `TU-SITE-ID`.

### Detalle técnico opcional

Si tu dominio pasa por Cloudflare, el login puede dar un error 405; en ese caso hay que redirigir `/admin` al subdominio `*.netlify.app`. Si usas el dominio `.netlify.app` directamente, no te afecta.

---

## 4. Cómo editar la web una vez dentro

1. Entra en `https://afacviz.com/admin/` e inicia sesión.
2. Verás las secciones: **Páginas, Noticias, Actividades, Eventos, Servicios, Documentos**.
3. Pulsa una entrada para editarla, o **"New …"** para crear una nueva.
4. Rellena los campos (título, imagen, texto…) y pulsa **Publish**.
5. Al publicar, el cambio se guarda en GitHub y Netlify **reconstruye la web automáticamente** en 1-2 minutos. No tienes que tocar el repositorio a mano.

La casilla **"Destacada en portada"** controla si una entrada aparece en la página de inicio.

---

## 5. Personalizar nombre, colores y datos

- **Nombre del sitio y autor**: archivo `config.js`.
- **Nombre que aparece en el menú** (ahora "AFAC"): `components/Header.tsx`.
- **Pie de página**: `components/Footer.tsx`.
- **Colores y tipografía**: `tailwind.config.js` y `styles/index.css`.
- **Iconos de cada sección**: `components/Icon.tsx`.
- **Imágenes de ejemplo**: están en `public/media/`. Súbelas nuevas desde el propio panel al editar cada actividad/evento.

---

## 6. Resumen de lo que solo puedes hacer tú

- Activar Identity **o** registrarte en DecapBridge (Sección 3).
- Invitar a las personas de la junta que vayan a editar.
- Hacer *commit/push* de estos archivos (o subirlos por la web de GitHub).

Cuando termines el paso 3, el inicio de sesión quedará operativo y podréis actualizar la web sin volver a tocar el repositorio.
