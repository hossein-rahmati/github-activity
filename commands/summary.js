const axios = require("axios");

exports.showSummary = async (username) => {
  try {
    console.log("getting user info...");
    const url = `https://api.github.com/users/${username}`;
    const { data } = await axios.get(url);
    displaySummary(data);
  } catch (error) {
    console.log(error.message);
  }
};

const displaySummary = (data) => {
  const { name, id, company, location, email, bio } = data;

  console.log(`
Here is user summary:

id: ${id}
name: ${name}
bio: ${bio.trim()}`);

  email && console.log(`email: ${email}`);
  company && console.log(`company: ${company}`);
  location && console.log(`location: ${location}`);
  console.log("\n");
};
