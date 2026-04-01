



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
    console.log("saveScreenshot() running...");
    const endpoint = "https://crudcrud.com/api/c5037e27298142a59fb2b8bc7d7200c5/screenshot";
    console.log("POSTing to:", endpoint);
    try {
        if (!this.previewImageUrl) {
            throw new validationError("Generate a screenshot before saving");
        }

        const url = document.getElementById("url-input").value.trim();
          if (!url) {
            throw new validationError("Please enter a website URL.");
        }


       
        const screenshotData = {
            url: url,
            imageUrl: this.previewImageUrl
        };

        console.log("Sending data:", screenshotData);

        const response = await fetch(endpoint,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(screenshotData)
            }
        );

        if (!response.ok) {
            throw new ApiError("Failed to save screenshot");
        }

        alert("Screenshot saved!");

    } catch (err) {
        if (err instanceof validationError) {
            alert(err.toUserMessage());
        } else if (err instanceof ApiError) {
            alert(err.toUserMessage());
        } else {
            alert("Unexpected error while saving screenshot.");
        }
    }
}
async loadScreenshots() {
    console.log("loadScreenshots() running...");

    const endpoint = "https://crudcrud.com/api/c5037e27298142a59fb2b8bc7d7200c5/screenshot";

    try {
        const response = await fetch(endpoint);

        if (!response.ok) {
            throw new ApiError("Failed to load saved screenshots");
        }

        const data = await response.json();
        console.log("Loaded screenshots:", data);

        const container = document.getElementById("savedScreenshots");
        if (!container) {
            console.error("Missing #savedScreenshots container in HTML");
            return;
        }

        container.innerHTML = "";

        data.forEach(item => {
            const card = document.createElement("div");
            card.classList.add("screenshot-card");

            card.innerHTML = `
                <img src="${item.imageUrl}" alt="Screenshot">
                <p>${item.url}</p>
                <button class="delete-btn" data-id="${item._id}">Delete</button>
            `;

            container.appendChild(card);
        });

        this.attachDeleteListeners();

    } catch (err) {
        if (err instanceof ApiError) {
            alert(err.toUserMessage());
        } else {
            console.error(err);
            alert("Unexpected error while loading saved screenshots.");
        }
    }
}
  attachDeleteListeners() {
    const buttons = document.querySelectorAll(".delete-btn");

    buttons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const id = e.target.dataset.id;
            this.deleteScreenshot(id);
        });
    });
}

async deleteScreenshot(id) {
    console.log("Deleting screenshot:", id);

    const endpoint = `https://crudcrud.com/api/c5037e27298142a59fb2b8bc7d7200c5/screenshot/${id}`;

    try {
        const response = await fetch(endpoint, { method: "DELETE" });

        if (!response.ok) {
            throw new ApiError("Failed to delete screenshot");
        }

        this.loadScreenshots(); // refresh UI

    } catch (err) {
        if (err instanceof ApiError) {
            alert(err.toUserMessage());
        } else {
            console.error(err);
            alert("Unexpected error while deleting screenshot.");
        }
    }
}


}

const app = new App();

document.getElementById("generate-btn").onclick = () => app.generateScreenshot();
document.getElementById("save-btn").onclick = () => app.saveScreenshot();

app.loadScreenshots();

