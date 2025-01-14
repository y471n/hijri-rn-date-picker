# Hijri Calendar Date Picker for React Native

## Introduction

This is a simple and easy-to-use Hijri calendar date picker for React Native. It is a cross-platform component that works on both iOS and Android. It is built using TypeScript and supports both TypeScript and JavaScript.

## Features

- Supports both iOS and Android.
- Supports both TypeScript and JavaScript.
- Supports both numeric and string month representation.
- Supports both English and Arabic languages.
- Supports custom styles.

## Prerequisites

- React Native >= 0.60.0
- TypeScript >= 4.0.0

## Installation

```sh
npm install react-native-hijri-date-picker
```

## Usage

```ts
import * as React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import {
  HijriRNDatePicker,
  type TDate,
} from 'react-native-hijri-date-picker';

export default function App() {
  const [date, setDate] = React.useState<TDate>({
    year: '',
    month: '',
    day: '',
  });

  const updateDate = (params: TDate) => {
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
        viewStyle={{ width: 300 }}
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

```

## Screen Recording

### iOS + Android

![Hijri Date Picker in Action](media/screen-recording.gif)
![Hijri Date Picker in Action in Android](media/screen-recording-android.gif)

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---
