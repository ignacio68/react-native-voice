import { type SpeechEvents, type TranscriptionEvents, type TranscriptionEndEvent, type TranscriptionErrorEvent, type TranscriptionStartEvent, type SpeechRecognizedEvent, type SpeechErrorEvent, type SpeechResultsEvent, type SpeechStartEvent, type SpeechEndEvent, type SpeechVolumeChangeEvent, type TranscriptionResultsEvent } from './VoiceModuleTypes';
declare class RCTVoice {
    private _loaded;
    private _listeners;
    private _events;
    constructor();
    removeAllListeners(): void;
    destroy(): Promise<void>;
    destroyTranscription(): Promise<void>;
    start(locale: string, options?: {}): Promise<void>;
    startTranscription(url: string, locale: string, options?: {}): Promise<void>;
    stop(): Promise<void>;
    stopTranscription(): Promise<void>;
    cancel(): Promise<void>;
    cancelTranscription(): Promise<void>;
    isAvailable(): Promise<0 | 1>;
    /**
     * (Android) Get a list of the speech recognition engines available on the device
     * */
    getSpeechRecognitionServices(): any;
    isRecognizing(): Promise<0 | 1>;
    set onSpeechStart(fn: (e: SpeechStartEvent) => void);
    set onTranscriptionStart(fn: (e: TranscriptionStartEvent) => void);
    set onSpeechRecognized(fn: (e: SpeechRecognizedEvent) => void);
    set onSpeechEnd(fn: (e: SpeechEndEvent) => void);
    set onTranscriptionEnd(fn: (e: SpeechEndEvent) => void);
    set onSpeechError(fn: (e: SpeechErrorEvent) => void);
    set onTranscriptionError(fn: (e: TranscriptionErrorEvent) => void);
    set onSpeechResults(fn: (e: SpeechResultsEvent) => void);
    set onTranscriptionResults(fn: (e: TranscriptionResultsEvent) => void);
    set onSpeechPartialResults(fn: (e: SpeechResultsEvent) => void);
    set onSpeechVolumeChanged(fn: (e: SpeechVolumeChangeEvent) => void);
}
export type { SpeechEndEvent, SpeechErrorEvent, SpeechEvents, SpeechStartEvent, SpeechRecognizedEvent, SpeechResultsEvent, SpeechVolumeChangeEvent, TranscriptionEndEvent, TranscriptionErrorEvent, TranscriptionEvents, TranscriptionStartEvent, TranscriptionResultsEvent, };
declare const _default: RCTVoice;
export default _default;
//# sourceMappingURL=index.d.ts.map