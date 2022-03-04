import styled from 'styled-components/native';
import COLORS from '../../utils/colors';

export const CardContainer = styled.View`
  background-color: ${_ => _.bgColor || COLORS.WHITE};
  border-radius: 8px;
  ${_ => (_.showShadow ? `box-shadow: 0 0 5px ${COLORS.OVERLAY_DARK}` : '')};
  elevation: ${_ => (_.showShadow ? 3 : 0)};
  padding-vertical: 16px;
  padding-horizontal: 16px;
  /* flex: 1; */
  margin-bottom: 16px;
`;

export const StatusDot = styled.View`
  height: 8px;
  width: 8px;
  border-radius: 4px;
  background-color: ${_ => (_.color == 'Alive' ? COLORS.GREEN : COLORS.RED)};
  margin-left: 4px;
`;
