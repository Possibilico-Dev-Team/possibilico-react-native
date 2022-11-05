import {View, Text, Image, TouchableOpacity} from 'react-native';
import styled from 'styled-components';

const FlexView = styled(View)`
display: flex;
width: 100%;
height: 100%;
justify-content: center;
margin: 0px;
padding: 0px;
`;

const LoginButton = styled(TouchableOpacity)`
background-color: #fefefe;
border-radius: 20px;
display: flex;
flex-direction: row;
justify-content: center;
width: 75%;
margin-left: auto;
margin-right: auto;
margin-top: 10px;
margin-bottom: 10px;
`;

const IconImage = styled(Image)`
width: 50px;
height: 50px;
margin-right: 20px;
`;

const ButtonText = styled(Text)`
font-size: 24px;
margin-top: auto;
margin-bottom: auto;
`;

// Use Title and Wrapper like any other React component – except they're styled!
const SignIn = ({navigation, route}) => {
  return (
    <FlexView>
        <LoginButton onPress={()=> {
            console.log('authentication!!!');
            }}>
            <IconImage source={require('../assets/google-icon.png')}/>
            <ButtonText>
                Google
            </ButtonText>
        </LoginButton>
        <LoginButton onPress={()=> {
            console.log('authentication!!!');
            }}>
            <IconImage source={require('../assets/mail-icon.png')}/>
            <ButtonText onPress={()=> { navigation.navigate('EmailSignIn') }}>
                Email
            </ButtonText>
        </LoginButton>
    </FlexView>
  );
};

export default SignIn;