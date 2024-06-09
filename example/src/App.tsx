import * as React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import {
  HijriRNDatePicker,
  type UpdateDateParams,
} from 'react-native-hijri-rn-date-picker';

export default function App() {
  const [date, setDate] = React.useState<UpdateDateParams>({
    year: '',
    month: '',
    day: '',
  });

  const updateDate = (params: UpdateDateParams) => {
    setDate((prevDate) => ({
      ...prevDate,
      ...params,
    }));
  };

  return (
    <View style={styles.container}>
      <HijriRNDatePicker
        updateDate={updateDate}
        numericMonth={false}
        labelLang="en"
        valueLang="ar"
        viewStyle={{ width: 400 }}
      />
      <Text style={styles.label}>{JSON.stringify(date)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 500,
    backgroundColor: '#f0f0f0',
  },
  label: {
    fontSize: 20,
    marginTop: 20,
  },
});
