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

  // Game data with different question types and images
  const gameData = [
    // Hash Handle Questions
    {
      type: "hash_handle",
      question: "Guess the Hash handle of this hasher?",
      correctAnswer: "HashMaster",
      options: ["HashMaster", "TrailBlazer", "PathFinder", "HashHound"],
      image: "/IMG-20250928-WA0066.jpg",
    },
    {
      type: "hash_handle",
      question: "What's this hasher's trail name?",
      correctAnswer: "TrailBlazer",
      options: ["TrailBlazer", "PathPounder", "HashHunter", "TrailTrekker"],
      image: "/IMG-20250928-WA0067.jpg",
    },
    {
      type: "hash_handle",
      question: "Can you identify this hasher's handle?",
      correctAnswer: "PathFinder",
      options: ["PathFinder", "HashMaster", "TrailRunner", "PathPioneer"],
      image: "/IMG-20250928-WA0068.jpg",
    },
    {
      type: "hash_handle",
      question: "What do we call this hasher?",
      correctAnswer: "HashHound",
      options: ["HashHound", "TrailTracer", "PathPounder", "HashHiker"],
      image: "/IMG-20250928-WA0069.jpg",
    },
    {
      type: "hash_handle",
      question: "Guess this hasher's trail name?",
      correctAnswer: "TrailRunner",
      options: ["TrailRunner", "HashMaster", "PathFinder", "TrailBlazer"],
      image: "/IMG-20250928-WA0070.jpg",
    },
    // Activity Questions
    {
      type: "activity",
      question: "What activity is this hasher doing?",
      correctAnswer: "Running",
      options: ["Running", "Walking", "Dancing", "Sleeping"],
      image: "/run.png",
    },
    {
      type: "activity",
      question: "What's happening in this photo?",
      correctAnswer: "Celebrating",
      options: ["Celebrating", "Working", "Eating", "Reading"],
      image: "/beer.jpg",
    },
    {
      type: "activity",
      question: "What is this person doing?",
      correctAnswer: "Hiking",
      options: ["Hiking", "Swimming", "Cooking", "Driving"],
      image: "/hashing.jpg",
    },
    // Location Questions
    {
      type: "location",
      question: "Where was this photo taken?",
      correctAnswer: "Sierra Leone",
      options: ["Sierra Leone", "Nigeria", "Ghana", "Liberia"],
      image: "/misma.jpg",
    },
    {
      type: "location",
      question: "Which country is this?",
      correctAnswer: "Sierra Leone",
      options: ["Sierra Leone", "Kenya", "South Africa", "Morocco"],
      image: "/logo.jpg",
    },
    // Object Questions
    {
      type: "object",
      question: "What object is this?",
      correctAnswer: "Circle",
      options: ["Circle", "Square", "Triangle", "Rectangle"],
      image: "/circle.jpg",
    },
    {
      type: "object",
      question: "What do you see in this image?",
      correctAnswer: "Foot",
      options: ["Foot", "Hand", "Head", "Leg"],
      image: "/1foot.png",
    },
    // Sponsor Questions
    {
      type: "sponsor",
      question: "Which sponsor is this?",
      correctAnswer: "Amstel",
      options: ["Amstel", "Orange", "UBA", "National Petroleum"],
      image: "/sponsor/amstel.jpg",
    },
    {
      type: "sponsor",
      question: "What company logo is this?",
      correctAnswer: "Orange",
      options: ["Orange", "Amstel", "UBA", "Tourism"],
      image: "/sponsor/orange.jpg",
    },
    {
      type: "sponsor",
      question: "Identify this sponsor:",
      correctAnswer: "UBA",
      options: ["UBA", "Orange", "Amstel", "National Petroleum"],
      image: "/sponsor/uba.jpg",
    },
    // Random Fun Questions
    {
      type: "fun",
      question: "What color is this?",
      correctAnswer: "Yellow",
      options: ["Yellow", "Red", "Blue", "Green"],
      image: "/d.jpg",
    },
    {
      type: "fun",
      question: "How many people are in this photo?",
      correctAnswer: "Many",
      options: ["Many", "One", "Two", "Three"],
      image: "/s1.jpg",
    },
    {
      type: "fun",
      question: "What's the mood in this photo?",
      correctAnswer: "Happy",
      options: ["Happy", "Sad", "Angry", "Confused"],
      image: "/s2.jpg",
    },
    {
      type: "fun",
      question: "What time of day is this?",
      correctAnswer: "Day",
      options: ["Day", "Night", "Dawn", "Dusk"],
      image: "/s3.jpg",
    },
  ];

  const [currentChallengeData, setCurrentChallengeData] = useState(null);

  // Generate random challenge data
  const generateChallenge = () => {
    const shuffled = [...gameData].sort(() => Math.random() - 0.5);
    const selectedQuestion = shuffled[0];

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

  // Initialize first challenge
  useEffect(() => {
    setCurrentChallengeData(generateChallenge());
  }, []);

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
      if (currentChallenge < 4) {
        setCurrentChallenge(currentChallenge + 1);
        setCurrentChallengeData(generateChallenge());
        setSelectedAnswer(null);
        setShowFeedback(false);
      } else {
        setGameCompleted(true);
      }
    }, 2000);
  };

  const restartGame = () => {
    setCurrentChallenge(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setIsCorrect(false);
    setGameCompleted(false);
    setCurrentChallengeData(generateChallenge());
  };

  if (gameCompleted) {
    return (
      <div className="text-center p-6">
        <h2 className="text-2xl font-bold text-white mb-3">Game Complete!</h2>
        <div className="text-5xl mb-3">🎉</div>
        <p className="text-lg text-gray-300 mb-5">
          You got <span className="text-yellow-400 font-bold">{score}/5</span>{" "}
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
          Challenge {currentChallenge + 1} of 5
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
