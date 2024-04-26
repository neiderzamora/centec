"use client";
import React, { useState } from "react";
import { ClockIcon } from "@heroicons/react/24/outline";
import ModalExtend from "./modal_extend";

export const Campus = ({
  bgLeft,
  bgRight,
  borderColor,
  bgDP,
  textColorTime,
  bgTime,
  campus,
  campusName,
  colorTitle
}) => {
  const [currentProgram, setCurrentProgram] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModalHandler = (programInfo) => {
    if (programInfo) {
      setCurrentProgram(programInfo);
      setIsModalOpen(true);
    }
  };

  const closeModalHandler = () => {
    setCurrentProgram(null);
    setIsModalOpen(false);
  };
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
        <h2 className={`text-4xl sm:text-5xl pb-6 lg:pb-10 text-left font-bold tracking-tight ${colorTitle} `}>
          {campusName}
        </h2>
      </div>
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-10">
        {campus.map((item, index) => (
          <button
            key={index}
            onClick={() => openModalHandler(item)}
            className={`text-left mx-auto max-w-2xl lg:col-span-7 lg:max-w-none w-full lg:pt-6 xl:col-span-6 border-2 ${borderColor} shadow-gray-600 bg-gradient-to-r ${bgLeft} ${bgRight} shadow-md p-4 rounded-lg my-4 lg:my-0 hover:opacity-50 hover:transition-opacity cursor-pointer hover:delay-0`}
          >
            <div className="lg:flex lg:justify-between">
              <p className="lg:hidden bg-secondaryDarkBlue py-0.5 text-xs mb-2 inline-flex rounded-full px-2">
                <ClockIcon className="lg:hidden inline-flex font-bold h-4 w-4 bg-secondarDarkBlue mr-2" />
                {item.timeProgram}
              </p>
              <div className="lg:max-w-[26rem]">
                <h3 className="text-2xl lg:text-3xl text-white font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="hidden lg:block mt-6 text-base text-gray-200 ">
                  {item.description}
                </p>
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <p
                  className={`hidden lg:flex my-auto ${bgDP} rounded-t-md font-semibold p-2 justify-center items-center w-full h-full`}
                >
                  Duración del programa
                </p>
                <p
                  className={`hidden lg:flex ${textColorTime} font-semibold ${bgTime} w-full h-full p-2 rounded-b-md my-auto justify-center items-center`}
                >
                  {item.timeProgram}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>
      <ModalExtend
        programInfo={currentProgram}
        open={isModalOpen}
        setOpen={closeModalHandler}
      />
    </div>
  );
};
