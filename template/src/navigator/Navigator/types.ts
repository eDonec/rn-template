import { AppNavigationProp, AppRouteProp } from 'navigator/navigatorUtils';

export type NavigatorParamList = {
  Typography: undefined;
  Components: undefined;
};

export type NavigatorNavigationProp = AppNavigationProp<NavigatorParamList>;
export type NavigatorRouteProp<T extends keyof NavigatorParamList>  = AppRouteProp<NavigatorParamList, T>;
