
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
    constructor(id, url, imageUrl) {
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
        this.previewImageUrl = null;
    }
    async generateScreenshot() {
        
         try {
        let url = document.getElementById("url-input").value.trim();

        if (!url) {
            throw new validationError("URL is required");
        }
        if (!url.startsWith("http://") && !url.startsWith("https://")) {
            url = "https://" + url;
        }



        
        const apiUrl = `https://website-screenshot6.p.rapidapi.com/screenshot?url=${encodeURIComponent(url)}&width=1920&height=1080`;

        const options = {
            method: "GET",
            headers: {
                "x-rapidapi-key": "67190f8610msha777cc237f812bep1cf694jsn955fa5181d17",
                "x-rapidapi-host": "website-screenshot6.p.rapidapi.com",
                "Content-Type": "application/json"
            }
        };

        const response = await fetch(apiUrl, options);

        if (!response.ok) {
            throw new ApiError("Screenshot API failed");
        }

       const text = await response.text();
       console.log("Raw API text:", text);

       
     const data = JSON.parse(text);
     console.log("Parsed API response:", data);

     const screenshotUrl = data.screenshotUrl;

    if (!screenshotUrl) {
    throw new ApiError("API did not return a screenshot URL");
    }

    // Show preview
    document.getElementById("preview").src = screenshotUrl;

    
    this.previewImageUrl = screenshotUrl;

     
    document.getElementById("save-btn").disabled = false;

       

    } catch (err) {
        if (err instanceof validationError) {
            alert(err.toUserMessage());
        } else if (err instanceof ApiError) {
            alert(err.toUserMessage());
        } else {
            alert("Unexpected error while generating screenshot.");
        }
    }



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

