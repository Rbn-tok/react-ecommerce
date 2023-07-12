import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addCart,delCart} from '../redux/action';
const Cart = () => {
    const containerStyle = {
        margin: '1rem',
        padding: '0.5rem',
        backgroundColor: '#f8f9fa',
      };
    
  // Récupérer les produits du panier depuis le store
  const cartItems = useSelector(state => state.handleCart);
  const dispatch=useDispatch();
  const addProduit=(produit)=>{
      dispatch(addCart(produit));
  }
  const delProduit=(produit)=>{
      dispatch(delCart(produit));
  }
 

  
  return (
    <>
    <div className="container py-5">
        <div className="row py-1"> 
      {cartItems.length > 0 ? (
        <div>
            {cartItems.map(produit => (

                <>  
                      <div className="row mb-4 justify-content-center p-5" style={containerStyle}>
                            <div className="col-md-4">
                                <img src={"http://localhost:8087/uploads/" + produit.imageFilePath} alt={produit.title} height="200px" width="188px"/>    
                            </div> 
                            <div className="col-md-4">
                                <h3>{produit.nomProduit}</h3> 
                                <p className="lead fw-bold">
                                    {produit.prixU}Ar x {produit.qty} =
                                    {produit.qty*produit.prixU} Ar
                                </p> 
                                <button className="btn btn-outline-dark me-4" 
                                onClick={()=>delProduit(produit)}>
                                        <i className="fa fa-minus"></i>
                                </button>  
                                <button className="btn btn-outline-dark me-4" 
                                onClick={()=>addProduit(produit)}>
                                        <i className="fa fa-plus"></i>
                                </button>  
                                
                            </div>   
                     </div>  
                </>
            ))}
        </div>
    

      ) : (<div className="row mb-4 justify-content-center p-5" style={containerStyle}>
              <h5>Votre panier est vide.</h5> 
          </div>
      )}
      
        </div>
    </div>
    </>
  );
};

export default Cart;