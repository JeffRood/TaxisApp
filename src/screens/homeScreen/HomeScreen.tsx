import React from 'react';
import { View } from 'react-native';

import HomeMap from '../../components/homeMap/homamap';
import HomeMessage from '../../components/HomeMessage/HomeMessage';
import HomeSearch from '../../components/HomeSearc/HomeSearch';

const HomeScreen = () => (
  <>
    <View>
      <HomeMap />

      <HomeMessage />
      <HomeSearch />
    </View>
  </>
);

export default HomeScreen;
