import React, { useState } from "react";

// external libs
import { Route, Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

const MenuItem = ({ item }) => {
  const { label, url, exact } = item;
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

  const menuAnimation = useSpring({
    from: { transform: `scale(1)` },
    to: { transform: `scale(${pressed ? 0.8 : hovered ? 1.2 : 1})` }
  });

  return (
    <Route
      path={url}
      exact={exact}
      children={({ match }) => (
        <Link
          to={url}
          className={match ? `selected` : ``}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onMouseDown={() => setPressed(hovered)}
          onMouseUp={() => setPressed(false)}
        >
          <animated.div style={menuAnimation}>{label}</animated.div>
        </Link>
      )}
    />
  );
};

export default MenuItem;
