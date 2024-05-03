const about = {
  intro:
    "I am Fernando Berrospi, a growth-minded Software Engineer who is passionate about all things related to software development, data science and Formula 1.",
  background:
    "I graduated from Purdue University in 2019 with a B.S in Industrial Engineering. I currently work as a Software Engineer involved in the creation and the improvement of a facial landmark detection model for fatigue detection on drivers in mining facilities.",
  callToAction: "I invite you to check out my GitHub for demos of my projects.",
};

const skills = [
  "JavaScript",
  "Python",
  "R",
  "React",
  "Next JS",
  "Express",
  "Django",
  "Git",
  "MongoDB",
  "PostgreSQL",
  "Firebase",
  "Jira",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Bootstrap",
  "TensorFlow",
  "PyTorch",
  "Open CV",
  "Power BI",
];

const experiences = [
  {
    company: "Proemisa",
    logo: "/assets/companies/proemisa.png",
    dates: "January 2023 - Present",
    description:
      "Optimized website performance, streamlined development, and enhanced visibility, resulting in faster page loads, efficient development, and higher user engagement.",
  },
  {
    company: "MS4M",
    logo: "/assets/companies/ms4m.png",
    dates: "August 2021 - September 2022",
    description:
      "Collaborated in the creation and optimization of a machine learning facial landmarks detection model for fatigue detection in haul truck drivers in South American mines.",
  },
  {
    company: "CDC Gold",
    logo: "/assets/companies/cdcgold.png",
    dates: "January 2019 - July 2019",
    description:
      "Developed a GPS tracking algorithm to identify haul truck delays and track routing of other mining equipment resulting in significant cost savings per truck per month.",
  },
];

const projects = [
  {
    title: "Formula 1 Web App",
    subtitle: "Django / Plotly / PostreSQL",
    image: "/assets/projects/f1.jpg",
    description:
      "Developed an Exploratory Data Analysis (EDA) report to determine Formula 1 lap time variations over time. Conducted a thorough data cleaning process by classifying missing variables, performing data imputation and encoding categorical data types to numeric using Pandas and Seaborn Python libraries. Performed univariate and multivariate analysis to determine relevant variables and spot possible correlations.",
    demo: "https://www.kaggle.com/code/fernandoberrospi/f1-eda-grand-prix-analysis",
    code: "https://github.com/fberrosp/F1-EDA-Grand-Prix-Analysis",
    stack: ["Django", "Plotly", "PostgreSQL", "Tailwind", "Redis"],
    url: "/formula1App",
  },
  {
    title: "Project Management App",
    subtitle: "React JS / Tailwind / Firebase",
    image: "/assets/projects/project.jpg",
    description:
      "Designed a CRUD web application using Javascript as the frontend and Firebase as a backend as a service. Followed Model, View, Controller (MVC) architectural pattern for designing the system infrastructure. Developed the system logic using Object Oriented Programming (OOP) for improved scalability and code maintenance. Implemented team and role management features for administrators for successful project management capabilities.",
    demo: "https://issuetrackingsystem-9d0f7.web.app/",
    code: "https://github.com/fberrosp/issueTrackingSystem",
    stack: [
      "React JS",
      "MongoDB",
      "Express JS",
      "Node JS",
      "Tailwind",
      "Firebase",
    ],
    url: "/projectManagementApp",
  },
  {
    title: "Application Bot",
    subtitle: "Python / Selenium / Pandas",
    image: "/assets/projects/bot.jpg",
    description:
      "Developed an automated job application bot using Python, Selenium, and Pandas by automating repetitive tasks, enabling seamless data extraction and analysis, and enhancing overall efficiency and accuracy in job applications.",
    demo: "/",
    code: "https://github.com/fberrosp/jobApplicationBot",
    stack: ["Python", "Selenium", "Pandas", "Numpy"],
    url: "/applicationBot",
  },
  {
    title: "Chat Bot",
    subtitle: "Python / TensorFlow",
    description:
      "Developed a chatbot by curating a TV show script to accurately emulate a character's personality and responses.",
    demo: "/",
    code: "/",
    image: "/assets/projects/texting.jpg",
    stack: ["Python", "TensorFlow"],
    url: "/chatBot",
  },
];

export { about, skills, experiences, projects };
