import styled from 'styled-components';
import COLORS from '../../utils/colors';

export const BoxContainer = styled.View`
  padding-top: 8px;
  flex: 1;
`;

export const Box = styled.View`
  border: 1px solid ${COLORS.OVERLAY_LIGHT};
  border-radius: 10px;
  padding: 8px;
  margin-top: 8px;
  margin-bottom: 8px;
`;
