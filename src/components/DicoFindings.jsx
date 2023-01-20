import React from "react";
import "./Dico.css";

const DicoFindings = ({ meanings, phonetics, word, setText }) => {
  return (
    <div>
      <div className="text-container">
        <div className="text">
          <h2>{word}</h2>
          {phonetics.map((phonetic, index) => {
            <p className="phonetics" key={index}>
              {phonetic.text}/wɛt/ /wɛt/
            </p>;
          })}
        </div>
        <div className="meaning">
          <span>
            <h5>meaning</h5>
            <p>- A happy event, thing, person, etc.</p>
          </span>
        </div>
        <div className="patOfSpeech">
          <span>
            <h5>noun</h5>
            <p>
              - Having a feeling arising from a consciousness of well-being or
              of enjoyment; enjoying good of any kind, such as comfort, peace,
              or tranquillity; blissful, contented, joyous.
            </p>
          </span>
        </div>
        <div className="synonyms">
          <span>
            <h5>synonyms</h5>
            <span>
              cheerful, content, delighted, elated, exultant, glad, joyful,
              jubilant, merry, orgasmic, fortunate, lucky, propitious,
            </span>
          </span>
        </div>
        <div className="antonyms">
          <span>
            <h5>antonyms</h5>
            <span>
              Cheerful, content, delighted, elated, exultant, glad, joyful,
              jubilant, merry, orgasmic, fortunate, lucky, propitious,
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default DicoFindings;
