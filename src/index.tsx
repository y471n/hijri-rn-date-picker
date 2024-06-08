import React, { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { maxHijriYear } from './utils';
import DateProvider from './providers';
import HijriDate from './components/hijriDate';
import type { UpdateDateParams } from './types';

type Props = {
  initialParams?: {
    startYear?: number;
    endYear?: number;
  };
  updateDate: (params: UpdateDateParams) => void;
  labelLang?: 'en' | 'ar';
  valueLang?: 'en' | 'ar';
  numericMonth?: boolean;
};

const HijriRNDatePicker: React.FC<Props> = (props: Props) => {
  const {
    initialParams,
    updateDate,
    labelLang = 'en',
    valueLang = 'en',
    numericMonth = false,
  } = props;

  const handleOutputUpdate = useCallback(
    (params: UpdateDateParams) => {
      updateDate(params);
    },
    [updateDate]
  );

  return (
    <DateProvider
      initialYear={
        initialParams?.endYear?.toString() ?? maxHijriYear().toString()
      }
      initialMonth={'1'}
      initialDay={'1'}
      updateOutputDate={handleOutputUpdate}
    >
      <View style={styles.container}>
        <HijriDate
          initialParams={{
            startYear: initialParams?.startYear ?? 1,
            endYear: initialParams?.endYear ?? maxHijriYear(),
          }}
          labelLang={labelLang}
          valueLang={valueLang}
          numericMonth={numericMonth}
        />
      </View>
    </DateProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
    width: '100%',
  },
});

export { HijriRNDatePicker };
export type { UpdateDateParams };
