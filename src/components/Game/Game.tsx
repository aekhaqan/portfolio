'use client';

import React, { useState, useEffect, useRef } from 'react';

interface GameState {
  attempts: number;
  score: number;
  foundDigits: (string | null)[];
  currentPosition: number;
  gameOver: boolean;
  startTime: number;
}

type GameMode = 'classic' | 'speedrun';

const PHONE_NUMBER = "07488242372";
const MAX_ATTEMPTS_CLASSIC = 15;
const SPEED_RUN_TIME = 20;
const AUTO_FLIP_TIME = 10000; // 10 seconds

const shuffleArray = <T extends any>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export default function FindMyNumberGame() {
  const [currentMode, setCurrentMode] = useState<GameMode>('classic');
  const [gameState, setGameState] = useState<GameState>({
    attempts: 0,
    score: 0,
    foundDigits: new Array(PHONE_NUMBER.length).fill(null),
    currentPosition: 0,
    gameOver: false,
    startTime: Date.now(),
  });

  const [elapsedTime, setElapsedTime] = useState(0);
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  const [cardStates, setCardStates] = useState<Map<number, string>>(new Map());
  const [speedCardNumbers, setSpeedCardNumbers] = useState<number[]>([]);
  const [classicNumbers, setClassicNumbers] = useState<number[]>([]);
  const [highlightedCard, setHighlightedCard] = useState<number | null>(null);
  const [cardFlipTimers, setCardFlipTimers] = useState<Map<number, NodeJS.Timeout>>(new Map());

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const shuffleIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const speedRunTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const initializeNumbers = () => {
    // Count how many times each digit appears in the phone number
    const digitCount: { [key: string]: number } = {};
    for (const digit of PHONE_NUMBER) {
      digitCount[digit] = (digitCount[digit] || 0) + 1;
    }

    const numbers: number[] = [];

    // FIRST: Add ALL digits from the phone number to guarantee they're present
    for (const digit of PHONE_NUMBER) {
      numbers.push(parseInt(digit));
    }

    // SECOND: Fill remaining slots (18 total - 11 from phone number = 7 more cards)
    const remainingSlots = 20 - PHONE_NUMBER.length; // 9 cards
    for (let i = 0; i < remainingSlots; i++) {
      // Add random digits 0-9 for the remaining slots
      numbers.push(Math.floor(Math.random() * 10));
    }

    return shuffleArray(numbers);
  };

  const [cardsToShow, setCardsToShow] = useState<number>(18);

  const startFlipBackTimer = (cardIndex: number) => {
    // Don't start timer for correct cards
    if (cardStates.get(cardIndex) === "correct") return;

    // Clear existing timer if any
    const existingTimer = cardFlipTimers.get(cardIndex);
    if (existingTimer) clearTimeout(existingTimer);

    // Start new timer to flip card back down after 10 seconds
    const timerId = setTimeout(() => {
      setCardStates((prev) => {
        const state = prev.get(cardIndex);
        // ✅ If card became correct during the countdown, do nothing
        if (state === "correct") return prev;

        const newMap = new Map(prev);
        newMap.delete(cardIndex); // remove colour state
        return newMap;
      });

      setFlippedCards((prev) => {
        const stateNow = cardStates.get(cardIndex);
        // ✅ Re-check current state before unflipping
        if (stateNow === "correct") return prev;
        const newSet = new Set(prev);
        newSet.delete(cardIndex);
        return newSet;
      });

      // Cleanup timer map
      setCardFlipTimers((prev) => {
        const newMap = new Map(prev);
        newMap.delete(cardIndex);
        return newMap;
      });
    }, AUTO_FLIP_TIME);

    setCardFlipTimers((prev) => new Map(prev).set(cardIndex, timerId));
  };

  const clearAllFlipTimers = () => {
    cardFlipTimers.forEach(timer => clearTimeout(timer));
    setCardFlipTimers(new Map());
  };

  const resetGame = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (shuffleIntervalRef.current) clearInterval(shuffleIntervalRef.current);
    if (speedRunTimeoutRef.current) clearTimeout(speedRunTimeoutRef.current);
    clearAllFlipTimers();

    setGameState({
      attempts: 0,
      score: 0,
      foundDigits: new Array(PHONE_NUMBER.length).fill(null),
      currentPosition: 0,
      gameOver: false,
      startTime: Date.now(),
    });

    setElapsedTime(0);
    setFlippedCards(new Set());
    setCardStates(new Map());
    setHighlightedCard(null);

    const newNumbers = initializeNumbers();
    setClassicNumbers(newNumbers);
    setSpeedCardNumbers(newNumbers);
  };

  const handleModeChange = (mode: GameMode) => {
    if (mode === currentMode) return;

    if (timerRef.current) clearInterval(timerRef.current);
    if (shuffleIntervalRef.current) clearInterval(shuffleIntervalRef.current);
    if (speedRunTimeoutRef.current) clearTimeout(speedRunTimeoutRef.current);
    clearAllFlipTimers();

    setCurrentMode(mode);

    const newNumbers = initializeNumbers();
    setGameState({
      attempts: 0,
      score: 0,
      foundDigits: new Array(PHONE_NUMBER.length).fill(null),
      currentPosition: 0,
      gameOver: false,
      startTime: Date.now(),
    });
    setElapsedTime(0);
    setFlippedCards(new Set());
    setCardStates(new Map());
    setHighlightedCard(null);
    setClassicNumbers(newNumbers);
    setSpeedCardNumbers(newNumbers);
  };

  useEffect(() => {
    const numbers = initializeNumbers();
    setClassicNumbers(numbers);
    setSpeedCardNumbers(numbers);

    return () => {
      clearAllFlipTimers();
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(20); // mobile 4x5
      } else {
        setCardsToShow(18); // desktop 6x3
      }
    };

    handleResize(); // run once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  useEffect(() => {
    if (shuffleIntervalRef.current) clearInterval(shuffleIntervalRef.current);
    if (speedRunTimeoutRef.current) clearTimeout(speedRunTimeoutRef.current);

    if (currentMode === 'speedrun' && !gameState.gameOver) {
      shuffleIntervalRef.current = setInterval(() => {
        setSpeedCardNumbers(prev => shuffleArray([...prev]));
      }, 3000);

      speedRunTimeoutRef.current = setTimeout(() => {
        setGameState(prev => ({ ...prev, gameOver: true }));
      }, SPEED_RUN_TIME * 1000);
    }

    return () => {
      if (shuffleIntervalRef.current) clearInterval(shuffleIntervalRef.current);
      if (speedRunTimeoutRef.current) clearTimeout(speedRunTimeoutRef.current);
    };
  }, [currentMode, gameState.gameOver]);

  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);

    if (!gameState.gameOver) {
      timerRef.current = setInterval(() => {
        setElapsedTime(Math.floor((Date.now() - gameState.startTime) / 1000));
      }, 100);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [gameState.gameOver, gameState.startTime]);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (shuffleIntervalRef.current) clearInterval(shuffleIntervalRef.current);
      if (speedRunTimeoutRef.current) clearTimeout(speedRunTimeoutRef.current);
      clearAllFlipTimers();
    };
  }, []);

  const cardClick = (index: number, number: number) => {
    if (gameState.gameOver) return;
    if (cardStates.get(index) === 'correct') return;

    const phoneDigit = PHONE_NUMBER[gameState.currentPosition];
    const numberStr = number.toString();
    const isAlreadyFlipped = flippedCards.has(index);

    setFlippedCards(prev => new Set(prev).add(index));
    setHighlightedCard(index);

    let newState = '';
    let newScore = gameState.score;
    let newPosition = gameState.currentPosition;
    const newFoundDigits = [...gameState.foundDigits];
    let shouldIncrementAttempts = false;

    if (numberStr === phoneDigit) {
      // Correct guess - green card, don't count as attempt, don't flip back
      newState = 'correct';
      // ✅ If a card becomes correct, cancel its flip timer immediately
      const existingTimer = cardFlipTimers.get(index);
      if (existingTimer) {
        clearTimeout(existingTimer);
        setCardFlipTimers((prev) => {
          const newMap = new Map(prev);
          newMap.delete(index);
          return newMap;
        });
      }
      newFoundDigits[newPosition] = numberStr;
      newPosition++;
      newScore += 100;
      shouldIncrementAttempts = false;
    } else if (PHONE_NUMBER.includes(numberStr)) {
      // Wrong position - orange card, count as attempt only if first flip
      newState = 'wrong-position';
      newScore += 25;
      shouldIncrementAttempts = !isAlreadyFlipped;
      // Start timer to flip this card back after 10 seconds
      if (!isAlreadyFlipped) {
        startFlipBackTimer(index);
      }
    } else {
      // Not in number - red card, count as attempt only if first flip
      newState = 'wrong';
      shouldIncrementAttempts = !isAlreadyFlipped;
      // Start timer to flip this card back after 10 seconds
      if (!isAlreadyFlipped) {
        startFlipBackTimer(index);
      }
    }

    setCardStates(prev => new Map(prev).set(index, newState));

    const newAttempts = shouldIncrementAttempts ? gameState.attempts + 1 : gameState.attempts;
    const isGameOver = newPosition >= PHONE_NUMBER.length ||
      (currentMode === 'classic' && newAttempts >= MAX_ATTEMPTS_CLASSIC);

    setGameState(prev => ({
      ...prev,
      attempts: newAttempts,
      score: newScore,
      currentPosition: newPosition,
      foundDigits: newFoundDigits,
      gameOver: isGameOver
    }));

    setTimeout(() => setHighlightedCard(null), 600);
  };

  const speedCardClick = (number: number, index: number) => {
    if (gameState.gameOver) return;

    const phoneDigit = PHONE_NUMBER[gameState.currentPosition];
    const numberStr = number.toString();

    setHighlightedCard(index);

    let newScore = gameState.score;
    let newPosition = gameState.currentPosition;
    const newFoundDigits = [...gameState.foundDigits];

    if (numberStr === phoneDigit) {
      newFoundDigits[newPosition] = numberStr;
      newPosition++;
      newScore += 150;
    } else {
      newScore = Math.max(0, newScore - 50);
    }

    const isGameOver = newPosition >= PHONE_NUMBER.length;

    setGameState(prev => ({
      ...prev,
      attempts: prev.attempts + 1,
      score: newScore,
      currentPosition: newPosition,
      foundDigits: newFoundDigits,
      gameOver: isGameOver
    }));

    setTimeout(() => setHighlightedCard(null), 300);
  };

  const getTimeDisplay = () => {
    if (currentMode === 'speedrun') {
      const remaining = Math.max(0, SPEED_RUN_TIME - elapsedTime);
      const minutes = Math.floor(remaining / 60);
      const seconds = remaining % 60;
      return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }
    const minutes = Math.floor(elapsedTime / 60);
    const seconds = elapsedTime % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const renderPhoneDisplay = () => {
    const digits = [];
    for (let i = 0; i < PHONE_NUMBER.length; i++) {
      if (i === 5 || i === 9) {
        digits.push(<span key={`space-${i}`} className="inline-block w-1"> </span>);
      }
      const digit = gameState.foundDigits[i] || '•';
      digits.push(
        <span
          key={i}
          className={`inline-block transition-all duration-300 ${gameState.foundDigits[i]
            ? 'text-green-400 scale-110'
            : 'text-neutral-400 dark:text-neutral-600'
            }`}
        >
          {digit}
        </span>
      );
    }
    return digits;
  };

  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-6">
      <div className="relative bg-secondary/70 border border-custom backdrop-blur-md rounded-3xl p-5 sm:p-8 md:p-10 shadow-glass">
        {/* Top Section - Title and Mode Buttons */}
        {/* Top Section - Title and Mode Buttons */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-primary text-center sm:text-left">
            Find My Number
          </h2>

          <div className="flex justify-center sm:justify-end gap-2 flex-wrap">
            <button
              onClick={() => handleModeChange("classic")}
              className={`px-4 sm:px-5 py-2 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm transition-all ${currentMode === "classic"
                ? "bg-[var(--accent)] text-white"
                : "bg-secondary text-secondary hover:bg-tertiary"
                }`}
            >
              Classic
            </button>
            <button
              onClick={() => handleModeChange("speedrun")}
              className={`px-4 sm:px-5 py-2 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm transition-all ${currentMode === "speedrun"
                ? "bg-[var(--accent)] text-white"
                : "bg-secondary text-secondary hover:bg-tertiary"
                }`}
            >
              Speed Run
            </button>
          </div>
        </div>


        {/* Instructions */}
        <div className="mb-4 p-2.5 bg-tertiary/40 rounded-xl border border-custom">
          <p className="text-xs text-tertiary text-center leading-relaxed">
            {currentMode === "classic"
              ? "🟢 Green = correct position · 🟠 Orange = wrong position (flips back after 10s) · 🔴 Red = not in number (flips back after 10s)"
              : "⚡ Click numbers in sequence! Cards shuffle every 3 seconds. You have 20 seconds!"}
          </p>
        </div>

        {/* Middle Section - Phone Display and Stats */}
        {/* Middle Section - Phone Display and Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
          {/* Phone Display */}
          <div className="p-3 bg-secondary rounded-xl border border-custom text-center">
            <div className="text-xl sm:text-2xl font-mono tracking-widest text-primary text-center break-all">
              {renderPhoneDisplay()}
            </div>
          </div>

          {/* Stats Box */}
          <div className="grid grid-cols-3 p-3 bg-secondary rounded-xl border border-custom text-center">
            <div>
              <div className="text-base sm:text-xl font-bold text-primary">
                {gameState.attempts}
                {currentMode === "classic" ? `/${MAX_ATTEMPTS_CLASSIC}` : ""}
              </div>
              <div className="text-[9px] sm:text-[10px] text-tertiary uppercase tracking-wider">
                Attempts
              </div>
            </div>
            <div>
              <div className="text-base sm:text-xl font-bold text-primary">
                {Math.max(0, gameState.score)}
              </div>
              <div className="text-[9px] sm:text-[10px] text-tertiary uppercase tracking-wider">
                Score
              </div>
            </div>
            <div>
              <div className="text-base sm:text-xl font-bold text-primary">
                {getTimeDisplay()}
              </div>
              <div className="text-[9px] sm:text-[10px] text-tertiary uppercase tracking-wider">
                Time
              </div>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        {/* Cards Grid */}
        {/* Cards Grid */}
        <div className="mb-4">
          {currentMode === "classic" ? (
            <div className="grid grid-cols-4 md:grid-cols-6 gap-2 max-w-full sm:max-w-4xl mx-auto">
              {Array.from({ length: cardsToShow }, (_, index) => {
                if (index >= classicNumbers.length)
                  return <div key={`empty-${index}`} className="aspect-square" />;

                const num = classicNumbers[index];
                const state = cardStates.get(index);
                const isFlipped = flippedCards.has(index);
                const isHighlighted = highlightedCard === index;

                return (
                  <button
                    key={index}
                    onClick={() => cardClick(index, num)}
                    disabled={state === "correct"}
                    className={`aspect-square rounded-lg sm:rounded-xl font-bold text-lg sm:text-xl md:text-2xl transition-all duration-300
              ${!isFlipped
                        ? "bg-tertiary text-secondary hover:bg-tertiary/80"
                        : state === "correct"
                          ? "bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300 border-2 border-green-500 animate-correctPulse"
                          : state === "wrong-position"
                            ? "bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300 border-2 border-amber-500 opacity-60 hover:opacity-100"
                            : "bg-red-50 dark:bg-red-950 text-red-700 dark:text-red-300 border-2 border-red-500"
                      } 
              ${isHighlighted ? "scale-95" : "hover:scale-105"} 
              ${state === "correct" ? "cursor-not-allowed" : "cursor-pointer"}`}
                  >
                    {isFlipped ? num : "?"}
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="grid grid-cols-4 md:grid-cols-6 gap-2 max-w-full sm:max-w-4xl mx-auto">
              {Array.from({ length: cardsToShow }, (_, index) => {
                if (index >= speedCardNumbers.length)
                  return <div key={`empty-${index}`} className="aspect-square" />;

                const num = speedCardNumbers[index];
                return (
                  <button
                    key={index}
                    onClick={() => speedCardClick(num, index)}
                    className={`aspect-square rounded-lg sm:rounded-xl font-bold text-lg sm:text-xl md:text-2xl bg-tertiary text-primary hover:bg-tertiary/80 transition-all 
              ${highlightedCard === index ? "scale-95" : "hover:scale-105"}`}
                  >
                    {num}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Game Over Message */}
        {gameState.gameOver && (
          <div
            className={`mb-3 p-3 rounded-xl text-center ${gameState.currentPosition >= PHONE_NUMBER.length
              ? "bg-green-50 dark:bg-green-950 border-2 border-green-500"
              : "bg-red-50 dark:bg-red-950 border-2 border-red-500"
              }`}
          >
            <h3
              className={`text-lg font-bold mb-1 ${gameState.currentPosition >= PHONE_NUMBER.length
                ? "text-green-700 dark:text-green-300"
                : "text-red-700 dark:text-red-300"
                }`}
            >
              {gameState.currentPosition >= PHONE_NUMBER.length
                ? "🎉 Success!"
                : "💥 Game Over"}
            </h3>
            <p className="text-secondary text-sm">
              {gameState.currentPosition >= PHONE_NUMBER.length
                ? `You found the number: ${PHONE_NUMBER}`
                : `The number was: ${PHONE_NUMBER}`}
            </p>
            <p className="text-tertiary text-xs mt-1">
              Score: <strong>{gameState.score}</strong> · Digits:{" "}
              <strong>
                {gameState.currentPosition}/{PHONE_NUMBER.length}
              </strong>{" "}
              · Time: <strong>{getTimeDisplay()}</strong>
            </p>
          </div>
        )}

        {/* New Game Button */}
        <button
          onClick={resetGame}
          className="w-full py-2.5 rounded-xl font-semibold bg-[var(--accent)] text-white hover:opacity-90 transition-all shadow-glass"
        >
          New Game
        </button>
      </div>
    </section>
  );
}