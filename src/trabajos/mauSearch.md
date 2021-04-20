---
author: Maubg
title: MauSearch
excerpt: Este es un buscador que hize yo en el que se parece a el de google
date: 2019-03-10 23:00:00 +0000
bg: "linear-gradient(150deg,#7714fd 0%,#ff25b2 100%)"
---

https://github.com/maubg-debug/mauSearch/

https://buscador.maucode.com/

<p align="center">
  <a href="https://buscador.maucode.com"><img src="https://raw.githubusercontent.com/maubg-debug/mauSearch/main/static/icons/icon.png" width="256"></a>
</p>

<div align="center">
  <h1>MauSearch</h1>

---

MauSearch es un buscador moderno hecho con tecnologia moderna como `react` con un UI moderno con extensiones y es totalmente customatizable.

</div>

# Tabla de contenidos:
- [Caracteristicas](#Caracteristicas)
- [Capturas de pantalla](#Capturas-de-pantalla)
- [Descargar](#Descargas)
- [Produccion](#Produccion)
  - [Ejecutar](#Ejecutar)
- [Documentacion](#documentacion)
- [Licencia](#Licencia)


# Caracteristicas

- **Chromium sin servicios de Google y bajo uso de recursos**: dado que mauSearch usa Electron bajo el capó, que se basa solo en varios y los componentes más importantes de Chromium, no está repleto de servicios de seguimiento de Google redundantes y otros.
- **Interfaz de usuario rápida y fluida**: las animaciones son realmente fluidas y sus tiempos están perfectamente equilibrados.
- **Página de nueva pestaña altamente personalizable** - ¡Personalice casi todos los aspectos de la página de nueva pestaña!
- **IU del navegador personalizable**: elija si mauSearch debe tener una IU compacta o normal.
- **Grupos de pestañas**: agrupa pestañas fácilmente, por lo que es difícil perderse.
- **Pestañas desplazables**
- **Soporte parcial para extensiones de Chrome**: instale algunas extensiones directamente desde Chrome Web Store \ *  (WIP)
- **Escudo Mausearch** - Navegue por la web sin anuncios y no permita que los sitios web lo rastreen. Gracias al mauSearch Shield impulsado por [Cliqz](https://github.com/cliqz-oss/adblocker), los sitios web pueden cargar hasta 8 veces más rápido.

## Otras caracteristicas basicas

- Ventana emergente de descargas con los elementos descargados actualmente (la página WebUI del administrador de descargas es WIP)
- Gerente de historia
- Barra y administrador de marcadores
- Ajustes
- Encontrar en la página
- Tema oscuro y claro
- Omnibox con algoritmo de autocompletar similar a Chromium
- Sistema de pestañas de última generación

# Capturas de pantalla

> Se hara una captura en video...


# Descargas
- [Descargalo en la web](https://buscador.maucode.com)
- [Descargalo en los releases](https://github.com/maubg-debug/mauSearch/releases)


# Produccion

## Ejecutar

Antes de ejecutar mauSearch, asegúrese de tener **los últimos** [`Node.js`](https://nodejs.org/en/) y [` Yarn`](https://classic.yarnpkg.com/en/docs/install/#windows-stable) instalado en su máquina.

### Windows

Asegúrese de tener instaladas las herramientas de compilación. Puede instalarlos ejecutando este comando como **administrador**:

```bash
$ npm i -g herramientas de construcción de windows
```

```bash
$ yarn # Instalar las dependencias necesarias.
$ yarn rebuild # Reconstruye módulos nativos usando encabezados Electron.
$ yarn dev # Ejecutar mauSearch en modo de desarrollo
```

### Más comandos

```bash
$ yarn compile-win32 # Paquete mauSearch para Windows
$ yarn compile-linux # Paquete mauSearch para Linux
$ yarn compile-darwin # Paquete mauSearch para macOS
$ yarn lint # Corre linter
$ yarn lint-fix # Ejecuta linter y aplica correcciones automáticamente
```

Se pueden encontrar más comandos en [`package.json`](https://github.com/maubg-debug/mauSearch/blob/main/package.json).

# Documentación

Las guías y la referencia de la API se encuentran en el directorio [`docs`](https://github.com/maubg-debug/mauSearch/tree/main/docs).

# Licencia

Este proyecto tiene licencia bajo [GPL-3](https://github.com/maubg-debug/mauSearch/blob/main/LICENSE.md)
