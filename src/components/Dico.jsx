import React from "react";
import "./Dico.css";
// import BiVolumeFull from " react-icons/bi";
import { FiVolume2 } from "react-icons/fi";
const dico = () => {
  return (
    <div className="dicoWrapper">
      <h1>POCKET DICTIONARY</h1>
      <form>
        <textarea name="" id="" cols="30" rows="6" placeholder="Enter Text" />
        <div className="voice-div">
          <div className="voice-select">
            <select name="" id="">
              <option value="">English</option>
              <option value="">English</option>
              <option value="">English</option>
            </select>
          </div>
          {/* <BiVolumeFull /> */}
          <div className="icon-Volume">
            <FiVolume2 opacity="0.5" cursor="pointer" fontSize="1rem" />
          </div>
        </div>
      </form>
      <div className="text-container">
        <div className="text">
          <h2>Meaning</h2>
          <p className="phonetics">/wɛt/ /wɛt/</p>
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

export default dico;
