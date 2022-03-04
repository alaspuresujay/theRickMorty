/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Modal,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Card from './src/component/card';
import InfoScreen from './src/component/info-screen';
import {getCharacters} from './src/utils/Api';
import {CardContainer} from './style';
const App = () => {
  const [charactors, setCharactors] = useState([]);
  const [infoVisible, setInfoVisible] = useState(false);
  const [currentCharacter, setCurrentCharacter] = useState(null);
  const [page, setPage] = useState(1);
  let pageNumber = 0;

  const loadCharacters = async page => {
    console.log('page', page);
    const response = await getCharacters(page);
    console.log(response.data.results);
    setCharactors(prev => [...prev, ...response.data.results]);
  };

  useEffect(() => {
    loadCharacters(page);
  }, [page]);

  const hideModal = () => {
    setInfoVisible(false);
    // setCurrentCharacter(null);
  };

  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <CardContainer>
        <FlatList
          // style={{flex: 1}}
          data={charactors}
          renderItem={({item}) => (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                setInfoVisible(true);
                setCurrentCharacter(item);
              }}>
              <Card data={item} />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
          onEndReachedThreshold={0.5}
          onEndReached={() => setPage(prev => prev + 1)}
        />
      </CardContainer>
      <InfoScreen
        open={infoVisible}
        data={currentCharacter}
        hideModal={hideModal}
      />
    </>
  );
};

export default App;
