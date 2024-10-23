const url = "https://coronavirus-smartable.p.rapidapi.com/news/v1/US/";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "abf3a42f69msh649a19e243cecb3p1fe988jsnc23dd2a6f9a0",
    "x-rapidapi-host": "coronavirus-smartable.p.rapidapi.com",
  },
};

// Function to fetch news
export async function fetchLatestNews() {
  try {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error("Failed to fetch news");

    const data = await response.json(); // Parse the response as JSON
    // console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error;
  }
}
