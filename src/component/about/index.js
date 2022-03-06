import {View, Text, Modal, Button, Pressable, Linking} from 'react-native';
import React from 'react';
import {Container} from './style';
import {Bold, Regular2228, RegularText} from '../text';
import SpaceBox from '../atom/SpaceBox';

const AboutMe = ({open, hideModal}) => {
  return (
    <Modal visible={open} onRequestClose={hideModal} animationType="fade">
      <Container>
        <Bold>AboutMe</Bold>
        <RegularText>Designed and Developed By:</RegularText>
        <Regular2228>Sujay Alaspure</Regular2228>
        <SpaceBox height={20} />
        <Pressable
          onPress={() => Linking.openURL('http://alaspuresujay.github.io/')}>
          <RegularText>
            Portfolio:{' '}
            <Text style={{color: 'blue'}}>alaspuresujay.github.io</Text>
          </RegularText>
        </Pressable>
      </Container>
    </Modal>
  );
};

export default AboutMe;
