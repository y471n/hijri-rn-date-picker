import * as React from 'react';

import { Button, StyleSheet, Text, View } from 'react-native';
import {
  HijriRNDatePicker,
  type UpdateDateParams,
} from 'react-native-hijri-date-picker';
export default function App() {
  const [date, setDate] = React.useState<UpdateDateParams>({
    year: '',
    month: '',
    day: '',
  });
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);

  const updateDate = (params: UpdateDateParams) => {
    setDate((prevDate) => ({
      ...prevDate,
      ...params,
    }));
  };

  return (
    <View style={styles.container}>
      {isDatePickerVisible && (
        <HijriRNDatePicker
          updateDate={updateDate}
          numericMonth={false}
          labelLang="en"
          valueLang="en"
          mode="modal"
          modalPosition="bottom"
          onClose={() => setDatePickerVisibility(false)} // Optional
          // onConfirm={() => setDatePickerVisibility(false)} // Optional
          modalStyles={{
            modalBackground: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
            modalContainer: { backgroundColor: 'white' },
            confirmButton: { backgroundColor: '#007aff' },
          }}
        />
      )}
      <Button
        title="Show Picker"
        onPress={() => setDatePickerVisibility(true)}
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
