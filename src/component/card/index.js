import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import {CardContainer, StatusDot} from './style';
// import {data} from '../../data';
import {Bold, RegularText} from '../text';
import {RowView} from '../atom/RowView';
import Avatar from '../atom/Avatar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Card = ({data}) => {
  return (
    <CardContainer showShadow>
      <RowView>
        <Avatar url={data.image} />
        <View>
          <Bold>{data.name}</Bold>
          <RegularText>{data.species}</RegularText>
        </View>
        <StatusDot color={data.status} />
      </RowView>
      <View style={{height: 16}} />
      <RowView alignItems={'center'}>
        <RowView alignItems={'center'}>
          <Icon name="map-marker" size={20} />
          <View style={{width: 4}} />
          <RegularText>{data.location.name.slice(0, 15)}</RegularText>
        </RowView>
        <View
          style={{
            height: '80%',
            width: 1,
            marginHorizontal: 15,
            backgroundColor: 'grey',
          }}
        />
        <RowView alignItems={'center'}>
          <Icon name="earth" size={20} />
          <View style={{width: 4}} />
          <RegularText>{data.origin.name.slice(0, 15)}</RegularText>
        </RowView>
      </RowView>
    </CardContainer>
  );
};

export default Card;
