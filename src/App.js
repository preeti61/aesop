import react from 'react';
import Component8 from "./Component/Component8";
import Component1 from "./Component/Component1";
import Component7 from './Component/Component7';
import Component45 from './Component/Component45.js';
import Component2 from './Component/Component2';
import Component3 from './Component/Component3.js';
import Cart from './Component/Cart';
function App() {
  return (
    <div className="grid-container">
        <div className="header">
            <div className="main__content">
            <p>Enjoy complimentary standard shipping on all orders.  <i class="fa fa-plus" aria-hidden="true"></i></p></div>
        </div>
      <main>
        <div class="main__body">
          <Component1/>
          <Component2/>
          <Component3/>
          <Component45 header={"Store Locator"}
          body={"Our consultants are available to host you in-store and provide tailored guidance on gift purchases. "}
          insidebox={"find a nearby store"}/>
          
          <Component45 header={"For your Convenience"} 
          body={"For personalised advice, you are welcome to arrange a video consultation with a trained Aesop consultant; or to use our live assistance for guidance while browsing online."}
          insidebox={"Discover our services"}/>
          <Component7/>
          <Component8/>
        </div>
      </main>
      <footer>&#169; Aesop</footer>
    </div>
  );
}

export default App;
