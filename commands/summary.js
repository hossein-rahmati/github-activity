const axios = require("axios");
const chalk = require("chalk");

exports.showSummary = async (username) => {
  try {
    console.log(chalk.blueBright("getting user info..."));
    const url = `https://api.github.com/users/${username}`;
    const { data } = await axios.get(url);
    displaySummary(data);
  } catch (error) {
    console.log(chalk.red(error.message));
  }
};

const displaySummary = (data) => {
  const { name, id, company, location, email, bio } = data;

  console.log(chalk.green.bold("Here is user summary:"));
  console.log(`
id: ${id}
name: ${name}
bio: ${bio.trim()}`);

  email && console.log(`email: ${email}`);
  company && console.log(`company: ${company}`);
  location && console.log(`location: ${location}`);
  console.log("\n");
};
