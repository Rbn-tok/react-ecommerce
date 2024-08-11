import React from 'react'
import {useState,useEffect,useRef} from 'react'
import axios from 'axios';

const Ecommerce = () => {
  const [allCommandes, setCommande] = useState([]);
    const [filter, setFilter] = useState(allCommandes);
    const [loading, setLoading] = useState(false);
    const componentMounted = useRef(true);

    
    const[users,setUser]=useState([]);

    const totalCommande=allCommandes.length;

    const [totalPrice, setTotalPrice] = useState(0);
    const [produitLesPlusVendu,setProduitLesPlusVendu]=useState([])
    const [dropdownStatus,setDropdownStatus]=useState('');

    
    useEffect(() => {

      async function getCommandesUsers() {
          setLoading(true);
          const response = await axios.get('http://localhost:8087/commande');
          const responseUser = await axios.get('http://localhost:8087/users');
          const responseProduitLesPlusVendu = await axios.get('http://localhost:8087/commande/most-sold-products-with-quantite');


          if (componentMounted) {

              setCommande(response.data);
              setUser(responseUser.data);
              setFilter(responseProduitLesPlusVendu.data);
              setProduitLesPlusVendu(responseProduitLesPlusVendu.data)
              setLoading(false);
              

             


          }
          return () => {
              componentMounted.current = false;
          };
      }

      
      getCommandesUsers();
      // console.log(data);

      // eslint-disable-next-line
  }, []);  

  useEffect(() => {
    // Calculez le prix total en parcourant toutes les allCommandes et en ajoutant les prix totaux de chaque commande
    const totalPrice = allCommandes.reduce((acc, command) => {
      const total = command.produit.prixU * command.quantite;
      return acc + total;
    }, 0);

    setTotalPrice(totalPrice);
  }, [allCommandes]);

  // const ShowDropdownStatus=()=>{
  //   setDropdownStatus(' show');
  // }
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
                      <p className="text-sm">{commande.produit.prixU} Ar</p>
                    </td>
                    <td>
                      <p className="text-sm">{commande.quantite}</p>
                    </td>
                    
                    <td>
                      <span className="status-btn success-btn">{commande.produit.prixU * commande.quantite} Ar </span>
                    </td>
                    <td>
                      <div className={"action justify-content-end "+dropdownStatus}>
                        <button
                          className="more-btn ml-10 dropdown-toggle"
                          id="moreAction1"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          // onClick={ShowDropdownStatus}
                        >
                          <i className="lni lni-more-alt"></i>
                        </button>
                        <ul
                          className={"dropdown-menu dropdown-menu-end "+dropdownStatus}
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
            })}
        </>
    );
};


  return (
    <>
        {/* <!-- ========== section start ========== --> */}
      <section className="section">
        <div className="container-fluid">
          {/* <!-- ========== title-wrapper start ========== --> */}
          <div className="title-wrapper pt-30">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="title mb-30">
                  <h2>eCommerce Dashboard</h2>
                </div>
              </div>
              {/* <!-- end col --> */}
              <div className="col-md-6">
                <div className="breadcrumb-wrapper mb-30">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="#0">Dashboard</a>
                      </li>
                      <li className="breadcrumb-item active" aria-current="page">
                        eCommerce
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
              {/* <!-- end col --> */}
            </div>
            {/* <!-- end row --> */}
          </div>
          {/* <!-- ========== title-wrapper end ========== --> */}
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-sm-6">
              <div className="icon-card mb-30">
                <div className="icon purple">
                  <i className="lni lni-cart-full"></i>
                </div>
                <div className="content">
                  <h6 className="mb-10">Nouveau Commande</h6>
                  <h3 className="text-bold mb-10 text-center">{totalCommande}</h3>
                  <p className="text-sm text-success">
                    <i className="lni lni-arrow-up"></i> +2.00%
                    <span className="text-gray">(30 Jours)</span>
                  </p>
                </div>
              </div>
              {/* <!-- End Icon Cart --> */}
            </div>
            {/* <!-- End Col --> */}
            <div className="col-xl-4 col-lg-4 col-sm-6">
              <div className="icon-card mb-30">
                <div className="icon success">
                  <i className="lni lni-dollar"></i>
                </div>
                <div className="content">
                  <h6 className="mb-10">Revenu Total</h6>
                  <h3 className="text-bold mb-10 text-center">{totalPrice} Ar</h3>
                  <p className="text-sm text-success">
                    <i className="lni lni-arrow-up"></i> +5.45%
                    <span className="text-gray">augmenté</span>
                  </p>
                </div>
              </div>
              {/* <!-- End Icon Cart --> */}
            </div>
            {/* <!-- End Col --> */}
            
            <div className="col-xl-4 col-lg-4 col-sm-6">
              <div className="icon-card mb-30">
                <div className="icon orange">
                  <i className="lni lni-user"></i>
                </div>
                <div className="content">
                  <h6 className="mb-10">Nouveau Utilisateur</h6>
                  <h3 className="text-bold mb-10 text-center">{users.length}</h3>
                  <p className="text-sm text-danger">
                    <i className="lni lni-arrow-down"></i> -25.00%
                    <span className="text-gray">Inscrit</span>
                  </p>
                </div>
              </div>
              {/* <!-- End Icon Cart --> */}
            </div>
            {/* <!-- End Col --> */}
          </div>
          {/* <!-- End Row --> */}
          
          <div className="row">
            
            <div className="col-lg-12">
              <div className="card-style mb-30">
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
                    <h6 className="text-medium mb-30">Produits les plus vendus</h6>
                  </div>
                  <div className="right">
                    <div className="select-style-1">
                      <div className="select-position select-sm">
                        <select className="light-bg">
                          <option value="">annuel</option>
                          <option value="">mensuel</option>
                          <option value="">hebdomadaire</option>
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
                          <h6 className="text-sm text-medium">Prix</h6>
                        </th>
                        <th className="min-width">
                          <h6 className="text-sm text-medium">vendu</h6>
                        </th>
                        <th className="min-width">
                          <h6 className="text-sm text-medium">Total Prix</h6>
                        </th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <ShowCommandes/>
                    </tbody>
                  </table>
                  {/* <!-- End Table --> */}
                </div>
              </div>
            </div>
            {/* <!-- End Col --> */}
          </div>
          {/* <!-- End Row --> */}
          <div className="row">
            <div className="col-lg-7">
              <div className="card-style mb-30">
                <div
                  className="
                    title
                    d-flex
                    flex-wrap
                    align-items-center
                    justify-content-between
                  "
                >
                  <div className="left">
                    <h6 className="text-medium mb-2">Prévision des ventes</h6>
                  </div>
                  <div className="right">
                    <div className="select-style-1 mb-2">
                      <div className="select-position select-sm">
                        <select className="light-bg">
                          <option value="">Last Month</option>
                          <option value="">Last 3 Months</option>
                          <option value="">Last Year</option>
                        </select>
                      </div>
                    </div>
                    {/* <!-- end select --> */}
                  </div>
                </div>
                {/* <!-- End Title --> */}
                <div className="chart">
                  <div id="legend3">
                    <ul
                      className="legend3 d-flex flex-wrap align-items-center mb-30"
                    >
                      <li>
                        <div className="d-flex">
                          <span className="bg-color primary-bg"> </span>
                          <div className="text">
                            <p className="text-sm text-success">
                              <span className="text-dark">Revenue</span> +25.55%
                              <i className="lni lni-arrow-up"></i>
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex">
                          <span className="bg-color purple-bg"></span>
                          <div className="text">
                            <p className="text-sm text-success">
                              <span className="text-dark">Net Profit</span> +45.55%
                              <i className="lni lni-arrow-up"></i>
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex">
                          <span className="bg-color orange-bg"></span>
                          <div className="text">
                            <p className="text-sm text-danger">
                              <span className="text-dark">Order</span> -4.2%
                              <i className="lni lni-arrow-down"></i>
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <canvas
                    id="Chart3"
                    style={{width: '100%', height: '450px'}}
                  ></canvas>
                </div>
              </div>
            </div>
            {/* <!-- End Col --> */}
            <div className="col-lg-5">
              <div className="card-style mb-30">
                <div
                  className="
                    title
                    d-flex
                    flex-wrap
                    align-items-center
                    justify-content-between
                  "
                >
                  <div className="left">
                    <h6 className="text-medium mb-2">Traffic</h6>
                  </div>
                  <div className="right">
                    <div className="select-style-1 mb-2">
                      <div className="select-position select-sm">
                        <select className="bg-ligh">
                          <option value="">Last 6 Months</option>
                          <option value="">Last 3 Months</option>
                          <option value="">Last Year</option>
                        </select>
                      </div>
                    </div>
                    {/* <!-- end select --> */}
                  </div>
                </div>
                {/* <!-- End Title --> */}
                <div className="chart">
                  <div id="legend4">
                    <ul
                      className="legend3 d-flex flex-wrap align-items-center mb-30"
                    >
                      <li>
                        <div className="d-flex">
                          <span className="bg-color primary-bg"> </span>
                          <div className="text">
                            <p className="text-sm text-success">
                              <span className="text-dark">Store Visits</span>
                              +25.55%
                              <i className="lni lni-arrow-up"></i>
                            </p>
                            <h2>3456</h2>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex">
                          <span className="bg-color danger-bg"></span>
                          <div className="text">
                            <p className="text-sm text-danger">
                              <span className="text-dark">Visitors</span> -2.05%
                              <i className="lni lni-arrow-down"></i>
                            </p>
                            <h2>3456</h2>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <canvas
                    id="Chart4"
                    style={{width: '100%', height: '420px'}}
                  ></canvas>
                </div>
                {/* <!-- End Chart --> */}
              </div>
            </div>
            {/* <!-- End Col --> */}
          </div>
          {/* <!-- End Row --> */}
          <div className="row">
            
            {/* <!-- End Col --> */}
            <div className="col-lg-12">
              <div className="card-style mb-30">
                <div
                  className="
                    title
                    d-flex
                    flex-wrap
                    align-items-center
                    justify-content-between
                  "
                >
                  <div className="left">
                    <h6 className="text-medium mb-30">Historique des ventes</h6>
                  </div>
                  <div className="right">
                    <div className="select-style-1">
                      <div className="select-position select-sm">
                        <select className="light-bg">
                          <option value="">Today</option>
                          <option value="">Yesterday</option>
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
                        <th>
                          <h6 className="text-sm text-medium">Produits</h6>
                        </th>
                        <th className="min-width">
                          <h6 className="text-sm text-medium">
                            Category <i className="lni lni-arrows-vertical"></i>
                          </h6>
                        </th>
                        <th className="min-width">
                          <h6 className="text-sm text-medium">
                            Revenue <i className="lni lni-arrows-vertical"></i>
                          </h6>
                        </th>
                        <th className="min-width">
                          <h6 className="text-sm text-medium">
                            Status <i className="lni lni-arrows-vertical"></i>
                          </h6>
                        </th>
                        <th>
                          <h6 className="text-sm text-medium text-end">
                            Actions <i className="lni lni-arrows-vertical"></i>
                          </h6>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="product">
                            <div className="image">
                              <img
                                src="assets/images/products/product-mini-1.jpg"
                                alt=""
                              />
                            </div>
                            <p className="text-sm">Bedroom</p>
                          </div>
                        </td>
                        <td>
                          <p className="text-sm">Interior</p>
                        </td>
                        <td>
                          <p className="text-sm">$345</p>
                        </td>
                        <td>
                          <span className="status-btn close-btn">Pending</span>
                        </td>
                        <td>
                          <div className="action justify-content-end">
                            <button className="edit">
                              <i className="lni lni-pencil"></i>
                            </button>
                            <button
                              className="more-btn ml-10 dropdown-toggle"
                              id="moreAction1"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
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
                      <tr>
                        <td>
                          <div className="product">
                            <div className="image">
                              <img
                                src="assets/images/products/product-mini-2.jpg"
                                alt=""
                              />
                            </div>
                            <p className="text-sm">Arm Chair</p>
                          </div>
                        </td>
                        <td>
                          <p className="text-sm">Interior</p>
                        </td>
                        <td>
                          <p className="text-sm">$345</p>
                        </td>
                        <td>
                          <span className="status-btn warning-btn">Refund</span>
                        </td>
                        <td>
                          <div className="action justify-content-end">
                            <button className="edit">
                              <i className="lni lni-pencil"></i>
                            </button>
                            <button
                              className="more-btn ml-10 dropdown-toggle"
                              id="moreAction1"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
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
                      <tr>
                        <td>
                          <div className="product">
                            <div className="image">
                              <img
                                src="assets/images/products/product-mini-3.jpg"
                                alt=""
                              />
                            </div>
                            <p className="text-sm">Sofa</p>
                          </div>
                        </td>
                        <td>
                          <p className="text-sm">Interior</p>
                        </td>
                        <td>
                          <p className="text-sm">$345</p>
                        </td>
                        <td>
                          <span className="status-btn success-btn">Completed</span>
                        </td>
                        <td>
                          <div className="action justify-content-end">
                            <button className="edit">
                              <i className="lni lni-pencil"></i>
                            </button>
                            <button
                              className="more-btn ml-10 dropdown-toggle"
                              id="moreAction1"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
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
                      <tr>
                        <td>
                          <div className="product">
                            <div className="image">
                              <img
                                src="assets/images/products/product-mini-4.jpg"
                                alt=""
                              />
                            </div>
                            <p className="text-sm">Kitchen</p>
                          </div>
                        </td>
                        <td>
                          <p className="text-sm">Interior</p>
                        </td>
                        <td>
                          <p className="text-sm">$345</p>
                        </td>
                        <td>
                          <span className="status-btn close-btn">Canceled</span>
                        </td>
                        <td>
                          <div className="action justify-content-end">
                            <button className="edit">
                              <i className="lni lni-pencil"></i>
                            </button>
                            <button
                              className="more-btn ml-10 dropdown-toggle"
                              id="moreAction1"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
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
                    </tbody>
                  </table>
                  {/* <!-- End Table --> */}
                </div>
              </div>
            </div>
            {/* <!-- End Col --> */}
          </div>
          {/* <!-- End Row --> */}
        </div>
        {/* <!-- end container --> */}
      </section>
      {/* <!-- ========== section end ========== --> */}
    </>
  )
}

export default Ecommerce;