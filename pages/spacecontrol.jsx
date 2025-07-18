import React from "react";
import Link from "next/link";

export default function SpaceControl() {
  return (
    <div className="body" style={{ padding: "40px" }}>
      <h1 style={{ fontWeight: "bold", fontFamily: "'IBM Plex Mono'", fontSize: "20px" }}>
        space control
      </h1>

      <p style={{ fontFamily: "'IBM Plex Mono'", fontSize: "16px", marginTop: "16px" }}>
        Face the battle of complacency and morality as you repair your broken spaceship in this short narrative sci-fi game.
      </p>

      <img
        src="/images/projects/space_control.png"
        alt="space control"
        style={{ width: "100%", height: "auto", marginTop: "24px", borderRadius: "0px", boxShadow: "none" }}
      />

      <h2
        style={{
          fontWeight: "bold",
          fontFamily: "'IBM Plex Mono'",
          fontSize: "16px",
          marginTop: "40px",
        }}
      >
        tools & role
      </h2>
      <p style={{ fontFamily: "'IBM Plex Mono'", fontSize: "16px", marginTop: "8px" }}>
        Wrote the game narrative and developed it using Godot Engine.
      </p>

      <h2
        style={{
          fontWeight: "bold",
          fontFamily: "'IBM Plex Mono'",
          fontSize: "16px",
          marginTop: "40px",
        }}
      >
        play demo
      </h2>

      <div style={{ marginTop: "16px" }}>
        <iframe
          frameBorder="0"
          src="https://itch.io/embed/2690772"
          width="100%"
          height="167"
        >
          <a href="https://cndles.itch.io/space-control">Space Control by cndles</a>
        </iframe>
      </div>

      <div style={{ marginTop: "40px" }}>
        <Link href="/projects">
          <button
            style={{
              marginTop: "24px",
              padding: "12px 20px",
              backgroundColor: "#FEC2AE",
              borderRadius: "9999px",
              border: "none",
              fontFamily: "'IBM Plex Mono'",
              fontSize: "16px",
              color: "#d87b72",
              cursor: "pointer",
            }}
          >
            ← back to projects
          </button>
        </Link>
      </div>
    </div>
  );
}
