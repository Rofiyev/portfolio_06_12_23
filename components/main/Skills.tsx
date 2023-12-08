import { Backend_skill, Frontend_skill_1, Frontend_skill_2, Full_stack } from "@/constants";
import { ISkills } from "@/interface";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = ():JSX.Element => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden !pb-80 py-20"
      style={{ transform: "scale(0.9)" }}
    >
      <SkillText />

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Frontend_skill_1.map(
          ({ Image, height, width, skill_name }: ISkills, i: number) => (
            <SkillDataProvider
              key={i}
              src={Image}
              height={height}
              width={width}
              index={i}
              alt={skill_name}
            />
          )
        )}
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Frontend_skill_2.map(
          ({ Image, height, width, skill_name }: ISkills, i: number) => (
            <SkillDataProvider
              key={i}
              src={Image}
              height={height}
              width={width}
              index={i}
              alt={skill_name}
            />
          )
        )}
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Backend_skill.map(
          ({ Image, height, width, skill_name }: ISkills, i: number) => (
            <SkillDataProvider
              key={i}
              src={Image}
              height={height}
              width={width}
              index={i}
              alt={skill_name}
            />
          )
        )}
      </div>
      
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Full_stack.map(
          ({ Image, height, width, skill_name }: ISkills, i: number) => (
            <SkillDataProvider
              key={i}
              src={Image}
              height={height}
              width={width}
              index={i}
              alt={skill_name}
            />
          )
        )}
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          ></video>
        </div>
      </div>
    </section>
  );
};

export default Skills;
