import axios from 'axios';
import React from 'react'
import {useState,useEffect} from 'react'
import {useDispatch} from 'react-redux';
import { addCart} from '../redux/action';
import Skeleton from '@mui/material/Skeleton';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import Alert from './compo/Alert';

const Produit = () => {

  const { id } = useParams();
  const [produit, setProduit] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const dispatch=useDispatch();
  const addProduit=(produit)=>{
      dispatch(addCart(produit));
      setShowAlert(true);
  }
  //console.log("id de :"+id)

  useEffect(() => {
    const getProduit = async () => {
      //  console.log("id de :"+id)
      setLoading(true);
      const response = await axios.get("http://localhost:8087/produits/"+id);
      setProduit(response.data);
     // console.log(produit);
      setLoading(false);
    };

    getProduit();
    // eslint-disable-next-line
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-6 mb-4">
            <Skeleton variant="rounded" height={450} animation="wave"/>    
        </div>
        <div className="col-md-6" style={{ ligneHeigth:2}}>
            <Skeleton variant="rounded" height={30} width={300} animation="wave"/>    
            <Skeleton variant="rounded" height={75} animation="wave"/>    
            <Skeleton variant="rounded" height={25} width={150} animation="wave"/>    
            <Skeleton variant="rounded" height={50} animation="wave"/>    
            <Skeleton variant="rounded" height={150} animation="wave" style={{marginLeft:6}}/>    
        </div>
      </>
    );
  };

  const ShowProduit = () => {
    return (
      <>
        <div className="col-md-6 mb-5" >
          <img
            src={"http://localhost:8087/uploads/" + produit.imageFilePath}
            className=""
            alt={produit.nomProduit}
            height="300px" width="250px"
          />
        </div>
        <div className="col-md-6">
            <h4 className="text-uppercase text-black-50">{produit.categorie}</h4>
            <h1 className="display-5">{produit.nomProduit}</h1>
            <p className="lead fw-bolder">{produit.taille}<i className="fa fa-star"></i></p>
            <h3 className="display-6 fw-bolde my-4">{produit.prixU} Ar</h3>
            <p className="lead">
                {produit.description}
                <i className="fa fa-star"></i>
            </p>
            <button className="btn btn-outline-dark  mx-2" onClick={()=>addProduit(produit)}>Add to cart</button>
            <NavLink className="btn btn-dark" to="/cart">  <i className='fa fa-shopping-cart'></i> Allez au panier</NavLink>
            
            
            
        </div>
      </>
    );
  };

  return (
    <>
      <Navbar/>
     
 <div>
    
        <div className="container py-5">
          <div id="alert">
          {showAlert && (
              <Alert type="success" icon="check" message="Votre produit a été ajouté au panier avec succès !" duration="100" />
            )}
          </div>
              
          <div className="row py-4">   
            {loading ? <Loading /> : <ShowProduit key={produit.idProduit}/>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Produit;
