import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { DateContext } from '../providers';
import type { TLanguage } from '../types';
import { Picker } from '@react-native-picker/picker';
import { getDayVal } from '../utils';

type Props = {
  labelLang: TLanguage;
  valueLang: TLanguage;
};

export const Day = (props: Props) => {
  const { labelLang = 'en', valueLang = 'en' } = props;
  const dateCtx = useContext(DateContext);
  const days = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <Picker
      selectedValue={dateCtx.date.day}
      onValueChange={(itemValue, _) => dateCtx.updateDate({ day: itemValue })}
      style={styles[labelLang]}
      mode="dialog"
      prompt={labelLang === 'ar' ? 'اختر اليوم' : 'Select Day'}
    >
      {days.map((day) => (
        <Picker.Item
          key={day.toString()}
          label={getDayVal(day.toString(), labelLang)}
          value={getDayVal(day.toString(), valueLang)}
        />
      ))}
    </Picker>
  );
};

const styles = StyleSheet.create({
  'en': {
    minWidth: '30%',
  },
  'ar': {
    minWidth: '30%',
  },
  'ar+en': {
    minWidth: '40%',
  },
});
