#ifndef AVL_H
#define AVL_H

typedef struct AVLNode {
    int data;
    struct AVLNode* left;
    struct AVLNode* right;
    int height;
} AVLNode;

AVLNode* avl_insert(AVLNode* root, int value);
AVLNode* avl_delete(AVLNode* root, int value);
int      avl_height(AVLNode* node);

#endif
