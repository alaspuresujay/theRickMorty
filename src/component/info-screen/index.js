import {View, Text, Modal, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {RowView} from '../atom/RowView';
import Avatar from '../atom/Avatar';
import {Bold, RegularText} from '../text';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Box, Divider, ModalContainer, ModalHeader} from './style';
import {StatusDot} from '../card/style';
import Origin from '../location/Origin';
import {getEpisodes, getLocations} from '../../utils/Api';
import {getIdFromUrl} from '../../utils/helper-functions';
import Episodes from '../episodes';
import Card from '../card';
import COLORS from '../../utils/colors';

const InfoScreen = ({data, open, hideModal}) => {
  const [origin, setOrigin] = useState(null);
  const [location, setLocation] = useState(null);
  const [episodes, setEpisodes] = useState(null);

  useEffect(() => {
    console.log('InfoScreen', data);

    const getData = async () => {
      if (data?.origin?.url) {
        const org = await getLocations(getIdFromUrl(data?.origin?.url));
        if (!org.error) setOrigin(org.data);
      }
      if (data?.location) {
        const loc = await getLocations(getIdFromUrl(data?.location?.url));
        if (!loc.error) setLocation(loc.data);
      }
      const episodeIds = data?.episode.map(e => getIdFromUrl(e)).join(',');
      const episodes = await getEpisodes(episodeIds);
      console.log('episodes', episodes);
      if (!episodes.error) setEpisodes(episodes.data);
    };

    getData();

    return () => {
      console.log('InfoScreen unmount');
      setOrigin(null);
      setLocation(null);
      setEpisodes(null);
    };
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
        <Box>
          <RowView>
            <Avatar
              url={data?.image}
              color={data?.status == 'Alive' ? COLORS.GREEN : COLORS.RED}
            />
            <View>
              <Bold>{data?.name}</Bold>
              <RegularText>{data?.species}</RegularText>
              <RegularText>{data?.status}</RegularText>
            </View>
            {/* <StatusDot color={data?.status} /> */}
          </RowView>
        </Box>

        <View style={{height: 8}} />
        {/* <RowView alignItems={'center'}>
          <Icon name="earth" size={20} />
          <View style={{width: 4}} />
          <RegularText>{data?.location?.name}</RegularText>
        </RowView> */}
        {/* <Divider /> */}
        <RowView>
          <>
            {origin && <Origin label={'Origin'} origin={origin} />}
            {/* <Divider /> */}
            <View style={{width: 8}} />
            {location && <Origin label={'Location'} origin={location} />}
          </>
        </RowView>
        <Divider />
        {episodes && <Episodes episodes={episodes} />}
      </ModalContainer>
    </Modal>
  );
};

export default InfoScreen;
