import {Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styled from 'styled-components';
import {Bold} from '../text';
import AboutMe from '../about';
import COLORS from '../../utils/colors';

const Header = () => {
  const [open, setOpen] = useState(false);
  const hideModal = () => {
    setOpen(false);
  };
  return (
    <Container>
      <TouchableOpacity
        onPress={() => setOpen(!open)}
        style={{alignItems: 'center', justifyContent: 'center'}}>
        <LogoContainer>
          <Image
            style={{height: '100%', width: '100%'}}
            source={require('../../assets/logo.png')}
          />
        </LogoContainer>
        <Bold>The Rick and Morty</Bold>
      </TouchableOpacity>
      <AboutMe open={open} hideModal={hideModal} />
    </Container>
  );
};

export default Header;

const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-bottom: 16px;
  padding-top: 16px;
  margin-top: -4px;
  border-bottom-width: 1px;
  border-bottom-color: ${COLORS.OVERLAY_LIGHT};
  background-color: whitesmoke;
`;

const LogoContainer = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
`;
