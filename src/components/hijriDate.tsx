import { Month } from './month';
import { Year } from './year';
import React from 'react';

type Props = {
  initialParams: {
    startYear: number;
    endYear: number;
  };
  labelLang: 'en' | 'ar';
  valueLang: 'en' | 'ar';
  numericMonth: boolean;
};

const HijriDate = (props: Props) => {
  const { initialParams, labelLang, valueLang, numericMonth } = props;

  return (
    <>
      <Year
        startYear={initialParams.startYear}
        endYear={initialParams.endYear}
      />
      <Month
        labelLang={labelLang}
        valueLang={valueLang}
        numericMonth={numericMonth}
      />
    </>
  );
};

export default HijriDate;
