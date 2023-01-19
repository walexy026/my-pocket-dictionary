import React, { useEffect, useState, useMemo } from "react";
import "./Dico.css";
// import BiVolumeFull from " react-icons/bi";
import { FiVolume2 } from "react-icons/fi";

const synth = window.speechSynthesis;
const Dico = () => {
  // console.log(synth.getVoices());

  const voices = useMemo(() => synth.getVoices(), []);
  const [voiceSelected, setVoiceSelected] = useState("Google UK English Male");
  const [text, setText] = useState("");
  const [isSpeaking, setIsSpeaking] = useState(" ");

  // const handleIcon = () => {};
  const startSpeech = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
  };

  const handleSpeech = () => {
    if (!text.trim()) return;
    if (!synth.speaking) {
      startSpeech(text);
      setIsSpeaking("speak");
    } else {
      synth.cancel();
    }
    setInterval(() => {
      if (!synth.speaking) {
        setIsSpeaking("");
      }
    }, 100);
  };

  return (
    <div className="dicoWrapper">
      <h1>POCKET DICTIONARY</h1>
      <form>
        <textarea
          value={text}
          cols="30"
          rows="6"
          placeholder="Enter Text"
          onChange={(e) => setText(e.target.value)}
        />
        <div className="voice-div">
          <div className="voice-select">
            <select
              value={voiceSelected}
              onChange={(e) => setVoiceSelected(e.target.value)}
            >
              {voices.map((voice) => (
                <option key={voice.name} value={voice.name}>
                  {voice.name}
                </option>
              ))}
            </select>
          </div>
          {/* <BiVolumeFull /> */}
          {/* <div className="icon-Volume"> */}
          <FiVolume2
            className={`icon-Volume  ${isSpeaking}`}
            opacity="0.5"
            cursor="pointer"
            fontSize="1rem"
            onClick={handleSpeech}
          />
          {/* </div> */}
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

export default Dico;
