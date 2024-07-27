// Ícones do Lucide.dev
import { Percent, Asterisk, Plus, Minus, Equal, Divide } from "lucide-react";
// Estilização com CSS padrão
import "./Calculator.css";
import Navbar from "../../components/Navbar/Navbar";
import ButtonIcon from "../../components/BottonIcon/ButtonIcon";
import { useState } from "react";

const BottonsCalculator = () => {
   //
   const [selectedNumber, setSelectNumber] = useState<number | string>("");
   const [oldSelectNumber, oldSetSelectNumber] = useState<number | string>("");
   const [op, setOp] = useState<React.ReactNode>("");
   const [isVerified, setIsVerified] = useState<boolean>(true);
   // const [selectedOperation, setSelectOperation] = useState<string>("");
   // Funções
   const verificaIndex = (index: number) => {
      console.log(`Index: ${index}`);
   };
   const handleNumber = (index: number, numberItem: number) => {
      if (
         index === 4 ||
         index === 5 ||
         index === 6 ||
         index === 8 ||
         index === 9 ||
         index === 10 ||
         index === 12 ||
         index === 13 ||
         index === 14 ||
         index === 16
      ) {
         console.log(`Index do HandleNumber: ${index}`);
         setSelectNumber(selectedNumber.toString() + numberItem.toString());
      } else {
         //
      }
   };
   const clearAll = (index: string | number) => {
      index === 0 && setSelectNumber(""), oldSetSelectNumber("")
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
   // Fazer a calculadora funcionar aqui
   const opSelect = (index: number) => {
      if (index === 3 || index === 7 || index === 11 || index === 15) {
         // oldSetSelectNumber(selectedNumber);
         // setSelectNumber("")
         switch (index) {
            case 3:
               setOp("÷");
               oldSetSelectNumber(selectedNumber);
               setSelectNumber("");
               break;
            case 7:
               setOp("x");
               oldSetSelectNumber(selectedNumber);
               setSelectNumber("");
               break;
            case 11:
               setOp("-");
               oldSetSelectNumber(selectedNumber);
               setSelectNumber("");
               break;
            case 15:
               setOp("+");

               oldSetSelectNumber(selectedNumber);
               setSelectNumber("");
               break;
         }
      }
   };
   //
   const dataCalculator = [
      { operationSymbol: "AC" },
      { operationSymbol: "[+/-]" },
      { operationSymbol: <Percent size={45} color="white" /> },
      {
         operationSymbol: <Divide size={45} color="white" />,
         operationSelect: "/",
      },
      { operationSymbol: "7", number: 7 },
      { operationSymbol: "8", number: 8 },
      { operationSymbol: "9", number: 9 },
      {
         operationSymbol: <Asterisk size={45} color="white" />,
         operationSelect: "*",
      },
      { operationSymbol: "4", number: 4 },
      { operationSymbol: "5", number: 5 },
      { operationSymbol: "6", number: 6 },
      {
         operationSymbol: <Minus size={45} color="white" />,
         operationSelect: "-",
      },
      { operationSymbol: "1", number: 1 },
      { operationSymbol: "2", number: 2 },
      { operationSymbol: "3", number: 3 },
      {
         operationSymbol: <Plus size={45} color="white" />,
         operationSelect: "+",
      },
      { operationSymbol: "0", number: 0 },
      { operationSymbol: "." },
      {
         operationSymbol: <Equal size={45} color="white" />,
         operationSelect: "=",
      },
   ];
   //
   return (
      <div className="bottonsCalculator">
         <div className="operationsView">
            <p>{oldSelectNumber}</p>
            <p>{op}</p>
            <p>{selectedNumber}</p>
         </div>
         <Result selectedNumber={selectedNumber} />
         <ul>
            {dataCalculator.map((item, index) => (
               <li
                  key={index}
                  onClick={() => {
                     handleNumber(index, item.number);
                     clearAll(index);
                     changeSignal(index);
                     changePorc(index);
                     handleComma(index);
                     opSelect(index);
                     // verificaIndex(index);
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
   selectedNumber?: string | number;
   oldSelectNumber?: string | number;
   selectedOperation?: string;
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
