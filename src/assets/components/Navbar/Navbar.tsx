//
import { Calculator, Thermometer, X, Timer, DollarSign } from "lucide-react";
import BottonIcon from "../BottonIcon/ButtonIcon";
//
const TextNavbar = () => {
   return (
      <div className="textNavbar">
         <h1>Calculadora</h1>
      </div>
   );
};
//

//
const IconsNavbar = () => {
   const dadosIconsNavbar = [
      {
         index: 1,
         icon: <Calculator size={70} color="white" />,
      },
      {
         index: 2,
         icon: <Thermometer size={70} color="white" />,
      },
      {
         index: 3,
         icon: <Timer size={70} color="white" />,
      },
      {
         index: 4,
         icon: <DollarSign size={70} color="white" />,
      },
      {
         index: 5,
         icon: <X size={70} color="white" />,
      },
      {
         index: 6,
         icon: <X size={70} color="white" />,
      },
      {
         index: 7,
         icon: <X size={70} color="white" />,
      },
      {
         index: 8,
         icon: <X size={70} color="white" />,
      },
   ];
   return (
      <>
         <div className="navbar">
            <TextNavbar />
            <ul className="navbarUl">
               {dadosIconsNavbar.map((itens) => (
                  <li key={itens.index} className="navbarUlLi">
                     <button
                        
                        style={{
                           backgroundColor: itens.index >= 5 ? "#ED5555" : undefined,
                           cursor: itens.index >= 5 ? "not-allowed" : undefined,
                           border: itens.index >= 5 ? "none" : undefined,
                        }}
                     >
                        {<BottonIcon symbol={itens.icon}/>}
                     </button>
                  </li>
               ))}
            </ul>
         </div>
      </>
   );
};
//
function Navbar() {
   return (
      <section>
         <nav>
            <IconsNavbar />
         </nav>
      </section>
   );
}

export default Navbar;