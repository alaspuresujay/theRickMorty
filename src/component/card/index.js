import {View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {CardContainer, Spacer, StatusDot} from './style';
import {Bold, RegularText} from '../text';
import {RowView} from '../atom/RowView';
import Avatar from '../atom/Avatar';
import COLORS from '../../utils/colors';

const Card = ({data}) => {
  return (
    <CardContainer showShadow>
      <RowView>
        <Avatar url={data?.image} />
        <View>
          <Bold>{data?.name}</Bold>
          <RegularText>{data?.species}</RegularText>
        </View>
        <StatusDot color={data?.status} />
      </RowView>
      <View style={{height: 16}} />
      <RowView alignItems={'center'}>
        <RowView alignItems={'center'}>
          <Icon name="map-marker" size={20} color={COLORS.OVERLAY_DARK} />
          <View style={{width: 4}} />
          <RegularText>{data?.location?.name.slice(0, 15)}</RegularText>
        </RowView>
        <Spacer />
        <RowView alignItems={'center'}>
          <Icon name="earth" size={20} color={COLORS.OVERLAY_DARK} />
          <View style={{width: 4}} />
          <RegularText>{data?.origin?.name.slice(0, 15)}</RegularText>
        </RowView>
      </RowView>
    </CardContainer>
  );
};

export default Card;
