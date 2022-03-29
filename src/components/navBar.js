import imagen from '../public/favicon-16x16.png'

const NavBar = () => {
    return (
        <nav>
            
            <ul className="navegador">    
                <li>
                     <h2> MARINO VARETA </h2>
                     <div> 
                         <img src={imagen} />
                     </div>
                </li>
                <li>
                     <span> Home </span>
                </li>
                
                <li>
                   <span> Servicios </span>
                </li>
                
                <li>
                   <span> Productos </span>
                </li>
                
                <li>
                    <span> Contacto</span>
                </li>
                
                <li>
                    <span> Quienes somos</span>
                </li>
                
            </ul>
        </nav>
    );
}

export default NavBar;