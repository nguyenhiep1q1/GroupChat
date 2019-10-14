import React from 'react';
import {View , Text} from 'react-native';

import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import JoinRoomScreen from './screens/JoinRoom';
import ChatRoomScreen from './screens/ChatRoom';

const JoinStack = createStackNavigator({ JoinRoom: JoinRoomScreen });
const ChatRoomStack = createStackNavigator({ChatRoom : ChatRoomScreen});
export default createAppContainer(createSwitchNavigator(
  {
    // App: AppStack,
    Join : {
       screen : JoinStack
    },
    ChatRoom : {
      screen : ChatRoomStack
    }
  },
  {
    initialRouteName: 'Join',
    
  }
));