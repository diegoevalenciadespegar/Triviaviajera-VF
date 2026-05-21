# Trivia Viajera ✈️ — Viajes Falabella

> Juego de trivia estilo "¿Quién quiere ser millonario?" sobre destinos y turismo.  
> Pensado para ser jugado desde celular escaneando un QR en ferias presenciales.

## Archivos del proyecto

```
index.html       ← App completa (HTML + CSS + JS inline)
questions.json   ← Banco de 200 preguntas (no modificar)
logo.png         ← Logo Viajes Falabella
README.md        ← Este archivo
```

---

## 🚀 Deploy en GitHub + Vercel (5 minutos)

### Paso 1 — Crear repositorio en GitHub

1. Ve a [github.com/new](https://github.com/new)
2. Nombre del repo: `trivia-viajera` (o el que prefieras)
3. Déjalo **público**
4. Haz clic en **"Create repository"**

### Paso 2 — Subir los archivos

**Opción A — Desde la web de GitHub (sin terminal):**

1. En tu nuevo repo, haz clic en **"Add file" → "Upload files"**
2. Arrastra los 3 archivos: `index.html`, `questions.json`, `logo.png`
3. Haz clic en **"Commit changes"**

**Opción B — Desde terminal:**

```bash
git clone https://github.com/TU_USUARIO/trivia-viajera.git
cd trivia-viajera
cp /ruta/a/los/archivos/* .
git add .
git commit -m "feat: add Trivia Viajera app"
git push
```

### Paso 3 — Conectar con Vercel (1 clic)

1. Ve a [vercel.com](https://vercel.com) e inicia sesión con tu cuenta de GitHub
2. Haz clic en **"Add New... → Project"**
3. Busca y selecciona tu repo `trivia-viajera`
4. Vercel detecta que es un sitio estático automáticamente
5. Haz clic en **"Deploy"** — ¡listo en ~30 segundos!

### Paso 4 — Obtener el link público

Vercel te dará una URL del tipo:
```
https://trivia-viajera.vercel.app
```

También puedes configurar un dominio personalizado en **Settings → Domains**.

---

## 📱 Generar el código QR

1. Ve a [qr-code-generator.com](https://www.qr-code-generator.com)
2. Pega tu URL de Vercel
3. Personaliza con el logo de Viajes Falabella (verde `#64ae28`)
4. Descarga en formato PNG o SVG para imprimir

**Recomendación de tamaño para impresión:** mínimo 5×5 cm para que sea escaneable desde 30cm de distancia.

---

## 🎮 Cómo funciona el juego

- **15 preguntas** seleccionadas aleatoriamente de un banco de 200
- Dificultad progresiva: 5 fáciles → 6 medias → 4 difíciles
- **3 comodines** por partida:
  - 🔀 **50/50** — elimina 2 opciones incorrectas
  - ⏭️ **Saltar** — salta la pregunta sin penalización
  - 💡 **Pista** — muestra una pista contextual
- Modo casual: sin game over, siempre se completan las 15 preguntas
- Al final se muestra el puntaje y un resumen completo

---

## 🛠 Personalización

### Agregar más preguntas
Edita `questions.json` siguiendo el formato:
```json
{
  "id": 201,
  "question": "¿Cuál es la capital de Australia?",
  "options": ["Sydney", "Melbourne", "Canberra", "Brisbane"],
  "correct": 2,
  "category": "Oceanía",
  "difficulty": 1,
  "image": "https://images.unsplash.com/photo-XXXXX?w=600&q=80",
  "image_credit": "Unsplash"
}
```

Difficulty: `1` = fácil, `2` = media, `3` = difícil.

### Cambiar colores
En `index.html`, busca las variables CSS en `:root`:
```css
--green: #64ae28;
--green-dark: #4e8a1e;
```

---

## 📋 Requisitos técnicos
- Navegador mobile moderno (Chrome, Safari iOS 14+, Firefox)
- Conexión a internet para cargar imágenes de Unsplash y la fuente Poppins
- No requiere instalación ni PWA

---

*Desarrollado para Travel Fest 2025 — Viajes Falabella*
