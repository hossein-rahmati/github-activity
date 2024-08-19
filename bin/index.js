#! /usr/bin/env node

const yargs = require("yargs");
const { showSummary } = require("../commands/summary");
const { events } = require("../commands/events");

const usage = "\nUsage: gdetail <options> <username>";
const options = {
  e: {
    alias: "events",
    describe: "show user's recent activities",
    type: "array",
    demandOption: false,
  },
  s: {
    alias: "summary",
    describe: "a summary of user's information",
    type: "array",
    demandOption: false,
  },
};

yargs.usage(usage).options(options).help(true).argv;

const args = yargs.argv;

// if (!args._.length) {
//   return console.log(
//     "Please pass a username (ex: gdetail foo), or use gdetail --help"
//   );
// }

if (args.e) {
  events(args.e);
}

if (args.s) {
  showSummary(args.s);
}
