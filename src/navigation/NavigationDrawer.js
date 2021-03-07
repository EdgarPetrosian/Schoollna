import React, { useContext, useEffect, useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View, Text, StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  DrawerItem,
  createDrawerNavigator,
  DrawerContentScrollView,
  useIsDrawerOpen,
} from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import IconM from 'react-native-vector-icons/MaterialIcons';
import 'react-native-gesture-handler';

const menuIcon = <SvgMenuIcon />;
const homeIcon = <SvgHome />;
const myprofileIcon = <SvgMyProfile />;
const mychildrenIcon = <SvgMyChildren />;
const settingsIcon = <SvgSettings />;
const contactusIcon = <SvgContactUs />;
const aboutIcon = <SvgAboutSchoollna />;
const termsIcon = <SvgTerms />;
const logoutIcon = <SvgLogOut />;
const notificationIcon = <SvgNotification />;
const noimageIcon = <SvgNoUserImage width={25} height={25} />;
const closeIcon = <IconM name="close" color={'#fff'} size={35} />;
// const notificationIcon = <IconM name="notifications-none" color={'#fff'} size={25} />;

import Home from '../screens/Home';
import Login from '../screens/Login';
import MyProfile from '../screens/MyProfile';
import MyChildrens from '../screens/MyChildrens';
import Settings from '../screens/Settings';
import AboutSchoollna from '../screens/AboutSchoollna';
import Notification from '../screens/Notification';
import TermsCondition from '../screens/TermsCondition';
import ContactUs from '../screens/ContactUs';
import SvgMenuIcon from '../themes/SVG/SvgMenuIcon';
import { DRAWER_LOGO } from '../themes/ImagesLib';
import SvgHome from '../themes/SVG/SvgHome';
import SvgMyProfile from '../themes/SVG/SvgMyProfile';
import SvgMyChildren from '../themes/SVG/SvgMyChildren';
import SvgSettings from '../themes/SVG/SvgSettings';
import SvgContactUs from '../themes/SVG/SvgContactUs';
import SvgAboutSchoollna from '../themes/SVG/SvgAboutSchoollna';
import SvgTerms from '../themes/SVG/SvgTerms';
import SvgLogOut from '../themes/SVG/SvgLogOut';
import SvgNotification from '../themes/SVG/SvgNotification';
import SvgNoUserImage from '../themes/SVG/SvgNoUserImage';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

import { getFocusedRouteNameFromRoute, NavigationContainer } from '@react-navigation/native';
import Splash from '../screens/Splash';
import { AuthContext } from '../service/context';

function getHeaderTitle(route) {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
  switch (routeName) {
    case 'Home':
      return 'Home';
    case 'MyChildrens':
      return 'My Childrens';
    case 'Settings':
      return 'Settings';
    case 'AboutSchoollna':
      return 'About Schoollna';
    case 'Notification':
      return 'Notification';
    case 'TermsCondition':
      return 'Terms & Condition';
    case 'MyProfile':
      return 'My Profile';
    case 'ContactUs':
      return 'Contact Us';
    case 'Login':
      return 'Welcome To Schoollns';
    default:
      return 'Welcome To Schoollns'
  }
}

