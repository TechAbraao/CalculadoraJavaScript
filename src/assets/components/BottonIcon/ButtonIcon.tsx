import "./ButtonIcon.css";

type BottonIconsProps = {
   symbol: string | React.ReactElement;
};
const BottonIcon = ({ symbol = "Indefinido" }: BottonIconsProps) => {
   return (
      <>
         <div
            className="buttonIcon"
            style={{
               marginRight: symbol == "0" ? "124px" : "",
            }}
         >
            <button
               style={{
                  width: symbol == "0" ? "235px" : "",
                  marginRight: symbol == "0" ? "70px" : "",
               }}
            >
               {symbol}
            </button>
         </div>
      </>
   );
};
export default BottonIcon;
