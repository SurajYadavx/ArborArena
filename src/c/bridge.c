#include <stdlib.h>
#include <string.h>
#include <stdio.h>
#include <emscripten/emscripten.h>
#include "bst.h"

static BSTNode* bst_root = NULL;

// Insert a value, return JSON tree string
EMSCRIPTEN_KEEPALIVE
void bst_insert_js(int value) {
    bst_root = bst_insert(bst_root, value);
}

// Delete a value
EMSCRIPTEN_KEEPALIVE
void bst_delete_js(int value) {
    bst_root = bst_delete(bst_root, value);
}

// Search — returns 1 if found, 0 if not
EMSCRIPTEN_KEEPALIVE
int bst_search_js(int value) {
    return bst_search(bst_root, value);
}

// Returns inorder as comma-separated string into a buffer
EMSCRIPTEN_KEEPALIVE
void bst_get_inorder(char* buf, int buf_size) {
    int result[256];
    int index = 0;
    bst_inorder(bst_root, result, &index);
    buf[0] = '\0';
    for (int i = 0; i < index; i++) {
        char tmp[16];
        sprintf(tmp, "%d", result[i]);
        strncat(buf, tmp, buf_size - strlen(buf) - 1);
        if (i < index - 1)
            strncat(buf, ",", buf_size - strlen(buf) - 1);
    }
}

// Reset tree
EMSCRIPTEN_KEEPALIVE
void bst_reset() {
    bst_root = NULL;
}

// Test ping
EMSCRIPTEN_KEEPALIVE
int ping() {
    return 42;
}

#include "avl.h"

static AVLNode* avl_root = NULL;

EMSCRIPTEN_KEEPALIVE
void avl_insert_js(int value) { avl_root = avl_insert(avl_root, value); }

EMSCRIPTEN_KEEPALIVE
void avl_delete_js(int value) { avl_root = avl_delete(avl_root, value); }

EMSCRIPTEN_KEEPALIVE
int avl_get_height() { return avl_height(avl_root); }

EMSCRIPTEN_KEEPALIVE
void avl_reset() { avl_root = NULL; }

#include "rbtree.h"

static RBNode* rb_root = NULL;

EMSCRIPTEN_KEEPALIVE
void rb_insert_js(int value) { rb_root = rb_insert(rb_root, value); }

EMSCRIPTEN_KEEPALIVE
int rb_height_js()       { return rb_height(rb_root); }

EMSCRIPTEN_KEEPALIVE
int rb_black_height_js() { return rb_black_height(rb_root); }

EMSCRIPTEN_KEEPALIVE
int rb_count_js()        { return rb_count(rb_root); }

EMSCRIPTEN_KEEPALIVE
void rb_reset_js()       { rb_root = NULL; }
