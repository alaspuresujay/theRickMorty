import {Text} from 'react-native';
import React from 'react';
import {Container, Divider} from './style';
import {Bold, TextKeyValue} from '../text';

const Origin = ({label, origin}) => {
  console.log(label, origin);
  return (
    <Container>
      <Bold>{label}</Bold>
      <Divider />
      {origin ? (
        <>
          <TextKeyValue label="Name">{origin?.name} </TextKeyValue>
          <TextKeyValue label="Dimension">{origin?.dimension} </TextKeyValue>
          <TextKeyValue label="Type">{origin?.type} </TextKeyValue>
          <TextKeyValue label="Total Residents">
            {origin?.residents.length}
          </TextKeyValue>
        </>
      ) : (
        <Text>No {label} data</Text>
      )}
    </Container>
  );
};

export default Origin;
