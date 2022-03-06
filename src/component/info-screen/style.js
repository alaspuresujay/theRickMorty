import styled from 'styled-components';
import COLORS from '../../utils/colors';

export const ModalContainer = styled.View`
  flex: 1;
  padding: 16px;
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
`;
