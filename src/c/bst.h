#ifndef BST_H
#define BST_H

typedef struct BSTNode {
    int data;
    struct BSTNode* left;
    struct BSTNode* right;
} BSTNode;

BSTNode* bst_insert(BSTNode* root, int value);
BSTNode* bst_delete(BSTNode* root, int value);
int      bst_search(BSTNode* root, int value);
void     bst_inorder(BSTNode* root, int* result, int* index);

#endif
