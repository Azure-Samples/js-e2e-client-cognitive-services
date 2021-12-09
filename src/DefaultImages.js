// ./src/DefaultImages.js

const describeURL = 'https://raw.githubusercontent.com/Azure-Samples/cognitive-services-sample-data-files/master/ComputerVision/Images/celebrities.jpg';
const categoryURLImage = 'https://moderatorsampleimages.blob.core.windows.net/samples/sample16.png';
const tagsURL = 'https://moderatorsampleimages.blob.core.windows.net/samples/sample16.png';
const objectURL = 'https://raw.githubusercontent.com/Azure-Samples/cognitive-services-node-sdk-samples/master/Data/image.jpg';
const brandURLImage = 'https://docs.microsoft.com/en-us/azure/cognitive-services/computer-vision/images/red-shirt-logo.jpg';
const facesImageURL = 'https://raw.githubusercontent.com/Azure-Samples/cognitive-services-sample-data-files/master/ComputerVision/Images/faces.jpg';
const printedTextSampleURL = 'https://moderatorsampleimages.blob.core.windows.net/samples/sample2.jpg';
const multiLingualTextURL = 'https://raw.githubusercontent.com/Azure-Samples/cognitive-services-sample-data-files/master/ComputerVision/Images/MultiLingual.png';
const adultURLImage = 'https://raw.githubusercontent.com/Azure-Samples/cognitive-services-sample-data-files/master/ComputerVision/Images/celebrities.jpg';
const colorURLImage = 'https://raw.githubusercontent.com/Azure-Samples/cognitive-services-sample-data-files/master/ComputerVision/Images/celebrities.jpg';
// don't use with picture analysis
// eslint-disable-next-line
const mixedMultiPagePDFURL = 'https://raw.githubusercontent.com/Azure-Samples/cognitive-services-sample-data-files/master/ComputerVision/Images/MultiPageHandwrittenForm.pdf';
const domainURLImage = 'https://raw.githubusercontent.com/Azure-Samples/cognitive-services-sample-data-files/master/ComputerVision/Images/landmark.jpg';
const typeURLImage = 'https://raw.githubusercontent.com/Azure-Samples/cognitive-services-python-sdk-samples/master/samples/vision/images/make_things_happen.jpg';

const DefaultImages = [
    describeURL,
    categoryURLImage,
    tagsURL,
    objectURL,
    brandURLImage,
    facesImageURL,
    adultURLImage,
    colorURLImage,
    domainURLImage,
    typeURLImage,
    printedTextSampleURL,
    multiLingualTextURL,
    //mixedMultiPagePDFURL
];

const RandomImageUrl = () => {
    return DefaultImages[Math.floor(Math.random() * Math.floor(DefaultImages.length))];
}

export default RandomImageUrl;