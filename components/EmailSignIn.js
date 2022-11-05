import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import styled from 'styled-components';
import * as GoogleAuthentication from 'expo-auth-session/providers/google';
import {getAuth, GoogleAuthProvider} from 'firebase/auth';

const signInWithGoogle = () => 
                GoogleAuthentication.logInAsync({
                    androidStandaloneAppClientId: 'ANDROID_STANDALONE_APP_CLIENT_ID',
                    iosStandaloneAppClientId: 'IOS_STANDALONE_APP_CLIENT_ID',
                    scopes: ['profile', 'email']
                })
                .then((logInResult) => {
                        if (logInResult.type === 'success') {
                            const { idToken, accessToken } = logInResult;
                            const credential = GoogleAuthProvider.credential(
                                idToken,
                                accessToken
                            );
            
                            return getAuth().signInWithCredential(credential);
                            // Successful sign in is handled by firebase.auth().onAuthStateChanged
                        }
                        return Promise.reject(); // Or handle user cancelation separatedly
                    })
                    .catch((error) => {
                        // ...
                        console.log(error);
                    });

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

const ButtonText = styled(Text)`
font-size: 24px;
margin-top: auto;
margin-bottom: auto;
`;

const InputField = styled(TextInput)`
background-color: #f3f3f3f3;
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

// Use Title and Wrapper like any other React component – except they're styled!
const HomeScreen = ({navigation, route}) => {
  return (
    <FlexView>
        <InputField placeholder='Email Address' />
        <InputField placeholder='Password' />
        <LoginButton onPress={()=> {
                signInWithGoogle();
            }}>
            <ButtonText>
                Sign In
            </ButtonText>
        </LoginButton>
    </FlexView>
  );
};

export default HomeScreen;