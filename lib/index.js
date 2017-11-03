var root = null
function Node(data){
    this.left = undefined;
    this.right = undefined;
    this.data = data;
}

function BinaryTree(){
    var root = null;
    return root;
}


function buildTree(node,data){
    if(root === null){
        root = new Node(data)
    }else{
        if(data < node.data){
            if(node.left === undefined){
                node.left = new Node(data)
            }else{
                buildTree(node.left,data)
            }
        }else if(data > node.data){
            if(node.right === undefined){
                node.right = new Node(data)
            }else{
                buildTree(node.right,data)
            }
        }
    }
}

/**
 * 
 * @param 前序遍历 node 
 */
function preOrder(node){
    if(node){
        console.log(node.data) 
        preOrder(node.left)
        preOrder(node.right)
    }
}

/**
 * 
 * @param 中序遍历 node 
 */
function inOrder(node){
    if(node){
        inOrder(node.left)
        console.log(node.data)
        inOrder(node.right)
    }
}

/**
 * 
 * @param {*后序遍历} node 
 */
function backOrder(node){
    if(node){
        inOrder(node.left)
        inOrder(node.right)
        console.log(node.data)
    }
}

function main(){
    var ch = [32,14,12,5,21,6,111]
    // var bt = BinaryTree()
    for(var i=0;i<ch.length;i++){
        buildTree(root,ch[i])
    }
    preOrder(root)
    inOrder(root)
    backOrder(root)
};

main()
