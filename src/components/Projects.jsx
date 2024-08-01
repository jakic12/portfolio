import React from "react";
import styled from "styled-components";

import projects from "../content/projects";

const SectionCard = ({ title, children }) => {
  return <div className="sm:rounded-xl sm:ring-1 ring-neutral-700 shadow overflow-hidden lg:mb-20 mb-10">
    <div className="text-white font-bold p-4 ring-1 ring-neutral-700 sm:mt-0 mt-[1px]">{title}</div>
    <div className="p-10 text-zinc-300">
      {children}
    </div>
  </div>
  };


export default () => {
  return (
    <div className="w-full sm:pt-10 sm:px-10 lg:pt-20 lg:px-20 mb-96">
      {/*<SectionCard title="About me">
        I am a student of computer science and mathematics at the University of Ljubljana.
        I love solving problems and creating interesting things. I am always looking for new challenges and ways to improve myself. <br />
      </SectionCard>*/}

      <SectionCard title="My projects">
        {projects.map((proj, i) => (
          <div key={`${i}_proj`} className="flex flex-col lg:flex-row justify-center first:mt-0 mt-20 items-stretch">
            <div className="text-white text-3xl mb-5 lg:mb-10 mt-1 lg:hidden">{proj.name}</div>
            <img
              src={proj.images[0]}
              /*href={proj.link}*/
              alt={`${proj.name} screenshot`}
              className="rounded-lg shrink flex-1 min-w-0 object-contain ring-neutral-700 ring-1 max-h-[33vh]"
            />
            <div className="shrink flex-1 min-w-0 lg:px-5 pt-5 lg:py-0">
              <div className="flex flex-col h-full">
                <div className="flex-grow">
                  <div className="text-white text-3xl hidden lg:block mb-10 mt-1">{proj.name}</div>
                  <div className="text-zinc-300" dangerouslySetInnerHTML={{__html:proj.description}}></div>
                </div>
                <div className="flex flex-row items-center pt-5 ">
                  <div className="flex flex-row flex-1 gap-3">
                  {proj.tools.map((t) => (
                    <a href={t.link} target="_blank">
                      <t.icon height="3em" className="fill-emerald-500" />
                    </a>
                  ))}
                  </div>
                  <a href={proj.link} target="_blank" className="shrink-0 justify-self-end no-underline text-zinc-300 ring-1 focus:outline-none font-bold rounded-lg text-sm px-5 py-2.5 text-center  hover:bg-zinc-800 ring-neutral-700">
                    View project
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </SectionCard>
    </div>
  );
};
