import './App.css';
import Home from './component/Home';
import Produits from './component/Produits';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Produit from './component/Produit';
import { Provider } from 'react-redux';
import store from './redux/store';
import Cart from './component/Cart';
//import {useEffect} from 'react';
import AdminIndex from './component/dahsboard/Index'
import Commande from './component/dahsboard/Commande';

function App() {

  //changer le titre de la page
  // useEffect(() => {
  //  // document.title = {title};
  // }, []);

  //const location = useLocation();

  return (
    <>
    <Router>
      <Provider store={store} >
       {/* <Navbar/> */}
        <Routes>{/* Switch in version >6*/}
          <Route path="/" element={<Home title="E-commerce | Homme"/>} />
          <Route path="/produits" element={<Produits />} />
          <Route path="/produits/:id" element={<Produit />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/dashboard" element={<AdminIndex title="Dasboard"/>} />
          <Route path="/dashboard/commande" element={<Commande title="Commande"/>} />
        </Routes>
        </Provider>
    </Router>
   </>
  );
}

export default App