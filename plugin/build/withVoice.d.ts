import { type ConfigPlugin } from '@expo/config-plugins';
export type Props = {
    /**
     * `NSSpeechRecognitionUsageDescription` message.
     */
    speechRecognitionPermission?: string | false;
    /**
     * `NSMicrophoneUsageDescription` message.
     */
    microphonePermission?: string | false;
};
declare const _default: ConfigPlugin<void | Props>;
export default _default;
