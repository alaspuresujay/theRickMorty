import {Dimensions, Platform} from 'react-native';

export const screenHeight = Dimensions.get('window').height;
export const screenWidth = Dimensions.get('window').width;

export const currentPlatform = Platform.OS;

export const guidelineBaseWidth = 375;
