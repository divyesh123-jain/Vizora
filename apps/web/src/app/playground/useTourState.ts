"use client";

import { useState, useEffect, useCallback } from "react";

export type TourStep = "data" | "encoding" | "chart-type";

export type TourState = {
  step: TourStep;
  isActive: boolean;
  completed: boolean;
  skipped: boolean;
};

export function useTourState() {
  const [step, setStep] = useState<TourStep>("data");
  const [isActive, setIsActive] = useState<boolean>(false);
  const [completed, setCompleted] = useState<boolean>(false);
  const [skipped, setSkipped] = useState<boolean>(false);

  // Initialize: read localStorage safely after client hydration
  useEffect(() => {
    try {
      const storedSkipped = localStorage.getItem("vizora-tour-skipped") === "true";
      const storedCompleted = localStorage.getItem("vizora-tour-completed") === "true";
      setSkipped(storedSkipped);
      setCompleted(storedCompleted);
      if (!storedCompleted && !storedSkipped) {
        setIsActive(true);
      }
    } catch {
      // Fallback if localStorage unavailable
    }
  }, []);

  const next = useCallback(() => {
    switch (step) {
      case "data":
        setStep("encoding");
        break;
      case "encoding":
        setStep("chart-type");
        break;
      case "chart-type":
        complete();
        break;
    }
  }, [step]);

  const prev = useCallback(() => {
    switch (step) {
      case "encoding":
        setStep("data");
        break;
      case "chart-type":
        setStep("encoding");
        break;
      case "data":
        // Already at first step
        break;
    }
  }, [step]);

  const complete = useCallback(() => {
    setCompleted(true);
    setIsActive(false);
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("vizora-tour-completed", "true");
      localStorage.setItem("vizora-tour-skipped", "false");
    }
  }, []);

  const skip = useCallback(() => {
    setSkipped(true);
    setIsActive(false);
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("vizora-tour-skipped", "true");
      localStorage.setItem("vizora-tour-completed", "false");
    }
  }, []);

  const reset = useCallback(() => {
    // Reset when user clears data - allow tour to restart
    if (typeof localStorage !== "undefined") {
      localStorage.removeItem("vizora-tour-completed");
      localStorage.removeItem("vizora-tour-skipped");
      localStorage.removeItem("vizora-tour-step");
    }
    setStep("data");
    setIsActive(true);
    setCompleted(false);
    setSkipped(false);
  }, []);

  return {
    step,
    isActive,
    completed,
    skipped,
    next,
    prev,
    complete,
    skip,
    reset,
  };
}