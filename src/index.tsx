import React, { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { maxHijriYear } from './utils';
import DateProvider from './providers';
import HijriDate from './components/hijriDate';
import type {
  TLanguage,
  TModalPosition,
  TModalStyle,
  TMode,
  TDate,
} from './types';
import { DateModal } from './components/dateModal';

type Props = {
  initialParams?: {
    startYear?: number;
    endYear?: number;
  };
  updateDate: (params: TDate) => void;
  labelLang?: TLanguage;
  valueLang?: TLanguage;
  numericMonth?: boolean;
  viewStyle?: Record<string, unknown>;
  mode: TMode;
  isOpen?: boolean;
  onConfirm?: () => void;
  onClose?: () => void;
  modalPosition?: TModalPosition;
  modalStyles?: Partial<TModalStyle>;
};

const HijriRNDatePicker: React.FC<Props> = (props: Props) => {
  const {
    initialParams,
    updateDate,
    labelLang = 'en',
    valueLang = 'en',
    numericMonth = false,
    viewStyle = {},
    mode = 'inline',
    isOpen = true,
    onConfirm,
    onClose,
    modalPosition = 'bottom',
    modalStyles,
  } = props;

  const handleOutputUpdate = useCallback(
    (params: TDate) => {
      updateDate(params);
    },
    [updateDate]
  );

  if (!isOpen) {
    return null;
  }

  return (
    <DateProvider
      initialYear={
        initialParams?.endYear?.toString() ?? maxHijriYear().toString()
      }
      updateOutputDate={handleOutputUpdate}
      valueLang={valueLang}
    >
      {mode === 'modal' && (
        <DateModal
          onClose={onClose}
          onConfirm={onConfirm}
          position={modalPosition}
          labelLang={labelLang}
          modalStyles={{
            modalBackground: modalStyles?.modalBackground ?? {},
            modalContainer: modalStyles?.modalContainer ?? {},
            confirmButton: modalStyles?.confirmButton ?? {},
            closeButton: modalStyles?.closeButton ?? {},
            confirmText: modalStyles?.confirmText ?? {},
            closeText: modalStyles?.closeText ?? {},
          }}
        >
          <View style={{ ...styles.container, ...viewStyle }}>
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
        </DateModal>
      )}

      {mode === 'inline' && (
        <View style={{ ...styles.container, ...viewStyle }}>
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
      )}
    </DateProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
    padding: 10,
  },
});

export { HijriRNDatePicker };
export type { TDate as UpdateDateParams };
