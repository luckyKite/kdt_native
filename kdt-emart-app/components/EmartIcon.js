import styled from "styled-components/native";

const IconWrapper = styled.TouchableOpacity`
  //width: 100%;
  //height: 100%;
`;

const IconImage = styled.Image`
  width: 30px;
  height: 30px;
`;

const EmartIcon = ({ iconData , url='none' }) => {

  const handleMenu = () => {
    console.log(url);
  }

  return (
    <IconWrapper onPress={handleMenu}>
      <IconImage source={iconData} />
    </IconWrapper>

  );
}

export default EmartIcon;