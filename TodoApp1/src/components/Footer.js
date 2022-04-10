import React from "react";

export const Footer = () => {
  let FooterStyle = {
    width: "100%",
    position: "relative",
    color: "black",
    top: "30vh",
  };
  return (
    <footer style={FooterStyle} className="bg-dark text-light">
      <p className="text-center">Footer</p>
    </footer>
  );
};
