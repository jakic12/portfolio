import React, { useState } from "react";
import "../styles/components/ProjectCard.scss";

// components
import Carousel from "./Carousel";
import technologies from "../technologies";

const ProjectCard = ({
  title,
  subtitle,
  online,
  link,
  icon,
  open,
  bigPictures,
  tech
}) => {
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
            <img src={icon} alt="project card icon" />
          </div>
          <div className="cardTitle">
            <h1 className="title">{title}</h1>
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
        fetch(`https://cors-anywhere.herokuapp.com/${url}`)
          .then(res => {
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

export default ProjectCard;
