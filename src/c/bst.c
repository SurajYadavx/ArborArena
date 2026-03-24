#include <stdlib.h>
#include "bst.h"

BSTNode* new_node(int value) {
    BSTNode* node = (BSTNode*)malloc(sizeof(BSTNode));
    node->data  = value;
    node->left  = NULL;
    node->right = NULL;
    return node;
}

BSTNode* bst_insert(BSTNode* root, int value) {
    if (root == NULL) return new_node(value);
    if (value < root->data)
        root->left  = bst_insert(root->left,  value);
    else if (value > root->data)
        root->right = bst_insert(root->right, value);
    return root;
}

BSTNode* find_min(BSTNode* root) {
    while (root->left != NULL) root = root->left;
    return root;
}

BSTNode* bst_delete(BSTNode* root, int value) {
    if (root == NULL) return NULL;
    if (value < root->data)
        root->left  = bst_delete(root->left,  value);
    else if (value > root->data)
        root->right = bst_delete(root->right, value);
    else {
        if (root->left == NULL)  { BSTNode* t = root->right; free(root); return t; }
        if (root->right == NULL) { BSTNode* t = root->left;  free(root); return t; }
        BSTNode* min    = find_min(root->right);
        root->data      = min->data;
        root->right     = bst_delete(root->right, min->data);
    }
    return root;
}

int bst_search(BSTNode* root, int value) {
    if (root == NULL)       return 0;
    if (value == root->data) return 1;
    if (value < root->data) return bst_search(root->left,  value);
    return                         bst_search(root->right, value);
}

void bst_inorder(BSTNode* root, int* result, int* index) {
    if (root == NULL) return;
    bst_inorder(root->left,  result, index);
    result[(*index)++] = root->data;
    bst_inorder(root->right, result, index);
}
