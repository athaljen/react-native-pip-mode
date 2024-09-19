declare module 'react-native-pip-mode' {
  interface PipModeModule {
    /**
     * Check if PiP mode is supported.
     */
    isPipSupported(): Promise<boolean | undefined>;

    /**
     * Enter PiP (Picture-in-Picture) mode.
     * - This function is supported on Android only.
     * - On iOS, it does nothing (PiP is only for AV Player).
     */
    enterPipMode(): Promise<void>;

    /**
     * @android
     * Check if the app is currently in PiP mode.
     * - On Android, this returns a Promise that resolves to a boolean or string indicating the current PiP state.
     * - On iOS, this returns a Promise that resolves to `false`.
     */
    isInPipMode(): Promise<boolean | string>;
  }

  const PipMode: PipModeModule;

  export default PipMode;
}