const Screens = (props) => {
  const [changeIcon, setChangeIcon] = useState(false)
  const [user, setUser] = useState(null)
  const [notificationCount, setNotificationCount] = useState(3)
  const isOpen = useIsDrawerOpen()
  useEffect(() => {
    if (!isOpen) {
      setChangeIcon(false)
    }
  }, [isOpen])
  return (
    <Animated.View style={StyleSheet.flatten([styles.stack, props.style,])}>
      <Stack.Navigator
        screenOptions={{
          cardStyle: styles.cardStyle,
          headerStyle: styles.headerStyle,
          headerTitle: getHeaderTitle(props.route),
          headerTitleStyle: styles.headerTitleStyle,
          headerLeft: () => (
            <TouchableOpacity onPress={() => {
              props.navigation.openDrawer()
              setChangeIcon(!changeIcon)
            }}
              style={{ paddingLeft: 31 }}>
              {changeIcon ? closeIcon : menuIcon}
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View style={styles.headerRightCont}>
              <TouchableOpacity onPress={() => {
                props.navigation.navigate('Notification')
              }}
                style={styles.rightIconLeftCont}>
                {
                  notificationCount ?
                    <View style={styles.notificationCountCont}>
                      <Text style={styles.notificationCountText}>
                        {notificationCount}
                      </Text>
                    </View> : null
                }
                {notificationIcon}
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                props.navigation.navigate('MyProfile')
              }}
                style={{ paddingRight: 31 }}>
                {
                  user ?
                    <Image
                      source={{ uri: 'https://lwlies.com/wp-content/uploads/2017/04/avatar-2009.jpg', }}
                      resizeMode="center"
                      style={styles.avatar}
                    /> :
                    noimageIcon
                }
              </TouchableOpacity>
            </View>
          ),
        }}>
        <Stack.Screen name="Home">{props => <Home {...props} />}</Stack.Screen>
        <Stack.Screen name="MyProfile">{props => <MyProfile {...props} />}</Stack.Screen>
        <Stack.Screen name="MyChildrens">{props => <MyChildrens {...props} />}</Stack.Screen>
        <Stack.Screen name="Settings">{props => <Settings {...props} />}</Stack.Screen>
        <Stack.Screen name="ContactUs">{props => <ContactUs {...props} />}</Stack.Screen>
        <Stack.Screen name="AboutSchoollna">{props => <AboutSchoollna {...props} />}</Stack.Screen>
        <Stack.Screen name="Notification">{props => <Notification {...props} />}</Stack.Screen>
        <Stack.Screen name="TermsCondition">{props => <TermsCondition {...props} />}</Stack.Screen>
      </Stack.Navigator>
    </Animated.View>
  );
};
const LoginStack = (props) => {
  return (
    <Animated.View style={StyleSheet.flatten([styles.stack, props.style,])}>
      <Stack.Navigator
        screenOptions={{
          cardStyle: styles.cardStyle,
          headerStyle: styles.headerStyle,
          headerTitle: 'Welcome To Schoollns',
          headerTitleStyle: styles.headerTitleStyle,
        }}>
        <Stack.Screen name="Login">{props => <Login {...props} />}</Stack.Screen>
      </Stack.Navigator>
    </Animated.View>
  );
};

// const DrawerContent = props => {
//   return (
//     <DrawerContentScrollView {...props}
//       contentContainerStyle={{ flex: 1 }}>
//       <View style={{ width: '100%', paddingLeft: 36, paddingTop: 30, paddingBottom: 45 }}>
//         <Image
//           source={DRAWER_LOGO}
//           resizeMode="center"
//           style={styles.logo}
//         />
//         <View style={styles.avatarCont}>
//           <Image
//             source={{
//               uri: 'https://lwlies.com/wp-content/uploads/2017/04/avatar-2009.jpg',
//             }}
//             resizeMode="center"
//             style={styles.avatar}
//           />
//           <Text style={styles.avatarText}>
//             Nay jlelaty
//             </Text>
//         </View>

//         <Text style={styles.textUserHello}>
//           React UI Kit
//           </Text>
//         <Text style={styles.textUserEmail}>
//           contact@react-ui-kit.com
//           </Text>
//       </View>
//       <DrawerItem
//         // focused: Boolean indicating whether to highlight the drawer item as active.
//         activeTintColor={'#fff'}
//         inactiveTintColor={'rgba(255,255,255,0.56)'}
//         label="Dashboard"
//         labelStyle={styles.drawerLabel}
//         style={styles.drawerItem}
//         onPress={() => props.navigation.navigate('Home')}
//         icon={() => dashboardIcon}
//       />
//       <DrawerItem
//         activeTintColor={'#fff'}
//         inactiveTintColor={'rgba(255,255,255,0.56)'}
//         label="Messages"
//         labelStyle={styles.drawerLabel}
//         style={styles.drawerItem}
//         onPress={() => props.navigation.navigate('Messages')}
//         icon={() => messageIcon}
//       />
//       <DrawerItem
//         activeTintColor={'#fff'}
//         inactiveTintColor={'rgba(255,255,255,0.56)'}
//         label="Contact us"
//         labelStyle={styles.drawerLabel}
//         style={styles.drawerItem}
//         onPress={() => props.navigation.navigate('Contact')}
//         icon={() => contactIcon}
//       />
//       <DrawerItem
//         activeTintColor={'#fff'}
//         inactiveTintColor={'rgba(255,255,255,0.56)'}
//         label="Logout"
//         labelStyle={styles.drawerLabel}
//         style={styles.drawerItem}
//         icon={() => logoutIcon}
//         onPress={() => alert('Are your sure to logout?')}
//       />
//     </DrawerContentScrollView>
//   );
// };

