#include <stdlib.h>
#include "avl.h"

#define MAX(a,b) ((a)>(b)?(a):(b))

int avl_height(AVLNode* node) {
    return node ? node->height : 0;
}

static int balance_factor(AVLNode* node) {
    return node ? avl_height(node->left) - avl_height(node->right) : 0;
}

static void update_height(AVLNode* node) {
    if (node)
        node->height = 1 + MAX(avl_height(node->left), avl_height(node->right));
}

static AVLNode* new_node(int value) {
    AVLNode* n = (AVLNode*)malloc(sizeof(AVLNode));
    n->data = value; n->left = n->right = NULL; n->height = 1;
    return n;
}

static AVLNode* rotate_right(AVLNode* y) {
    AVLNode* x  = y->left;
    AVLNode* T2 = x->right;
    x->right = y; y->left = T2;
    update_height(y); update_height(x);
    return x;
}

static AVLNode* rotate_left(AVLNode* x) {
    AVLNode* y  = x->right;
    AVLNode* T2 = y->left;
    y->left = x; x->right = T2;
    update_height(x); update_height(y);
    return y;
}

static AVLNode* rebalance(AVLNode* node) {
    update_height(node);
    int bf = balance_factor(node);

    if (bf > 1 && balance_factor(node->left) >= 0)   // LL
        return rotate_right(node);
    if (bf > 1 && balance_factor(node->left) < 0) {  // LR
        node->left = rotate_left(node->left);
        return rotate_right(node);
    }
    if (bf < -1 && balance_factor(node->right) <= 0) // RR
        return rotate_left(node);
    if (bf < -1 && balance_factor(node->right) > 0) {// RL
        node->right = rotate_right(node->right);
        return rotate_left(node);
    }
    return node;
}

AVLNode* avl_insert(AVLNode* root, int value) {
    if (!root) return new_node(value);
    if (value < root->data)      root->left  = avl_insert(root->left,  value);
    else if (value > root->data) root->right = avl_insert(root->right, value);
    else return root;
    return rebalance(root);
}

static AVLNode* find_min(AVLNode* node) {
    while (node->left) node = node->left;
    return node;
}

AVLNode* avl_delete(AVLNode* root, int value) {
    if (!root) return NULL;
    if (value < root->data)      root->left  = avl_delete(root->left,  value);
    else if (value > root->data) root->right = avl_delete(root->right, value);
    else {
        if (!root->left || !root->right) {
            AVLNode* tmp = root->left ? root->left : root->right;
            free(root); return tmp;
        }
        AVLNode* min = find_min(root->right);
        root->data   = min->data;
        root->right  = avl_delete(root->right, min->data);
    }
    return rebalance(root);
}
