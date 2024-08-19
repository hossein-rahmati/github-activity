# Github-activity

Github-activity is a command-line tool that fetches and displays a GitHub user's recent activity or a summary of their contributions.

## Installation

To install Github-activity, ensure you have Node.js and npm (or yarn) installed. Then, run the following command in your terminal:

```bash
npm install -g github-activity
```

## Usage

```
gdetail [-e | -s] <username>
```

- username: The GitHub username of the user you want to check.
- -e: Displays the user's most recent events.
- -s: Displays a summary of the user.

## Example

```
gdetail -s hossein-rahmati
```

This command will display the most recent events for the GitHub user 'hossein-rahmati'.

## Features

- Fetches GitHub user data efficiently using the [GitHub API](https://docs.github.com/en/rest).
- Provides options to display either recent events or a summary of contributions.
- Utilizes Node.js, Yargs, and chalk for a robust and user-friendly experience.

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.
