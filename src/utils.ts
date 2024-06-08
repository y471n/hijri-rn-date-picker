import type { TMonth } from './types';

export const GregorianToHijri = (gregorianYear: number): number => {
  const hijriYear = (gregorianYear - 622) / 0.970224;
  return Math.floor(hijriYear); // Using Math.floor to get the closest lower Hijri year
};

export const maxHijriYear = () => {
  const currentYear = new Date().getFullYear();
  // Adding 1 because there can be a year difference between Gregorian and Hijri years
  return GregorianToHijri(currentYear) + 1;
};

export const hijriMonths: Array<TMonth> = [
  { monthNumber: 1, monthName: 'Muharram', arabicName: 'المحرّم' },
  { monthNumber: 2, monthName: 'Safar', arabicName: 'صفر' },
  { monthNumber: 3, monthName: "Rabi' al-Awwal", arabicName: 'ربيع الأول' },
  { monthNumber: 4, monthName: "Rabi' al-Thani", arabicName: 'ربيع الآخر' },
  { monthNumber: 5, monthName: 'Jumada al-Awwal', arabicName: 'جمادى الأول' },
  { monthNumber: 6, monthName: 'Jumada al-Thani', arabicName: 'جمادى الآخر' },
  { monthNumber: 7, monthName: 'Rajab', arabicName: 'رجب' },
  { monthNumber: 8, monthName: "Sha'ban", arabicName: 'شعبان' },
  { monthNumber: 9, monthName: 'Ramadan', arabicName: 'رمضان' },
  { monthNumber: 10, monthName: 'Shawwal', arabicName: 'شوّال' },
  { monthNumber: 11, monthName: "Dhu al-Qi'dah", arabicName: 'ذو القعدة' },
  { monthNumber: 12, monthName: 'Dhu al-Hijjah', arabicName: 'ذو الحجة' },
];

export const padZero = (num: string): string =>
  num.length === 1 ? `0${num}` : num;

export const convertToArabicNumber = (numStr: string): string => {
  const arabicNumerals = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩']; // Arabic numeral symbols

  return numStr
    .split('')
    .map((char) => {
      const digit = parseInt(char, 10); // Convert the character to a digit
      return !isNaN(digit) && digit >= 0 && digit <= 9
        ? arabicNumerals[digit]
        : char; // Convert or keep the character
    })
    .join('') // Join the array back into a string
    .split('')
    .reverse()
    .join(''); // Reverse the string to get the correct order
};
