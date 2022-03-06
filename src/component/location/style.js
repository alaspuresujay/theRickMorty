import styled from 'styled-components';
import COLORS from '../../utils/colors';
import {screenWidth} from '../../utils/constant';

export const Divider = styled.View`
  width: 50%;
  height: 1px;
  background-color: ${COLORS.OVERLAY_LIGHT};
  margin-top: 8px;
  margin-bottom: 8px;
`;

export const Container = styled.View`
  max-width: ${_ => (!_.full ? screenWidth / 2 - 20 : '100%')};
`;

export const BoldText = styled.Text`
  font-weight: bold;
`;
