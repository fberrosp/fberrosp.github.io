import React from "react";
import { styles } from "@/styles/styles";
import { about } from "@/constants";
import Link from "next/link";

export const About = () => {
  return (
    <section
      id="about"
      className="w-full md:h-screen p-2 flex items-center py-16"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h2 className={styles.sectionHeadText}>About</h2>
          <p className={styles.sectionSubText}>{about.intro}</p>
          <br />
          <p className={styles.sectionSubText}>{about.background}</p>
          <br />
          <Link
            className="py-2 hover:underline"
            href="https://github.com/fberrosp"
            target="_blank"
          >
            <strong>{about.callToAction}</strong>
          </Link>
        </div>
        <div className="w-full h-auto m-auto flex items-center justify-center p-4">
          <img src="/assets/Fernando_B_profile(c).png" alt="/" />
        </div>
      </div>
    </section>
  );
};
