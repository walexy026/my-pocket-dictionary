import React, { useEffect, useState, useMemo } from "react";
import "./Dico.css";
import DicoFindings from "./DicoFindings";
// import BiVolumeFull from " react-icons/bi";
import { FiVolume2 } from "react-icons/fi";

const synth = window.speechSynthesis;
const Dico = () => {
  // console.log(synth.getVoices());
  // console.log("first");

  const voices = useMemo(() => synth.getVoices(), []);
  const [voiceSelected, setVoiceSelected] = useState("Google UK English Male");
  const [text, setText] = useState("");
  const [isSpeaking, setIsSpeaking] = useState(" ");

  // const dictionaryUrl = (text) => {
  //   let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${text}`;
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((result) => {
  //       console.log(result);
  //     });
  // };

  // useEffect =
  //   (() => {
  //     if (!text.trim()) return;
  //     dictionaryUrl(text);
  //   },
  //   [text]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => console.log(actualData))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
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
      <DicoFindings />
    </div>
  );
};

export default Dico;
