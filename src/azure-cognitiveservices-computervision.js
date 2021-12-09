// ./src/azure-cognitiveservices-computervision.js

// Azure SDK client libraries
import { ComputerVisionClient } from '@azure/cognitiveservices-computervision';
import { ApiKeyCredentials } from '@azure/ms-rest-js';

// List of sample images to use in demo
import RandomImageUrl from './DefaultImages';

// Authentication requirements
const key = process.env.REACT_APP_AZURE_COMPUTER_VISION_KEY;
const endpoint = process.env.REACT_APP_AZURE_COMPUTER_VISION_ENDPOINT;

console.log(`key = ${key}`)
console.log(`endpoint = ${endpoint}`)

// Cognitive service features
const visualFeatures = [
    "ImageType",
    "Faces",
    "Adult",
    "Categories",
    "Color",
    "Tags",
    "Description",
    "Objects",
    "Brands"
];

export const isConfigured = () => {
    const result = (key && endpoint && (key.length > 0) && (endpoint.length > 0)) ? true : false;
    console.log(`key = ${key}`)
    console.log(`endpoint = ${endpoint}`)
    console.log(`ComputerVision isConfigured = ${result}`)
    return result;
}

// Computer Vision detected Printed Text
const includesText = async (tags) => {
    return tags.filter((el) => {
        return el.name.toLowerCase() === "text";
    });
}
// Computer Vision detected Handwriting
const includesHandwriting = async (tags) => {
    return tags.filter((el) => {
        return el.name.toLowerCase() === "handwriting";
    });
}
// Wait for text detection to succeed
const wait = (timeout) => {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}

// Analyze Image from URL
export const computerVision = async (url) => {

    // authenticate to Azure service
    const computerVisionClient = new ComputerVisionClient(
        new ApiKeyCredentials({ inHeader: { 'Ocp-Apim-Subscription-Key': key } }), endpoint);

    // get image URL - entered in form or random from Default Images
    const urlToAnalyze = url || RandomImageUrl();
    
    // analyze image
    const analysis = await computerVisionClient.analyzeImage(urlToAnalyze, { visualFeatures });

    // text detected - what does it say and where is it
    if (includesText(analysis.tags) || includesHandwriting(analysis.tags)) {
        analysis.text = await readTextFromURL(computerVisionClient, urlToAnalyze);
    }

    // all information about image
    return { "URL": urlToAnalyze, ...analysis};
}
// analyze text in image
const readTextFromURL = async (client, url) => {
    
    let result = await client.read(url);
    let operationID = result.operationLocation.split('/').slice(-1)[0];

    // Wait for read recognition to complete
    // result.status is initially undefined, since it's the result of read
    const start = Date.now();
    console.log(`${start} -${result?.status} `);
    
    while (result.status !== "succeeded") {
        await wait(500);
        console.log(`${Date.now() - start} -${result?.status} `);
        result = await client.getReadResult(operationID);
    }
    
    // Return the first page of result. 
    // Replace[0] with the desired page if this is a multi-page file such as .pdf or.tiff.
    return result.analyzeResult; 
}