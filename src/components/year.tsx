import { Picker } from '@react-native-picker/picker';
import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { getYearVal, maxHijriYear } from '../utils';
import { DateContext } from '../providers';
import type { TDateContext, TLanguage } from '../types';

type Props = {
  startYear?: number;
  endYear?: number;
  labelLang: TLanguage;
  valueLang: TLanguage;
};

export const Year = (props: Props) => {
  const {
    startYear = 1,
    endYear = maxHijriYear(),
    labelLang,
    valueLang,
  } = props;

  const dateCtx = useContext<TDateContext>(DateContext);

  const years = Array.from(
    { length: endYear - startYear + 1 },
    (_, i) => endYear - i
  );

  return (
    <Picker
      mode="dialog"
      prompt={labelLang === 'ar' ? 'اختر السنة' : 'Select Year'}
      selectedValue={getYearVal(dateCtx.date.year, valueLang)}
      onValueChange={(itemValue, _) =>
        dateCtx.updateDate({ year: getYearVal(itemValue, valueLang) })
      }
      style={styles[labelLang]}
    >
      {years.map((year) => (
        <Picker.Item
          key={year}
          label={getYearVal(year.toString(), labelLang)}
          value={getYearVal(year.toString(), valueLang)}
        />
      ))}
    </Picker>
  );
};

const styles = StyleSheet.create({
  'en': {
    width: '40%',
  },
  'ar': {
    width: '30%',
  },
  'ar+en': {
    width: '30%',
  },
});
