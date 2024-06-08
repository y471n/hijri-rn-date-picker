import React, { useEffect, useState } from 'react';
import type { TDateContext, UpdateDateParams } from './types';
import useFirstRender from './hooks/useFirstRender';

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
  initialMonth: string;
  initialDay: string;
  updateOutputDate: (params: UpdateDateParams) => void;
};

const DateProvider = ({
  children,
  initialYear,
  updateOutputDate,
}: React.PropsWithChildren<Props>) => {
  const [date, setDate] = useState({
    year: initialYear,
    month: '',
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
        month: '',
        day: '',
      });
    }
  }, [initialYear, updateOutputDate, isFirstRender]);

  return (
    <DateContext.Provider value={{ date, updateDate }}>
      {children}
    </DateContext.Provider>
  );
};

export default DateProvider;
