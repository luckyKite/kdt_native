// import { Text, Platform, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

const EmartBtnUi = styled.View`
  margin-top: 20px;
  width: 200px;
  background-color: #fff;
  padding: 20px 40px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
`;

const EmartBtnText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #222;
`;

const EmartButton = ({name = 'name'}) => {

  return (
    // <View style={styles.sectionBtn}></View>
   
    <EmartBtnUi>
      <EmartBtnText>{name}</EmartBtnText>
    </EmartBtnUi>
  );
}

// const styles = StyleSheet.create({
//   sectionBtn: {
//     width: 200,
//     height: 50,
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 10,
//     ...Platform.select({
//       ios: {
//         shadowColor: '#000000',
//         shadowOffset: {
//           width: 5,
//           height: 5,
//         },
//         shadowOpacity: 0.2,
//         shadowRadius: 10,
//       },
//       android: {
//         elevation: 20,
//       },
//       web: {
//         boxShadow: '0px 0px 10px rgba(0,0,0,0.2)',
//       }}),
//   }
// });

export default EmartButton;