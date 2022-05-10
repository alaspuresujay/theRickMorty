import {Platform} from 'react-native';
import styled from 'styled-components';
import COLORS from '../../utils/colors';
import {screenWidth} from '../../utils/constant';

export const ModalContainer = styled.View`
  flex: 1;
  padding: 16px;
  ${Platform.OS === 'ios' && `padding-top: 38px`}
  background-color: ${COLORS.WHITE};
  margin-top: ${Platform.OS === 'ios' ? '20px' : '0px'};
`;

export const ModalHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const Divider = styled.View`
  margin-top: 8px;
  margin-bottom: 8px;
  height: 1px;
  width: 100%;
  background-color: ${COLORS.OVERLAY_LIGHT};
`;

export const Box = styled.View`
  border: 1px solid ${COLORS.OVERLAY_LIGHT};
  border-radius: 10px;
  padding: 8px;
  margin-top: 8px;
  margin-bottom: 8px;
  /* max-width: ${screenWidth}; */
  flex-direction: row;
  overflow: hidden;
`;
