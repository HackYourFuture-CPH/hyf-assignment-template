
class validationError extends Error {
    toUserMessage() {
        return "Please enter a valid URL.";
    }
}

class ApiError extends Error {
    toUserMessage(){
        return "There was a problem contacting the server";
          
    }
}

class Screenshot {
    constractor(id, url, imageUrl) {
        this.id = id;
        this.url = url;
        this.imageUrl = imageUrl;
    }

    render(){
        //TODO: implement DOM rendering
    }

    async delete() {
        //TODO: implement delete logic
    }
}


class App {
    constructor(){
        this.previewImagUrl = null;
    }
    async generateScreenshot() {
        // TODO: implement API call
       }

       async saveScreenshot() {
           // TODO: implement save logic
         }
      async loadScreenshots() {
           // TODO: implement load logic

      }

}

const app = new App();

document.getElementById("generate-btn").onclick = () => app.generateScreenshot();
document.getElementById("save-btn").onclick = () => app.saveScreenshot();

app.loadScreenshots();

