import React, {useState, useEffect} from 'react';
import {View, Pressable, Image, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Provider as PaperProvider} from 'react-native-paper';
import PregnancyTest from '../../assets/pregnancy-test.png';
import CustomIcon from '../UI/Icon';
import {withTheme} from 'react-native-paper';
import ProviderSignUp from './ProviderSignUp';
import LoginForm from './LoginForm';
import ForgotForm from './ForgotForm';
import CreateForm from './CreateForm';
import Error from './Error';
const LogInPage = (props) => {
  const {colors} = props.theme;

  const [currentFormMounted, setCurrentForm] = useState('provider');

  const handleLogInClick = () => {
    setCurrentForm('login');
  };

  const handleBackClick = () => {
    setCurrentForm('provider');
  };

  const handleForgotClick = () => {
    setCurrentForm('forgot');
  };

  const handleCreateClick = () => {
    setCurrentForm('create');
  };

  return (
    <LinearGradient
      colors={['#22c1c3', '#00701a']}
      style={styles.linearGradient}>
      <PaperProvider>
        <View style={styles.middleSquare}>
          {currentFormMounted === 'provider' ? (
            <Pressable style={styles.flexRowEnd} onPress={handleLogInClick}>
              <Text
                style={{
                  color: colors.primary,
                }}>
                LOG IN
              </Text>
              <CustomIcon
                name={'arrow-right'}
                pLeft={5}
                size={20}
                color={'black'}
              />
            </Pressable>
          ) : (
            <Pressable style={styles.flexRowStart} onPress={handleBackClick}>
              <CustomIcon
                name={'arrow-left'}
                pLeft={5}
                size={20}
                color={'black'}
              />
              <Text
                style={{
                  color: colors.primary,
                }}>
                GO BACK
              </Text>
            </Pressable>
          )}

          <View style={styles.flexRowCol}>
            <Text
              style={{
                color: colors.primary,
                fontSize: 36,
                fontFamily: 'RedRose-Regular',
              }}>
              Line-Eyes
            </Text>
            <Image source={PregnancyTest} style={styles.headerImg} />

            {currentFormMounted === 'provider' && (
              // <Error />
              <ProviderSignUp
                primary={colors.primary}
                propagateCreate={handleCreateClick}
              />
            )}

            {currentFormMounted === 'login' && (
              <LoginForm
                primary={colors.primary}
                propagateForgot={handleForgotClick}
              />
            )}

            {currentFormMounted === 'forgot' && (
              <ForgotForm primary={colors.primary} />
            )}

            {currentFormMounted === 'create' && (
              <CreateForm primary={colors.primary} />
            )}
          </View>
        </View>
      </PaperProvider>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleSquare: {
    backgroundColor: '#FFF',
    marginTop: 100,
    marginBottom: 100,
    width: 300,
    height: 200,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 3,
    borderRadius: 15,
    flex: 1,
  },
  flexRowEnd: {
    flexDirection: 'row',
    width: 285,
    justifyContent: 'flex-end',
    marginTop: 5,
  },
  flexRowStart: {
    flexDirection: 'row',
    width: 285,
    justifyContent: 'flex-start',
    marginTop: 5,
    marginLeft: 5,
  },
  flexRowCol: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 36,
    fontFamily: 'RedRose-Regular',
  },
  headerImg: {
    width: 200,
    // height: 200,
    resizeMode: 'contain',
    marginTop: -25,
    marginBottom: 10,
  },
});

export default withTheme(LogInPage);
