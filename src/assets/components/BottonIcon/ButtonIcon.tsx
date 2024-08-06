type BottonIconsProps = {
   symbol: string | React.ReactElement;
   index: number;
   onClick?: () => void;
};
const BottonIcon = ({
   symbol = "Indefinido",
   index,
   onClick,
}: BottonIconsProps) => {
   //

   //
   return (
      <>
         <div className={`s380:w-18 s380:h-18`} onClick={onClick}>
            <button className={`w-full h-full flex justify-center items-center border-4 text-3xl font-semiboldb bg-backgroundDois text-white border-backgroundUm hover:bg-hoverColor transition duration-300 ease-in-out transform hover:scale-95 ${index === 16 ? " s380:w-42" : ""}`}>
               {symbol}
            </button>
         </div>
      </>
   );
};
export default BottonIcon;
