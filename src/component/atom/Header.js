import {Image} from 'react-native';
import React from 'react';
import styled from 'styled-components';
import {Bold} from '../text';

const Header = () => {
  return (
    <Container>
      <LogoContainer>
        <Image
          style={{height: '100%', width: '100%'}}
          source={require('../../assets/logo.png')}
        />
      </LogoContainer>
      <Bold>The Rick and Morty</Bold>
    </Container>
  );
};

export default Header;

const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
  margin-top: 8px;
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
