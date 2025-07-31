// src/api.js

//thedogapi.com (Aoi website)

//STEP 1 (Get the key)
const apiKey = "";

//STEP 2 (Get the breedsURL)

const breedsUrl = "";

//STEP 3 (Get the imageUrl)

const imagesUrl = "";

export async function fetchBreeds() {
  try {
    const response = await fetch(breedsUrl, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });
    console.log("response:", response.json);
    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching breeds:", error);
    return [];
  }
}

export async function fetchImagesByBreed(breedId) {
  try {
    // Step 4: Fetch from the URL using the breedId
    // Step 5: Check if response is OK
    // Step 6: Convert response to JSON
    // Step 7: Log and return the data
  } catch (error) {
    // return [];
  }
}
