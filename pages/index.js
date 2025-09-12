import Head from 'next/head';
import MyHeader from './myheader';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import RefreshButton from "../components/refresh-button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import SkillButton from "../components/skill-button";
import TypewriterComponent from "../components/typewriter-component"

const adjectives = ["a whimsical", "a warm-blooded", "a curious", "a soulful", "an enthusiastic", "a cat-loving", "an eclectic", "a sleuthing", "a real-life"];
const nouns = ["computer scientist", "computational biologist", "neurobiologist", "biophysicist", "web developer", "experimentalist", "bioinformatician", "systems biologist"];
let newAdjectives = JSON.parse(JSON.stringify(adjectives));
let newNouns = JSON.parse(JSON.stringify(nouns));  

export default function LandingPage() {

    function getRandomElement(arr) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
    }

    function initializeWords() {
        setAdjective(getRandomElement(adjectives));
        setNoun(getRandomElement(nouns));
    }

    function refreshWords() {
        let ixAdjective = newAdjectives.indexOf(adjective);
        let ixNoun = newNouns.indexOf(noun);

        if (ixAdjective > -1) newAdjectives.splice(ixAdjective, 1);
        if (ixNoun > -1) newNouns.splice(ixNoun, 1);

        if (newAdjectives.length == 0) newAdjectives = JSON.parse(JSON.stringify(adjectives));
        if (newNouns.length == 0) newNouns = JSON.parse(JSON.stringify(nouns));

        const newAdjective = getRandomElement(newAdjectives);
        const newNoun = getRandomElement(newNouns);

        const deletionLength = adjective.length + noun.length + 2;
        const newText = newAdjective+" "+newNoun+".";
        typewriterRef.current?.refresh(newText, deletionLength);

        setAdjective(newAdjective);
        setNoun(newNoun);
    }

    function scrollToSection(id) {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        const scrollDownIcon = document.getElementById("scroll-down-icon-id");
        if (scrollDownIcon) {
             scrollDownIcon.classList.add("keep-hidden-scrolldown");
        }
    }

    const typewriterRef = useRef();
    const [adjective, setAdjective] = useState('');
    const [noun, setNoun] = useState('');
    const [showAvatar, setShowAvatar] = useState(false);
    const [showDescripion, setShowDescription] = useState(false);
    const [showRefresh, setShowRefresh] = useState(false);
    const [showScrollDown, setShowScrollDown] = useState(false);

    useEffect(() => {initializeWords();}, []);

    return (
        <body>
            <Head>
                <title>Chris Viets</title>
                <link rel="icon" href="/flask.svg"/>
            </Head>

            
            <div className="page-one">
                <MyHeader/>
                <div id="RandomIntro">
                    <h1 className="introduction">
                        <TypewriterComponent 
                            ref={typewriterRef} 
                            myText={"Chris Viets is "+adjective+" "+noun+"."} 
                            onTypingComplete={() => {setShowAvatar(true)}} 
                            onTypingPauseComplete={() => {setShowDescription(true)}}
                            onTypingPause2Complete={() => {setShowRefresh(true)}}
                            onTypingPause3Complete={() => {setShowScrollDown(true)}}
                        />
                    </h1>
                </div>
                
                <div id="bottom-half-container">
                    <div className={showRefresh ? "refresh scale-in-center" : "refresh keep-hidden"}>
                        <RefreshButton onClick={refreshWords} className="refresh"/>
                    </div>
                    <div className="foreground" id="top-intro">
                        <div className={showAvatar ? "scale-in-center" : "keep-hidden"}> 
                            <div className="avatar-container">
                                <div className="avatar"></div>
                                <div id="myname"><b>Chris (she/her)</b></div>
                                <nav className="navbar-small">
                                    <a href="mailto:cviets@mgh.harvard.edu"><FontAwesomeIcon icon={faEnvelope} /> Email</a>
                                    <a href="https://github.com/cviets/"><FontAwesomeIcon icon={faGithub} /> Github</a>
                                    <a href="../CViets_CV.pdf"><FontAwesomeIcon icon={faFile} /> CV</a>
                                </nav>
                            </div>
                        </div>
                        
                        <div className={showDescripion ? "scale-in-center" : "keep-hidden"}>
                            <div className="intro-paragraphs">
                                <p>
                                Hi, I'm Chris! I'm a <b>research technician</b> in the Department of Neurology at Massachusetts General Hospital. I use <b>iPSC technologies</b> to study genetic modifiers of proteinopathy in <b>amyotrophic lateral sclerosis (ALS)</b>, also known as Lou Gehrig's disease. 
                                </p>
                                <p>
                                Prior to studying neurodegenerative disease, I was an undergraduate at <b>MIT</b>, where I graduated in <b>2024</b> with double B.S. degrees in <b>Physics</b> and <b>Biology</b>. My undergraduate research projects focused on investigating migration behaviors of <b>bacteria and immune cells</b> in mucus, and studying the stability of <b>transcriptional networks</b> modeled as electrical circuits (click <Link href="projects">here</Link> to view my projects!). 
                                </p>
                                <p>
                                    Some more fun facts about me: I was born and raised in Albuquerque, New Mexico, so I'm a lifelong green chile enthusiast. In my free time, I love cross-stitching, solving crossword puzzles, and watching classic horror movies.
                                </p>
                            </div>
                        </div>
                                        
                    </div>
 
                </div>
                <div id="scroll-down-container">
                    <FontAwesomeIcon icon={faAnglesDown} id="scroll-down-icon-id" className={"scroll-down-icon " + (showScrollDown ? " scale-in-center" : "keep-hidden")} onClick={() => scrollToSection("Skills")}/>
                </div>
                
            </div>

            <div className="foreground" id="Skills">
                <h2 className="skill-header">My computational skills</h2>
                <div className="SkillContainer">
                    <SkillButton inpText="R" altText="Including ggplot2, DESeq2" image="r.png"/>
                    <SkillButton inpText="FIJI" altText="Including writing FIJI macros" image="fiji.png"/>
                    <SkillButton inpText="Python" altText="Including NumPy, SciPy, PyTorch, and pandas" image="python.png"/>
                    <SkillButton inpText="MATLAB" altText="Including image processing toolbox" image="matlab.png"/>
                    <SkillButton inpText="Illustrator" altText="For publication-quality data visualization" image="illustrator.png"/>
                    <SkillButton inpText="Excel" image="excel.png"/>
                    <SkillButton inpText="Bash" altText="Including samtools and writing HTCondor/Slurm jobs" image="bash.png"/>
                    <SkillButton inpText="HTML/CSS" image="css-html.svg"/>
                    <SkillButton inpText="JavaScript" altText="Including React & NextJS" image="javascript.png"/>
                    <SkillButton inpText="LaTeX" image="latex.png"/>
                </div>

                
            </div>
            <div className="foreground" id="Skills">
                <h2 className="skill-header">My bench skills</h2>
                <div className="SkillContainer">
                    <SkillButton inpText="Mammalian cell culture" bgColor="#1e5e3c"/>
                    <SkillButton inpText="RT-qPCR" bgColor="#1e5e3c"/>
                    <SkillButton inpText="Western blot" bgColor="#1e5e3c"/>
                    <SkillButton inpText="Immuno-fluorescence" bgColor="#1e5e3c"/>
                    <SkillButton inpText="Lentivirus production" bgColor="#1e5e3c"/>
                    <SkillButton inpText="High-content imaging" bgColor="#1e5e3c"/>
                    <SkillButton inpText="Time-lapse imaging" bgColor="#1e5e3c"/>
                    <SkillButton inpText="Bacterial culture" bgColor="#1e5e3c"/>
                    <SkillButton inpText="Gel electro-phoresis" bgColor="#1e5e3c"/>
                    <SkillButton inpText="CRISPR interference" bgColor="#1e5e3c"/>
                </div>
            </div>
        </body>
    );
}