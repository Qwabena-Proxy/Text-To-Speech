function ttaudio(){
  let msg = document.getElementById("tts").value;
  let speech = new SpeechSynthesisUtterance();
  speech.lang = "en-IN";
  speech.text = msg;
  speech.volume = 500;
  speech.rate = 0.6;
  speech.pitch = 1;
  window.speechSynthesis.speak(speech);
}