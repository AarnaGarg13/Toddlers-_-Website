function playSound(letter) {
    const speech = new SpeechSynthesisUtterance(letter);  // Create a speech object
    speech.lang = "en-US";  // Set the language for speech
    window.speechSynthesis.speak(speech);  // Play the sound
  }
let audioPlayer = new Audio();
function playAudio(file) {
    if (!audioPlayer.paused) {
        audioPlayer.pause();
    }
    audioPlayer.src = file;
    audioPlayer.load();
    audioPlayer.play();
}
function change_to_story_one(){
  window.location.href = "the_lion_and_the_mouse.html";
}
function change_to_story_two(){
  window.location.href = "the_hare_and_the_tortoise.html";
}
function change_to_story_three(){
  window.location.href = "the_little_red_riding_hood.html";
}
function change_to_story_four(){
  window.location.href = "the_boy_who_cried_wolf.html";
}

function button_story(letter){
   const speech = new SpeechSynthesisUtterance(letter);  // Create a speech object
    speech.lang = "en-US";  // Set the language for speech
    window.speechSynthesis.speak(speech);  // Play the sound
    const btn = document.getElementById("speech_btn");
    btn.disabled = true;
    btn.innerText = "Story is beginning."
}
function stop_story(){
  speechSynthesis.cancel();
  const btn = document.getElementById("speech_btn");
  btn.innerText = "The story has been stopped.";
}
function restart(){
  speechSynthesis.cancel();
  button_story("The Lion and the Mouse:  A  Lion lay asleep in the forest, his great head resting on his paws. A timid little Mouse came upon him unexpectedly, and in her fright and haste to get away, ran across the Lions nose. Roused from his nap, the Lion laid his huge paw angrily on the tiny creature to kill her. Spare me begged the poor Mouse. Please let me go and some day I will surely repay you. The Lion was much amused to think that a Mouse could ever help him. But he was generous and finally let the Mouse go. Some days later, while stalking his prey in the forest, the Lion was caught in the toils of a hunters net. Unable to free himself, he filled the forest with his angry roaring. The Mouse knew the voice and quickly found the Lion struggling in the net. Running to one of the great ropes that bound him, she gnawed it until it parted, and soon the Lion was free. You laughed when I said I would repay you said the Mouse. Now you see that even a Mouse can help a Lion.");
}
function q1(){
  document.getElementById("q1_3").style.backgroundColor = "green";
  document.getElementById("q1_1").style.backgroundColor = "red";
  document.getElementById("q1_2").style.backgroundColor = "red";
  document.getElementById("q1_4").style.backgroundColor = "red";
  document.getElementById("c1").style.display = "inline";
}
function q2(){
  document.getElementById("q2_4").style.backgroundColor = "green";
  document.getElementById("q2_1").style.backgroundColor = "red";
  document.getElementById("q2_2").style.backgroundColor = "red";
  document.getElementById("q2_3").style.backgroundColor = "red";
  document.getElementById("c2").style.display = "inline";
}
function q3(){
  document.getElementById("q3_1").style.backgroundColor = "green";
  document.getElementById("q3_4").style.backgroundColor = "red";
  document.getElementById("q3_2").style.backgroundColor = "red";
  document.getElementById("q3_3").style.backgroundColor = "red";
  document.getElementById("c3").style.display = "inline";
}
function q4(){
  document.getElementById("q4_2").style.backgroundColor = "green";
  document.getElementById("q4_1").style.backgroundColor = "red";
  document.getElementById("q4_4").style.backgroundColor = "red";
  document.getElementById("q4_3").style.backgroundColor = "red";
  document.getElementById("c4").style.display = "inline";
}
function q5(){
  document.getElementById("q5_4").style.backgroundColor = "green";
  document.getElementById("q5_1").style.backgroundColor = "red";
  document.getElementById("q5_2").style.backgroundColor = "red";
  document.getElementById("q5_3").style.backgroundColor = "red";
  document.getElementById("c5").style.display = "inline";
}
function q6(){
  document.getElementById("q6_1").style.backgroundColor = "green";
  document.getElementById("q6_4").style.backgroundColor = "red";
  document.getElementById("q6_2").style.backgroundColor = "red";
  document.getElementById("q6_3").style.backgroundColor = "red";
  document.getElementById("c6").style.display = "inline";
}
function q7(){
  document.getElementById("q7_4").style.backgroundColor = "green";
  document.getElementById("q7_1").style.backgroundColor = "red";
  document.getElementById("q7_2").style.backgroundColor = "red";
  document.getElementById("q7_3").style.backgroundColor = "red";
  document.getElementById("c7").style.display = "inline";
}
function q8(){
  document.getElementById("q8_3").style.backgroundColor = "green";
  document.getElementById("q8_1").style.backgroundColor = "red";
  document.getElementById("q8_2").style.backgroundColor = "red";
  document.getElementById("q8_4").style.backgroundColor = "red";
  document.getElementById("c8").style.display = "inline";
}
function q9(){
  document.getElementById("q9_2").style.backgroundColor = "green";
  document.getElementById("q9_1").style.backgroundColor = "red";
  document.getElementById("q9_3").style.backgroundColor = "red";
  document.getElementById("q9_4").style.backgroundColor = "red";
  document.getElementById("c9").style.display = "inline";
}
function q10(){
  document.getElementById("q10_4").style.backgroundColor = "green";
  document.getElementById("q10_1").style.backgroundColor = "red";
  document.getElementById("q10_3").style.backgroundColor = "red";
  document.getElementById("q10_2").style.backgroundColor = "red";
  document.getElementById("c10").style.display = "inline";
}
function q11(){
  document.getElementById("q11_1").style.backgroundColor = "green";
  document.getElementById("q11_4").style.backgroundColor = "red";
  document.getElementById("q11_2").style.backgroundColor = "red";
  document.getElementById("q11_3").style.backgroundColor = "red";
  document.getElementById("c11").style.display = "inline";
}
function q12(){
  document.getElementById("q12_4").style.backgroundColor = "green";
  document.getElementById("q12_1").style.backgroundColor = "red";
  document.getElementById("q12_2").style.backgroundColor = "red";
  document.getElementById("q12_3").style.backgroundColor = "red";
  document.getElementById("c12").style.display = "inline";
}
function q13(){
  document.getElementById("q13_3").style.backgroundColor = "green";
  document.getElementById("q13_1").style.backgroundColor = "red";
  document.getElementById("q13_2").style.backgroundColor = "red";
  document.getElementById("q13_4").style.backgroundColor = "red";
  document.getElementById("c13").style.display = "inline";
}
function q14(){
  document.getElementById("q14_2").style.backgroundColor = "green";
  document.getElementById("q14_1").style.backgroundColor = "red";
  document.getElementById("q14_3").style.backgroundColor = "red";
  document.getElementById("q14_4").style.backgroundColor = "red";
  document.getElementById("c14").style.display = "inline";
}
function q15(){
  document.getElementById("q15_4").style.backgroundColor = "green";
  document.getElementById("q15_1").style.backgroundColor = "red";
  document.getElementById("q15_3").style.backgroundColor = "red";
  document.getElementById("q15_2").style.backgroundColor = "red";
  document.getElementById("c15").style.display = "inline";
}
function q16(){
  document.getElementById("q16_1").style.backgroundColor = "green";
  document.getElementById("q16_4").style.backgroundColor = "red";
  document.getElementById("q16_2").style.backgroundColor = "red";
  document.getElementById("q16_3").style.backgroundColor = "red";
  document.getElementById("c16").style.display = "inline";
}
function q17(){
  document.getElementById("q17_4").style.backgroundColor = "green";
  document.getElementById("q17_1").style.backgroundColor = "red";
  document.getElementById("q17_2").style.backgroundColor = "red";
  document.getElementById("q17_3").style.backgroundColor = "red";
  document.getElementById("c17").style.display = "inline";
}
function q18(){
  document.getElementById("q18_3").style.backgroundColor = "green";
  document.getElementById("q18_1").style.backgroundColor = "red";
  document.getElementById("q18_2").style.backgroundColor = "red";
  document.getElementById("q18_4").style.backgroundColor = "red";
  document.getElementById("c18").style.display = "inline";
}
function q19(){
  document.getElementById("q19_2").style.backgroundColor = "green";
  document.getElementById("q19_1").style.backgroundColor = "red";
  document.getElementById("q19_3").style.backgroundColor = "red";
  document.getElementById("q19_4").style.backgroundColor = "red";
  document.getElementById("c19").style.display = "inline";
}
function q20(){
  document.getElementById("q20_4").style.backgroundColor = "green";
  document.getElementById("q20_1").style.backgroundColor = "red";
  document.getElementById("q20_3").style.backgroundColor = "red";
  document.getElementById("q20_2").style.backgroundColor = "red";
  document.getElementById("c20").style.display = "inline";
}
function q21(){
  document.getElementById("q21_1").style.backgroundColor = "green";
  document.getElementById("q21_4").style.backgroundColor = "red";
  document.getElementById("q21_2").style.backgroundColor = "red";
  document.getElementById("q21_3").style.backgroundColor = "red";
  document.getElementById("c21").style.display = "inline";
}
function q22(){
  document.getElementById("q22_4").style.backgroundColor = "green";
  document.getElementById("q22_1").style.backgroundColor = "red";
  document.getElementById("q22_2").style.backgroundColor = "red";
  document.getElementById("q22_3").style.backgroundColor = "red";
  document.getElementById("c22").style.display = "inline";
}
function q23(){
  document.getElementById("q23_3").style.backgroundColor = "green";
  document.getElementById("q23_1").style.backgroundColor = "red";
  document.getElementById("q23_2").style.backgroundColor = "red";
  document.getElementById("q23_4").style.backgroundColor = "red";
  document.getElementById("c23").style.display = "inline";
}
function q24(){
  document.getElementById("q24_2").style.backgroundColor = "green";
  document.getElementById("q24_1").style.backgroundColor = "red";
  document.getElementById("q24_3").style.backgroundColor = "red";
  document.getElementById("q24_4").style.backgroundColor = "red";
  document.getElementById("c24").style.display = "inline";
}
function q25(){
  document.getElementById("q25_4").style.backgroundColor = "green";
  document.getElementById("q25_1").style.backgroundColor = "red";
  document.getElementById("q25_3").style.backgroundColor = "red";
  document.getElementById("q25_2").style.backgroundColor = "red";
  document.getElementById("c25").style.display = "inline";
}
function q26(){
  document.getElementById("q26_1").style.backgroundColor = "green";
  document.getElementById("q26_4").style.backgroundColor = "red";
  document.getElementById("q26_2").style.backgroundColor = "red";
  document.getElementById("q26_3").style.backgroundColor = "red";
  document.getElementById("c26").style.display = "inline";
}
function q27(){
  document.getElementById("q27_4").style.backgroundColor = "green";
  document.getElementById("q27_1").style.backgroundColor = "red";
  document.getElementById("q27_2").style.backgroundColor = "red";
  document.getElementById("q27_3").style.backgroundColor = "red";
  document.getElementById("c27").style.display = "inline";
}
function q28(){
  document.getElementById("q28_3").style.backgroundColor = "green";
  document.getElementById("q28_1").style.backgroundColor = "red";
  document.getElementById("q28_2").style.backgroundColor = "red";
  document.getElementById("q28_4").style.backgroundColor = "red";
  document.getElementById("c28").style.display = "inline";
}
function q29(){
  document.getElementById("q29_2").style.backgroundColor = "green";
  document.getElementById("q29_1").style.backgroundColor = "red";
  document.getElementById("q29_3").style.backgroundColor = "red";
  document.getElementById("q29_4").style.backgroundColor = "red";
  document.getElementById("c29").style.display = "inline";
}
function q30(){
  document.getElementById("q30_4").style.backgroundColor = "green";
  document.getElementById("q30_1").style.backgroundColor = "red";
  document.getElementById("q30_3").style.backgroundColor = "red";
  document.getElementById("q30_2").style.backgroundColor = "red";
  document.getElementById("c30").style.display = "inline";
}
function hideElement(){
  document.getElementById("alphaQuiz").style.display = "inline";
  document.getElementById("colQuiz").style.display = "none";
  document.getElementById("numQuiz").style.display = "none";
  document.getElementById("aniQuiz").style.display = "none";
  document.getElementById("birdQuiz").style.display = "none";
  document.getElementById("fruVegQuiz").style.display = "none";
}
function hideElement1(){
  document.getElementById("alphaQuiz").style.display = "none";
  document.getElementById("colQuiz").style.display = "none";
  document.getElementById("numQuiz").style.display = "inline";
  document.getElementById("aniQuiz").style.display = "none";
  document.getElementById("birdQuiz").style.display = "none";
  document.getElementById("fruVegQuiz").style.display = "none";
}
function hideElement2(){
  document.getElementById("alphaQuiz").style.display = "none";
  document.getElementById("numQuiz").style.display = "none";
  document.getElementById("colQuiz").style.display = "inline";
  document.getElementById("aniQuiz").style.display = "none";
  document.getElementById("birdQuiz").style.display = "none";
  document.getElementById("fruVegQuiz").style.display = "none";
}
function hideElement3(){
  document.getElementById("alphaQuiz").style.display = "none";
  document.getElementById("numQuiz").style.display = "none";
  document.getElementById("colQuiz").style.display = "none";
  document.getElementById("aniQuiz").style.display = "inline";
  document.getElementById("birdQuiz").style.display = "none";
  document.getElementById("fruVegQuiz").style.display = "none";
}
function hideElement4(){
  document.getElementById("alphaQuiz").style.display = "none";
  document.getElementById("numQuiz").style.display = "none";
  document.getElementById("colQuiz").style.display = "none";
  document.getElementById("aniQuiz").style.display = "none";
  document.getElementById("birdQuiz").style.display = "inline";
  document.getElementById("fruVegQuiz").style.display = "none";
}
function hideElement5(){
  document.getElementById("alphaQuiz").style.display = "none";
  document.getElementById("numQuiz").style.display = "none";
  document.getElementById("colQuiz").style.display = "none";
  document.getElementById("aniQuiz").style.display = "none";
  document.getElementById("birdQuiz").style.display = "none";
  document.getElementById("fruVegQuiz").style.display = "inline";
}