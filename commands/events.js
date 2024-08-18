const { default: axios } = require("axios");

exports.events = async (username) => {
  try {
    console.log("getting user info...");
    const url = `https://api.github.com/users/${username}/events?per_page=10`;
    const { data } = await axios.get(url);
    collectEvents(data);
  } catch (error) {
    console.log(error.message);
  }
};

const collectEvents = (data) => {
  let collectedEvents = [];
  data.map((e) => {
    const action = `${e.type} on ${e.repo.name} repository`;
    collectedEvents.push(action);
  });
  collectedEvents = [...new Set(collectedEvents)];

  console.log("Here is the most recent events:\n");
  collectedEvents.map((e) => console.log(`\t${e}`));
};
