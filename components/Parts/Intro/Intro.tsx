import { Button } from "flowbite-react";
import { HiDocumentText } from "react-icons/hi";
import { FaTelegramPlane } from "react-icons/fa";

export const Intro = () => (
  <div className="flex flex-col gap-1 text-center sm:text-left">
    <h1 className="text-5xl font-bold">Jalal Uddin</h1>
    <span className="text-lg sm:text-2xl font-light">Software Engineer &bull; Machine Learning Enthusiast</span>
    <p className="text-justify font-light w-full sm:w-2/3 text-sm">
      An enthusiastic and dynamic programmer with a relentless curiosity for problem-solving, possessing a versatile
      proficiency in coding across various languages and platforms. Extensively experienced in developing web
      applications in conjunction with a knack for crafting software architecture design, modeling, and maintaining
      scalable infrastructure for efficient development operations. Furthermore, my research in machine learning and
      data science has fostered a deep understanding of data-efficient software engineering. Seeking opportunities to
      further expand my research knowledge and contribute to groundbreaking advancements. Committed to staying abreast
      of the latest industry trends and continuously honing my skills through self-directed learning and participation.
    </p>
    <div className="flex gap-4 my-4 justify-center sm:justify-start">
      <Button className="bg-tinker hover:bg-linter">
        <HiDocumentText className="mr-2" />
        <p>Email Me</p>
      </Button>
      <Button className="bg-pen hover:bg-midnight">
        <FaTelegramPlane className="mr-2" />
        <p>Leave a note</p>
      </Button>
    </div>
  </div>
);
