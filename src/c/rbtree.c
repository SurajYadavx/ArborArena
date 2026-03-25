#include <stdlib.h>
#include "rbtree.h"

static RBNode* new_node(int value) {
    RBNode* n   = (RBNode*)malloc(sizeof(RBNode));
    n->data     = value;
    n->color    = RB_RED;
    n->left = n->right = n->parent = NULL;
    return n;
}

static RBNode* rotate_left(RBNode* root, RBNode* x) {
    RBNode* y    = x->right;
    x->right     = y->left;
    if (y->left) y->left->parent = x;
    y->parent    = x->parent;
    if (!x->parent)           root    = y;
    else if (x == x->parent->left) x->parent->left  = y;
    else                           x->parent->right = y;
    y->left      = x;
    x->parent    = y;
    return root;
}

static RBNode* rotate_right(RBNode* root, RBNode* x) {
    RBNode* y    = x->left;
    x->left      = y->right;
    if (y->right) y->right->parent = x;
    y->parent    = x->parent;
    if (!x->parent)           root    = y;
    else if (x == x->parent->right) x->parent->right = y;
    else                            x->parent->left  = y;
    y->right     = x;
    x->parent    = y;
    return root;
}

static RBNode* fix_insert(RBNode* root, RBNode* z) {
    while (z->parent && z->parent->color == RB_RED) {
        RBNode* gp = z->parent->parent;
        if (!gp) break;
        if (z->parent == gp->left) {
            RBNode* uncle = gp->right;
            if (uncle && uncle->color == RB_RED) {
                // Case 1: Uncle RED — recolor
                z->parent->color = RB_BLACK;
                uncle->color     = RB_BLACK;
                gp->color        = RB_RED;
                z = gp;
            } else {
                if (z == z->parent->right) {
                    // Case 2: Uncle BLACK, z is right child — left rotate
                    z    = z->parent;
                    root = rotate_left(root, z);
                }
                // Case 3: Uncle BLACK, z is left child — right rotate
                z->parent->color         = RB_BLACK;
                z->parent->parent->color = RB_RED;
                root = rotate_right(root, z->parent->parent);
            }
        } else {
            RBNode* uncle = gp->left;
            if (uncle && uncle->color == RB_RED) {
                z->parent->color = RB_BLACK;
                uncle->color     = RB_BLACK;
                gp->color        = RB_RED;
                z = gp;
            } else {
                if (z == z->parent->left) {
                    z    = z->parent;
                    root = rotate_right(root, z);
                }
                z->parent->color         = RB_BLACK;
                z->parent->parent->color = RB_RED;
                root = rotate_left(root, z->parent->parent);
            }
        }
    }
    root->color = RB_BLACK;
    return root;
}

RBNode* rb_insert(RBNode* root, int value) {
    RBNode* z = new_node(value);
    RBNode* y = NULL;
    RBNode* x = root;
    while (x) {
        y = x;
        if (z->data < x->data)      x = x->left;
        else if (z->data > x->data) x = x->right;
        else { free(z); return root; }
    }
    z->parent = y;
    if (!y)              root    = z;
    else if (z->data < y->data) y->left  = z;
    else                        y->right = z;
    return fix_insert(root, z);
}

int rb_height(RBNode* root) {
    if (!root) return 0;
    int l = rb_height(root->left);
    int r = rb_height(root->right);
    return 1 + (l > r ? l : r);
}

int rb_black_height(RBNode* root) {
    if (!root) return 0;
    int l = rb_black_height(root->left);
    return l + (root->color == RB_BLACK ? 1 : 0);
}

int rb_count(RBNode* root) {
    if (!root) return 0;
    return 1 + rb_count(root->left) + rb_count(root->right);
}
