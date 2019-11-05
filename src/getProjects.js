const fetch = require("node-fetch");
const fs = require(`fs`);

const p_configFileName = `p_project.config`;
const personal_access_token = ``;

const username = `jakic12`;
const reposUrl = `https://api.github.com/users/${username}/repos`;

const outputFile = `src/projects.json`;

const fetchGithubApi = url =>
  fetch(url, {
    headers: {
      "User-Agent": `jakic12`,
      Authorization: `token ${personal_access_token}`
    }
  });

const getConfigFiles = (repos, filename) =>
  new Promise(async (resolve, reject) => {
    let out = [];
    for (let i = 0; i < repos.length; i++) {
      if (repos[i].contents_url) {
        let rawResponse;
        try {
          rawResponse = await fetchGithubApi(
            repos[i].contents_url.replace(`{+path}`, filename)
          );
        } catch (e) {
          reject(`Error at fetching config file for ${repos[i].name}:`, e);
        }
        const response = await rawResponse.json();
        if (!rawResponse.ok || !response.download_url) {
          // repo doesn't have the config file
          console.log(
            `\t`,
            repos[i].name,
            `❌: doesn't have ${p_configFileName}`
          );
        } else {
          try {
            let file = await fetchGithubApi(response.download_url);
            const configFileJson = await file.json();
            repos[i].p_configFile = configFileJson;
            out.push(repos[i]);
            console.log(`\t`, repos[i].name, `✅`);
          } catch (e) {
            reject(
              `Error at downloading the config file for ${repos[i].name}:`,
              e
            );
          }
        }
      } else {
        // repo doesn't have contents_url
        console.log(`\t`, repos[i].name, `❌: no contents_url`);
      }
    }

    resolve(out.filter(r => r));
  });

console.log(`Fetching github api: getting repositories`);
fetchGithubApi(reposUrl)
  .then(r => r.json())
  .then(async repos => {
    console.log(`Done`);
    if (repos.message) {
      throw Error(repos.message);
    }
    let repositories;
    try {
      console.log(`Finding out which ones to use`);
      repositories = await getConfigFiles(repos, p_configFileName);
      console.log(`Done`);
      console.log(`Found ${repositories.length} repos with config files`);

      console.log(`Writing the repositories to ${outputFile}`);
      fs.writeFile(outputFile, `${JSON.stringify(repositories)}`, e => {
        if (e) console.error(`Error at writing to file:`, e);
        else console.log(`Done`);
      });
    } catch (e) {
      console.error(`Error at fetching config files:`, e);
    }
  })
  .catch(e => console.error(`Error retrieving user repos:`, e));
