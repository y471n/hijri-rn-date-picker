export type TMonth = {
  monthNumber: number;
  monthName: string;
  arabicName: string;
};

export type TDate = {
  year: string;
  month: string;
  day: string;
};

export type TDateContext = {
  date: {
    year: string;
    month: string;
    day: string;
  };
  updateDate: (params: Partial<TDate>) => void;
};

export type TLanguage = 'en' | 'ar' | 'ar+en';

export type TMode = 'inline' | 'modal';

export type TModalPosition = 'top' | 'bottom' | 'center';

export type TModalStyle = {
  modalBackground: Record<string, unknown>;
  modalContainer: Record<string, unknown>;
  closeButton: Record<string, unknown>;
  confirmButton: Record<string, unknown>;
  closeText: Record<string, unknown>;
  confirmText: Record<string, unknown>;
};
