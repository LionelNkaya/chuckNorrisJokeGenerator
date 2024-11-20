// Function to fetch and display a new joke
async function getChuckNorrisJoke() {
    try {
        // Fetch joke from API
        const response = await fetch("https://api.chucknorris.io/jokes/random");
        
        // Check if the response is OK
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parse the JSON data
        const data = await response.json();

        // Extract the joke value
        const joke = data.value;

        // Display the joke in the "joke" paragraph
        document.getElementById("joke").innerText = joke;

        //Display chuck Pic
        var chuckPic = document.getElementById("chuckPic");
        chuckPic.src = data.icon_url;

    } catch (error) {
        // Log any error to the console
        console.error("Error fetching joke:", error);

        // Display a fallback error message
        document.getElementById("joke").innerText = "Oops! Something went wrong. Please try again.";
    }
}

// Add event listener to the button
document.getElementById("switch").addEventListener("click", getChuckNorrisJoke);

// Call the function once on page load to display an initial joke
getChuckNorrisJoke();
