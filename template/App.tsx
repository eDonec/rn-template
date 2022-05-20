import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from 'navigator/Navigator';
import React from 'react';
import store from '_redux/store';
import { RootSiblingParent } from 'react-native-root-siblings';
import { Provider } from 'react-redux';
import { AppTheme } from 'themes';
import { navigationRef } from 'services/NavigationService';
import { styleGuide } from 'constants/styleGuide';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView style={styleGuide.flex_1}>
      <Provider store={store}>
        <RootSiblingParent>
          <NavigationContainer theme={AppTheme} ref={navigationRef}>
            <Navigator />
          </NavigationContainer>
        </RootSiblingParent>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
