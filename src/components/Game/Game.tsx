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
    
    // For each digit 0-9, add the maximum of (count in phone number, 2)
    // This ensures we have enough cards for the phone number, plus extras
    for (let i = 0; i <= 9; i++) {
      const digitStr = i.toString();
      const countNeeded = digitCount[digitStr] || 0;
      const cardsToAdd = Math.max(countNeeded, 2); // At least 2 of each digit
      
      for (let j = 0; j < cardsToAdd; j++) {
        numbers.push(i);
      }
    }
    
    return shuffleArray(numbers);
  };

  const resetGame = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (shuffleIntervalRef.current) clearInterval(shuffleIntervalRef.current);
    if (speedRunTimeoutRef.current) clearTimeout(speedRunTimeoutRef.current);
    
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
      // Correct guess - green card, don't count as attempt
      newState = 'correct';
      newFoundDigits[newPosition] = numberStr;
      newPosition++;
      newScore += 100;
      shouldIncrementAttempts = false;
    } else if (PHONE_NUMBER.includes(numberStr)) {
      // Wrong position - orange card, count as attempt only if first flip
      newState = 'wrong-position';
      newScore += 25;
      shouldIncrementAttempts = !isAlreadyFlipped;
    } else {
      // Not in number - red card, count as attempt only if first flip
      newState = 'wrong';
      shouldIncrementAttempts = !isAlreadyFlipped;
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
          className={`inline-block transition-all duration-300 ${
            gameState.foundDigits[i] 
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
    <section className="w-full max-w-6xl mx-auto px-4 py-6">
      <div className="relative bg-white dark:bg-primary border border-neutral-200 dark:border-neutral-800 rounded-3xl p-5 shadow-xl">
        
        {/* Top Section - Title and Mode Buttons */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-black dark:text-white">Find My Number</h2>
          
          <div className="flex gap-2">
            <button
              onClick={() => handleModeChange('classic')}
              className={`px-5 py-2 rounded-xl font-semibold text-sm transition-all ${
                currentMode === 'classic'
                  ? 'bg-black dark:bg-white text-white dark:text-black'
                  : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800'
              }`}
            >
              Classic Mode
            </button>
            <button
              onClick={() => handleModeChange('speedrun')}
              className={`px-5 py-2 rounded-xl font-semibold text-sm transition-all ${
                currentMode === 'speedrun'
                  ? 'bg-black dark:bg-white text-white dark:text-black'
                  : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800'
              }`}
            >
              Speed Run
            </button>
          </div>
        </div>

        {/* Instructions */}
        <div className="mb-4 p-2.5 bg-neutral-50 dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800">
          <p className="text-xs text-neutral-600 dark:text-neutral-400 text-center leading-relaxed">
            {currentMode === 'classic' 
              ? '🟢 Green = correct position · 🟠 Orange = wrong position (re-click when ready) · 🔴 Red = not in number'
              : '⚡ Click numbers in sequence! Cards shuffle every 3 seconds. You have 20 seconds!'}
          </p>
        </div>

        {/* Middle Section - Phone Display and Stats Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-4">
          
          {/* Phone Display */}
          <div className="p-2 bg-neutral-50 dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 text-center">
            <div className="text-2xl font-mono tracking-widest text-white text-center">
              {renderPhoneDisplay()}
            </div>
          </div>

          {/* Stats Box */}
          <div className="grid grid-cols-3 p-2 bg-neutral-50 dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 text-center">
            <div className="">
              <div className="text-xl font-bold text-black dark:text-white">
                {gameState.attempts}{currentMode === 'classic' ? `/${MAX_ATTEMPTS_CLASSIC}` : ''}
              </div>
              <div className="text-[10px] text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                Attempts
              </div>
            </div>
            <div className="">
              <div className="text-xl font-bold text-black dark:text-white">
                {Math.max(0, gameState.score)}
              </div>
              <div className="text-[10px] text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                Score
              </div>
            </div>
            <div className="">
              <div className="text-xl font-bold text-black dark:text-white">
                {getTimeDisplay()}
              </div>
              <div className="text-[10px] text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                Time
              </div>
            </div>
          </div>
        </div>

        {/* Cards Grid - 6x4 = 24 cards (using all 20, plus 4 empty slots) */}
        <div className="mb-4">
          {currentMode === 'classic' ? (
            <div className="grid grid-cols-6 gap-2 max-w-3xl mx-auto">
              {Array.from({ length: 18 }, (_, index) => {
                if (index >= classicNumbers.length) {
                  // Empty slot
                  return <div key={`empty-${index}`} className="aspect-square" />;
                }
                
                const num = classicNumbers[index];
                const state = cardStates.get(index);
                const isFlipped = flippedCards.has(index);
                const isHighlighted = highlightedCard === index;
                
                return (
                  <button
                    key={index}
                    onClick={() => cardClick(index, num)}
                    disabled={state === 'correct'}
                    className={`aspect-square rounded-xl font-bold text-3xl transition-all duration-300 ${
                      !isFlipped
                        ? 'bg-neutral-100 dark:bg-neutral-900 text-neutral-400 dark:text-neutral-600 hover:bg-neutral-200 dark:hover:bg-neutral-800'
                        : state === 'correct'
                        ? 'bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300 border-2 border-green-500'
                        : state === 'wrong-position'
                        ? 'bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300 border-2 border-amber-500 opacity-60 hover:opacity-100'
                        : 'bg-red-50 dark:bg-red-950 text-red-700 dark:text-red-300 border-2 border-red-500'
                    } ${isHighlighted ? 'scale-95' : 'hover:scale-105'} ${
                      state === 'correct' ? 'cursor-not-allowed' : 'cursor-pointer'
                    }`}
                  >
                    {isFlipped ? num : '?'}
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="grid grid-cols-6 gap-2 max-w-3xl mx-auto">
              {Array.from({ length: 18 }, (_, index) => {
                if (index >= speedCardNumbers.length) {
                  // Empty slot
                  return <div key={`empty-${index}`} className="aspect-square" />;
                }
                
                const num = speedCardNumbers[index];
                
                return (
                  <button
                    key={index}
                    onClick={() => speedCardClick(num, index)}
                    className={`aspect-square rounded-xl font-bold text-3xl bg-neutral-100 dark:bg-neutral-900 text-black dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all ${
                      highlightedCard === index ? 'scale-95' : 'hover:scale-105'
                    }`}
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
          <div className={`mb-3 p-3 rounded-xl text-center ${
            gameState.currentPosition >= PHONE_NUMBER.length
              ? 'bg-green-50 dark:bg-green-950 border-2 border-green-500'
              : 'bg-red-50 dark:bg-red-950 border-2 border-red-500'
          }`}>
            <h3 className={`text-lg font-bold mb-1 ${
              gameState.currentPosition >= PHONE_NUMBER.length
                ? 'text-green-700 dark:text-green-300'
                : 'text-red-700 dark:text-red-300'
            }`}>
              {gameState.currentPosition >= PHONE_NUMBER.length ? '🎉 Success!' : '💥 Game Over'}
            </h3>
            <p className="text-neutral-700 dark:text-neutral-300 text-sm">
              {gameState.currentPosition >= PHONE_NUMBER.length 
                ? `You found the number: ${PHONE_NUMBER}`
                : `The number was: ${PHONE_NUMBER}`
              }
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 text-xs mt-1">
              Score: <strong>{gameState.score}</strong> · 
              Digits: <strong>{gameState.currentPosition}/{PHONE_NUMBER.length}</strong> · 
              Time: <strong>{getTimeDisplay()}</strong>
            </p>
          </div>
        )}

        {/* New Game Button */}
        <button
          onClick={resetGame}
          className="w-full py-2.5 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-xl hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all"
        >
          New Game
        </button>
      </div>
    </section>
  );
}