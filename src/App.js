import DSI from "./DSI/dsi.png"
import shuffle from "./DSI/shuffle.png"
import mail from "./DSI/mail.png"
import union from "./DSI/Union.png"
import pana from "./DSI/pana.png"

function App() {
  return (
    <>
      <div className="container">
        <div className="navbar" >
          <div className="" >
            <img src={DSI} />
          </div>

          <div className="ul_li" >
            <ul>
              <li>Services</li>
              <li>Product</li>
              <li>Technologi</li>
              <li>About</li>
              <li>Client</li>
              <li>Partner</li>
            </ul>
          </div>
          <div className="nav1" >
            <img src={shuffle} />
            <img src={mail} />
            <img src={union} />
          </div>
        </div>
      </div>



      <header>
        <div className="container">
          <div className="header">
            <div className="left">
            <h1 className="left_h1">Making the most of the <br/> ever-growing <br/>
            <span>Information Technology</span></h1>
            <p className="left_p">Managed by a team of professional experts with extensive experience and impressive track records</p>
            <button className="left_button">Read more</button>
            </div>
            <div className="right">
              <img src={pana} />
            </div>
          </div>
          </div>
      </header>
    </>

  );
}

export default App;
