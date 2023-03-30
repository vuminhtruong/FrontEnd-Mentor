import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="h-screen flex bg-cream">
      <div className="flex flex-col md:flex-row h-full md:h-auto w-5/6 md:max-w-3xl m-auto bg-white rounded-xl">
        <div className="flex-1 img-container h-1/2 md:h-auto">
          <img className="h-full w-full object-cover rounded-t-xl md:rounded-l-xl" src="./images/image-product-desktop.jpg" alt="image product"/>
        </div>
        <div className="flex-1 flex md:items-center detail-container h-1/2 md:h-auto">
          <div className="my-4 px-8 flex flex-col justify-between">
            <p className="text-2xl tracking-widest font-mont text-graylish">PERFUME</p>
            <h2 className="text-4xl w-3/4 font-bold my-4 md:my-9">Gabrielle Essence Eau De Parfum</h2>
            <p className="text-sm sm:text-lg font-mont text-graylish">A floral,solar and voluptuous interpretation composed by Olivier Polge,Perfumer-Creator for the House of CHANEL.</p>
            <div className="flex items-center my-4 md:my-9">
              <h2 className="text-4xl font-bold text-dark-cyan">$149.99</h2>
              <h4 className="ml-10 line-through font-mont text-graylish">$169.99</h4>
            </div>
            <button className="bg-dark-cyan hover:bg-dark-blue w-full p-3 text-xl rounded-md font-mont text-white"><FontAwesomeIcon className="text-white mr-2" icon={faCartShopping} />Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default App;
