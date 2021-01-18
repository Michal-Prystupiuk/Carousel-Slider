export const formatToTimeDisplayed = timeValue => {
  if (!timeValue) return '0:00';

  const roundedTimeValueInSec = Math.round(timeValue * 100) / 100;
  const amountOfMin = Math.floor(roundedTimeValueInSec / 60);
  const amountOfSec = Math.round(roundedTimeValueInSec - amountOfMin * 60);

  return `${amountOfMin}:${amountOfSec < 10 ? '0' : ''}${amountOfSec}`;
};
