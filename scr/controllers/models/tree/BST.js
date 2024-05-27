import { Node } from "./Node.js";
//si uso import default Node, no es nesecario las {}

class BST{
    #root
    constructor(){
        this.#root = null;
    }
    
    add(value){
        if(this.#root == null){
            this.#root = new Node(value);
        if(this.#root!=null){
            return true;
        }
        }else{
            return this.insertNode (this.#root,value)
        }
    
    }
    insertNode(node,value){
        if(value.folio < node.value.folio){
            if(node.left==null){
                node.left = new Node (value);
                if(node.left!=null){
                    return true;
                }
            }
            else{
                return this.insertNode(node.left,value);
            }
        }else{
            if(node.right == null){
                node.right = new Node(value)
                if(node.right!=null){
                    return true;
                }

            }else
            return this.insertNode(node.right,value);
        }
    }
    //buscar por valor
    searchNode(node,value){
        if (node === null || node.value.folio === folio) {
            return node;
        }if(node.value.folio === value){
        return node.value;
        }else if(value<node.value.folio){
            return this.searchNode(node.left,value)
        }else{
            return this.searchNode(node.right,value)
        }
       
    }
    search(value){
        return this.searchNode(this.#root,value)
    }
 //recorrido InOrder (izquierda, raiz ,derecha)
routeInorder(node, nodosVisitados) {
    if (node !== null) {
        this.routeInorder(node.left, nodosVisitados);
        // Llama al callback (nodosVisitados) cada vez que pasa por un nodo y guarda la información
        nodosVisitados(node.value);
        this.routeInorder(node.right, nodosVisitados);
    }
}

// Método data con el nuevo nombre para el parámetro callback
data(nodosVisitados) {
    this.routeInorder(this.#root, nodosVisitados);
}

    
    //bucar valor minimo del lado izquierdo
    min() {
        return this.minNode(this.#root);
    }

    minNode(node) {
        if (node == null || node.left == null) {
            return node.value;
        } else {
            return this.minNode(node.left);
        }
    }
    max() {
        return this.maxNode(this.#root);
    }
    //empieza del lado derecho a buscar el valor maximo 
    maxNode(node) {
        if (node == null || node.right == null) {
            return node.value;
        } else {
            return this.maxNode(node.right);
        }
    }
   

}
export default BST;