# react-native-pip-mode

A native module to enable Picture-in-Picture (PiP) mode in React Native applications. This module allows users to check if PiP mode is supported on their device and enter PiP mode, with Android support for app-level PiP functionality.

## Installation
#### npm
```bash
npm install react-native-pip-mode
```
#### Yarn
```bash
yarn add react-native-pip-mode
```

## Usage

```javascript
import PipMode from 'react-native-pip-mode';

// Check if PiP is supported on the device
PipMode.isPipSupported().then((isSupported) => {
  console.log('Is PiP supported?', isSupported);
});

// Enter Picture-in-Picture mode (Android only)
PipMode.enterPipMode().then(() => {
console.log('Entered PiP mode');
});


// Check if the app is currently in PiP mode (Android Only)
PipMode.isInPipMode().then((isInPip) => {
console.log('Is in PiP mode?', isInPip);
});
```

Note: On iOS, enterPipMode and isInPipMode are not applicable and will resolve as false. PiP on iOS is restricted to AV Player, Contribution is open.

## Contributing

See the contributing guide for information on how to contribute to the project and the development workflow.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
