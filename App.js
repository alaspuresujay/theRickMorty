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
  useEffect(() => {
    (async () => {
      const response = await getCharacters();
      console.log(response);
      setCharactors(response.data.results);
      console.log(new Set(response.data.results.map(item => item.status)));
    })();
  }, []);

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
