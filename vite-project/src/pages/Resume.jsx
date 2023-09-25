import React from 'react';

export default function Resume() {
  return (
    <div className="container mt-5">
    <h1>Resume</h1>
    <p>
      You can download my full resume{''}
      <a href="/" target="_blank" rel="noopener noreferrer">
        here
      </a>
      .
    </p>
    <h2>Languages and Technologies</h2>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
    </ul>
  </div>
);
}