---
title: .mauenv
excerpt: Un .env personalizado que hize porque me aburri
date: 2019-05-06T22:00:00.000+00:00
author: Maubot
bg: "linear-gradient(150deg, #ed64a6 0%,#a73d14 100%)"
---

https://github.com/maubg-debug/mauenv

# Como funciona (Y sintaxis)

* `.mauenv` tiene que estar en la ruta padre del directorio en el que tu eligas
    ```python
    from src.mauenv import Mauenv

    env = Mauenv("D:\\work\\mauenv") # Ruta
    ```

    Entonces las carpetas serian asi

    ```
    work/
      | .mauenv
      |- carpeta/
      | main.py
    ```

* Luego la sintaxis iria asi

    ```
    COSA: cosas_xd
    COSA_2      : awd
    // Comentario (no pueden ir en la misma linea)
    NUM: { random[2, 10] }
    VAR: { $NUM } _mas_ { random[1, 10] }
    ```

* Funciones

    ```python
    from src.mauenv import Mauenv

    env = Mauenv("D:\\work\\mauenv") # Ruta

    data = env.get("COSA")
    print(data) # Recojes el valor de "COSA"

    env.write("ALGO", "XD") # Escribes algo caracteres validos ([a-z], [A-Z], _)

    env.read() # Mirar todo el archivo .env
    ```
