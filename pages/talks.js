import Head from 'next/head';
import MyHeader from './myheader';

export default function Talks() {
    return (
        <div>
            <Head>
                <title>Talks</title>
                <link rel="icon" href="/flask.ico"/>
            </Head>
            <MyHeader/>
            <h1 className="page-header">
                Talks
            </h1>
            <div className="foreground centered-text">
                <h2 className="sub-header">Posters</h2>
                    <ul className="bullet-points">
                        <li>
                            Disruption of Autophagy and Endosomal Pathways Promotes TDP-43 Pathology (2025)<br/>
                            <i>Forthcoming: Society for Neuroscience 2025</i>
                        </li>
                        <li>
                            Clusters and Loops are Overly Abundant in Oscillatory Gene Regulatory Networks (2024) [<a href="../CViets_Boolean-gene-networks-poster.pdf">pdf</a>]<br/>
                            <i>MIT Department of Biological Engineering Undergraduate Research Symposium</i>
                        </li>
                        <li>
                            Mucins Enhance Neutrophil Motility (2023) [<a href="../CViets_neutrophil-poster.pdf">pdf</a>]<br/>
                            <i>MIT Department of Biological Engineering Undergraduate Research Symposium</i>
                        </li>
                    </ul>
                <h2 className="sub-header">Slides</h2>
                <ul className="bullet-points">
                    <li>
                        Stable Fixed Points are Abundant in Boolean Gene Networks (2024) [<a href="../CViets_Boolean-gene-networks.pptx">pptx</a>]<br/>
                        <i>Project presentation for MIT Physics Directed Reading Program 2024</i>
                    </li>
                    <li>
                        Dynamics of Spatially Extended Populations: Exploring the Fisher-Kolmogorov Equation (2023) [<a href="../CViets_reaction-diffusion.pptx">pptx</a>]<br/>
                         <i>Project presentation for MIT Physics Directed Reading Program 2023</i>
                    </li>
                </ul>
            </div>
        </div>
    );
}