#ifndef RBTREE_H
#define RBTREE_H

#define RB_RED   0
#define RB_BLACK 1

typedef struct RBNode {
    int data;
    int color;
    struct RBNode *left, *right, *parent;
} RBNode;

RBNode* rb_insert(RBNode* root, int value);
int     rb_height(RBNode* root);
int     rb_black_height(RBNode* root);
int     rb_count(RBNode* root);

#endif
