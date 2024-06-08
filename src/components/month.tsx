import React, { useContext } from 'react';
import { DateContext } from '../providers';
import { Picker } from '@react-native-picker/picker';
import { hijriMonths } from '../utils';
import { StyleSheet } from 'react-native';
import type { TLanguage, TMonth } from '../types';

type Props = {
  labelLang: TLanguage;
  valueLang: TLanguage;
  numericMonth: boolean;
};

const getMonthVal = (
  month: TMonth,
  numericMonth: boolean,
  labelLang: TLanguage
) => {
  if (numericMonth) {
    return month.monthNumber.toString();
  }
  return labelLang === 'ar' ? month.arabicName : month.monthName;
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
      style={styles.picker}
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
  picker: {
    width: '50%',
  },
});
