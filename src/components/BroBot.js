import React, { useState,useEffect } from 'react';
import axios from 'axios';
import '../App.css'
const SpeechRecognitionComponent = () => {
  const [transcription, setTranscription] = useState('');
  let [recognizedSpeech, setRecognizedSpeech] = useState('Who are you ?');
  const [isRecognitionSupported, setIsRecognitionSupported] = useState(true);
  const [speechSynthesisSupported, setSpeechSynthesisSupported] = useState(true);

  useEffect(() => {
    speak('Hi I am Bro-Bot, Click me and ask.')
  }, []);

  const startRecognition = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition;

    if (SpeechRecognition) {
      setRecognizedSpeech('');
      const recognition = new SpeechRecognition();
      recognition.lang = 'en-US'; // Set language

      recognition.onstart = () => {
        console.log('Speech recognition started');
      };

      recognition.onresult = event => {
        const transcript = event.results[0][0].transcript;
        setTranscription(transcript);
        // Update recognized speech on each result
        setRecognizedSpeech(prevSpeech => prevSpeech + transcript + ' ');
      };

      recognition.onerror = event => {
        console.error('Speech recognition error:', event.error);
      };

      recognition.onend = async () => {
        console.log('Speech recognition ended');
        // Log the recognized speech after recognition ends
        console.log('Recognized speech:', recognizedSpeech);
        let data = {};
        data.message = recognizedSpeech;
        const response = await axios.post('https://botapi.begelled.com/chat', data);
        console.log("ans", response.data.response);
        speak(response.data.response)
      };

      recognition.start();
    } else {
      setIsRecognitionSupported(false);
    }
  };
  const speak = (data) => {
    if ('speechSynthesis' in window) {
      const speechSynthesis = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(data);

      utterance.onend = () => {
        // Reset recognizedSpeech to null after speech synthesis is complete
        // setRecognizedSpeech(null);
      };

      speechSynthesis.speak(utterance);

    } else {
      setSpeechSynthesisSupported(false);
    }
  };


  return (
    <div>
    <h2 class="bro-bot-title">Click me and ask</h2>
    <div id="g" onClick={startRecognition} disabled={!isRecognitionSupported}>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path id="wave1" fill="#FF0066" d="M32.1,-55.6C40.5,-50.8,45.4,-39.9,50.3,-29.7C55.2,-19.4,60,-9.7,61.9,1.1C63.8,11.9,62.7,23.7,57.7,33.8C52.7,43.9,43.8,52.1,33.5,57.4C23.3,62.7,11.6,64.9,1.1,63.1C-9.5,61.2,-19,55.3,-32.4,51.8C-45.8,48.4,-63.1,47.4,-68.6,39.2C-74,30.9,-67.7,15.5,-65.2,1.4C-62.7,-12.6,-64.1,-25.2,-59.5,-34.8C-54.8,-44.5,-44,-51.1,-33.1,-54.4C-22.2,-57.8,-11.1,-57.8,0.4,-58.5C11.9,-59.2,23.8,-60.4,32.1,-55.6Z" transform="translate(100 100)">
          <animate attributeName="d"
          dur="20s"
          repeatCount="indefinite"
          
          values="
          M32.1,-55.6C40.5,-50.8,45.4,-39.9,50.3,-29.7C55.2,-19.4,60,-9.7,61.9,1.1C63.8,11.9,62.7,23.7,57.7,33.8C52.7,43.9,43.8,52.1,33.5,57.4C23.3,62.7,11.6,64.9,1.1,63.1C-9.5,61.2,-19,55.3,-32.4,51.8C-45.8,48.4,-63.1,47.4,-68.6,39.2C-74,30.9,-67.7,15.5,-65.2,1.4C-62.7,-12.6,-64.1,-25.2,-59.5,-34.8C-54.8,-44.5,-44,-51.1,-33.1,-54.4C-22.2,-57.8,-11.1,-57.8,0.4,-58.5C11.9,-59.2,23.8,-60.4,32.1,-55.6Z;
      
          M40.4,-65.5C53.9,-62.1,67.7,-54.6,76.7,-43C85.7,-31.3,89.9,-15.7,89.8,-0.1C89.6,15.5,85.1,31,77.1,44.3C69.1,57.6,57.6,68.7,44.1,73.1C30.7,77.6,15.3,75.5,0,75.5C-15.4,75.6,-30.8,77.8,-39.3,70.4C-47.8,63.1,-49.4,46.3,-50.2,32.9C-51,19.6,-51,9.8,-49.6,0.8C-48.3,-8.2,-45.5,-16.4,-43.1,-27.1C-40.7,-37.7,-38.8,-50.7,-31.6,-57.9C-24.5,-65.1,-12.3,-66.4,0.6,-67.4C13.4,-68.4,26.8,-69,40.4,-65.5Z;
      
          M26,-46.4C37.3,-38.6,52.4,-38.8,59.9,-32.4C67.5,-26,67.5,-13,69.4,1.1C71.2,15.1,74.8,30.2,67.2,36.5C59.6,42.8,40.7,40.3,27.6,46.4C14.5,52.5,7.3,67.1,-1.3,69.4C-10,71.8,-19.9,61.7,-29.8,53.8C-39.7,45.9,-49.6,40.1,-58.3,31.5C-67.1,22.9,-74.8,11.4,-71.3,2C-67.8,-7.4,-53.3,-14.9,-45.5,-25.3C-37.8,-35.7,-36.9,-49,-30.5,-59.6C-24,-70.2,-12,-78,-2.3,-74C7.4,-70,14.8,-54.2,26,-46.4Z;
      
          M37.7,-65.7C46,-60.6,47.9,-44.7,54.9,-31.9C61.8,-19.2,73.9,-9.6,73,-0.6C72,8.4,57.9,16.9,50.7,29.2C43.5,41.5,43,57.7,35.7,64.7C28.4,71.7,14.2,69.5,0.5,68.7C-13.3,67.9,-26.6,68.5,-39.3,64.6C-52.1,60.8,-65,52,-72.3,40.9C-79.6,29.9,-81.4,16.5,-80.2,1.9C-79,-12.8,-74.9,-26.9,-67.7,-37.2C-60.5,-47.5,-50.1,-54.1,-38.6,-61.6C-27,-69.1,-14.5,-77.6,-0.3,-76.7C13.8,-75.8,27.5,-65.4,37.7,-65.7Z;
      
          M25.2,-37.6C37,-36.7,54.1,-38.9,60.2,-33.2C66.3,-27.4,61.4,-13.7,55.2,-3.6C49.1,6.6,41.7,13.2,39.4,25.6C37.2,38.1,40.1,56.3,34.4,67.9C28.7,79.5,14.4,84.4,0.2,84C-13.9,83.6,-27.8,78,-38.9,69.5C-50.1,61,-58.3,49.8,-67.7,37.7C-77.1,25.6,-87.6,12.8,-89.8,-1.3C-92.1,-15.4,-86.1,-30.8,-77.4,-44.1C-68.7,-57.4,-57.4,-68.5,-44,-68.6C-30.7,-68.7,-15.3,-57.7,-4.3,-50.2C6.6,-42.7,13.3,-38.6,25.2,-37.6Z;
      
          M36.4,-61.5C43.4,-58.9,42.7,-41.6,45.1,-28.9C47.4,-16.2,52.8,-8.1,52.9,0.1C53,8.2,47.8,16.4,45.1,28.6C42.5,40.7,42.3,56.9,35.2,59.7C28.1,62.6,14.1,52.2,0.8,50.8C-12.5,49.5,-25,57.2,-38.1,57.9C-51.3,58.5,-65,52,-70.3,41.1C-75.6,30.3,-72.4,15.2,-66.7,3.3C-61.1,-8.6,-52.9,-17.2,-48.6,-29.8C-44.3,-42.3,-43.9,-58.9,-36.5,-61.2C-29,-63.6,-14.5,-51.8,0.1,-51.9C14.7,-52,29.3,-64.1,36.4,-61.5Z;
      
          M32.1,-55.6C40.5,-50.8,45.4,-39.9,50.3,-29.7C55.2,-19.4,60,-9.7,61.9,1.1C63.8,11.9,62.7,23.7,57.7,33.8C52.7,43.9,43.8,52.1,33.5,57.4C23.3,62.7,11.6,64.9,1.1,63.1C-9.5,61.2,-19,55.3,-32.4,51.8C-45.8,48.4,-63.1,47.4,-68.6,39.2C-74,30.9,-67.7,15.5,-65.2,1.4C-62.7,-12.6,-64.1,-25.2,-59.5,-34.8C-54.8,-44.5,-44,-51.1,-33.1,-54.4C-22.2,-57.8,-11.1,-57.8,0.4,-58.5C11.9,-59.2,23.8,-60.4,32.1,-55.6Z"
          ></animate>
        </path>
      </svg>
    </div>
    <p class="bro-bot-title2">Basic intro</p>
    <p class="bro-bot-title2">Educational information</p>
    <p class="bro-bot-title2">About skill</p>
    <p class="bro-bot-title2">Professional Information</p>
    <a href="/" class="bro-bot-title2">Go Home</a>
    </div>
  );
};

export default SpeechRecognitionComponent;
