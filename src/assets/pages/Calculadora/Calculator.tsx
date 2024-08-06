// Ícones do Lucide.dev
import { Percent, Asterisk, Plus, Minus, Equal, Divide } from "lucide-react";
import ButtonIcon from "../../components/BottonIcon/ButtonIcon";
import { useState } from "react";

const BottonsCalculator = () => {
   //
   const [selectedNumber, setSelectNumber] = useState<number | string>("");
   const [oldSelectNumber, oldSetSelectNumber] = useState<number | string>();
   const [op, setOp] = useState<string>("");
   // Funções
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
         setSelectNumber(selectedNumber.toString() + numberItem.toString());
      } else {
         //
      }
   };
   const clearAll = (index: string | number) => {
      if (index === 0) {
         setSelectNumber("");
         oldSetSelectNumber("");
      }
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
   const finishOp = (index: number) => {
      if (index === 18) {
         //
         const num1 = Number(oldSelectNumber);
         const num2 = Number(selectedNumber);
         //
         switch (op) {
            case "+":
               //
               console.log("Adição selecionada.");
               setSelectNumber(num1 + num2);
               break;
            case "-":
               //
               console.log("Subtração selecionada.");
               setSelectNumber(num1 - num2);
               break;
            case "÷":
               //
               console.log("Divisão selecionada.");
               setSelectNumber(num1 / num2);
               break;
            case "x":
               //
               console.log("Multiplicação selecionada.");
               setSelectNumber(num1 * num2);
               break;
            default:
               console.log("Nenhuma opção selecionada.");
               //
               break;
         }
         //
      } else {
         //
         console.error("");
      }
   };
   //
   const opSelect = (index: number) => {
      if (index === 3 || index === 7 || index === 11 || index === 15) {
         switch (index) {
            case 3:
               setOp("÷");
               oldSetSelectNumber(selectedNumber);
               setSelectNumber("");
               console.log("Divisão");
               break;
            case 7:
               setOp("x");
               oldSetSelectNumber(selectedNumber);
               setSelectNumber("");
               console.log("Multiplicação");
               break;
            case 11:
               setOp("-");
               oldSetSelectNumber(selectedNumber);
               setSelectNumber("");
               console.log("Subtração");
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
      <div className="h-alturaPersonalizada w-96 flex items-center justify-center flex-col border-4 border-backgroundUm">
         <Result selectedNumber={selectedNumber} />
         <ul className="flex items-center justify-center s380:gap-1.25 flex-wrap s380:w-90">
            {dataCalculator.map((item, index) => (
               <li
                  key={index}
                  className={`${index == 16 ? "w-42" : ""}`}
                  onClick={() => {
                     handleNumber(index, item.number);
                     clearAll(index);
                     changeSignal(index);
                     changePorc(index);
                     handleComma(index);
                     opSelect(index);
                     finishOp(index);
                  }}
               >
                  <ButtonIcon symbol={item.operationSymbol} index={index} />
               </li>
            ))}
         </ul>
      </div>
   );
};
//
type ResultProps = {
   selectedNumber?: string | number;
};
const Result = ({ selectedNumber }: ResultProps) => {
   //
   return (
      <>
         <div className="flex items-center justify-center border-4 border-backgroundUm s380:w-85 s380:h-16 s380:m-2 text-white">
            <input 
            className="w-full h-full bg-backgroundDois s380:text-5xl s380:p-3"
            value={selectedNumber.toString().slice(0, 13)} readOnly />
         </div>
      </>
   );
};
//

const Calculator = () => {
   return (
      <>
         <section className="bg-backgroundDois w-full h-screen flex items-center justify-center">
            <BottonsCalculator />
         </section>
      </>
   );
};
export default Calculator;
