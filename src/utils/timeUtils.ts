export const calculateDaysDifference = (lastUpdated: string): number => {
  const lastUpdatedDate = new Date(parseInt(lastUpdated, 10)); // Convert string to Date
  const today = new Date();

  // Normalize both dates to midnight
  const lastDate = new Date(
    lastUpdatedDate.getFullYear(),
    lastUpdatedDate.getMonth(),
    lastUpdatedDate.getDate(),
  );
  const currentDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
  );

  // Calculate difference in days
  const timeDifference = currentDate.getTime() - lastDate.getTime();
  return Math.floor(timeDifference / 86400000);
};
