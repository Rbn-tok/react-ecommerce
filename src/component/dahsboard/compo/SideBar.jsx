import React from 'react'
// import logo from './assets/images/logo/logo.svg';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo3 from '../../../assets/logo3.png';
const SideBar = () => {
  const [dropdownClass, setDropdownClass] = useState('dropdown-nav collapse');
  const [dropdownClass2, setDropdownClass2] = useState('dropdown-nav collapse');
  const [dropdownClass3, setDropdownClass3] = useState('dropdown-nav collapse');

  const showDropDwon = () => {
    if(dropdownClass==='dropdown-nav collapse'){
      setDropdownClass('dropdown-nav collapse show');
    }else{
      setDropdownClass('dropdown-nav collapse');
    }
  };

  const showDropDwon2 = () => {
    if(dropdownClass2==='dropdown-nav collapse'){
      setDropdownClass2('dropdown-nav collapse show');
    }else{
      setDropdownClass2('dropdown-nav collapse');
    }
  };
  const showDropDwon3 = () => {
    if(dropdownClass3==='dropdown-nav collapse'){
      setDropdownClass3('dropdown-nav collapse show');
    }else{
      setDropdownClass3('dropdown-nav collapse');
    }
  };
  return (

    <><aside className="sidebar-nav-wrapper">
    <div className="navbar-logo">
      <NavLink to="/dashboard" >
        <img src={logo3} alt="logo" width="155px"/>
      </NavLink>
    </div>
    <nav className="sidebar-nav">
      <ul>
        <li className="nav-item nav-item-has-children">
          <NavLink to="/dashboard"
            href="#0"
            data-bs-toggle="collapse"
            data-bs-target="#ddmenu_1"
            aria-controls="ddmenu_1"
            aria-expanded="false"
            aria-label="Toggle navigation"

            onClick={showDropDwon}
          >
            <span className="icon">
              <svg width="22" height="22" viewBox="0 0 22 22">
                <path
                  d="M17.4167 4.58333V6.41667H13.75V4.58333H17.4167ZM8.25 4.58333V10.0833H4.58333V4.58333H8.25ZM17.4167 11.9167V17.4167H13.75V11.9167H17.4167ZM8.25 15.5833V17.4167H4.58333V15.5833H8.25ZM19.25 2.75H11.9167V8.25H19.25V2.75ZM10.0833 2.75H2.75V11.9167H10.0833V2.75ZM19.25 10.0833H11.9167V19.25H19.25V10.0833ZM10.0833 13.75H2.75V19.25H10.0833V13.75Z"
                />
              </svg>
            </span>
            <span className="text">Dashboard</span>
          </NavLink>
          <ul id="ddmenu_1" className={dropdownClass+"show"}>
            <li>
              
              <NavLink className="nav-link active" to="/dashboard">
                  <span className="icon">
                    <i class="lni lni-cart-full"></i>
                  </span>
                  <span className="text">eCommerce</span>
                
            </NavLink>
            </li>
          </ul>
        </li>
        <li className="nav-item nav-item-has-children"   >
          <a
            href="#0"
            className="collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#ddmenu_2"
            aria-controls="ddmenu_2"
            aria-expanded="false"
            aria-label="Toggle navigation"

            onClick={showDropDwon2}
          >
            <span className="icon">
               <i class="lni lni-cart"></i>

            </span>
            <span className="text">Produit</span>
          </a>
          <ul id="ddmenu_2" className={dropdownClass2}>
            <li>
              <a href="settings.html"> Ajouter Produit </a>
            </li>
            <li>
              <a href="blank-page.html">Liste des produits</a>
            </li>
          </ul>
        </li>
        <li className="nav-item">

          <NavLink className="nav-link" to="/dashboard/commande">
              <span className="icon">
                <i class="lni lni-cart-full"></i>
              </span>
            <span className="text">Commande</span>
            
          </NavLink>
        </li>
        <li className="nav-item nav-item-has-children">
          <a
            href="#0"
            className="collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#ddmenu_3"
            aria-controls="ddmenu_3"
            aria-expanded="false"
            aria-label="Toggle navigation"

            onClick={showDropDwon3}
          >
            <span className="icon">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.9067 14.2908L15.2808 11.9167H6.41667V10.0833H15.2808L12.9067 7.70917L14.2083 6.41667L18.7917 11L14.2083 15.5833L12.9067 14.2908ZM17.4167 2.75C17.9029 2.75 18.3692 2.94315 18.713 3.28697C19.0568 3.63079 19.25 4.0971 19.25 4.58333V8.86417L17.4167 7.03083V4.58333H4.58333V17.4167H17.4167V14.9692L19.25 13.1358V17.4167C19.25 17.9029 19.0568 18.3692 18.713 18.713C18.3692 19.0568 17.9029 19.25 17.4167 19.25H4.58333C3.56583 19.25 2.75 18.425 2.75 17.4167V4.58333C2.75 3.56583 3.56583 2.75 4.58333 2.75H17.4167Z"
                />
              </svg>
            </span>
            <span className="text">Auth</span>
          </a>
          <ul id="ddmenu_3" className={dropdownClass3}>
            <li>
              <a href="signin.html"> Sign In </a>
            </li>
            <li>
              <a href="signup.html"> Sign Up </a>
            </li>
          </ul>
        </li>
        <span className="divider"><hr /></span>
        
        

        <li className="nav-item">
          <a href="notification.html">
            <span className="icon">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.16667 19.25H12.8333C12.8333 20.2584 12.0083 21.0834 11 21.0834C9.99167 21.0834 9.16667 20.2584 9.16667 19.25ZM19.25 17.4167V18.3334H2.75V17.4167L4.58333 15.5834V10.0834C4.58333 7.24171 6.41667 4.76671 9.16667 3.94171V3.66671C9.16667 2.65837 9.99167 1.83337 11 1.83337C12.0083 1.83337 12.8333 2.65837 12.8333 3.66671V3.94171C15.5833 4.76671 17.4167 7.24171 17.4167 10.0834V15.5834L19.25 17.4167ZM15.5833 10.0834C15.5833 7.51671 13.5667 5.50004 11 5.50004C8.43333 5.50004 6.41667 7.51671 6.41667 10.0834V16.5H15.5833V10.0834Z"
                />
              </svg>
            </span>
            <span className="text">Notifications</span>
          </a>
        </li>
      </ul>
    </nav>
    
  </aside>
  <div className="overlay"></div>
  
  
  </>
  )
}

export default SideBar