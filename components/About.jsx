import React from "react";
import { styles } from "@/styles/styles";

export const About = () => {
  return (
    <section
      id="about"
      className="w-full md:h-screen p-2 flex items-center py-16"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h2 className={styles.sectionHeadText}>About</h2>
          <p className={styles.sectionSubText}>
            I am Fernando Berrospi, a growth-minded Software Engineer who is
            passionate about all things related to software development, data
            science and Formula 1. <br /> <br />I graduated from Purdue
            University in 2019 with a B.S in Industrial Engineering. I currently
            work as a Software Engineer involved in the creation and the
            improvement of a facial landmark detection model for fatigue
            detection on drivers in mining facilities.
          </p>
          <a
            className="py-2 hover:underline"
            href="https://github.com/fberrosp"
            target="_blank"
          >
            I invite you to check out my <strong>GitHub</strong> for demos of my
            projects.
          </a>
        </div>
        <div className="w-full h-auto m-auto flex items-center justify-center p-4">
          <img src="/assets/Fernando_B_profile(c).png" alt="/" />
        </div>
      </div>
    </section>
  );
};
