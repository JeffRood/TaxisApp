import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
//   HomeComponent
ContainerHomeMessage: {
  backgroundColor: '#1065e9',
  padding: 15,
  borderTopLeftRadius: 10,
  borderTopRightRadius: 10,
}, 
TitleHomeMessage: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold"
},
BodyHomeMessage: {
    color: "#E0E1E1",
    fontSize: 15,
    marginBottom: 10
},

LearnMoreHomeMessage: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold"
},

//   SearchHomeInput
SearchHomeInputBox: {
    backgroundColor: '#d9d9d9',
    margin: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
},
SearchHomeInputBoxTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: "#6c6c6c"
},
SearchHomeInputBoxTimerContainer: {
    flexDirection: 'row',
    // width: Dimensions.get

}
    
})

export default styles;