import Head from 'next/head';
import MyHeader from './myheader';

export default function Publications() {
    return (
        <div>
            <Head>
                <title>Publications</title>
                <link rel="icon" href="/flask.svg"/>
            </Head>
            <MyHeader/>
            <h1 className="page-header">
                Publications
            </h1>
            <div className="foreground centered-text">
                <h2 className="sub-header">
                    Published
                </h2>
                <ul className="bullet-points">
                    <li>
                        <b>Viets, C.</b>, & Stevens, C. A. (2025). Measuring and Analyzing Bacterial Movement in Mucus. In I. Brockhausen (Ed.), <em>Dynamics of Bacteria-Mucus Interactions</em> (pp. 187–197). doi:10.1007/978-1-0716-4627-4_16
                    </li>
                    <li>
                        Grimm, R. T., Deb, P., Walwark, D. J., Jr, <b>Viets, C.</b>, & Grey, J. K. (2020). Implications of Trap-Assisted Nongeminate Charge Recombination on Time- and Frequency-Domain Photocurrent Degradation Signatures of Organic Solar Cells. <em>The Journal of Physical Chemistry C</em>, 124(31), 16838–16848. doi:10.1021/acs.jpcc.0c05114
                    </li>
                </ul>
            </div>
        </div>
    );
}