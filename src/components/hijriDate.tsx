import type { TLanguage } from '../types';
import { Day } from './day';
import { Month } from './month';
import { Year } from './year';
import React from 'react';

type Props = {
  initialParams: {
    startYear: number;
    endYear: number;
  };
  labelLang: TLanguage;
  valueLang: TLanguage;
  numericMonth: boolean;
};

const HijriDate = (props: Props) => {
  const { initialParams, labelLang, valueLang, numericMonth } = props;

  return (
    <>
      <Year
        startYear={initialParams.startYear}
        endYear={initialParams.endYear}
        labelLang={labelLang}
        valueLang={valueLang}
      />
      <Month
        labelLang={labelLang}
        valueLang={valueLang}
        numericMonth={numericMonth}
      />
      <Day labelLang={labelLang} valueLang={valueLang} />
    </>
  );
};

export default HijriDate;
