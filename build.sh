
printf "Initializing project configuration.\n"

rendererFilesLocation=./phosyRenderer/src/
lodepngFilesLocation=./phosyRenderer/lib/lodepng/
sedArg=$(echo $rendererFilesLocation | sed 's/\//\\\//g')
rendererFiles=$(ls $rendererFilesLocation | grep "**.cc" | sed "s/^/$sedArg/")
sedArg=$(echo $lodepngFilesLocation | sed 's/\//\\\//g')
lodepngFiles=$(ls $lodepngFilesLocation | grep "**.cpp" | sed "s/^/$sedArg/")
unset sedArg    
sourceFiles="$lodepngFiles $rendererFiles"


echo ${sourceFiles}