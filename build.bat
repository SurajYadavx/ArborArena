@echo off
call C:\Users\offls\emsdk\emsdk_env.bat
echo Building DS Dojo WASM...
emcc src/c/bridge.c src/c/bst.c src/c/avl.c src/c/rbtree.c -o src/wasm/ds_dojo.js -sEXPORTED_FUNCTIONS=_ping,_bst_insert_js,_bst_delete_js,_bst_search_js,_bst_get_inorder,_bst_reset,_avl_insert_js,_avl_delete_js,_avl_get_height,_avl_reset,_rb_insert_js,_rb_height_js,_rb_black_height_js,_rb_count_js,_rb_reset_js -sEXPORTED_RUNTIME_METHODS=ccall,cwrap,stringToUTF8,UTF8ToString,lengthBytesUTF8 -sALLOW_MEMORY_GROWTH=1 -sENVIRONMENT=web -O2
if %errorlevel%==0 (echo Done!) else (echo FAILED!)
pause
