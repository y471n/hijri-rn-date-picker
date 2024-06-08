import { Picker } from '@react-native-picker/picker';
import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { maxHijriYear } from '../utils';
import { DateContext } from '../providers';
import type { TDateContext } from '../types';

type Props = {
  startYear?: number;
  endYear?: number;
};

export const Year = (props: Props) => {
  const { startYear = 1, endYear = maxHijriYear() } = props;

  const dateCtx = useContext<TDateContext>(DateContext);

  const years = Array.from(
    { length: endYear - startYear + 1 },
    (_, i) => endYear - i
  );

  return (
    <Picker
      selectedValue={dateCtx.date.year}
      onValueChange={(itemValue, _) => dateCtx.updateDate({ year: itemValue })}
      style={styles.picker}
    >
      {years.map((year) => (
        <Picker.Item key={year} label={year.toString()} value={year} />
      ))}
    </Picker>
  );
};

const styles = StyleSheet.create({
  picker: {
    width: '50%',
  },
});
