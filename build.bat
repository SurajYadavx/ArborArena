@echo off

call C:\Users\offls\emsdk\emsdk_env.bat

echo Building DS Dojo WASM...

emcc src/c/bridge.c -o src/wasm/ds_dojo.js -s EXPORTED_FUNCTIONS="[\"_ping\"]" -s EXPORTED_RUNTIME_METHODS="[\"ccall\",\"cwrap\"]" -s ALLOW_MEMORY_GROWTH=1 -s ENVIRONMENT=web -O2

echo Done! Check src/wasm/
pause
