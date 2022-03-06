import React from 'react';
import {View, FlatList} from 'react-native';
import {BoxContainer, Box} from './style';
import {Bold, TextKeyValue} from '../text';

const _renderItem = ({item}) => (
  <Box>
    <TextKeyValue label="Name">{item?.name}</TextKeyValue>
    <TextKeyValue label="Episode">{item?.episode}</TextKeyValue>
    <TextKeyValue label="Air Date">{item?.air_date}</TextKeyValue>
    <TextKeyValue label="Total Characters">
      {item?.characters.length}
    </TextKeyValue>
  </Box>
);

const Episodes = ({episodes}) => {
  return (
    <BoxContainer>
      <Bold>Episodes</Bold>
      <View style={{height: 8}} />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={episodes}
        renderItem={_renderItem}
        keyExtractor={item => item.id}
      />
    </BoxContainer>
  );
};

export default Episodes;
