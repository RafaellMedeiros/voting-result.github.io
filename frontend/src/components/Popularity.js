import React from "react";

const STARS = {
  empty: "☆",
  full: "★",
};

const MAX_START = 10;

export default function Popularity({ value }) {
  const fullStart = STARS.full.repeat(value);
  const emptyStart = STARS.empty.repeat(MAX_START - value);

  return (
    <div style={{ fontSize: "1.5rem", color: "#f0932b" }}>
      {fullStart}
      {emptyStart}
    </div>
  );
}
