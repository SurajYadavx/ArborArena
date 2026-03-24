@echo off

call C:\Users\offls\emsdk\emsdk_env.bat

echo Building DS Dojo WASM...

emcc src/c/bridge.c src/c/bst.c -o src/wasm/ds_dojo.js -sEXPORTED_FUNCTIONS=_ping,_bst_insert_js,_bst_delete_js,_bst_search_js,_bst_get_inorder,_bst_reset -sEXPORTED_RUNTIME_METHODS=ccall,cwrap,stringToUTF8,UTF8ToString,lengthBytesUTF8 -sALLOW_MEMORY_GROWTH=1 -sENVIRONMENT=web -O2

if %errorlevel%==0 (
    echo Done! ds_dojo.js and ds_dojo.wasm generated successfully.
) else (
    echo BUILD FAILED! Check errors above.
)

pause
