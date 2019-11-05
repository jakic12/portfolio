const fetch = require("node-fetch");
const fs = require(`fs`);

/**
 * config file can have the following properties:
 * @param {boolean} online_demo is there an online demo available, automatically set to false if there is no url
 * @param {String} online_demo_url where the demo is located *if this is not supplied, the homepage from the repository is taken
 * @param {String} icon_url url for the icon
 * @param {String} screenshot_urls urls for the screenshots of the demo
 * @param {Array<String>} technologies what technologies were used in this project, full list in `src/technologies.jsx`
 */
const p_configFileName = `p_project.config`;
const personal_access_token = ``;

const username = `jakic12`;
const reposUrl = `https://api.github.com/users/${username}/repos`;

let outputFile = `src/projects.json`;

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

const convertRepositoriesToProjectData = repositories => {
  return repositories.map(element => {
    return {
      title: element.name,
      subtitle: element.description,
      online:
        element.p_configFile.online_demo &&
        (element.p_configFile.online_demo_url || element.homepage),
      link: element.p_configFile.online_demo_url
        ? element.p_configFile.online_demo_url
        : element.homepage,
      iconUrl: element.p_configFile.icon_url,
      bigPictures: element.p_configFile.screenshot_urls,
      tech: element.p_configFile.technologies,
      linkToRepo: element.html_url
    };
  });
};

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

      console.log(`Converting to projectData`);
      const projectData = convertRepositoriesToProjectData(repositories);
      console.log(`Done`);

      console.log(`Writing the repositories to ${outputFile}`);
      fs.writeFile(outputFile, `${JSON.stringify(projectData)}`, e => {
        if (e) console.error(`Error at writing to file:`, e);
        else console.log(`Done`);
      });
    } catch (e) {
      console.error(`Error at fetching config files:`, e);
    }
  })
  .catch(e => console.error(`Error retrieving user repos:`, e));
