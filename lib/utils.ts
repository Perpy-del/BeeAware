import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import moment from 'moment';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateRandomNumberWithExpiry(expiryTimeInSeconds: number) {
  let currentTime = Date.now();
  let expiryTimestamp = currentTime + expiryTimeInSeconds * 1000; // Convert seconds to milliseconds

  let randomNumber = 0;
  for (let i = 0; i < 5; i++) {
    let randomArray = new Uint32Array(1);
    window.crypto.getRandomValues(randomArray);
    randomNumber = randomNumber * 10 + (randomArray[0] % 10);
  }

  return {
    number: randomNumber,
    expiry: expiryTimestamp,
  };
}

export function isNumberExpired(digits: any) {
  let currentTime = Date.now();
  return currentTime > digits.expiry;
}

export function capitalizeFirstLetterOfEachWord(str: string) {
  if (!str) return str;
  const words = str.split(' ');

  const capitalizedWords = words.map(word => {
    if (!word) return word;

    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  return capitalizedWords.join(' ');
}

export function convertArticleDate(str: string) {
  const newDate = new Date(str).toLocaleString().split(',')[0]
  const date = moment(newDate, 'DD/MM/YYYY');

  // Format the date to the desired format
  const formattedDate = date.format('MMMM Do, YYYY');

  return formattedDate;
}
