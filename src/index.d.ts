// index.d.ts

declare module 'react-native-pip-mode' {
  /**
   * Check if Picture-in-Picture (PiP) mode is supported on the device.
   * Returns a Promise that resolves to true if PiP mode is supported, false otherwise.
   */
  export function isPipSupported(): Promise<boolean>;

  /**
   * Enter Picture-in-Picture (PiP) mode.
   * Returns a Promise that resolves when PiP mode is successfully entered.
   */
  export function enterPipMode(): Promise<void>;

  /**
   * Check if the app is currently in Picture-in-Picture (PiP) mode.
   * Returns a Promise that resolves to true if the app is in PiP mode, false otherwise.
   */
  export function isInPipMode(): Promise<boolean>;
}
