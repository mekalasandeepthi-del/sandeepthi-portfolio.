// ================= BIO =================

export const Bio = {
  name: "Sandeepthi Mekala",
  roles: [
    "AI & Machine Learning Enthusiast",
    "Deep Learning Researcher",
    "Computer Vision Developer",
    "Problem Solver",
  ],
  description:
    "Computer Science Engineering student at VIT-AP with strong interest in Deep Learning, Medical Image Analysis, and Explainable AI. Developed intelligent healthcare AI systems including Diabetic Retinopathy and Skin Disease classification models with high accuracy and strong interpretability.",
  github: "https://github.com/mekalasandeepthi-del",
  resume: "PASTE_YOUR_GOOGLE_DRIVE_RESUME_LINK",
  linkedin: "PASTE_YOUR_LINKEDIN_LINK",
};

// ================= SKILLS =================

export const skills = [
  {
    title: "Programming",
    skills: [
      {
        name: "Java",
        image: "https://education.oracle.com/file/general/p-80-java.png",
      },
      {
        name: "Python",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "SQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
    ],
  },
  {
    title: "Machine Learning & AI",
    skills: [
      {
        name: "NumPy",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMrTWz33b86nfIrgaW9jE_t-7VCcqJtjL-pg&s",
      },
      {
        name: "Pandas",
        image:
          "https://lms.codeshunger.com/images/course/pandas_image.png",
      },
      {
        name: "Scikit-learn",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3ioErrXCaT2yZgsMaefs8irg9dRTWVk882Q&s",
      },
      {
        name: "TensorFlow",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4tuBVACn9L-UTWZXzCWknUX2UMzZIpAU5_w&s",
      },
    ],
  },
  {
    title: "Web & Tools",
    skills: [
      {
        name: "React JS",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      },
      {
        name: "HTML",
        image:
          "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
      },
      {
        name: "Bootstrap",
        image:
          "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      },
      {
        name: "Flask",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/flask/flask-original.svg",
      },
    ],
  },
];

// ================= PROJECTS =================

export const projects = [
  {
    id: 1,
    title: "Hybrid CNN for Diabetic Retinopathy Classification",
    date: "2025",
    description:
      "Developed a hybrid CNN model for automated diabetic retinopathy grading from fundus images. Achieved validation accuracy above 90% and AUC > 0.95. Optimized model using TensorFlow Lite and integrated into a Flask-based web application.",
    image:
      "https://miro.medium.com/max/1400/1*o9cSgCqfPp7rRrK4Wq9S6g.jpeg",
    tags: ["CNN", "TensorFlow", "Medical AI", "Deep Learning"],
    category: "deep learning",
    github: "https://github.com/mekalasandeepthi-del",
  },
  {
    id: 2,
    title: "Autoimmune Skin Disease Classification",
    date: "2024",
    description:
      "Multi-class skin disease detection system using Transfer Learning (InceptionV3, Xception, DenseNet121) with Grad-CAM explainability. Achieved 88%+ accuracy and improved prediction interpretability.",
    image:
      "https://cdn.analyticsvidhya.com/wp-content/uploads/2021/06/GradCAM-1.png",
    tags: ["Transfer Learning", "Grad-CAM", "Explainable AI"],
    category: "deep learning",
    github: "https://github.com/mekalasandeepthi-del",
  },
  {
    id: 3,
    title: "Smart Parking System (IoT)",
    date: "2023",
    description:
      "Designed and implemented real-time parking slot detection using Raspberry Pi, ultrasonic sensors, and RFID modules. Integrated parking analytics using ThingSpeak cloud platform.",
    image:
      "https://cdn.analyticsvidhya.com/wp-content/uploads/2021/06/iot.png",
    tags: ["IoT", "Raspberry Pi", "Sensors"],
    category: "hardware",
    github: "https://github.com/mekalasandeepthi-del",
  },
];

// ================= EDUCATION =================

export const education = [
  {
    id: 0,
    school: "Vellore Institute of Technology, AP",
    grade: "CGPA: 7.60",
    desc:
      "Bachelor of Technology in Computer Science and Engineering. Focused on Artificial Intelligence, Deep Learning, and Computer Vision.",
    degree: "B.Tech - Computer Science and Engineering",
  },
  {
    id: 1,
    school: "Sri Chaitanya, Vijayawada",
    date: "2021",
    grade: "93.3%",
    desc: "Completed Intermediate education in MPC stream.",
  },
  {
    id: 2,
    school: "Narayana High School, Vijayawada",
    date: "2019",
    grade: "9.5 CGPA",
    desc: "Completed 10th grade education.",
  },
];

// ================= CERTIFICATES =================

export const certificates = [
  {
    id: 0,
    name: "Hashgraph Developer Course (Hedera)",
    date: "2026",
  },
];

// ================= TIMELINE =================

export const TimeLineData = [
  { year: 2021, text: "Started B.Tech in Computer Science Engineering at VIT-AP" },
  { year: 2023, text: "Built IoT Smart Parking System" },
  { year: 2024, text: "Developed Skin Disease Detection using Transfer Learning" },
  { year: 2025, text: "Built Hybrid CNN for Diabetic Retinopathy Classification" },
];
