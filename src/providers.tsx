import React, { useEffect, useState } from 'react';
import type {
  TDateContext,
  TLanguage,
  TMonth,
  UpdateDateParams,
} from './types';
import useFirstRender from './hooks/useFirstRender';
import { hijriMonths, padZero } from './utils';

export const DateContext = React.createContext<TDateContext>({
  date: {
    year: '',
    month: '',
    day: '',
  },
  updateDate: (_params: Partial<UpdateDateParams>) => {},
});

type Props = {
  initialYear: string;
  valueLang: TLanguage;
  updateOutputDate: (params: UpdateDateParams) => void;
};

const getInitialMonthLabel = (valLang: TLanguage): string => {
  const month = hijriMonths.find((m) => m.monthNumber === 1) as TMonth;
  switch (valLang) {
    case 'ar':
      return month.arabicName;
    case 'en':
      return padZero(month.monthNumber.toString());
    case 'ar+en':
      return `${month.monthNumber} ${month.arabicName}`;
    default:
      return padZero(month.monthNumber.toString());
  }
};

const DateProvider = ({
  children,
  initialYear,
  updateOutputDate,
  valueLang,
}: React.PropsWithChildren<Props>) => {
  const [date, setDate] = useState({
    year: initialYear,
    month: getInitialMonthLabel(valueLang),
    day: '',
  });

  const updateDate = (params: Partial<UpdateDateParams>) => {
    setDate((prevDate) => ({
      ...prevDate,
      ...params,
    }));
    updateOutputDate({
      year: params.year ?? date.year,
      month: params.month ?? date.month,
      day: params.day ?? date.day,
    });
  };

  const isFirstRender = useFirstRender();
  useEffect(() => {
    if (isFirstRender) {
      updateOutputDate({
        year: initialYear,
        month: getInitialMonthLabel(valueLang),
        day: '',
      });
    }
  }, [initialYear, updateOutputDate, isFirstRender, valueLang]);

  return (
    <DateContext.Provider value={{ date, updateDate }}>
      {children}
    </DateContext.Provider>
  );
};

export default DateProvider;
