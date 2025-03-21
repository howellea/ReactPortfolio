import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ProjectCard } from '../components/UI/ProjectCard'

export default function PortfolioPage() {
  const [projectList, setProjectList] = useState([]);

  const projects = [
    {
      title: 'Project One',
      image: '../../Images/Project1.png',
      deployedLink: 'https://deployed-app-link-1.com',
      githubLink: 'https://github.com/your-repo-1',
    },
    {
      title: 'Project Two',
      image: '../../Images/Project1.png',
      deployedLink: 'https://deployed-app-link-2.com',
      githubLink: 'https://github.com/your-repo-2',
    },
    {
      title: 'Project Three',
      image: '../../Images/Project1.png',
      deployedLink: 'https://deployed-app-link-3.com',
      githubLink: 'https://github.com/your-repo-3',
    },
    {
      title: 'Project Four',
      image: '../../Images/Project1.png',
      deployedLink: 'https://deployed-app-link-4.com',
      githubLink: 'https://github.com/your-repo-4',
    },
    {
      title: 'Project Five',
      image: '../../Images/Project1.png',
      deployedLink: 'https://deployed-app-link-5.com',
      githubLink: 'https://github.com/your-repo-5',
    },
    {
      title: 'Project Six',
      image: '../../Images/Project1.png',
      deployedLink: 'https://deployed-app-link-6.com',
      githubLink: 'https://github.com/your-repo-6',
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setProjectList(projects);
    }, 500);
  }, []);

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">My Projects</h2>

      <div className="row">
        {projectList.length > 0 ? (
          projectList.map((project, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <ProjectCard project={project} />
            </div>
          ))
        ) : (
          <p className="text-center">Loading projects...</p>
        )}
      </div>

      <div className="text-center mt-4">
        <Link to="/contact" className="btn btn-secondary">
          See More / Contact Me
        </Link>
      </div>
    </div>
  );
}
