// Function to fetch covid stats

const url = "https://covid-193.p.rapidapi.com/statistics";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "abf3a42f69msh649a19e243cecb3p1fe988jsnc23dd2a6f9a0",
    "x-rapidapi-host": "covid-193.p.rapidapi.com",
  },
};

export async function fetchStats() {
  try {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error("Failed to fetch covid stats");
    const data = await response.json();
    return data.response.slice(0, 4); // Adjust this to access the correct field
  } catch (error) {
    console.error("Error fetching covid stats: ", error);
    throw error;
  }
}
