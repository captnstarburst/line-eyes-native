import React, {useState} from 'react';
import {styles} from './styles';
import {ScrollView, View, Pressable, Image, Text} from 'react-native';
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
import Footer from '../UI/Footer';
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
    <ScrollView>
      <PaperProvider>
        <LinearGradient
          colors={['#22c1c3', '#00701a']}
          style={styles.linearGradient}>
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

          <Footer white />
        </LinearGradient>
      </PaperProvider>
    </ScrollView>
  );
};

export default withTheme(LogInPage);
