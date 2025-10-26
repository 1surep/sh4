"use client";
import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";

const GuessGame = ({ onClose }) => {
  const [currentChallenge, setCurrentChallenge] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [shakeAnimation, setShakeAnimation] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  // Game data with different question types and images
  const gameData = [
    {
      type: "fun",
      question: "How much is the Rego for 2027 PAH?",
      correctAnswer: "150 USD Dollars",
      options: ["261 NZD Dollars", "210 CAD Dollars", "150 USD Dollars", "230 AUD Dollars"],
      image: "/gamedata/g1.jpg",
    },
    {
      type: "fun",
      question: "What is this event called in the hash?",
      correctAnswer: "Red Dress Run",
      options: ["Red Star Trail", "Red Dress Run", "Red Circle Hike", "Red Beer Walk"],
      image: "/gamedata/g2.jpg",
    },
    {
      type: "fun",
      question: "What was this table called in PAH 2025?",
      correctAnswer: "Spirits of Africa",
      options: ["Liquor of Africa ", "Cider of Africa ", "Draught of Africa ", "Spirits of Africa"],
      image: "/gamedata/g3.jpg",
    },
    {
      type: "fun",
      question: "What is this gathering called in the Hash?",
      correctAnswer: "Circle",
      options: ["Circle", "Town Hall", "Round up", "Line up"],
      image: "/gamedata/g4.jpg",
    },
    {
      type: "fun",
      question: "This is the national flag of?",
      correctAnswer: "Sierra Leone",
      options: ["Sierra Hash", "Sierra Lima", "Sierra Leone", "Sierra Freetown"],
      image: "/gamedata/g5.jpg",
    },
    {
      type: "fun",
      question: "What Month will PAH be hosted in 2027?",
      correctAnswer: "October 2027",
      options: ["October 2027", "November 2027", "September 2027", "December 2027"],
      image: "/gamedata/g6.jpg",
    },
    {
      type: "fun",
      question: "What are they called in the hash?",
      correctAnswer: "Hash Masters",
      options: ["Joint Masters ", "Hash Masters", "Head Masters", "Wike's Boiz"],
      image: "/gamedata/g7.jpg",
    },
    {
      type: "fun",
      question: "A kennel is presided by?",
      correctAnswer: "Hash Mismanagement",
      options: ["Hash Mismanagement", "Hash Organizers", "Hash Circle", "Hash Council"],
      image: "/gamedata/g8.jpg",
    },
    {
      type: "fun",
      question: "Pan Africa Hash 2027 will be hosted in which region?",
      correctAnswer: "WEST AFRICA",
      options: ["EAST AFRICA", "SOUTH AFRICA", "WEST AFRICA", "PAN AFRICA"],
      image: "/gamedata/g9.jpg",
    },
    {
      type: "fun",
      question: "Which is the correct one?",
      correctAnswer: "Sierra HHHH",
      options: ["Sierra HHHH", "Sierra H3", "Sierra HHH", "Sierra H⁵"],
      image: "/gamedata/g10.jpg",
    },
    {
      type: "fun",
      question: "What Logo is this?",
      correctAnswer: "PAH Ghana 2025",
      options: ["PAH East Legon 2025", "PAH Ghana 2025", "PAH Aburi Hills 2025", "PAH Osu 2025"],
      image: "/gamedata/g11.jpg",
    },
    {
      type: "fun",
      question: "Sierra H4 Runs every?",
      correctAnswer: "Wednesday at 6PM",
      options: ["Wednesday at 6PM", "Saturday at 6PM", "Friday at 6PM", "Thursday at 6PM"],
      image: "/gamedata/g13.jpg",
    },
    {
      type: "fun",
      question: "Sierra H4 also runs?",
      correctAnswer: "Every 1st Saturday at 10AM",
      options: ["Every Saturday at 10AM", "Every 1st Saturday at 10AM", "Every 4th Saturday at 10AM", "Every 3rd Saturday at 10AM"],
      image: "/gamedata/g12.jpg",
    },
    {
      type: "fun",
      question: "What do you need to attend PAH 2027?",
      correctAnswer: "Rego and Hotel",
      options: ["Rego and Hotel", "Diego and Chantel", "Tango and Motel", "Small Chops & Big Chops"],
      image: "/gamedata/g14.jpg",
    },
    {
      type: "fun",
      question: "PAH is hosted on which Continent?",
      correctAnswer: "Africa",
      options: ["North Africa", "Africa", "South Africa ", "North America"],
      image: "/gamedata/g15.jpg",
    },
    {
      type: "fun",
      question: "What is this called in the Hash?",
      correctAnswer: "Happy Coat",
      options: ["Happy Coat", "#NWTS Coat", "Happy Cloak", "Happy Gear"],
      image: "/gamedata/g16.jpg",
    },
    {
      type: "fun",
      question: "What is this called in the Hash?",
      correctAnswer: "Hash Gear",
      options: ["Hash Coat", "Hash Gear", "Hash Wear", "Hash  Hare"],
      image: "/gamedata/g17.jpg",
    },
    {
      type: "fun",
      question: "What day is October 22, 2027?",
      correctAnswer: "Friday",
      options: ["Friday", "Thursday ", "Saturday ", "Wednesday "],
      image: "/gamedata/g18.jpg",
    },
    {
      type: "fun",
      question: "What is this liquid called?",
      correctAnswer: "Lager",
      options: ["Lager", "Foamy Head", "Pisspot", "Tequila"],
      image: "/gamedata/g19.jpg",
    },
    {
      type: "fun",
      question: "First PAH in 1996 was held in?",
      correctAnswer: "Addis Ababa",
      options: ["Addis Alem", "Addis Ejersa", "Addis Ababa", "Addis Ejerie"],
      image: "/gamedata/g20.jpg",
    },
  ];

  const [currentChallengeData, setCurrentChallengeData] = useState(null);

  // Shuffle entire questions array
  const shuffleQuestions = () => {
    return [...gameData].sort(() => Math.random() - 0.5);
  };

  // Generate challenge from shuffled questions using index
  const generateChallenge = (questions) => {
    const selectedQuestion = questions[currentChallenge];

    // Shuffle the options to randomize their positions
    const shuffledOptions = [...selectedQuestion.options].sort(
      () => Math.random() - 0.5
    );
    const correctAnswerIndex = shuffledOptions.findIndex(
      (option) => option === selectedQuestion.correctAnswer
    );

    return {
      question: selectedQuestion.question,
      image: selectedQuestion.image,
      options: shuffledOptions,
      correctAnswer: selectedQuestion.correctAnswer,
      correctAnswerIndex: correctAnswerIndex,
      type: selectedQuestion.type,
    };
  };

  // Initialize with shuffled questions on mount
  useEffect(() => {
    const shuffled = shuffleQuestions();
    setShuffledQuestions(shuffled);
    setCurrentChallengeData(generateChallenge(shuffled));
  }, []);

  // Update challenge when currentChallenge changes
  useEffect(() => {
    if (shuffledQuestions.length > 0) {
      setCurrentChallengeData(generateChallenge(shuffledQuestions));
    }
  }, [currentChallenge, shuffledQuestions]);

  const handleAnswerSelect = (answerIndex) => {
    if (showFeedback) return;

    setSelectedAnswer(answerIndex);
    const correct = answerIndex === currentChallengeData.correctAnswerIndex;
    setIsCorrect(correct);
    setShowFeedback(true);

    if (correct) {
      setScore(score + 1);
      // Trigger confetti animation
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: [
          "#f9b84f",
          "#ff6b6b",
          "#4ecdc4",
          "#45b7d1",
          "#96ceb4",
          "#feca57",
        ],
      });
    } else {
      setShakeAnimation(true);
      setTimeout(() => setShakeAnimation(false), 500);
    }

    // Move to next challenge after delay
    setTimeout(() => {
      if (currentChallenge < 19) {
        setCurrentChallenge(currentChallenge + 1);
        setSelectedAnswer(null);
        setShowFeedback(false);
      } else {
        setGameCompleted(true);
      }
    }, 2000);
  };

  const restartGame = () => {
    const shuffled = shuffleQuestions();
    setShuffledQuestions(shuffled);
    setCurrentChallenge(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setIsCorrect(false);
    setGameCompleted(false);
    setCurrentChallengeData(generateChallenge(shuffled));
  };

  if (gameCompleted) {
    return (
      <div className="text-center p-6">
        <h2 className="text-2xl font-bold text-white mb-3">Game Complete!</h2>
        <div className="text-5xl mb-3">🎉</div>
        <p className="text-lg text-gray-300 mb-5">
          You got <span className="text-yellow-400 font-bold">{score}/20</span>{" "}
          right!
        </p>
        <div className="space-y-3">
          <button
            onClick={restartGame}
            className="bg-yellow-500 cursor-pointer hover:bg-yellow-600 text-black font-semibold px-5 py-2 rounded-xl transition-all mr-3"
          >
            Play Again
          </button>
          <button
            onClick={onClose}
            className="bg-gray-600 cursor-pointer hover:bg-gray-700 text-white font-semibold px-5 py-2 rounded-xl transition-all"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  if (!currentChallengeData)
    return <div className="text-white">Loading...</div>;

  return (
    <div className="relative">
      <div className="text-center mb-4">
        <h2 className="text-xl font-bold text-white mb-2">
          Challenge {currentChallenge + 1} of 20
        </h2>
        <p className="text-gray-300 text-base">
          {currentChallengeData.question}
        </p>
      </div>

      {/* Single image */}
      <div className="flex justify-center mb-6">
        <div className="w-36 h-36 rounded-xl overflow-hidden border-2 border-gray-600 shadow-lg">
          <img
            src={currentChallengeData.image}
            alt="Challenge Image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Multiple choice answers */}
      <div className="space-y-2">
        {currentChallengeData.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerSelect(index)}
            disabled={showFeedback}
            className={`w-full p-3 rounded-xl cursor-pointer font-semibold text-sm transition-all ${
              showFeedback
                ? index === currentChallengeData.correctAnswerIndex
                  ? "bg-green-600 text-white"
                  : index === selectedAnswer
                  ? "bg-red-600 text-white"
                  : "bg-gray-700 text-gray-400"
                : "bg-gray-700 hover:bg-gray-600 text-white"
            } ${
              shakeAnimation && index === selectedAnswer && !isCorrect
                ? "animate-pulse"
                : ""
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Feedback message */}
      {showFeedback && (
        <div className="text-center mt-4">
          {isCorrect ? (
            <div className="text-green-400 text-lg font-bold animate-bounce">
              On-On! 🎉
            </div>
          ) : (
            <div className="text-red-400 text-lg font-bold">Try again! 😔</div>
          )}
        </div>
      )}

      {/* Score display */}
      <div className="text-center mt-4 text-gray-400 text-sm">
        Score: {score}/{currentChallenge + 1}
      </div>
    </div>
  );
};

export default GuessGame;