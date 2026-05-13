#include <iostream>
#include <vector>
#include <string>

// BINARY TREE TRAVERSAL IMPLEMENTATIONS

using namespace std;

struct Node
{
    int data;
    Node *left = nullptr;
    Node *right = nullptr;

    Node(int data) : data(data), left(nullptr), right(nullptr) {}
};

void preOrder(Node *root)
{
    if (root == nullptr)
        return;
    cout << root->data << endl;
    preOrder(root->left);
    preOrder(root->right);
}

void inOrder(Node *root)
{
    if(root == nullptr) return;
    preOrder(root->left);
    cout << root->data << endl;
    preOrder(root->right);
}

int main()
{
    Node* root = new Node(5);
    root->left = new Node(3);
    root->right = new Node(6);
    root->left->left = new Node(2);
    root->left->right = new Node(7);
    root->left->right->left = new Node(4);
    root->left->right->left->left = new Node(1);
    root->left->right->left->right = new Node(9);

    cout << "PREORDER TRAVERSAL : " << endl;
    preOrder(root);

    cout << "INORDER TRAVERSAL : " << endl;
    inOrder(root);

    return 0;
}
