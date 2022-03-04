import {View, Text, Modal, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {RowView} from '../atom/RowView';
import Avatar from '../atom/Avatar';
import {Bold, RegularText} from '../text';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Divider, ModalContainer, ModalHeader} from './style';
import {StatusDot} from '../card/style';
import Origin from '../location/Origin';

const InfoScreen = ({data, open, hideModal}) => {
  useEffect(() => {
    console.log('InfoScreen', data?.name);
  }, [data?.id]);

  return (
    <Modal visible={open} onRequestClose={hideModal} animationType="slide">
      <ModalContainer>
        <ModalHeader>
          <Bold>{data?.name}</Bold>
          <TouchableOpacity onPress={hideModal}>
            <Icon name="close" size={28} color={'#f00'} />
          </TouchableOpacity>
        </ModalHeader>
        <RowView>
          <Avatar url={data?.image} />
          <View>
            <Bold>{data?.name}</Bold>
            <RegularText>{data?.species}</RegularText>
            <RegularText>{data?.status}</RegularText>
          </View>
          <StatusDot color={data?.status} />
        </RowView>
        <View style={{height: 16}} />
        <RowView alignItems={'center'}>
          <Icon name="map-marker" size={20} />
          <View style={{width: 4}} />
          <RegularText>{data?.location?.name}</RegularText>
        </RowView>
        <View style={{height: 8}} />
        {/* <RowView alignItems={'center'}>
          <Icon name="earth" size={20} />
          <View style={{width: 4}} />
          <RegularText>{data?.location?.name}</RegularText>
        </RowView> */}
        <Divider />
        <Origin />
      </ModalContainer>
    </Modal>
  );
};

export default InfoScreen;
