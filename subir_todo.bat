@echo off
setlocal enabledelayedexpansion

:: Asegurarse de que estamos en la rama principal
git checkout main || git checkout master

:: Crear una nueva rama huérfana
git checkout --orphan temp_branch

:: Añadir todos los archivos excepto el propio batch
git add .
git reset HEAD subir_todo.bat

:: Hacer el commit inicial
git commit -m "Reinicio: Commit inicial"

:: Borrar la rama principal anterior
git branch -D main || git branch -D master

:: Renombrar la rama temporal a main
git branch -m main

:: Forzar el push al repositorio remoto
git push -f https://github.com/Moy1294/AluraFlix.git main

:: Limpiar y salir
echo Proceso completado. El repositorio ha sido reiniciado y actualizado.
pause
