/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  //   HomeComponent
  ContainerHomeMessage: {
    backgroundColor: '#1065e9',
    padding: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  TitleHomeMessage: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  BodyHomeMessage: {
    color: '#E0E1E1',
    fontSize: 15,
    marginBottom: 10,
  },

  LearnMoreHomeMessage: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },

  //   SearchHomeInput
  SearchHomeInputBox: {
    backgroundColor: '#e7e7e7',
    margin: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  SearchHomeInputBoxTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#434343',
  },
  SearchHomeInputBoxTimerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 50,
    // width: Dimensions.get
  },

  SearchDestinationContainer: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#dbdbdb',
  },
  SearchDestinationCircleContainer: {
    padding: 10,
    backgroundColor: '#b3b3b3',
    borderRadius: 25,
  },
  SearchDestinationInput: {
    margin: 10,
    fontWeight: '500',
    fontSize: 16,
  },
});

export default styles;
