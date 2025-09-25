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
        <li>Full-Stack Development (ReactJS, NextJS, NodeJS, Spring Boot)</li>
        <li>Database Management (SQL & NoSQL: MySQL, MongoDB, PostgreSQL)</li>
        <li>System Design & SDLC (Agile/Scrum)</li>
        <li>Cloud Fundamentals: AWS</li>
        <li>Data Analysis & Risk Management</li>
        <li>Machine Learning & AI Basics</li>
        <li>ASIC / Electrical System Design, Signal Processing</li>
        <li>DevOps & Tools (Docker, Kubernetes, CI/CD, Git)</li>
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
        <li>
          <a
            href="https://drive.google.com/file/d/1zxTYvk-gDNB7zfArurklRge8OTepZLyy/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            AWS Certified Cloud Practitioner
          </a>
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/1zxTYvk-gDNB7zfArurklRge8OTepZLyy/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            AWS Certified Solutions Architect
          </a>
        </li>
        <li>
          <a
            href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=7C9DEEF1D9404388FBE641DDABA2C81B6586847E298A4A59EF38D6077F96CF3A"
            target="_blank"
            rel="noopener noreferrer"
          >
            Oracle Cloud Infrastructure (OCI) DevOps Professional
          </a>
        </li>
        <li>
          <a
            href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/nkmk7gJitYs4TBvoA/AQKJ8jdotFCzz5WmM_nkmk7gJitYs4TBvoA_vQJQgcHb7H2J7RAwK_1739250813038_completion_certificate.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wells Fargo - Commercial Banking Analysis
          </a>
        </li>
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
            I’m an engineer with expertise across full-stack development, electronics, and data-driven solutions. I build scalable applications, analyze complex data, and design intelligent systems using technologies like Python, Java, MATLAB, React, Node.js, and databases such as MySQL and MongoDB, while applying system design, DevOps practices, and cloud fundamentals. I combine analytical insight, financial understanding, and emerging technologies like AI and machine learning to create impactful solutions across software, business, and electronics domains.          </p>
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

