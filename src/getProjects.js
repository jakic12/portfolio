const fetch = require("node-fetch");

const p_configFileName = `p_project.config`;
const personal_access_token = ``;

const username = `jakic12`;
const reposUrl = `https://api.github.com/users/${username}/repos`;

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
        } else {
          try {
            let file = await fetchGithubApi(response.download_url);
            const configFileJson = await file.json();
            repos[i].p_configFile = configFileJson;
            out.push(repos[i]);
          } catch (e) {
            reject(
              `Error at downloading the config file for ${repos[i].name}:`,
              e
            );
          }
        }
      } else {
        // repo doesn't have contents_url
      }
    }

    resolve(out.filter(r => r));
  });

fetchGithubApi(reposUrl)
  .then(r => r.json())
  .then(async repos => {
    if (repos.message) {
      throw Error(repos.message);
    }
    let configFiles;
    try {
      configFiles = await getConfigFiles(repos, p_configFileName);
      console.log(`found ${configFiles.length} repos with config files`);
      console.log(configFiles);
    } catch (e) {
      console.error(`Error at fetching config files:`, e);
    }
  })
  .catch(e => console.error(`Error retrieving user repos:`, e));
