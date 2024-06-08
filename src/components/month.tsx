import React, { useContext } from 'react';
import { DateContext } from '../providers';
import { Picker } from '@react-native-picker/picker';
import { getMonthVal, hijriMonths } from '../utils';
import { StyleSheet } from 'react-native';
import type { TLanguage } from '../types';

type Props = {
  labelLang: TLanguage;
  valueLang: TLanguage;
  numericMonth: boolean;
};

export const Month = (props: Props) => {
  const { labelLang = 'en', valueLang = 'en', numericMonth } = props;
  const dateCtx = useContext(DateContext);

  const handleMonthChange = (month: string) => {
    dateCtx.updateDate({ month: month });
  };

  return (
    <Picker
      selectedValue={dateCtx.date.month}
      onValueChange={(itemValue, _) => handleMonthChange(itemValue)}
      style={styles[labelLang]}
    >
      {hijriMonths.map((month) => (
        <Picker.Item
          key={month.monthNumber.toString()}
          label={getMonthVal(month, numericMonth, labelLang)}
          value={getMonthVal(month, numericMonth, valueLang)}
        />
      ))}
    </Picker>
  );
};

const styles = StyleSheet.create({
  'en': {
    width: '30%',
  },
  'ar': {
    width: '40%',
  },
  'ar+en': {
    width: '40%',
  },
});
