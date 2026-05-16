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
    ~Node()
    {
        delete left;
        delete right;
    }
};

void preOrder(Node *root)
{
    if (root == nullptr)
        return;
    cout << root->data << " ";
    preOrder(root->left);
    preOrder(root->right);
}

void inOrder(Node *root)
{
    if(root == nullptr) return;
    inOrder(root->left);
    cout << root->data << " ";
    inOrder(root->right);
}

void postOrder(Node *root)
{
    if(root == nullptr) return;
    postOrder(root->left);
    postOrder(root->right);
    cout << root->data << " ";
}

int main()
{
    Node* root = new Node(10);
    root->left = new Node(1);
    root->right = new Node(11);
    root->left->left = new Node(0);
    root->left->right = new Node(5);
    root->left->right->left = new Node(3);
    root->left->right->left->left = new Node(2);
    root->left->right->left->right = new Node(4);

    cout << "\nPREORDER TRAVERSAL: " << endl;
    preOrder(root);

    cout << "\nINORDER TRAVERSAL: " << endl;
    inOrder(root);

    cout << "\nPOSTORDER TRAVERSAL: " << endl;
    postOrder(root);
    cout << endl;

    delete root;

    return 0;
}
