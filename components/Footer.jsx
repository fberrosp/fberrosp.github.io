import React from "react";

export const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark dark:border-light font-medium text-sm">
      <div className="py-2 text-center">
        Copyright &copy; Fernando Berrospi {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
