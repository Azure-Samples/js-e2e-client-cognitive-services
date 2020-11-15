import * as Speech from "microsoft-cognitiveservices-speech-sdk";

// Authentication requirements
const key = process.env.REACT_APP_SpeechKey || "fbfab2b80910435e91e080bebbf2a80d";
const endpoint = process.env.REACT_APP_SpeechEndPoint || 'https://eastus.api.cognitive.microsoft.com/sts/v1.0/issuetoken';

export const isConfigured = () => {
    
    const result = (key.length > 0 && endpoint.length > 0) ? true : false;
    console.log(`isConfigured = ${result}`)
    return result;
}

export const synthesizeSpeech = async (text, fileName) => {
    
    try {
        const speechConfig = Speech.SpeechConfig.fromEndpoint(endpoint, key);
        const audioConfig = Speech.AudioConfig.fromAudioFileOutput(fileName /*"path-to-file.wav"*/);

        const synthesizer = new Speech.SpeechSynthesizer(speechConfig, audioConfig);
        const result = await synthesizer.speakTextAsync(text);
        synthesizer.close();
        return result;
    } catch (ex) {
        console.log(ex.message);
    }
}