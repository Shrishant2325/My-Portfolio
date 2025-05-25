"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Full-Stack Web Development</li>
        <li>Database (SQL/NoSQL)</li>
        <li>System Design, SDLC (Agile/Scrum)</li>
        <li>Cloud Computing (AWS – foundational)</li>
        <li>Financial Analysis & Risk Management</li>
        <li>ASIC Designing</li>
        <li>Machine Learning</li>
        <li>Signal Processing</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>VIT Univeristy, Vellore [B.tech (Electronics & Communication)]</li>
        <li>Satyam International School, Patna [12th Boards (Majored in Physics, Chemistry, Mathematics)]</li>
        <li>Gyan Niketan,Patna [10th Boards]</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li><a href="https://drive.google.com/file/d/1_kVRJjFG91iKjfNdtmum7UYB20uWUvc-/view?usp=sharing"></a>AWS Cloud Practitioner</li>
        <li><a href="https://drive.google.com/file/d/1_kVRJjFG91iKjfNdtmum7UYB20uWUvc-/view?usp=sharing"></a>AWS Solution Architect</li>
        <li><a href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/nkmk7gJitYs4TBvoA/AQKJ8jdotFCzz5WmM_nkmk7gJitYs4TBvoA_vQJQgcHb7H2J7RAwK_1739250813038_completion_certificate.pdf"></a>Wells Fargo - Commercial Banking Analysis</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} alt="Portrait of Shrishant Pandey" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I&rsquo;m a full-stack developer and an electronics engineer skilled in building responsive, scalable web solutions. Experienced with HTML5, CSS3, JavaScript, React, Node.js, Python, Java, MATLAB, Git, and cloud fundamentals, along with MySQL, MongoDB, Next.js, and Express.js. I bring a strong foundation in system design, data analysis, and financial insight, with a commitment to continuous growth.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
