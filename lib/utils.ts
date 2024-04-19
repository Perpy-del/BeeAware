import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateRandomNumberWithExpiry(expiryTimeInSeconds: number) {
  let currentTime = Date.now();
  let expiryTimestamp = currentTime + (expiryTimeInSeconds * 1000); // Convert seconds to milliseconds
  
  let randomNumber = 0;
  for (let i = 0; i < 5; i++) {
      let randomArray = new Uint32Array(1);
      window.crypto.getRandomValues(randomArray);
      randomNumber = randomNumber * 10 + randomArray[0] % 10;
  }
  
  return {
      number: randomNumber,
      expiry: expiryTimestamp
  };
}

export function isNumberExpired(digits: any) {
  let currentTime = Date.now();
  return currentTime > digits.expiry;
}