const CustomDrawerContent = (props) => {
  const { signOut } = useContext(AuthContext);
  return (
    <DrawerContentScrollView {...props}
      contentContainerStyle={{ flex: 1 }}>
      <View style={{ width: '100%', paddingLeft: 36, paddingTop: 30, paddingBottom: 45 }}>
        <Image
          source={DRAWER_LOGO}
          resizeMode="center"
          style={styles.logo}
        />
        <View style={styles.avatarCont}>
          <Image
            source={{
              uri: 'https://lwlies.com/wp-content/uploads/2017/04/avatar-2009.jpg',
            }}
            resizeMode="center"
            style={styles.avatar}
          />
          <Text style={styles.avatarText}>{"Nay jlelaty"}</Text>
        </View>
        <Text style={styles.textUserHello}>{"React UI Kit"}</Text>
        <Text style={styles.textUserEmail}>{"contact@react-ui-kit.com"}</Text>
      </View>
      <TouchableOpacity onPress={() => { props.navigation.navigate('Home') }}
        style={styles.drawerItem}>
        {homeIcon}
        <Text style={styles.drawerLabel}>{"Home"}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { props.navigation.navigate('MyProfile') }}
        style={styles.drawerItem}>
        {myprofileIcon}
        <Text style={styles.drawerLabel}>{"My Profile"}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { props.navigation.navigate('MyChildrens') }}
        style={styles.drawerItem}>
        {mychildrenIcon}
        <Text style={styles.drawerLabel}>{"My Children"}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { props.navigation.navigate('Settings') }}
        style={styles.drawerItem}>
        {settingsIcon}
        <Text style={styles.drawerLabel}>{"Settings"}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { props.navigation.navigate('ContactUs') }}
        style={styles.drawerItem}>
        {contactusIcon}
        <Text style={styles.drawerLabel}>{"Contact Us"}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { props.navigation.navigate('AboutSchoollna') }}
        style={styles.drawerItem}>
        {aboutIcon}
        <Text style={styles.drawerLabel}>{"About Schoollna "}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { props.navigation.navigate('TermsCondition') }}
        style={styles.drawerItem}>
        {termsIcon}
        <Text style={styles.drawerLabel}>{"Terms & Condition"}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        signOut()
        props.navigation.closeDrawer()
      }}
        style={styles.drawerLogOutItem}>
        {logoutIcon}
        <Text style={styles.drawerLabel}>{"Log Out"}</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
}

const RootStackScreen = ({ userToken }) => {
  const [progress, setProgress] = React.useState(new Animated.Value(0));
  const scale = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  const borderRadius = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, 25],
  });

  const animatedStyle = { borderRadius, transform: [{ scale }] };
  return <Drawer.Navigator
    initialRouteName={"Screens"}
    drawerType="slide"
    overlayColor="transparent"
    drawerStyle={styles.drawerStyles}
    contentContainerStyle={{ flex: 1, }}
    drawerContentOptions={{
      activeBackgroundColor: '#010020',
      activeTintColor: '#fff',
      inactiveTintColor: 'rgba(255,255,255,0.56)',
    }}
    sceneContainerStyle={{
      backgroundColor: '#010020',
    }}
    // drawerContent={props => {
    //   setProgress(props.progress);
    //   return <DrawerContent {...props} />;
    // }}>
    drawerContent={(props) => { setProgress(props.progress); return <CustomDrawerContent {...props} /> }} >
    {
      userToken ? (
        <Drawer.Screen
          name="Screens">
          {props => <Screens {...props} style={animatedStyle} />}
        </Drawer.Screen>
      )
        :
        (
          <Drawer.Screen
            options={{ gestureEnabled: false }}
            name="Login">
            {props => {
              return <LoginStack {...props} />
            }}
          </Drawer.Screen>
        )
    }
  </Drawer.Navigator>
};

