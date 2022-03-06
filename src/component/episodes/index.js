import {View, Text, FlatList, SafeAreaView} from 'react-native';
import React from 'react';
import {BoxContainer, Box} from './style';
import {Bold} from '../text';
import SpaceBox from '../atom/SpaceBox';

const _renderItem = ({item}) => (
  <Box>
    <Text>Name: {item?.name}</Text>
    <Text>Episode: {item?.episode}</Text>
    <Text>Air Date: {item?.air_date} </Text>
    <Text>Total characters: {item?.characters.length} </Text>
  </Box>
);

const Episodes = ({episodes}) => {
  console.log('Episodes', episodes);
  return (
    <BoxContainer>
      <Bold>Episodes</Bold>
      {/* <Divider /> */}
      <View style={{height: 8}} />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={episodes}
        renderItem={_renderItem}
        keyExtractor={item => item.id}
        // ListFooterComponent={() => <SpaceBox height={20} />}
      />
    </BoxContainer>
  );
};

export default Episodes;
