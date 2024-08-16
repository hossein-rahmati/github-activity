#! /usr/bin/env node

// TODO:
// 1. summary
// 2. events
// 3. error handling
// 4. terminal colors

const yargs = require("yargs");
const { showSummary } = require("../utils/summary");

const usage = "\nUsage: gdetail <username> to see a summary of user";
const options = yargs
  .usage(usage)
  .option("e", {
    alias: "events",
    describe: "show user's recent activities",
    type: "boolean",
    demandOption: false,
  })
  .help(true).argv;

const args = yargs.argv;

if (!args.e || !args.events) {
  console.log("getting user info...");
  showSummary(args._);
}
