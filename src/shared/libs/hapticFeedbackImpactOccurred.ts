import tma from "@twa-dev/sdk";

export const hapticFeedbackImpactOccurred = () => {
  tma.HapticFeedback.impactOccurred("heavy");
};
