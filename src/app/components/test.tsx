'use client'
import Card from "react-animated-3d-card";
import { useState } from "react";

export default function App() {
  const [showFront, setShowFront] = useState("Max Verstappen");

  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center"
      }}
    >
      <Card
        cursorPointer={false}
        shineStrength={0.75}
        style={{
          background: "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
          width: "200px",
          height: "500px",
          cursor: "pointer"
        }}
        onClick={() => setShowFront("Lewis Hamilton")}
      >
        <div>
          <img
            style={{
              position: "absolute",
              left: "25px",
              top: "25px",
              height: "50px"
            }}
            src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png"
            className="card-item__chip"
            alt="credit card chip"
          ></img>
          <img
            style={{
              position: "absolute",
              right: "25px",
              top: "25px",
              height: "50px"
            }}
            src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png"
            className="card-item__chip"
            alt="credit card chip"
          ></img>
        </div>
        <div
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <div
            style={{
              fontSize: "30px",
              fontFamily: "Fira Code",
              color: "white"
            }}
          
          >
            <label>1234</label>
            <label style={{ marginLeft: "30px" }}>1234</label>
            <label style={{ marginLeft: "30px" }}>1234</label>
            <label style={{ marginLeft: "30px" }}>1234</label>
          </div>
        </div>
        <div>
          <label
            style={{
              color: "white",
              position: "absolute",
              bottom: "60px",
              left: "25px",
              opacity: 0.5
            }}
          >
            Card holder
          </label>
          <label
            style={{
              color: "white",
              position: "absolute",
              bottom: "60px",
              right: "25px",
              opacity: 0.5
            }}
          >
            Expires
          </label>
        </div>

        <div>
          <label
            style={{
              color: "white",
              position: "absolute",
              bottom: "25px",
              left: "25px",
              opacity: 1,
              fontSize: "25px"
            }}
          >
            {showFront}
          </label>
          <label
            style={{
              color: "white",
              position: "absolute",
              bottom: "25px",
              right: "25px",
              opacity: 1,
              fontSize: "25px"
            }}
          >
            10/22
          </label>
        </div>
      </Card>
    </div>
  );
}
