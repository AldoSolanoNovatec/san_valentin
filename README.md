# Para Fati ♡ - PWA Romántica

Una Progressive Web App minimalista y romántica para hacer una propuesta especial de noviazgo. 🌸💕

## 🌷 Características

- ✨ PWA completamente funcional e instalable
- 📱 100% responsive (móvil y desktop)
- 💖 Paleta de colores pastel romántica inspirada en flores
- 🎨 Animaciones suaves y delicadas
- 🌸 Pétalos cayendo en el fondo
- 💝 Efectos de confeti al aceptar
- 📵 Funciona completamente offline
- 🎯 Sin dependencias externas (solo fonts de Google)

## 🚀 Cómo subir a GitHub Pages

### Paso 1: Crear repositorio en GitHub

1. Ve a [GitHub](https://github.com) e inicia sesión
2. Clic en el botón verde **"New"** (nuevo repositorio)
3. Nombre del repositorio: `para-fati` (o el que prefieras)
4. Marca como **Public**
5. NO marques "Add a README file"
6. Clic en **"Create repository"**

### Paso 2: Subir los archivos

Descarga todos estos archivos a una carpeta en tu computadora:
- `index.html`
- `styles.css`
- `script.js`
- `manifest.json`
- `sw.js`
- `icon.svg`

Luego tienes dos opciones:

#### Opción A: Usando la interfaz web de GitHub (más fácil)

1. En tu nuevo repositorio, clic en **"uploading an existing file"**
2. Arrastra todos los archivos a la vez
3. Scroll hacia abajo y clic en **"Commit changes"**

#### Opción B: Usando Git en terminal (si sabes usar Git)

```bash
git init
git add .
git commit -m "Primera versión de la PWA para Fati"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/para-fati.git
git push -u origin main
```

### Paso 3: Activar GitHub Pages

1. En tu repositorio, ve a **Settings** (configuración)
2. En el menú lateral izquierdo, clic en **Pages**
3. En "Source", selecciona **"Deploy from a branch"**
4. En "Branch", selecciona **main** y carpeta **/ (root)**
5. Clic en **Save**
6. ¡Espera 1-2 minutos!

### Paso 4: Ver tu PWA

Tu PWA estará disponible en:
```
https://TU-USUARIO.github.io/para-fati/
```

¡Comparte este link con Fati! 💕

## 📱 Cómo instalar la PWA en el celular

### En Android (Chrome):

1. Abre el link en Chrome
2. Aparecerá un banner que dice "Agregar a pantalla de inicio"
3. O toca los 3 puntitos → "Agregar a pantalla de inicio"
4. ¡Listo! Ahora aparece como una app normal

### En iPhone (Safari):

1. Abre el link en Safari
2. Toca el botón de compartir (cuadrado con flecha hacia arriba)
3. Scroll y selecciona "Agregar a pantalla de inicio"
4. Toca "Agregar"
5. ¡Ahora está en tu pantalla de inicio!

## 🎨 Crear íconos PNG (opcional pero recomendado)

El `icon.svg` funciona bien, pero para mejor compatibilidad, crea versiones PNG:

### Usando un convertidor online:

1. Ve a [CloudConvert](https://cloudconvert.com/svg-to-png)
2. Sube el archivo `icon.svg`
3. Crea dos versiones:
   - `icon-192.png` (192x192 píxeles)
   - `icon-512.png` (512x512 píxeles)
4. Sube estos archivos a tu repositorio

## 🛠️ Personalización

Puedes personalizar fácilmente:

### Cambiar colores:
Edita las variables CSS en `styles.css` (líneas 1-20)

### Cambiar textos:
Edita directamente en `index.html`

### Cambiar nombre de la app:
Edita `manifest.json` línea 2

## 💡 Tips

- Comparte el link en modo incógnito primero para probar
- La app funciona offline después de la primera carga
- Se ve mejor en modo portrait (vertical) en móviles
- Los efectos de vibración solo funcionan en dispositivos compatibles

## 🐛 Solución de problemas

**No aparece el banner de instalación:**
- Algunos navegadores lo ocultan, usa el menú del navegador → "Agregar a pantalla de inicio"

**Los estilos no se cargan:**
- Asegúrate de que todos los archivos estén en la misma carpeta
- Limpia la caché del navegador (Ctrl+Shift+R o Cmd+Shift+R)

**El service worker no funciona:**
- GitHub Pages puede tardar unos minutos en actualizar
- Verifica en las DevTools → Application → Service Workers

## ❤️ ¡Que tengas mucha suerte!

Espero que Fati diga que sí y que esta PWA haga su día especial. 🌸✨

---

*Creado con mucho amor y código limpio* 💕
