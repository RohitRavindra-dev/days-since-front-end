import {calculateDaysDifference} from './timeUtils';

export const capitalize = (str: string, lower = false) =>
  (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, match =>
    match.toUpperCase(),
  );

export const formatTimestamp = (timestamp: string) => {
  const daysDifference = calculateDaysDifference(timestamp);
  // Return appropriate string
  if (daysDifference === 0) {
    return 'Today';
  } else if (daysDifference === 1) {
    return 'Yesterday';
  } else {
    return `${daysDifference} days ago`;
  }
};
