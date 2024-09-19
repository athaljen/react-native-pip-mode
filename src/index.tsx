import { NativeModules, Platform } from 'react-native';

interface PipModeModule {
  isPipSupported(): Promise<boolean>;
  enterPipMode(): Promise<void>;
  isInPipMode(): Promise<boolean | string>;
}

const LINKING_ERROR =
  `The package 'react-native-pip-mode' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const NativePipModule = NativeModules.PipMode
  ? NativeModules.PipMode
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

const PipMode: PipModeModule = {
  isPipSupported: () => {
    return Platform.select({
      android: () => NativePipModule.isPipSupported(),
      ios: () => Promise.resolve(true),
      default: () => Promise.resolve(false),
    })!();
  },
  enterPipMode:() => {
    return Platform.select({
      android: () => NativePipModule.enterPipMode(),
      ios: () =>NativePipModule.enterPipMode(),
      default: () => Promise.reject("Platform not supported."),
    })!();
  },
  isInPipMode: () => {
    return Platform.select({
      android: () => NativePipModule.isInPipMode(),
      ios: () => Promise.resolve(false),
      default: () => Promise.resolve(false),
    })!();
  },
};

export default PipMode;
