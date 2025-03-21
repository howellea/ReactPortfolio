import React, { useState } from 'react';
import MyPhoto from '../../Images/MyPhoto.png'; 
import Project1Img from '../../Images/Project1.png'; // Assuming this is your project image
import { ProjectCard } from '../components/UI/ProjectCard';
import EddyHowell_Resume from '../../Documents/EddyHowell_Resume.pdf';

export default function AboutMePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const projects = [
    {
      title: 'Project One',
      image: Project1Img,
      deployedLink: 'https://deployed-app-link-1.com',
      githubLink: 'https://github.com/your-repo-1',
    },
    {
      title: 'Project Two',
      image: Project1Img,
      deployedLink: 'https://deployed-app-link-2.com',
      githubLink: 'https://github.com/your-repo-2',
    },
    {
      title: 'Project Three',
      image: Project1Img,
      deployedLink: 'https://deployed-app-link-3.com',
      githubLink: 'https://github.com/your-repo-3',
    },
  ];

  const validate = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required.';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email format.';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required.';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log('Form submitted:', formData);
      alert('Message sent successfully!');

      setFormData({
        name: '',
        email: '',
        message: '',
      });
      setErrors({});
    }
  };

  return (
    <div className="container my-5">
      {/* About Me Section */}
      <section className="mb-5">
        <div className="row align-items-center">
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <img
              src={MyPhoto}
              alt="Eddy Howell"
              className="img-fluid rounded-circle shadow"
              style={{ width: '200px', height: '200px', objectFit: 'cover' }}
            />
          </div>
          <div className="col-md-8">
            <h2 className="mb-3">About Me</h2>
            <p className="lead">
              Hi! I'm Eddy Howell, a passionate Chemical Engineer turned Web Developer. With over 12 years of experience in engineering and a growing love for coding, I now help businesses create modern, user-friendly websites and efficient digital tools.
            </p>
            <p>
              Outside of work, I enjoy creating YouTube content, exploring new technologies, and spending time with my family. Let's connect and build something amazing together!
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="mb-5">
        <h2 className="mb-4">Portfolio</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </section>

      {/* Resume Section */}
      <section className="mb-5">
        <h2 className="mb-4">Resume</h2>
        <a
          href={EddyHowell_Resume}
          download="EddyHowell_Resume.pdf"
          className="btn btn-success mb-3"
        >
          Download My Resume
        </a>

        <h4>Technical Proficiencies</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">HTML5 / CSS3 / Bootstrap</li>
          <li className="list-group-item">JavaScript / React.js / TypeScript</li>
          <li className="list-group-item">Node.js / Express.js</li>
          <li className="list-group-item">Python / Data Analysis</li>
          <li className="list-group-item">Process Automation / Excel VBA</li>
          <li className="list-group-item">SEO / Web Optimization</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="mb-5">
        <h2 className="mb-4">Contact Me</h2>
        <form noValidate onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className={`form-control ${errors.name ? 'is-invalid' : ''}`}
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email <span className="text-danger">*</span>
            </label>
            <input
              type="email"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message <span className="text-danger">*</span>
            </label>
            <textarea
              className={`form-control ${errors.message ? 'is-invalid' : ''}`}
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here"
            />
            {errors.message && <div className="invalid-feedback">{errors.message}</div>}
          </div>

          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
