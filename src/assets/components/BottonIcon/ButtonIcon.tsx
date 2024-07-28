import "./ButtonIcon.css";

type BottonIconsProps = {
   symbol: string | React.ReactElement;
   onClick?: () => void
};
const BottonIcon = ({ symbol = "Indefinido", onClick }: BottonIconsProps) => {
   return (
      <>
         <div
            className="buttonIcon"
            style={{
               marginRight: symbol === "0" ? "124px" : "",
            }}
            onClick={onClick}
         >
            <button
               style={{
                  width: symbol === "0" ? "235px" : "",
                  marginRight: symbol === "0" ? "70px" : "",
               }}
            >
               {symbol}
            </button>
         </div>
      </>
   );
};
export default BottonIcon;
