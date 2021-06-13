import React from 'react';
import {Text, View} from 'react-native';
import styles from '../Styles/style';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const HomeSearch = () => (
  <>
    <View>
      {/* Input box Searc */}
      <View style={styles.SearchHomeInputBox}>
        <Text style={styles.SearchHomeInputBoxTitle}> Donde ir ? </Text>
        <View style={styles.SearchHomeInputBoxTimerContainer}>
         <AntDesign name={'clockcircle'} size={16} />  
         <Text> Now</Text>
         <MaterialIcons name={'keyboard-arrow-down'} size={16}/>
        </View>
      </View>
 
      {/* Preview Destination */}

      {/* Home Destination */}
    </View>
  </>
);

export default HomeSearch;
