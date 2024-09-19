declare module 'react-native-pip-mode' {
  interface PipModeModule {
    /**
     * @android
     * Check if PiP mode is supported.
     * - On Android, this returns a Promise that resolves to a boolean indicating whether PiP is supported.
     * - On iOS, this returns a Promise that resolves to `false`, since PiP is not supported.
     */
    isPipSupported(): Promise<boolean | undefined>;

    /**
     * Enter PiP (Picture-in-Picture) mode.
     * - This function is supported on Android only.
     * - On iOS, it does nothing (PiP is not supported).
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
