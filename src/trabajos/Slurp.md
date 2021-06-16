---
author: Maubg
title: Slurp browser
excerpt: La privacidad es un derecho, no un privilegio
date: 2019-03-10 23:00:00 +0000
bg: "linear-gradient(150deg,#7714fd 0%,#ff25b2 100%)"
---

https://github.com/slurp-browser/

https://slurp.maucode.com/



<p align="center">
  <a href="https://slurp.maucode.com"><img src="https://avatars.githubusercontent.com/u/83232058" width="200"></a>
  <h1 align="center">Slurp Browser</h1>
  
  <p align="center">La privacidad es un derecho, no un privilegio.</p>
</p>

# Tabla de contenidos
- [Caracteristicas](#Caracteristicas)
- [Descargar](#Descargas)
- [Produccion](#Produccion)
  - [Ejecutar](#Ejecutar)
- [Licencia](#Licencia)

# Caracteristicas

- **Chromium sin servicios de Google y bajo uso de recursos**: dado que Slurp se basa solo en varios y los componentes más importantes de Chromium, no está repleto de servicios de seguimiento de Google redundantes y otros.
- **Interfaz de usuario rápida y fluida**: las animaciones son realmente fluidas y sus tiempos están perfectamente equilibrados.
- **Página de nueva pestaña altamente personalizable** - ¡Personalice casi todos los aspectos de la página de nueva pestaña!
- **IU del navegador personalizable**: elija si Slurp debe tener una IU compacta o normal, temas customatizables y compatibles con la chrome web store.
- **Grupos de pestañas**: agrupa pestañas fácilmente, por lo que es difícil perderse.
- **Soporte para extensiones de Chrome**: instale algunas extensiones directamente desde Chrome Web Store y Edge web store
- **Escudo Slurp** - Navegue por la web sin anuncios y no permita que los sitios web lo rastreen. Gracias al *Escudo Slurp* impulsado por [Cliqz](https://github.com/cliqz-oss/adblocker), los sitios web pueden cargar hasta 8 veces más rápido.
- Modo pausa.
- Modo lector (Solo en algunas paginas)
- Creador de codigos QR

## Otras caracteristicas basicas

- Ventana emergente de descargas con los elementos descargados actualmente (la página WebUI del administrador de descargas es WIP)
- Gerente de historia
- Barra y administrador de marcadores
- Ajustes
- Encontrar en la página
- Tema oscuro y claro
- Omnibox con algoritmo de autocompletar similar a Chromium
- Sistema de pestañas de última generación
- Compatibilidad con todas las extensiones de chrome
- Importar: Marcadores, Cookies, Historial, Contraseñas, Datos para autocompletar desde cualquier navegador web.

# Descargas
- [Descargalo en la web](https://slurp.maucode.com)
- [Descargalo en los releases](https://github.com/slurp-browser/browser-base/releases/latest)

# Produccion

## Descargar / Ejecutar
### Linux

```sh
# Clonar el depot_tools de chromium para compilar Slurp
$ git clone https://chromium.googlesource.com/chromium/tools/depot_tools.git

# Remplazamos la ruta en la session para poder utilizar comandos como 
$ export PATH="$PATH:/path/to/depot_tools"

# Clonamos Slurp :)
$ git clone https://github.com/slurp-browser/browser-base

# Entramos en el directorio "src"
$ cd browser-base/src

# Instalamos dependencias requeridas para Slurp/Chromium
$ ./build/install-build-deps.sh

# Preparamos la carpeta de salida
$ gn gen out/Default

# Compilamos Slurp
# NOTA: Esto puede tardar horas, lo recomendable es dejarlo durante la noche.
$ autoninja -C out/Default chrome

# Lo ejecutamos. Este seria el ejecutable en el que puedes meter argumentos, ...
$ out/Default/chrome
```

# Licencia

Este proyecto tiene licencia bajo [GPL-3](https://github.com/maubg-debug/mauSearch/blob/main/LICENSE.md)
