import { IResearchProject } from "@/types";

export const researches: IResearchProject[] = [
  {
    type: "Undergraduate Thesis",
    title: "A Hybrid Approach to Mammography Image Processing and Cancerous Lesion Classification",
    supervisor: "Sumaya Ishrat Moyeen, Asst. Prof, RUET",
    duration: "2022",
    location: "RUET, Rajshahi",
    details: [
      "CBIS-DDSM dataset from The Cancer Imaging Archive (TCIA) was used in this research.",
      "A comprehensive mammography processing including pectoral muscle removal was done as data preprocessing.",
      "A hybrid neural network architecture (EffNetv2 + SVM) was designed for cancerous lesion classification.",
    ],
  },
  {
    type: "Sessional Project",
    title: "An IoT Based Embedded System for Automated Railway Gate Control and Monitoring",
    course: "Embedded System Sessional Project I",
    duration: "2022",
    location: "RUET, Rajshahi",
    details: [
      "A sensors-based Arduino controlled gate manage system",
      "Streamlined real-time data communication using NodeMCU module for live update of the train.",
    ],
  },
  {
    type: "Sessional Project",
    title: "An Intelligent Industrial Safety and Health Monitoring System for Industry 4.0",
    course: "Embedded System Sessional Project II",
    duration: "2022",
    location: "RUET, Rajshahi",
    details: [
      "Deep learning-based workers’ safety detection model, trained with helmeted and masked face images.",
      "Real-time health monitoring and sensor data visualization server using Streamlit.",
      "The project was presented at a conference, 2022 International Conference on Mechanical, Industrial and Energy Engineering (ICMIEE)",
    ],
  },
  {
    type: "Sessional Project",
    title: "A Humanoid Robot Prototype",
    course: "Mechatronics System Sessional Project",
    duration: "2017",
    location: "RUET, Rajshahi",
    details: [
      "Designed a humanoid greeting robot prototype in the first year with a team of 30 members.",
      "The project was supervised by Dr. Sajal K. Das, Head, Department of Mechatronics Engineering.",
    ],
  },
];
