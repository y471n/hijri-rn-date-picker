import { Picker } from '@react-native-picker/picker';
import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { convertToArabicNumber, maxHijriYear } from '../utils';
import { DateContext } from '../providers';
import type { TDateContext, TLanguage } from '../types';

type Props = {
  startYear?: number;
  endYear?: number;
  labelLang: TLanguage;
  valueLang: TLanguage;
};

const getYearTranslation = (year: string, labelLang: TLanguage) =>
  labelLang === 'en' ? year : convertToArabicNumber(year);

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
      selectedValue={getYearTranslation(dateCtx.date.year, valueLang)}
      onValueChange={(itemValue, _) =>
        dateCtx.updateDate({ year: getYearTranslation(itemValue, valueLang) })
      }
      style={styles.picker}
    >
      {years.map((year) => (
        <Picker.Item
          key={year}
          label={getYearTranslation(year.toString(), labelLang)}
          value={getYearTranslation(year.toString(), valueLang)}
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
