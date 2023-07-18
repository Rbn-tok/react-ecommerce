import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addCart,delCart} from '../redux/action';
import { useState,useEffect } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import Alert from './compo/Alert';


const Cart = () => {
    const containerStyle = {
        margin: '1rem',
        //padding: '0.5rem',
        backgroundColor: '#f8f9fa',
      };
    

      const [commandes, setCommandes] = useState([]);   

      const [showAlert, setShowAlert] = useState(false);

  // Récupérer les produits du panier depuis le store
    const cartItems = useSelector(state => state.handleCart);

   
    useEffect(() => {
        const commandesList = cartItems.map((produit) => ({
         // idcommande: 4, // Remplacez par l'ID de la commande approprié
            users: { idUsers: 13 }, // Remplacez par l'ID de l'utilisateur approprié
            produit: { idProduit: produit.idProduit },
            quantite: produit.qty,
        
            date: new Date().toISOString().split('T')[0]

        }));
    
        setCommandes(commandesList);

        //console.log(commandesList)
      }, [cartItems]);

  const dispatch=useDispatch();
  const addProduit=(produit)=>{
      dispatch(addCart(produit));
  }
  const delProduit=(produit)=>{
      dispatch(delCart(produit));
  }
 

  const commander = () => {
    commandes.forEach((commande) => {
      axios
        .post('http://localhost:8087/commande/', commande)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    });
    setShowAlert(true);
  };

  return (
    <>
    <Navbar/>
    <div className="container py-5">
        <div className="row py-1"> 
      {cartItems.length > 0 ? (
        <>
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

                                <div>
                                    <button type="button" className="btn btn-outline-dark me-4" 
                                    onClick={()=>delProduit(produit)}>
                                            <i className="fa fa-minus"></i>
                                    </button>

                                    

                                    <button className="btn btn-outline-dark me-4" 
                                    onClick={()=>addProduit(produit)}>
                                            <i className="fa fa-plus"></i>
                                    </button>  
                                </div>
                                
                                
                            </div>   
                     </div>  
                     
                </>
            ))}

              <div id="alert container">
                        {showAlert && (
                            <Alert type="success" icon="check" message="Achat effectué avec succès !" duration="100" />
                )}
              </div>


        </div>
       

        <div className="container">
        
            <div className="row mb-4 justify-content-center p-5" >
            
                <div className="col-md-6">
                <p>Commander des maintenant votre commande.</p>
                </div>
                <div className="col-md-6 text-rigth">
                <button className='btn btn-dark' onClick={commander}>
                    <i className="fa fa-shopping-cart me-1"></i> Commander
                </button>
                </div>

            </div>
        </div>
    
        </>  

      ) : (<div className="row mb-4 justify-content-center p-5" style={containerStyle}>
              <h5 className='display-6 fw-bolde my-4'><i className="fa fa-shopping-cart"></i> Votre panier est vide.</h5> 
          </div>
      )}
      
        </div>
    </div>
    </>
  );
};

export default Cart;