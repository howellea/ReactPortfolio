import React from 'react';

export function ProjectCard({ project }) {
  const { title, image, deployedLink, githubLink } = project;

  return (
    <div className="card h-100 shadow-sm">
      <img
        src={image}
        className="card-img-top"
        alt={`Screenshot of ${title}`}
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <div className="mt-auto">
          <a
            href={deployedLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary me-2"
          >
            Live App
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-secondary"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
