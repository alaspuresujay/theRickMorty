import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import {FONT_SIZES} from '../../utils/fonts';

export const Text = styled.Text`
  color: ${_ => (_.error ? '#F55F71' : _.color || '#232728')};
  font-size: ${_ => _.fontSize || FONT_SIZES[14]};
  letter-spacing: ${_ => _.letterSpacing || 0.2}px;
  line-height: ${_ => _.lineHeight || FONT_SIZES[21]};
  text-transform: ${_ => _.textTransform || 'none'};
  text-align: ${_ => _.textAlign || 'left'};
  text-align-vertical: ${_ => _.textAlignVertical || 'top'};
  width: ${_ => _.width || 'auto'};
`;

export const FontPropTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]).isRequired,
};
