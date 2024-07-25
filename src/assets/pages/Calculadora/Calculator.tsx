// Ícones do Lucide.dev
import { Percent, Asterisk, Plus, Minus, Equal, Divide } from "lucide-react";
// Estilização com CSS padrão
import "./Calculator.css";
import Navbar from "../../components/Navbar/Navbar";
import ButtonIcon from "../../components/BottonIcon/ButtonIcon";
import { useState } from "react";

const BottonsCalculator = () => {
   //
   // const [isResult, setIsResult] = useState<number>(0);
   const [selectedNumber, setSelectNumber] = useState<number | string>("");
   const [oldSelectNumber, oldSetSelectNumber] = useState<number | string>("");
   const [isResult, setIsResult] = useState<number | string>();
   // const [selectedOperation, setSelectOperation] = useState<number>(0);
   // Funções
   const handleNumber = (index: number) => {
      if (selectedNumber === "0") {
         index.toString();
      } else {
         setSelectNumber(" ");
         const x: string = selectedNumber.toString() + index.toString();
         setSelectNumber(x);
      }
   };
   const clearAll = (index: string | number) => {
      index === 0 ? setSelectNumber("") : null;
   };
   //
   const changeSignal = (index: number) => {
      //
      if (index === 1) {
         setSelectNumber(Number(selectedNumber) * -1);
      } else {
         console.log("Vazio");
      }
      //
   };
   //
   const handleComma = (index: number) => {
      if (index === 17) {
         if (typeof selectedNumber === "string") {
            if (!selectedNumber.includes(".")) {
               setSelectNumber(selectedNumber + ".");
            } else {
               setSelectNumber(selectedNumber);
            }
         } else {
            // setSelectNumber(selectedNumber.toString() + ".");
            setSelectNumber(selectedNumber.toString() + " ");
         }
      }
   };
   //
   const changePorc = (index: number) => {
      if (index === 2) {
         setSelectNumber(Number(selectedNumber) / 100);
      } else {
         console.log("Vazio");
      }
   };
   //
   const operatorSelect = (indexOperator: string) => {
      if (
         indexOperator == "/" ||
         indexOperator == "*" ||
         indexOperator == "-" ||
         indexOperator == "+"
      ) {
         switch (indexOperator) {
            case "/":
               oldSetSelectNumber(selectedNumber);
               setSelectNumber("")
         }
      }
   };
   //
   const operatorCalculator = (index: number) => {
      if (index === 3 || index === 7 || index === 11 || index === 15) {
         switch (index) {
            case 3:
               console.log("Case 3: divisão");
               setSelectNumber(
                  parseFloat((oldSelectNumber / selectedNumber).toFixed(2))
               );
               break;
            case 7:
               console.log("Case 7: multiplicação");
               break;
            case 11:
               console.log("Caso 11: subtração");
               break;
            case 15:
               console.log("Case 15: adição");
               break;
            default:
               console.log("Case indeterminado.");
         }
      }
   };
   //
   const dataCalculator = [
      { index: 1, operationSymbol: "AC" },
      { index: 2, operationSymbol: "[+/-]" },
      { index: 3, operationSymbol: <Percent size={45} color="white" /> },
      {
         index: 4,
         operationSymbol: <Divide size={45} color="white" />,
         operationSelect: "/",
      },
      { index: 5, operationSymbol: "7", number: 7 },
      { index: 6, operationSymbol: "8", number: 8 },
      { index: 7, operationSymbol: "9", number: 9 },
      {
         index: 8,
         operationSymbol: <Asterisk size={45} color="white" />,
         operationSelect: "*",
      },
      { index: 9, operationSymbol: "4", number: 4 },
      { index: 10, operationSymbol: "5", number: 5 },
      { index: 11, operationSymbol: "6", number: 6 },
      {
         index: 12,
         operationSymbol: <Minus size={45} color="white" />,
         operationSelect: "-",
      },
      { index: 13, operationSymbol: "1", number: 1 },
      { index: 14, operationSymbol: "2", number: 2 },
      { index: 15, operationSymbol: "3", number: 3 },
      {
         index: 16,
         operationSymbol: <Plus size={45} color="white" />,
         operationSelect: "+",
      },
      { index: 17, operationSymbol: "0", number: 0 },
      { index: 18, operationSymbol: "." },
      {
         index: 19,
         operationSymbol: <Equal size={45} color="white" />,
         operationSelect: "=",
      },
   ];
   //
   return (
      <div className="bottonsCalculator">
         <Result selectedNumber={selectedNumber} />
         <ul>
            {dataCalculator.map((item, index) => (
               <li
                  key={index}
                  onClick={() => {
                     handleNumber(item.number ?? 0);
                     clearAll(index);
                     changeSignal(index);
                     changePorc(index);
                     handleComma(index);
                     operatorCalculator(index);
                     operatorSelect(item.operationSelect);
                  }}
               >
                  <ButtonIcon symbol={item.operationSymbol} />
               </li>
            ))}
         </ul>
      </div>
   );
};
//
type ResultProps = {
   selectedNumber: string | number;
};
const Result = ({ selectedNumber }: ResultProps) => {
   //
   return (
      <>
         <div className="result">
            <input
               value={selectedNumber}
               placeholder={
                  // selectedNumber.length <= 12 ? selectedNumber : "Excedeu!"
                  selectedNumber.toString()
               }
               readOnly
            />
         </div>
      </>
   );
};
//

const Calculator = () => {
   return (
      <>
         <section className="calculator">
            <Navbar />
            <BottonsCalculator />
         </section>
      </>
   );
};
export default Calculator;
