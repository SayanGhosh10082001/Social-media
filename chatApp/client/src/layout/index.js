import React from "react";
import messengerlogo from "../assets/messengerlogo.png";

const AuthLayouts = ({ children }) => {
  return (
    <>
      <header className="flex justify-center items-center h-1px  shadow-md bg-white">
        <img src={messengerlogo} alt="messengerlogo" width={120} height={10} />
      </header>

      {children}
    </>
  );
};

export default AuthLayouts;
