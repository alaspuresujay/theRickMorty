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
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Header from './src/component/atom/Header';
import Card from './src/component/card';
import InfoScreen from './src/component/info-screen';
import {getCharacters} from './src/utils/Api';
import {CardContainer} from './style';

const App = () => {
  const [charactors, setCharactors] = useState([]);
  const [infoVisible, setInfoVisible] = useState(false);
  const [currentCharacter, setCurrentCharacter] = useState(null);
  const [page, setPage] = useState(1);

  const loadCharacters = async page => {
    const response = await getCharacters(page);
    console.log(
      'LOG> [theRickMorty/App.js:30] response.data --->',
      response.data,
    );

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
    <SafeAreaView>
      {/* <StatusBar /> */}
      <Header />

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
          contentContainerStyle={{marginHorizontal: 16}}
        />
      </CardContainer>
      <InfoScreen
        open={infoVisible}
        data={currentCharacter}
        hideModal={hideModal}
      />
    </SafeAreaView>
  );
};

export default App;
