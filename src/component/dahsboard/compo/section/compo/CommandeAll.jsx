import React from 'react'
import axios from 'axios';
import {useState,useEffect,useRef} from 'react'
import moment from 'moment';
import Skeleton from '@mui/material/Skeleton';

const CommandeAll = () => {
    const [allCommande, setAllCommande] = useState([]);
    const [filter, setFilter] = useState(allCommande);
    const [loading, setLoading] = useState(false);
    const componentMounted = useRef(true);

    // eslint-disable-next-line
    const [dropdownStatus,setDropdownStatus]=useState('');

    const btnClikShowStatus=()=>{

      setDropdownStatus(' show');
    }

    useEffect(() => {

        async function getCommandes() {
            setLoading(true);
            const response = await axios.get('http://localhost:8087/commande');

            if (componentMounted) {

                setAllCommande(response.data);
                setFilter(response.data);
                setLoading(false);

            }
            return () => {
                componentMounted.current = false;
            };
        }

        
        getCommandes();
        

        // eslint-disable-next-line
    }, []);    

    const Loading = () => {
        
        return (

            <>
                <tr>
                        <td>
                          <div className="check-input-primary">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="checkbox-1"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="product">
                            <div className="image">
                                <Skeleton variant="rounded" height={35} animation="wave" width={35}/>
                            </div>
                            <Skeleton variant="rounded" height={35} animation="wave" />
                          </div>
                        </td>
                        <td>
                            <Skeleton variant="rounded" height={35} animation="wave" />
                        </td>
                        <td>
                            <Skeleton variant="rounded" height={35} animation="wave" />
                        </td>
                        <td>
                            <Skeleton variant="rounded" height={35} animation="wave" />
                        </td>
                        <td>
                            <Skeleton variant="rounded" height={35} animation="wave" />
                        </td>
                        <td>
                            <Skeleton variant="rounded" height={35} animation="wave" />
                        </td>
                        <td>
                          <div className="action justify-content-end">
                            <button
                              className="more-btn ml-10 dropdown-toggle"
                              id="moreAction1"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                              onClick={btnClikShowStatus}
                            >
                              <i className="lni lni-more-alt"></i>
                            </button>
                            <ul
                              className="dropdown-menu dropdown-menu-end"
                              aria-labelledby="moreAction1"
                            >
                              <li className="dropdown-item">
                                <a href="#0" className="text-gray">Remove</a>
                              </li>
                              <li className="dropdown-item">
                                <a href="#0" className="text-gray">Edit</a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                


            </>
        );
    };

    const ShowCommandes = () => {

        return (
            <>
                {filter.map((commande) => {
                    return (
                        <>

                        <tr  key={commande.idcommande}>
                        <td>
                          <div className="check-input-primary">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="checkbox-1"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="product">
                            <div className="image">
                              <img
                                src={"http://localhost:8087/uploads/" + commande.produit.imageFilePath}
                                alt=""
                                width="155px"
                              />
                            </div>
                            <p className="text-sm">{commande.produit.nomProduit}</p>
                          </div>
                        </td>
                        <td>
                          <p className="text-sm">{commande.produit.categorie}</p>
                        </td>
                        <td>
                          <p className="text-sm">{commande.quantite}</p>
                        </td>
                        <td>
                          <p className="text-sm">{moment(commande.date).format('YYYY-MM-DD')}</p>
                        </td>
                        <td>
                          <p className="text-sm">{commande.users.nom}</p>
                        </td>
                        <td>
                          <span className="status-btn success-btn">Completed</span>
                        </td>
                        <td>
                          {/* <div className="action justify-content-end">
                            <button
                              className={"more-btn ml-10 dropdown-toggle"+dropdownStatus}
                              id="moreAction1"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                              onClick={btnClikShowStatus}
                            >
                              <i className="lni lni-more-alt"></i>
                            </button>
                            <ul
                              className={"dropdown-menu dropdown-menu-end"+dropdownStatus}
                              aria-labelledby="moreAction1"
                            >
                              <li className="dropdown-item">
                                <a href="#0" className="text-gray">Remove</a>
                              </li>
                              <li className="dropdown-item">
                                <a href="#0" className="text-gray">Edit</a>
                              </li>
                            </ul>
                          </div> */}

                          <div className="select-style-1">
                              <div className="select-position select-sm">
                                <select className="light-bg">
                                <option value=""> ... </option>
                                  <option value="">En cour</option>
                                  <option value="">Livrer</option>
                                  <option value="">A Livrer</option>
                                </select>
                              </div>
                            </div>

                        </td>
                      </tr>

                      </>
                    );
                })}
            </>
        );
    };


  return (
    <>
        <div className="row">
            
            <div className="col-lg-12">
              <div className="card-style mb-35">
                <div
                  className="
                    title
                    d-flex
                    flex-wrap
                    justify-content-between
                    align-items-center
                  "
                >
                  <div className="left">
                    <h6 className="text-medium mb-35">Liste des commandes</h6>
                  </div>
                  <div className="right">
                    <div className="select-style-1">
                      <div className="select-position select-sm">
                        <select className="light-bg">
                          <option value="">Tous</option>
                          <option value="">Semmaine</option>
                          <option value="">Aujourd'hui</option>
                        </select>
                      </div>
                    </div>
                    {/* <!-- end select --> */}
                  </div>
                </div>
                {/* <!-- End Title --> */}
                <div className="table-responsive">
                  <table className="table top-selling-table">
                    <thead>
                      <tr>
                        <th></th>
                        <th>
                          <h6 className="text-sm text-medium">Produits</h6>
                        </th>
                        <th className="min-width">
                          <h6 className="text-sm text-medium">Catégories</h6>
                        </th>
                        <th className="min-width">
                          <h6 className="text-sm text-medium">Quantité</h6>
                        </th>
                        <th className="min-width">
                          <h6 className="text-sm text-medium">Date</h6>
                        </th>
                        <th className="min-width">
                          <h6 className="text-sm text-medium">Client</h6>
                        </th>
                        <th className="min-width">
                          <h6 className="text-sm text-medium">Statut</h6>
                        </th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                        {/* component commande */}
                     {loading ? <Loading/>:<ShowCommandes/>} 
                    </tbody>
                  </table>
                  {/* <!-- End Table --> */}
                </div>
              </div>
            </div>
            {/* <!-- End Col --> */}
          </div>
          {/* <!-- End Row --> */}
    </>
  )
}

export default CommandeAll;