import React from "react";
import { styles } from "@/styles/styles";

export const Main = () => {
  return (
    <header
      id="main"
      className="w-full h-screen text-center bg-[url('/assets/chicagolight.jpg')] dark:bg-[url('/assets/chicagodark.jpg')] bg-cover bg-center relative transition-all duration-500"
    >
      <div className="absolute inset-0 bg-gradient-to-b-light dark:bg-gradient-to-b-dark w-full h-full mx-auto p-2 flex justify-center items-center bg-blend-overlay">
        <div>
          <h1 className={styles.heroHeadText}>Fernando Berrospi</h1>
          <h2 className={styles.heroSubText}>
            <small>Software Engineer</small>
          </h2>
        </div>
      </div>
    </header>
  );
};
