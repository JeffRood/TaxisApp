import React from 'react';
import {View, Text} from 'react-native';
import styles from '../Styles/style';

const HomeMessage = () => (
  <>
    <View style={styles.ContainerHomeMessage}>
      <Text style={styles.TitleHomeMessage} >Asegurate bien que no somos reponsable de nada</Text>

      <Text style={styles.BodyHomeMessage}>Manito no nos joda mucho y viaje conforme </Text>
      <Text style={styles.LearnMoreHomeMessage}>Saber Mas </Text>

    </View>
  </>
);

export default HomeMessage;
