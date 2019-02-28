# Twitter-Data-Analyser

Twitter insights from Donald Trump's users, including Twitter timelines, word cloud using saved Twitters, and times of day when tweets would go out to the Twitterverse.

See project live here: [Trump Insights](https://ianbunn.github.io/Project1/)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

On your Command Line Interface (CLI), navigate to your desired folder and clone the repository by running:

```shell
git clone https://github.com/ianbunn/Project1.git
```

## Running the Project

Navigate to the folder where you cloned your repository, and open the Command Line Interface (CLI) to extract the required NPM packages used for this project.

Run the following command to install the dependencies in this project:

```shell
npm install
```

This will install `node_modules` in your directory tree. 

### Data Persistence

Create a database in Firebase and store those environment variables in a `.env` file to use them when running the following command to get the latest tweets from Twitter:

```shell
node assets/js/twitter
```

## Built With

- Materialize
- Firebase database (Google)
- FS (NPM package for file writing capabilities)
- HTTP (NPM package for live server)
- Twitter (NPM package for Twitter's API)
- Bower Components
  - jQCloud2
  - jQuery

## Authors

- For UT Coding Bootcamp
  - Felix Asare
  - Ian Bunn
  - Harpal Assi
  - Nathan Smith
  - Nicolaos May

`powered by covfefe`