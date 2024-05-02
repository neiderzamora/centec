"use client";

import { useState } from "react";

const ButtonViewMore = ({ toggle, indexO, textVM, bgVM }) => (
  <button
    className={`p-.05 ${textVM} ${bgVM} hover:underline ml-2`}
    onClick={() => toggle(indexO)}
  >
    Ver más
  </button>
);

export default function CardUI({element, bgCard, shadowCCard, bgTitle, bgTop, colorDO, colorTitle, colorObj, textVM, bgVM }) {
  const [showFullText, setShowFullText] = useState(false);
  const [showFullTextO, setShowFullTextO] = useState(false);

  const toggleShowFullText = (index) => {
    setShowFullText((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };
  const toggleShowFullTextO = (index) => {
    setShowFullTextO((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div class="p-2 grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-6 lg:gap-y-8 text-white">
      {element.map((item, index) => (
        <div key={index} className={`${bgCard} rounded-bl-2xl shadow-xl ${shadowCCard}`}>
          <div className={`py-1.5 ${bgTop} flex justify-between`}></div>
          <div className="grid gap-y-2">
            <h4 className={`w-full ${bgTitle} text-xl lg:text-lg font-semibold text-left ${colorTitle} pt-4 px-2 pb-2`}>
              {item.title}
            </h4>
            <div className="px-3 pb-4">
              <p className={`${colorDO}`}>
                {showFullText[index]
                  ? item.description
                  : `${item.description.slice(0, 70)}...`}
                {!showFullText[index] &&
                  item.description &&
                  item.description.length > 70 && (
                    <ButtonViewMore
                    toggle={toggleShowFullText}
                    indexO={index}
                    textVM={textVM}
                    bgVM={bgVM}
                  />
                  )}
              </p>
              <div>
                <h5 className={`text-xl lg:text-lg font-semibold text-left ${colorObj} py-5 pb-2`}>
                  Objetivos
                </h5>
                <p className={`${colorDO}`}>
                  {showFullTextO[index]
                    ? item.objective
                    : `${item.objective.slice(0, 70)}...`}
                  {!showFullTextO[index] &&
                    item.objective &&
                    item.objective.length > 70 && (
                      <ButtonViewMore
                        toggle={toggleShowFullTextO}
                        indexO={index}
                        textVM={textVM}
                        bgVM={bgVM}
                      />
                    )}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
