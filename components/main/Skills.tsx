import {
  Backend_skill,
  Frontend_skill_1,
  Frontend_skill_2,
  Full_stack,
} from "@/constants";
import { ISkills } from "@/interface";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = (): JSX.Element => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 !max-w-7xl !min-w-full mx-auto !min-h-[900px] relative !pb-60 py-20 "
      style={{ transform: "scale(0.9)" }}
    >
      <SkillText />

      <div className="absolute w-full h-full top-[25%] z-[11]">
        <div className="flex flex-row justify-center flex-wrap mt-4 gap-4 items-center">
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

        <div className="flex flex-row justify-center flex-wrap mt-4 gap-4 items-center">
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

        <div className="flex flex-row justify-center flex-wrap mt-4 gap-4 items-center">
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

        <div className="flex flex-row justify-center flex-wrap mt-4 gap-4 items-center">
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
      </div>

      <div className="w-full h-full absolute z-[10]">
        <div className="w-full h-full opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full min-height-[800px]"
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
