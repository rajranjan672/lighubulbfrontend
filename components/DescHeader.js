import React from "react";
import { Button } from "@chakra-ui/react";
import Image from "next/image";
import "../styles/products.css";

export default function Desc() {
  return (
    <div className="fcontainer">
      <div>
        <Image
          src={myIcon}
          alt="icon"
          style={{
            width: "92px",
            height: "92px",
            padding: "100px",
            paddingBottom: 0
          }}
        />
      </div>
      <div className="fcontainer buttons">
        <div className="button">
          <Button variant="contained">Build</Button>
        </div>
        <div className="button">
          <Button variant="outlined">Vouch</Button>
        </div>
      </div>
    </div>
  );
}
