import React from 'react';
import {Container, Divider} from './style';
import {Bold, RegularText, TextKeyValue} from '../text';

const Origin = ({label, origin, full}) => {
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
        <RegularText>No {label} data</RegularText>
      )}
    </Container>
  );
};

export default Origin;
