import {
  requireNativeComponent,
  UIManager,
  Platform,
  ViewStyle,
} from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-faizel_test_1' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

type FaizelTest1Props = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'FaizelTest1View';

export const FaizelTest1View =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<FaizelTest1Props>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
