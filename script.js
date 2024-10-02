const predictions = [
  "You will find great fortune in unexpected places.",
  "A new opportunity will present itself soon.",
  "You will overcome challenges with strength.",
  "A journey will change your perspective.",
  "Someone close to you will reveal a secret.",
];
const advice = [
  "Trust your instincts in uncertain times.",
  "Stay positive; good things are on the horizon.",
  "Don't be afraid to take risks.",
  "Focus on what you can control.",
  "Take time to relax and recharge.",
];
const luckyNumbers = [];
const moods = [
  "You will feel energized and motivated.",
  "A sense of calm will wash over you.",
  "You will experience moments of joy.",
  "Be prepared for a whirlwind of emotions.",
  "Your creativity will flow effortlessly.",
];

const generateFortune = () => {
  //Validate that arrays are not empty
  if (predictions.length === 0 || advice.length === 0 || moods.length === 0) {
    return "Fortune messages are not available.";
  }

  //Generate random index for each array
  const randomPredictions = Math.floor(Math.random() * predictions.length);
  const randomAdvice = Math.floor(Math.random() * advice.length);
  const randomMoods = Math.floor(Math.random() * moods.length);

  //Create the message object
  const randomMessageObj = {
    Prediction: predictions[randomPredictions],
    Advice: advice[randomAdvice],
    Mood: moods[randomMoods],
  };

  return randomMessageObj;
};

console.log(generateFortune());
