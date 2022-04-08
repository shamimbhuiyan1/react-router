import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./CustomLink.css";
function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div className="nav">
      <Link
        style={{
          textDecoration: match ? "underline" : "none",
          color: match ? "red" : "blue",
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}

export default CustomLink;
