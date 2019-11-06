# jakic12.github.io
Simple page to show what projects i have made

# How it works
### The particles
This is an particle system made in three.js where to visualize particles moving in by the defined vector field.

### Project scraping
The portfolio page shows all repositories that have a `p_project.conf`(portfolio project config) file.  
Run the `src/getProjects.js` to list all repositories that have the `p_project.conf`(the name can be changed).

### Writing a `p_project.conf` file
The file should be written in json. Config file can have the following properties:  

| Parameter name | Data type | Description | 
| -------------- | --------- | ----------- |
| `online_demo` | boolean | is there an online demo available? Automatically set to false if there is no url |
| `online_demo_url` | String | Where the demo is located *if this is not supplied, the homepage from the repository is taken |
| `icon_url` | String | Url for the icon |
| ~`screenshot_urls`~ | ~Array<String>~ | ~Urls for the screenshots of the demo~ |
| `technologies` | Array<String> | What technologies were used in this project, full list in `src/technologies.jsx` |

Example:
```json
{
  "online_demo":true,
  "online_demo_url":"jakic12.github.io",
  "technologies": ["react", "javascript"]
}
