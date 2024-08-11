import React from 'react'
import SideBar from './compo/SideBar';
// import Header from './compo/Header';
import Header from './compo/Header';

//importation du css dasboard

import CommandeList from './compo/section/CommandeList';

import Head from './compo/Head';

function Commande(props) {

  var titre = props.title;


  document.title = titre;


  return (
    <>

    <Head /> {/* Inclure le composant Head ici */}
      <SideBar />
      <main className="main-wrapper">
        <Header />
        <CommandeList/>
      </main>

    </>

  );
}

export default Commande
