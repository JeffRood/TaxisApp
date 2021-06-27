/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View } from 'react-native';

import styles from '../Styles/style';

const HomeMessage = () => (
  <>
    <View style={styles.ContainerHomeMessage}>
      <Text style={styles.TitleHomeMessage}>Jeffry Driver </Text>

      <Text style={styles.BodyHomeMessage}>
        Manito esta app es para que usted coja el taxis y lo lleve, si lo atraca
        uno de nuestro conductores no somos responsable aqui nadie es policia
      </Text>
      <Text style={styles.LearnMoreHomeMessage}>Saber Mas </Text>
    </View>
  </>
);

export default HomeMessage;
