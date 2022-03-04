import {PixelRatio} from 'react-native';
import {guidelineBaseWidth, screenWidth} from './constant';

// export const scaleSize = size => size * PixelRatio.getFontScale()
export const scaleSize = size => (screenWidth / guidelineBaseWidth) * size;

function scaleFont(size) {
  if (screenWidth <= guidelineBaseWidth) {
    return size * 1 - PixelRatio.get() / 10;
  } else {
    return size;
  }
}

export const FONTS = {
  Bold: 'ProximaNovaA-Bold',
  SemiBold: 'ProximaNovaA-Semibold',
  Regular: 'ProximaNovaA-Regular',
  ExtraBold: 'ProximaNovaA-Extrabld',
};

export const FONT_SIZES = {
  8: `${scaleFont(8)}px`,
  10: `${scaleFont(10)}px`,
  11: `${scaleFont(11)}px`,
  12: `${scaleFont(12)}px`,
  13: `${scaleFont(13)}px`,
  14: `${scaleFont(14)}px`,
  16: `${scaleFont(16)}px`,
  18: `${scaleFont(18)}px`,
  20: `${scaleFont(20)}px`,
  21: `${scaleFont(21)}px`,
  22: `${scaleFont(22)}px`,
  24: `${scaleFont(24)}px`,
  26: `${scaleFont(26)}px`,
  28: `${scaleFont(28)}px`,
  30: `${scaleFont(30)}px`,
  34: `${scaleFont(34)}px`,
  48: `${scaleFont(48)}px`,
};
