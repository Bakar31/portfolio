import { EResearchType, IResearchProject } from "@/types";

export const researches: IResearchProject[] = [
  {
    type: EResearchType.THESIS,
    title: "A Hybrid Approach to Mammography Image Processing and Cancerous Lesion Classification",
    supervisor: "Sumaya Ishrat Moyeen, Asst. Prof, RUET",
    duration: "2022",
    location: "RUET, Rajshahi",
    image: "https://i.ibb.co/SKxCV8t/Mammography-Classification.png",
    details: [
      "CBIS-DDSM dataset from The Cancer Imaging Archive (TCIA) was used in this research.",
      "A comprehensive mammography processing including pectoral muscle removal was done as data preprocessing.",
      "A hybrid neural network architecture (EffNetv2 + SVM) was designed for cancerous lesion classification.",
    ],
  },
  {
    type: EResearchType.DATA,
    title: "DOTA2 Winner Team Prediction based on Stacked Bidirectional LSTM Network",
    supervisor: "Md. Mehedi Hasan, Lecturer, RUET",
    duration: "2022",
    location: "RUET, Rajshahi",
    image: "https://i.ibb.co/MgcT9Sn/dota2.png",
    details: [
      "Match data of 27000 professional matches were collected from OpenAPI.",
      "Designed a Bidirectional LSTM network to predict the winner.",
      "Built a web application out of that model to predict winner real-time",
    ],
  },
  {
    type: EResearchType.LAB,
    title: "An IoT Based Embedded System for Automated Railway Gate Control and Monitoring",
    course: "Embedded System Sessional Project I",
    duration: "2022",
    location: "RUET, Rajshahi",
    image: "https://i.ibb.co/ZS0w08m/railgate-control.png",
    details: [
      "A sensors-based Arduino controlled gate manage system",
      "Streamlined real-time data communication using NodeMCU module for live update of the train.",
    ],
  },
  {
    type: EResearchType.LAB,
    title: "An Intelligent Industrial Safety and Health Monitoring System for Industry 4.0",
    course: "Embedded System Sessional Project II",
    duration: "2022",
    location: "RUET, Rajshahi",
    image: "https://i.ibb.co/9ybjBtF/health.png",
    details: [
      "Deep learning-based workers’ safety detection model, trained with helmeted and masked face images.",
      "Real-time health monitoring and sensor data visualization server using Streamlit.",
      "The project was presented at a conference, 2022 International Conference on Mechanical, Industrial and Energy Engineering (ICMIEE)",
    ],
  },
  {
    type: EResearchType.LAB,
    title: "A Humanoid Robot Prototype",
    course: "Mechatronics System Sessional Project",
    duration: "2017",
    location: "RUET, Rajshahi",
    image: "https://i.ibb.co/D7Jdqc8/humanoid.png",
    details: [
      "Designed a humanoid greeting robot prototype in the first year with a team of 30 members.",
      "The project was supervised by Dr. Sajal K. Das, Head, Department of Mechatronics Engineering.",
    ],
  },
];
