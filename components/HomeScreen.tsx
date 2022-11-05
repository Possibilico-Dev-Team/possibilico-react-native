import {View, Text, Button} from 'react-native';
import styled from 'styled-components';

const NewText =  styled.h1`
display: block;
text-align: center;
padding: 3em;
height: 100%;
`;

// Use Title and Wrapper like any other React component – except they're styled!
const HomeScreen = ({navigation}): JSX.Element => {
  return (
    <View>
        <NewText>
          Hello World!
        </NewText>
        <Button
          title="Go to Jane's profile"
          onPress={() =>
            navigation.navigate('Profile', { name: 'Jane' })
          }
        />
    </View>
  );
};

export default HomeScreen;