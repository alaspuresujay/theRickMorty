import {Image} from 'react-native';
import React from 'react';
import styled from 'styled-components';

const Avatar = ({url}) => {
  return (
    <AvatarContainer>
      <Image
        style={{height: '100%', width: '100%'}}
        source={{
          uri: url,
        }}
      />
    </AvatarContainer>
  );
};

export default Avatar;

const AvatarContainer = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  margin-right: 16px;
  /* border-width: 2px; */
`;
