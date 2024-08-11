import React from 'react'
import CommandeAll from './compo/CommandeAll'

const Commande = () => {
  return (
    <>
       <section className="section">
        <div className="container-fluid">
          {/* <!-- ========== title-wrapper start ========== --> */}
          <div className="title-wrapper pt-30">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="title mb-30">
                  <h2>Liste des commandes</h2>
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
          
          {/* component commande get all order */}
          <CommandeAll/>
          
          <div className="row">
            
            
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
                    <h6 className="text-medium mb-30">Sales History</h6>
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
                          <h6 className="text-sm text-medium">Products</h6>
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

export default Commande