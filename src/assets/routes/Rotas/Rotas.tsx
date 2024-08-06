import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Calculator from "../../pages/Calculadora/Calculator";
import ConverterDinheiro from "../../pages/ConverterDinheiro/ConverterDinheiro";

const Rotas = () => {
   return (
      <>
         <Router>
            <Routes>
               <Route path="/" element={<Calculator />}></Route>
            </Routes>
            <Routes>
               <Route
                  path="/converter-dinheiro"
                  element={<ConverterDinheiro />}
               ></Route>
            </Routes>
         </Router>
      </>
   );
};

export default Rotas;
