"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";

interface Question {
  question: string;
  options: string[];
  correct: number;
}

interface QuizData {
  category: string;
  questions: Question[];
}

interface User {
  name: string;
  email: string;
}

interface HistoryEntry {
  userName: string;
  category: string;
  score: number;
  total: number;
  date: string;
}

function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

export default function Quiz() {
  const [user, setUser] = useState<User | null>(null);
  const [showForm, setShowForm] = useState(true);
  const [category, setCategory] = useState("");
  const [quizData, setQuizData] = useState<QuizData | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [feedback, setFeedback] = useState("");
  const [feedbackType, setFeedbackType] = useState<
    "correct" | "incorrect" | ""
  >("");
  const [gameOver, setGameOver] = useState(false);
  const [loading, setLoading] = useState(false);
  const [categorySelected, setCategorySelected] = useState(false);

  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      const newUser: User = { name: formData.name, email: formData.email };
      localStorage.setItem("quizUser", JSON.stringify(newUser));
      setUser(newUser);
      setShowForm(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCategorySelect = (selectedCat: string) => {
    setCategory(selectedCat);
    setCategorySelected(true);
  };

  useEffect(() => {
    const loadQuiz = async () => {
      if (!category) return;

      setLoading(true);
      try {
        console.log("Fetching from:", `/data/${category.toLowerCase()}.json`);
        const response = await fetch(`/data/${category.toLowerCase()}.json`);
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        const data: QuizData = await response.json();

        // Shuffle questions and select the first 10
        const selectedQuestions = shuffleArray(data.questions).slice(0, 10);

        // For each selected question, shuffle its options and update the correct index
        const processedQuestions = selectedQuestions.map((q) => {
          const correctAnswerValue = q.options[q.correct];
          const shuffledOptions = shuffleArray(q.options);
          const newCorrectIndex = shuffledOptions.indexOf(correctAnswerValue);
          return {
            ...q,
            options: shuffledOptions,
            correct: newCorrectIndex,
          };
        });

        // Set the processed quiz data to state
        setQuizData({ ...data, questions: processedQuestions });
      } catch (error) {
        console.error("Fetch error details:", error);
        setQuizData(null); // Ensure we show an error state
      } finally {
        setLoading(false);
      }
    };

    if (categorySelected) {
      loadQuiz();
    }
  }, [category, categorySelected]);

  const resetGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setFeedback("");
    setFeedbackType("");
    setGameOver(false);
  };

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);
    const isCorrect = index === quizData!.questions[currentQuestion].correct;
    if (isCorrect) {
      setScore(score + 1);
      setFeedback("Correct! Well done! ✨");
      setFeedbackType("correct");
    } else {
      setFeedback("Incorrect. The correct answer is highlighted above.");
      setFeedbackType("incorrect");
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < quizData!.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setFeedback("");
      setFeedbackType("");
    } else {
      setGameOver(true);
      // Save to localStorage for history
      const history = JSON.parse(localStorage.getItem("quizHistory") || "[]");
      history.push({
        userName: user!.name,
        category,
        score,
        total: quizData!.questions.length,
        date: new Date().toISOString().split("T")[0],
      });
      localStorage.setItem("quizHistory", JSON.stringify(history));
    }
  };

  const restart = () => {
    setCategorySelected(false);
    setQuizData(null);
    setCategory("");
    resetGame();
  };

  const categories = ["Sports", "Health", "Programming"];

  if (showForm) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-8 bg-white">
        <div className="w-full max-w-md bg-white md:rounded-lg md:shadow-md p-6 md:border md:border-red-200">
          <h1 className="text-2xl font-bold text-center mb-6 text-red-500">
            Welcome! Enter Your Details
          </h1>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-2 text-red-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-red-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-red-700"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2 text-red-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-red-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-red-700"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-500 text-white p-3 rounded-md hover:bg-red-600"
            >
              Continue
            </button>
          </form>
          <Link
            href="/"
            className="block text-center mt-4 text-red-500 hover:underline"
          >
            ← Back to Home
          </Link>
        </div>
      </main>
    );
  }

  const showCategorySelector = !categorySelected && !loading;

  if (showCategorySelector) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-8 bg-white">
        <div className="w-full max-w-lg bg-white md:rounded-3xl md:shadow-xl p-6 md:p-8 md:border md:border-red-200">
          {/* Header with Category and Back */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-bold text-red-500">
              Quiz | Welcome, {user?.name}!
            </h1>
          </div>

          {/* Category Selector */}
          <div className="mb-6 text-center">
            <p className="text-lg text-red-700 mb-4">
              Select a category to start:
            </p>
            <div className="flex flex-col space-y-3 max-w-xs mx-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategorySelect(cat)}
                  className="px-6 py-3 rounded-lg border-2 border-red-300 bg-white text-red-500 hover:bg-red-50 font-medium transition-colors text-left"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (loading)
    return (
      <div className="flex min-h-screen items-center justify-center text-red-500">
        Loading quiz...
      </div>
    );

  if (!quizData)
    return (
      <div className="flex min-h-screen items-center justify-center text-red-500">
        Failed to load quiz data.
      </div>
    );

  const progress = ((currentQuestion + 1) / quizData.questions.length) * 100;
  const currentQ = quizData.questions[currentQuestion];
  const correctIndex = currentQ.correct;

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-8 bg-white">
        <div className="w-full max-w-lg bg-white md:rounded-3xl md:shadow-xl p-6 md:p-8 md:border md:border-red-200">
          {/* Header with Category and Back */}
          <div className="flex justify-between items-center mb-6">
            <Link href="/" className="text-red-500 hover:underline text-sm">
              ← Home
            </Link>
            <h1 className="text-xl font-bold text-red-500">
              Quiz: {category} | Welcome, {user?.name}!
            </h1>
          </div>

          {/* Question Card */}
          {!gameOver ? (
            <div className="relative">
              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm text-red-500 mb-1">
                  <span>
                    Question {currentQuestion + 1} of{" "}
                    {quizData.questions.length}
                  </span>
                </div>
                <div className="w-full bg-red-200 rounded-full h-2">
                  <div
                    className="bg-red-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Question Text */}
              <h2 className="text-2xl font-bold text-red-500 mb-6 text-center">
                {currentQ.question}
              </h2>

              {/* Options */}
              <div className="space-y-4 mb-6">
                {currentQ.options.map((option, index) => {
                  const isSelected = selectedAnswer === index;
                  const isCorrect = index === correctIndex;
                  let bgColor = "bg-white";
                  let borderColor = "border-red-300";
                  let textColor = "text-red-700";
                  let icon = null;

                  if (selectedAnswer !== null) {
                    if (isSelected && isCorrect) {
                      bgColor = "bg-white";
                      borderColor = "border-red-500";
                      textColor = "text-red-500";
                      icon = (
                        <CheckIcon className="h-5 w-5 text-red-500 ml-2" />
                      );
                    } else if (isSelected && !isCorrect) {
                      bgColor = "bg-white";
                      borderColor = "border-red-500";
                      textColor = "text-red-700";
                      icon = (
                        <XMarkIcon className="h-5 w-5 text-red-500 ml-2" />
                      );
                    } else if (!isSelected && isCorrect) {
                      bgColor = "bg-white";
                      borderColor = "border-red-500";
                      textColor = "text-red-500";
                      icon = (
                        <CheckIcon className="h-5 w-5 text-red-500 ml-2" />
                      );
                    }
                  } else {
                    bgColor = "bg-white";
                    borderColor = "border-red-300";
                    textColor = "text-red-700";
                  }

                  return (
                    <button
                      key={index}
                      onClick={() => handleAnswer(index)}
                      disabled={selectedAnswer !== null}
                      className={`w-full p-4 rounded-2xl border-2 ${borderColor} ${bgColor} ${textColor} text-left flex items-center justify-between hover:border-red-400 disabled:opacity-50 transition-all duration-200`}
                    >
                      <span className="font-medium">{option}</span>
                      {icon && icon}
                      {selectedAnswer === null && (
                        <span className="w-5 h-5 border-2 border-red-400 rounded-full flex items-center justify-center ml-2">
                          <span className="w-2 h-2 bg-transparent rounded-full"></span>
                        </span>
                      )}
                      {isSelected && selectedAnswer !== null && (
                        <span
                          className={`w-5 h-5 rounded-full flex items-center justify-center ml-2 ${
                            isCorrect ? "bg-red-500" : "bg-red-500"
                          }`}
                        >
                          {isCorrect ? (
                            <CheckIcon className="h-3 w-3 text-white" />
                          ) : (
                            <XMarkIcon className="h-3 w-3 text-white" />
                          )}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Feedback */}
              {feedback && (
                <div
                  className={`w-full p-4 rounded-2xl mb-6 border-2 ${
                    feedbackType === "correct"
                      ? "bg-white border-red-300 text-red-500"
                      : "bg-white border-red-500 text-red-700"
                  }`}
                >
                  {feedbackType === "correct" && "✨ "}
                  {feedback}
                </div>
              )}

              {/* Next Button */}
              {selectedAnswer !== null && (
                <button
                  onClick={nextQuestion}
                  className="w-full bg-red-500 text-white py-4 rounded-2xl font-semibold hover:bg-red-600 transition-colors duration-200 text-lg"
                >
                  Next Question
                </button>
              )}

              {/* Current Score - Hidden for UI match */}
              <p className="mt-4 text-center text-sm text-red-500 hidden">
                Current Score: {score}
              </p>
            </div>
          ) : (
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4 text-red-500">
                Game Over!
              </h2>
              <p className="text-2xl mb-4 text-red-700">
                Final Score: {score} / {quizData.questions.length} (
                {Math.round((score / quizData.questions.length) * 100)}%)
              </p>
              <button
                onClick={restart}
                className="bg-red-500 text-white px-6 py-3 rounded-xl hover:bg-red-600 mr-4 font-semibold"
              >
                Restart
              </button>
              <Link
                href="/history"
                className="bg-red-500 text-white px-6 py-3 rounded-xl hover:bg-red-600 font-semibold"
              >
                View History
              </Link>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
