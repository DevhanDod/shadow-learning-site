"use client";

import { useState, useEffect, useCallback } from "react";

type Phase = "watching" | "speaking" | "scored" | "idle";

export default function AppMockup() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [score, setScore] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState("00:00");
  const [highlightIndex, setHighlightIndex] = useState(-1);

  const words = ["You", "have", "to", "believe", "in", "yourself", "when", "no", "one", "else", "does"];
  const wordScores = [95, 90, 88, 72, 92, 85, 91, 88, 93, 80, 86];

  const startDemo = useCallback(() => {
    setPhase("watching");
    setScore(0);
    setHighlightIndex(-1);
  }, []);

  // Auto-start on mount and loop
  useEffect(() => {
    const timer = setTimeout(startDemo, 1000);
    return () => clearTimeout(timer);
  }, [startDemo]);

  // Phase transitions
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (phase === "watching") {
      // Simulate video playing with time counter
      let seconds = 0;
      const interval = setInterval(() => {
        seconds++;
        const s = seconds % 60;
        setTimeElapsed(`00:${s.toString().padStart(2, "0")}`);
      }, 400);

      timer = setTimeout(() => {
        clearInterval(interval);
        setTimeElapsed("00:03");
        setPhase("speaking");
      }, 3000);

      return () => {
        clearTimeout(timer);
        clearInterval(interval);
      };
    }

    if (phase === "speaking") {
      // Highlight words one by one as "user speaks"
      let wordIdx = 0;
      const interval = setInterval(() => {
        setHighlightIndex(wordIdx);
        wordIdx++;
        if (wordIdx >= words.length) {
          clearInterval(interval);
        }
      }, 180);

      timer = setTimeout(() => {
        clearInterval(interval);
        setHighlightIndex(-1);
        setScore(87);
        setPhase("scored");
      }, 2500);

      return () => {
        clearTimeout(timer);
        clearInterval(interval);
      };
    }

    if (phase === "scored") {
      // Show score for a bit, then restart
      timer = setTimeout(() => {
        setPhase("idle");
        setTimeout(startDemo, 800);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [phase, startDemo, words.length]);

  return (
    <div className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden w-full max-w-md mx-auto border border-gray-700">
      {/* Top bar */}
      <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="text-gray-400 text-xs font-mono">Shadow Learning</span>
        <div className="w-12" />
      </div>

      {/* Video area */}
      <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 aspect-video flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1">
          {phase === "watching" && (
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
          )}
          SCENE 12
        </div>
        <div className="absolute top-3 right-3 text-gray-400 text-[10px] font-mono">
          {phase === "watching" ? timeElapsed : "00:03"} / 01:15
        </div>

        {/* Character silhouettes */}
        <div className="flex items-end gap-6 relative z-10">
          <div
            className={`w-12 h-20 bg-gray-600 rounded-t-full transition-opacity duration-500 ${
              phase === "watching" ? "opacity-80" : "opacity-50"
            }`}
          />
          <div
            className={`w-14 h-24 bg-gray-500 rounded-t-full transition-opacity duration-500 ${
              phase === "watching" ? "opacity-90" : "opacity-60"
            }`}
          />
        </div>

        {/* Subtitle overlay */}
        <div className="absolute bottom-3 left-3 right-3">
          <div
            className={`bg-black/80 rounded-lg px-3 py-2 text-center transition-all duration-500 ${
              phase === "watching"
                ? "opacity-100 translate-y-0"
                : "opacity-70 translate-y-0"
            }`}
          >
            <p className="text-white text-sm font-medium">
              &ldquo;You have to believe in yourself when no one else does.&rdquo;
            </p>
          </div>
        </div>

        {/* Phase indicator overlay */}
        {phase === "watching" && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-10 h-10 border-2 border-white/40 rounded-full flex items-center justify-center animate-pulse">
              <svg className="w-4 h-4 text-white/60 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}
      </div>

      {/* Sentence & Meaning */}
      <div className="px-4 py-3 border-t border-gray-700">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[10px] font-bold text-primary bg-purple-900/40 px-2 py-0.5 rounded">
            SENTENCE
          </span>
          {phase === "watching" && (
            <span className="text-[10px] text-gray-500 animate-pulse">Playing...</span>
          )}
        </div>

        {/* Words with highlight during speaking phase */}
        <div className="flex flex-wrap gap-1 mb-2">
          {words.map((word, i) => (
            <span
              key={i}
              className={`text-sm font-medium transition-all duration-200 ${
                phase === "speaking" && i <= highlightIndex
                  ? "text-primary"
                  : phase === "speaking" && i === highlightIndex + 1
                  ? "text-gray-400"
                  : "text-white"
              }`}
            >
              {i === 0 ? `"${word}` : i === words.length - 1 ? `${word}."` : word}
            </span>
          ))}
        </div>

        <p className="text-gray-400 text-xs leading-relaxed">
          <span className="text-gray-500 font-semibold">Meaning:</span> You
          must have self-confidence even when others doubt you.
        </p>
      </div>

      {/* Pronunciation Section */}
      <div className="px-4 py-3 border-t border-gray-700">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span
              className={`text-[10px] font-bold px-2 py-0.5 rounded transition-colors ${
                phase === "speaking"
                  ? "text-red-400 bg-red-900/40"
                  : "text-green-400 bg-green-900/40"
              }`}
            >
              {phase === "speaking" ? "RECORDING" : "YOUR TURN"}
            </span>
            {phase === "speaking" && (
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            )}
          </div>
          {phase === "scored" && (
            <div className="flex items-center gap-1.5 animate-[fadeIn_0.5s_ease-in]">
              <span className="text-[10px] text-gray-400">Accuracy</span>
              <span className="text-lg font-bold text-green-400">{score}%</span>
            </div>
          )}
        </div>

        {/* Waveform visualization */}
        <div className="flex items-center gap-1 h-8 mb-3">
          {Array.from({ length: 32 }).map((_, i) => {
            let height = 15;
            let colorClass = "bg-gray-600";

            if (phase === "speaking") {
              height = 20 + Math.sin(Date.now() / 200 + i) * 40 + Math.random() * 30;
              colorClass = "bg-primary";
            } else if (phase === "scored") {
              height = 20 + Math.sin(i * 0.5) * 60 + 10;
              colorClass = "bg-green-500";
            } else if (phase === "watching") {
              height = 10 + Math.sin(i * 0.8) * 20;
              colorClass = "bg-gray-600";
            }

            return (
              <div
                key={i}
                className={`flex-1 rounded-full transition-all duration-150 ${colorClass} ${
                  phase === "speaking" ? "animate-pulse" : ""
                }`}
                style={{
                  height: `${height}%`,
                  animationDelay: `${i * 50}ms`,
                }}
              />
            );
          })}
        </div>

        {/* Status button */}
        <div
          className={`w-full py-2.5 rounded-lg text-sm font-medium text-center transition-all ${
            phase === "speaking"
              ? "bg-red-600 text-white"
              : phase === "scored"
              ? "bg-green-600 text-white"
              : phase === "watching"
              ? "bg-gray-700 text-gray-400"
              : "bg-primary text-white"
          }`}
        >
          {phase === "watching" ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="w-4 h-4 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
              </svg>
              Watch the clip...
            </span>
          ) : phase === "speaking" ? (
            <span className="flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              Listening...
            </span>
          ) : phase === "scored" ? (
            <span className="flex items-center justify-center gap-2">
              &#10003; Great pronunciation!
            </span>
          ) : (
            "Starting demo..."
          )}
        </div>

        {/* Word-level feedback */}
        {phase === "scored" && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {words.map((word, i) => (
              <span
                key={i}
                className={`text-xs px-1.5 py-0.5 rounded transition-all duration-300 ${
                  wordScores[i] >= 90
                    ? "bg-green-900/40 text-green-400"
                    : wordScores[i] >= 80
                    ? "bg-yellow-900/40 text-yellow-400"
                    : "bg-red-900/40 text-red-400"
                }`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                {word}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
