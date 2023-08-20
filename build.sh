#!/bin/bash
printf "Initializing project configuration.\n"

rendererFilesLocation=./phosyRenderer/src/
lodepngFilesLocation=./phosyRenderer/lib/lodepng/
sedArg=$(echo $rendererFilesLocation | sed 's/\//\\\//g')
rendererFiles=$(ls $rendererFilesLocation | grep "**.cc" | sed "s/^/$sedArg/")
sedArg=$(echo $lodepngFilesLocation | sed 's/\//\\\//g')
lodepngFiles=$(ls $lodepngFilesLocation | grep "**.cpp" | sed "s/^/$sedArg/")
unset sedArg  

sourceFiles="$lodepngFiles $rendererFiles"

if [ ! -d "./build" ]; then
    mkdir ./build
    if [ ! -d "./build/renderer" ]; then
        mkdir ./build/renderer
    fi
fi

EMCC=$(whereis emcc | awk '{print $2}')

if test -x $EMCC; then
    $EMCC -std=c++20 -lembind -s ENVIRONMENT='web' -s WASM=1 -s MODULARIZE=1 -s EXPORTED_RUNTIME_METHODS=FS -s  EXPORT_ES6=1 ${sourceFiles} -o ./src/lib/renderer.js
else
    printf "emcc doesn't exists or you don't have permissions.\n"
fi