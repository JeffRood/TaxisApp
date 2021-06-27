/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import styles from '../Styles/style';

const HomeSearch = () => (
  <>
    <View>
      {/* Input box Searc */}
      <View style={styles.SearchHomeInputBox}>
        <Text style={styles.SearchHomeInputBoxTitle}> Donde ir ? </Text>
        <View style={styles.SearchHomeInputBoxTimerContainer}>
          <AntDesign name={'clockcircle'} size={16} />
          <Text> Now</Text>
          <MaterialIcons
            name={'keyboard-arrow-down'}
            size={16}
            color={'#535353'}
          />
        </View>
      </View>

      {/* Home Destination */}

      <View style={styles.SearchDestinationContainer}>
        <View
          style={[
            styles.SearchDestinationCircleContainer,
            {backgroundColor: '#218cff'},
          ]}>
          <Entypo name="home" size={24} color="black" />
        </View>
        <Text style={styles.SearchDestinationInput}> Sabana Perdida</Text>
      </View>
      {/* Preview Destination */}

      <View style={styles.SearchDestinationContainer}>
        <View style={styles.SearchDestinationCircleContainer}>
          <AntDesign name={'clockcircle'} size={20} color={'#ffffff'} />
        </View>
        <Text style={styles.SearchDestinationInput}> China</Text>
      </View>
      {/* Preview Destination */}

      <View style={styles.SearchDestinationContainer}>
        <View style={styles.SearchDestinationCircleContainer}>
          <AntDesign name={'clockcircle'} size={20} color={'#ffffff'} />
        </View>
        <Text style={styles.SearchDestinationInput}> Peru</Text>
      </View>
      {/* Preview Destination */}

      <View style={styles.SearchDestinationContainer}>
        <View style={styles.SearchDestinationCircleContainer}>
          <AntDesign name={'clockcircle'} size={20} color={'#ffffff'} />
        </View>
        <Text style={styles.SearchDestinationInput}> Rusia</Text>
      </View>
    </View>
  </>
);

export default HomeSearch;
