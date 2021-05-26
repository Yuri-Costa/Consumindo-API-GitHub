import React from 'react';

import logo from '../../git4.png'


//stateless
const Header = () => (
    <header>
       

        <h1 className = "title" >Consumindo API do Github  
         <a href = "https://github.com/">
         <img src={logo} ></img> 
            </a>  
            </h1>
         <div class="middle">
         <div class="text">Github</div>
         </div>
     
        {/* <img src = "git.png"/> */}
        
    </header>
)

export default Header;



