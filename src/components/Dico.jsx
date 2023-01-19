import React from "react";
import "./Dico.css";
const dico = () => {
  return (
    <div>
      <textarea name="" id="" cols="30" rows="10" placeholder=""></textarea>
      <div className="text">
        <h2>Meaning</h2>
        <p className="phonetics">/wɛt/ /wɛt/</p>
      </div>
      <div className="meaning">
        <h5>meaning</h5>
        <p>- A happy event, thing, person, etc.</p>
      </div>
      <div className="patOfSpeech">
        <h5>noun</h5>
        <p>
          - Having a feeling arising from a consciousness of well-being or of
          enjoyment; enjoying good of any kind, such as comfort, peace, or
          tranquillity; blissful, contented, joyous.
        </p>
      </div>
      <div className="synonyms">
        <h5>synonyms</h5>
        <p>
          cheerful, content, delighted, elated, exultant, glad, joyful,
          jubilant, merry, orgasmic, fortunate, lucky, propitious,
        </p>
      </div>
      <div className="antonyms"></div>
    </div>
  );
};

export default dico;