export default () => {


  let mounted = false;
  // const { translations } = React.useContext(LocalizationContext);
  // const linking = { prefixes: [prefix] };
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => {
    return {
      signIn: async (login, password) => {
        // Keyboard.dismiss()
        if (!login) {
          // showAlert(translations.AMSG_login_is_required);
          return;
        }
        if (!password) {
          // showAlert(translations.AMSG_password_is_required);
          return;
        }
        setIsLoading(true);
        // let result = await UserActions.login(login, password);
        setIsLoading(false);
        // if (result.success) {
        setUserToken(true);
        // await actionSaveLocationGet();
        // } else {
        // showAlert(result.errMsg);
        // setUserToken(null);
        // }
        // let userLoginData = {
        //     "login": login,
        // };
        // await ApiStorage.setLogindata(userLoginData);
        console.log('bbbbbb', login, password);
      },
      signOut: async () => {
        setIsLoading(false);
        setUserToken(null);

        // let isOnline = store.getState().deviceReducer.isOnline;
        // if (isOnline) {
        //     await UserActions.logOut();
        // }
        // await ApiStorage.setLogindata('');
        // await ApiStorage.clearUser();
      }
    };
  }, []);

  const handleCheckToken = async () => {
    setIsLoading(true);
    // let result = await UserActions.checkToken();
    setIsLoading(false);
    // if (result.success) {
    //     setUserToken(result.data.accessToken);
    // } else {
    //     setUserToken(null);
    // }
  }

  React.useEffect(() => {
    mounted = true;
    if (mounted) {
      setTimeout(() => {
        setIsLoading(false);
        handleCheckToken()
      }, 1000);
    }
    return () => { mounted = false };
  }, []);

  if (isLoading) {
    return <Splash />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <LinearGradient style={{ flex: 1 }} colors={['#010020', '#010020']}>
        <StatusBar barStyle={"light-content"} />
        <NavigationContainer>
          <RootStackScreen userToken={userToken} />
        </NavigationContainer>
      </LinearGradient>
    </AuthContext.Provider>
  );
};

const styles = StyleSheet.create({
  stack: {
    flex: 1,
    shadowColor: '#F4B220',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 5,
    // overflow: 'hidden',
    backgroundColor: '#010020',
  },
  drawerStyles: {
    flex: 1,
    width: '50%',
    backgroundColor: '#010020'
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 36,
    paddingBottom: 25,
  },
  drawerLogOutItem: {
    position: 'absolute',
    bottom: 74,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 36,
    paddingBottom: 25,
  },
  drawerLabel: {
    paddingLeft: 9,
    color: 'white',
    fontSize: 12,
    fontWeight: '400',
  },
  notificationCountText: {
    color: 'white',
    fontSize: 9,
    fontWeight: '400',
  },
  notificationCountCont: {
    position: 'absolute',
    left: 6,
    bottom: 12,
    zIndex: 1000,
    width: 13,
    height: 13,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4B220',

  },
  avatarText: {
    paddingLeft: 6,
    color: 'white',
    fontSize: 9,
    fontWeight: '600'
  },
  textUserHello: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600'
  },
  textUserEmail: {
    color: 'rgba(255,255,255,0.56)',
    fontSize: 9,
    fontWeight: '400'
  },
  avatarCont: {
    flexDirection: 'row',
    paddingTop: 25,
    paddingBottom: 15,
    alignItems: 'center'
  },
  avatar: {
    height: 25,
    width: 25,
    borderRadius: 30
  },
  logo: {
    height: 33,
    width: 146,
  },
  cardStyle: {
    backgroundColor: '#010020',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    borderColor: 'transparent',
    borderWidth: 0,
  },
  headerStyle: {
    backgroundColor: '#010020',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomWidth: 0,
    borderBottomColor: 'transparent',
    elevation: 0,
    shadowOpacity: 0,
  },
  headerTitleStyle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
  },
  headerRightCont: {
    flexDirection: 'row'
  },
  rightIconLeftCont: {
    paddingRight: 20,
    justifyContent: 'flex-end',
    paddingBottom: 5,
  }
});