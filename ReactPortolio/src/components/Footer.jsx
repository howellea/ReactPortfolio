// src/components/Footer.jsx
import { FaLinkedin,FaGithub } from "react-icons/fa";
import Footerbar from './UI/Footerbar';

export default function Footer() {
    const links = [
        {
        href: 'https://github.com/howellea',
        label: 'GitHub',
        icon: <FaGithub />,
        },
        {
        href: 'https://linkedin.com/in/eddy-howell',
        label: 'LinkedIn',
        icon: <FaLinkedin />,
        },
    ];

    return <Footerbar links={links} />;
}



