import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function MyHeader() {
    return (
    <header id="navbar-container">
        <nav className="navbar">
            <b><Link href="/">Chris Viets</Link></b>
            <Link href="/">Home</Link>
            <Link href="/#Skills">Skills</Link>
            <Link href="projects">Projects</Link>
            <Link href="talks">Talks</Link>
            <Link href="teaching">Teaching</Link>
            <Link href="publications">Publications</Link>
            <Link href="resume">CV</Link>
            <nav className="navbar" id="navbar-right">
                <Link href="mailto:cviets@mgh.harvard.edu"><FontAwesomeIcon icon={faEnvelope} /></Link>
                <Link href="https://github.com/cviets/"><FontAwesomeIcon icon={faGithub} /></Link>
            </nav>
        </nav>
    </header>
    );
}