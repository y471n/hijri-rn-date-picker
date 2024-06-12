import React from 'react';
import {
  Modal,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import type { TLanguage, TModalPosition, TModalStyle } from '../types';

type Props = {
  position: TModalPosition;
  onClose?: () => void;
  onConfirm?: () => void;
  labelLang: TLanguage;
  modalStyles: TModalStyle;
};

export const DateModal = ({
  position,
  onClose,
  onConfirm,
  labelLang,
  modalStyles,
  children,
}: React.PropsWithChildren<Props>) => {
  const getPositionStyle = () => {
    switch (position) {
      case 'top':
        return styles.top;
      case 'bottom':
        return styles.bottom;
      case 'center':
      default:
        return styles.center;
    }
  };

  const getBgPositionStyle = () => {
    switch (position) {
      case 'top':
        return styles.modalBgTop;
      case 'bottom':
        return styles.modalBgBottom;
      case 'center':
      default:
        return styles.modalBgCenter;
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
      visible={true}
    >
      <TouchableWithoutFeedback onPress={onClose ?? onConfirm}>
        <View
          style={[
            styles.modalBackground,
            getBgPositionStyle(),
            styles.modalBackground,
          ]}
        >
          <TouchableWithoutFeedback>
            <View
              style={[
                styles.modalContainer,
                getPositionStyle(),
                modalStyles.modalContainer,
              ]}
            >
              {children}
              {onClose && (
                <TouchableOpacity
                  onPress={onClose}
                  style={[styles.closeButton, modalStyles.closeButton]}
                >
                  <Text style={[styles.closeText, modalStyles.closeText]}>
                    {labelLang !== 'en' ? 'يغلق' : 'Close'}
                  </Text>
                </TouchableOpacity>
              )}
              {onConfirm && (
                <TouchableOpacity
                  onPress={onConfirm}
                  style={[styles.confirmButton, modalStyles.confirmButton]}
                >
                  <Text style={[styles.confirmText, modalStyles.confirmText]}>
                    {labelLang !== 'en' ? 'يتأكد' : 'Confirm'}
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalBgBottom: {
    justifyContent: 'flex-end',
  },
  modalBgTop: {
    justifyContent: 'flex-start',
  },
  modalBgCenter: {
    justifyContent: 'center',
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    width: '100%',
  },
  top: {
    justifyContent: 'flex-start',
    marginTop: 20,
  },
  bottom: {
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
    color: '#000',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  confirmButton: {
    marginTop: 2,
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: '#007bff',
    color: '#fff',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeText: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'semibold',
  },
  confirmText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});
