import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { RiSupabaseLine } from "react-icons/ri";
import {
  SiJavascript,
  SiTailwindcss,
  SiTypescript,
  SiPostgresql,
  SiNextdotjs,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, level: "Advanced" },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" />, level: "Advanced" },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, level: "Advanced" },
    { name: "React.js", icon: <FaReact className="text-cyan-400" />, level: "Advanced" },
    { name: "Next.js", icon: <SiNextdotjs  className="text-cyan-400" />, level: "Advanced" },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-400" />, level: "Intermediate" },
    { name: "Supabase", icon: <RiSupabaseLine className="text-blue-400" />, level: "Intermediate" },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-400" />, level: "Advanced" },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: "Intermediate" },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-400" />, level: "Intermediate" },
  ];

  return (
    <section className="bg-blue text-white py-16 px-5" id="skills">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Header */}
        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-blue-400">My Skills</h2>
        <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
          These are the technologies and tools I work with to design, build, and deliver
          high-quality web experiences that are both modern and performant.
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-900 hover:bg-blue-900 transition duration-300 ease-in-out p-6 rounded-2xl shadow-md"
            >
              <div className="text-5xl mb-3">{skill.icon}</div>
              <h3 className="text-xl font-semibold">{skill.name}</h3>
              <p className="text-gray-400 text-sm">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
