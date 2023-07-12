//for add item to cart

export const addCart=(produit)=>{
    return{
        type:"ADDITEM",
        payload:produit
    }

};

//for delete item from cart
export const delCart=(produit)=>{
    return{
        type:"DELITEM",
        payload:produit
    }

};