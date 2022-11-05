import {View, Text, Button} from 'react-native';
import styled from 'styled-components';

const FlexView = styled(View)`
display: flex;
width: 100%;
height: 100%;
`;
const SuperText = styled(Text)`
font-weight: bold;
`;

// Use Title and Wrapper like any other React component – except they're styled!
const HomeScreen = ({navigation,route}) => {
  return (
    <FlexView>
        <SuperText>
          Hello World!
        </SuperText>
        <Button
          title="Go to Jane's profile"
          onPress={() =>
            navigation.navigate('Profile', { name: 'Jane' })
          }
        />
    </FlexView>
  );
};

export default HomeScreen;