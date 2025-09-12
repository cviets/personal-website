import Head from 'next/head';
import MyHeader from './myheader';
import Link from 'next/link';
import Image from 'next/image'

export default function Projects() {
    return (
        <body>
            <Head>
                <title>Projects</title>
                <link rel="icon" href="/flask.svg" type="image/svg+xml"/>
            </Head>
            <MyHeader/>
            <h1 className="page-header">
                Projects
            </h1>
            <div className="foreground centered-text" id="research-foreground">
                <h2 className='sub-header'>
                    <Link href="https://github.com/cviets/trackscan">trackscan</Link>
                </h2>
                <div className="booleangene-img-container">
                    <p className='research-paragraphs'>
                        Trackscan is a Python package that performs post-processing and analysis on 2D cell tracking data by first addressing two types of automated tracking artifacts: splitting and switching artifacts. Splitting artifacts arise from momentary failure in cell detection, e.g., if the cell briefly exits the focal plane, while splitting artifacts occur when two cells' tracks are confused with each other. Both of these artifact types obscure the long-term behavior of individual cells and inject large amounts of inaccuracy into common motility measurements, and must therefore be removed prior to analysis. Trackscan removes automated tracking artifacts by purposefully splitting tracks, then re-linking them in the correct configuration. Specifically, trackscan performs polynomial regression on moving windows of each track's <em>x(t)</em> and <em>y(t)</em> trajectories to determine where to place track splits and how to optimally mend the splits. Trackscan also contains functionality for track de-drifting and measurement of cell motility parameters such as mean squared displacement, turning angle distribution, and cell speed.
                    </p>
                    <Image src="/trackscan_img_dark.png" width="2000" height="2000" style={{ objectFit: 'contain', width: 350, height: 'auto' }} className="research-img" id="trackscan-img"/>
                </div>

                <h2 className='sub-header'>
                    <Link href="https://github.com/cviets/booleangene">booleangene</Link>
                </h2>
                <div className="booleangene-img-container">
                    <p className='research-paragraphs'>
                        Booleangene is a package that performs stability analysis and measures topological features (e.g., loops or clusters) of an input Boolean network. A strength of this package is its ability to generate randomized networks that nevertheless preserve the logical structure of the input network, including the in-degrees, out-degrees, and Boolean function of each node. This feature is integrated into the stability analysis pipeline such that users can compare the input network to large numbers of random networks that are logically identical but topologically different from the input. This package thus enables characterization of topological modifiers of Boolean network stability. By applying this package to Boolean models of transcriptional networks, users can make discoveries in synthetic biology, systems biology, and biomedical drug discovery.
                    </p>
                    <Image src="/booleangene_img_dark.png" width="2000" height="2000" style={{ objectFit: 'contain', width: '600px', height: 'auto' }} className="research-img" id="booleangene-img"/>
                </div>
                
            </div>
        </body>
    );
}