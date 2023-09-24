import React from 'react';

function Project ({ title, image, link, repoLink }) {
    return (
        <div className="project">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <a href={link} target="_blank" rel="noopener noreferrer">View App</a>
      <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
    </div>
    );
}

export default Project;