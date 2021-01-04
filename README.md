---
page_type: sample
languages:
- javascript
products:
- azure-app-service-static
name: "JavaScript end-to-end client analyze image with Cognitive Services"
description: "Locally build and deploy a client application to an Azure Static Web App with a GitHub action, analyze image with Cognitive Services Computer Vision."
products: 
- azure
- azure-computer-vision
- azure-app-service-static
- vs-code
---

# Build and deploy a Static Web app to Azure

In this tutorial, locally build and deploy a React/TypeScript client application to an Azure Static Web App with a GitHub action. 

* [Read Tutorial](https://docs.microsoft.com/azure/developer/javascript/tutorial/static-web-app/introduction)
* Create Azure resources
    * [Static web app](https://docs.microsoft.com/azure/static-web-apps)
    * [Cognitive Services' Computer Vision](https://docs.microsoft.com/azure/cognitive-services/computer-vision/)

![](https://docs.microsoft.com/azure/developer/javascript/media/static-web-app/browser-screenshot-react-computervision-app-image-analysis-result.png)

## Features

The React (create-react-app) provides the following functionality: 
* Display message if Azure key and endpoint for Cognitive Services Computer Vision isn't found
* Allows you to analyze an image with Cognitive Services Computer Vision
    * Enter a public image URL or analyze image from collection
    * When analysis is complete
        * Display image
        * Display Computer Vision JSON results 

The GitHub action starts when a push to a specific branch happens:
* Inserts GitHub secrets for Computer Vision key and endpoint into build
* Builds the React (create-react-app) client
* Moves the resulting files to your Azure Static Web app resource

### Prerequisites


- [Node.js and npm](https://nodejs.org/en/download) - installed to your local machine.
- [Visual Studio Code](https://code.visualstudio.com/) - installed to your local machine. 
    - [Azure Static Web Apps (Preview)](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurestaticwebapps) - used to deploy React app to Azure Static Web app.
- [Git](https://git-scm.com/downloads) - used to push to GitHub - which activates the GitHub action.
- [GitHub account](https://github.com/join) - to fork and push to a repo
- Use [Azure Cloud Shell](https://docs.microsoft.com/azure/cloud-shell/quickstart) using the bash environment.

   [![Embed launch](https://shell.azure.com/images/launchcloudshell.png "Launch Azure Cloud Shell")](https://shell.azure.com)   
- If you prefer, [install](https://docs.microsoft.com/cli/azure/install-azure-cli) the Azure CLI to run CLI reference commands.
   - If you're using a local install, sign in with Azure CLI by using the [az login](https://docs.microsoft.com/cli/azure/reference-index#az-login) command.  To finish the authentication process, follow the steps displayed in your terminal.  See [Sign in with Azure CLI](https://docs.microsoft.com/cli/azure/authenticate-azure-cli) for additional sign-in options.
  - When you're prompted, install Azure CLI extensions on first use.  For more information about extensions, see [Use extensions with Azure CLI](https://docs.microsoft.com/cli/azure/azure-cli-extensions-overview).
  - Run [az version](https://docs.microsoft.com/cli/azure/reference-index?#az_version) to find the version and dependent libraries that are installed. To upgrade to the latest version, run [az upgrade](https://docs.microsoft.com/cli/azure/reference-index?#az_upgrade).


