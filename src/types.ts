export type TMonth = {
  monthNumber: number;
  monthName: string;
  arabicName: string;
};

export type UpdateDateParams = {
  year: string;
  month: string;
  day: string;
};

export type TDateContext = {
  date: {
    year: string;
    month: string;
    day: string;
  };
  updateDate: (params: Partial<UpdateDateParams>) => void;
};

export type TLanguage = 'en' | 'ar' | 'ar+en';
