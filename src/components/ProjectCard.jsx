import React, { useState } from "react";
import "../styles/components/ProjectCard.scss";

// components
import Carousel from "./Carousel";
import technologies from "../technologies";
import { FiCpu } from "react-icons/fi";
import { GoMarkGithub } from "react-icons/go";

const corsBypassers = [
  "https://cors-anywhere.herokuapp.com/",
  "https://crossorigin.me/"
];

//TODO: add createdAtDate or createdAtAge
const ProjectCard = ({
  title,
  subtitle,
  online,
  link,
  iconUrl,
  open,
  bigPictures,
  tech,
  linkToRepo
}) => {
  if (!link) {
    link = linkToRepo;
  }
  const [needToConfirmOnline, setNeedToConfirmOnline] = useState(online);
  const [loadingConfirmed, setLoadingConfirmed] = useState(true);
  const [onlineStatus, setOnlineStatus] = useState(0);

  if (needToConfirmOnline) {
    setNeedToConfirmOnline(false);
    urlExists(link).then(status => {
      setLoadingConfirmed(false);
      setOnlineStatus(status);
    });
  }

  return (
    <div className="projectCardWrapper">
      <a className="projectCard" href={link}>
        <div className="cardHeader">
          <div className="icon">
            {iconUrl && <img src={iconUrl} alt="project card icon" />}
            {!iconUrl && <NoIcon />}
          </div>
          <div className="cardTitle">
            <div className="titleWrapper">
              <a href={linkToRepo} className={"githubLink"}>
                <GoMarkGithub color={`black`} size={`2em`} />
              </a>
              <h1 className="title">{title}</h1>
            </div>
            <h5 className="subtitle">{subtitle}</h5>
            <div className="techs">
              <div className="techList">
                {tech &&
                  tech.map(tec => {
                    if (technologies[tec]) {
                      return (
                        <a href={technologies[tec].link}>
                          {technologies[tec].icon({
                            width: `30px`,
                            height: `30px`,
                            fill: `#ff1a59`
                          })}
                        </a>
                      );
                    }
                  })}
              </div>
            </div>
          </div>
          {online && (
            <div
              className={`onlineProject${loadingConfirmed ? ` loading` : ``}${
                !loadingConfirmed && onlineStatus == 0 ? ` down` : ``
              }${!loadingConfirmed && onlineStatus == 1 ? ` maybe` : ``}`}
            >
              {loadingConfirmed && (
                <>
                  Loading<div className="lds-dual-ring"></div>
                </>
              )}
              {!loadingConfirmed && onlineStatus == 2 && `Online`}
              {!loadingConfirmed && onlineStatus == 0 && `Down`}
              {!loadingConfirmed && onlineStatus == 1 && `Server exists`}
            </div>
          )}
        </div>
        <div className="cardBody">
          <div className="cardBodyInner">
            <Carousel images={bigPictures} />
          </div>
        </div>
      </a>
    </div>
  );
};

function urlExists(url) {
  // 2 - definitely exists, 1 - server exists, 0 - doesn't exist
  return new Promise(resolve => {
    fetch(url)
      .then(res => {
        if (res.ok) {
          resolve(2);
        } else {
          resolve(0);
        }
      })
      .catch(e => {
        // if it gets denied by cors
        fetchWithoutCors(url, corsBypassers)
          .then(res => {
            console.log(`corsBypass:`, res);
            if (res.ok) {
              resolve(2);
            } else {
              resolve(0);
            }
          })
          .catch(e => {
            // if cors-anywhere doesn't work
            fetch(url, { mode: "no-cors" })
              .then(res => {
                resolve(1);
              })
              .catch(e => {
                resolve(0);
              });
          });
      });
  });
}

const fetchWithoutCors = (url, bypassers, start = 0) => {
  return new Promise((resolve, reject) => {
    if (bypassers.length <= start) reject();

    fetch(bypassers[start] + url)
      .then(res => {
        resolve(res);
      })
      .catch(e => {
        console.log(bypassers[start], `didn't work, trying the next one`);
        fetchWithoutCors(url, bypassers, start + 1)
          .then(res => {
            resolve(res);
          })
          .catch(() => {
            reject();
          });
      });
  });
};

const randomBackgrounds = [
  "linear-gradient(to right, #00d2ff, #3a7bd5)",
  "linear-gradient(to right, #d3959b, #bfe6ba)",
  "linear-gradient(to right, #dad299, #b0dab9)",
  "linear-gradient(to right, #f2709c, #ff9472)",
  "linear-gradient(to right, #e6dada, #274046)",
  "linear-gradient(to right, #5d4157 -50%, #a8caba 150%)",
  "linear-gradient(to right, #ddd6f3, #faaca8)",
  "linear-gradient(to right, #616161, #9bc5c3)",
  "linear-gradient(to right, #50c9c3, #96deda)",
  "linear-gradient(to right, #de6262, #ffb88c)",
  "linear-gradient(to right, #a73737, #7a2828)",
  "linear-gradient(to right, #f857a6, #ff5858)",
  "linear-gradient(to right, #4b6cb7, #182848)",
  "linear-gradient(to right, #e43a15, #e65245)"
];

//TODO: thank https://uigradients.com/

const NoIcon = () => {
  return (
    <div
      className="noIcon"
      style={{
        background:
          randomBackgrounds[parseInt(Math.random() * randomBackgrounds.length)]
      }}
    >
      <FiCpu size={`100px`} />
    </div>
  );
};

export default ProjectCard;
