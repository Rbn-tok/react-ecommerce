import React from 'react'
import axios from 'axios';
import {useState,useEffect,useRef} from 'react'
import { NavLink } from 'react-router-dom';
import Skeleton from '@mui/material/Skeleton';
import { useLocation } from 'react-router-dom';

const Produits = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    const componentMounted = useRef(true);

    const location = useLocation();

    useEffect(() => {
      
        async function getProduits() {
            setLoading(true);
            const response = await axios.get('http://localhost:8087/produits');
          
            if(componentMounted){
                
                setData(response.data);
                setFilter(response.data)
                setLoading(false);
                
            }
            return ()=>{
                componentMounted.current = false;
            }
        }

        //changer le titre de page 
        if (location.pathname === '/produits') {
            document.title = 'E-commerce | Produits';
          }
       getProduits();
        
        // eslint-disable-next-line
      }, [location]);
    
    const Loading=()=>{
       // const filtercopy=[...filter];
        //const filterLength=filter.length;
        return(
            
            <>
            
             
                <div className="col-md-3 mb-4">
                <Skeleton
                  
                    variant="rounded"
                    height={350}
                    animation="wave"
                    />
                </div>
                <div className="col-md-3 mb-4">
                <Skeleton
                  
                  variant="rounded"
                  height={350}
                  animation="wave"
                  />
                </div>
                <div className="col-md-3 mb-4">
                <Skeleton
                  
                  variant="rounded"
                  height={350}
                  animation="wave"
                  />
                </div>
                <div className="col-md-3 mb-4">
                <Skeleton
                  
                  variant="rounded"
                  height={350}
                  animation="wave"
                  />
                </div>
            
           
            </>
        )
    }
    const LoadinBtnCategorie=()=>{
        return(
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <Skeleton
                    variant="rounded"
                    height={50} width={500}
                    animation="wave"
                    />
                </div>
            </>
        )
    }
    const FiltrerByProduit=(cat)=>{
        const updateList=data.filter((x)=>x.categorie===cat);
        setFilter(updateList);
    }
    const ComponentBtnFiltrerCategorie = () => {

        //retourner seulement une liste de produit
        const categories = data.map((datas) => datas.categorie);;
       
        const uniqueCategorie = categories.filter((item, index) => categories.indexOf(item) === index);

        return (
          <>
           <div className="buttons d-flex justify-content-center mb-5 pb-5">
                 <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(data)}>Tous</button>
                {
                uniqueCategorie.map((item, index) => (
                    <button key={index} className="btn btn-outline-dark me-2" onClick={()=>FiltrerByProduit(item)}>{item}</button>
                  
                ))
                }
           </div>
          </>
        );
      };
    
    const ShowProduits=()=>{
  
        return(
          <>
                {filter.map((produit) => {
                    return (
                        
                        <div  className="col-md-3 mb-5" key={produit.idProduit}>
                            <div className="card h-100 text-center p-5" >
                                <img src={"http://localhost:8087/uploads/"+produit.imageFilePath} 
                                className="card-img-top" alt={produit.nomProduit} heigth="100px"/>
                                <div className="card-body">
                                <h5 className="card-title mb-0">{produit.nomProduit}</h5>
                                <p className="card-text lead fw-bold">{produit.prixU}Ar</p>
                                <p className="card-text">{produit.description}</p>
                                <p className="card-text">{produit.categorie}</p>
                                <NavLink to={"/produits/"+produit.idProduit} className="btn btn-outline-dark">
                                    <i className='fa fa-shopping-cart'></i> Acheter 
                                </NavLink>
                                </div>
                            </div>
                        </div>

                        
                    );
                    })}
                </>
                )
            }



  return (
    <div>
        <div className="container my-5 py-3">
            <div className="row">
                <div className="col-12 mb-5">
                    <h1 className="display-6 fw-bolder text-center">Dernier Produit</h1>
                    <hr />
                </div>
            </div>
            <div className="row justify-content-center">
                {loading?<LoadinBtnCategorie/>:<ComponentBtnFiltrerCategorie/>}
                {loading?<Loading/>:<ShowProduits />}
            </div>
        </div>
    </div>
  )
}

export default Produits