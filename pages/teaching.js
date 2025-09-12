import MyHeader from './myheader';

export default function Teaching() {
    return (
        <div>
            <MyHead myText="Teaching" />
            <MyHeader/>
            <h1 className="page-header">
                Teaching
            </h1>
            <div className="foreground centered-text">
                <h2 className="sub-header">
                    MIT Department of Physics
                </h2>
                <ul className="bullet-points">
                    <li>Student Mentor: Waves and Vibrations (Spring 2024)</li>
                    <li>Student Mentor: Electricity and Magnetism (Spring 2022)</li>
                    <li>Teaching Assistant: Electricity and Magnetism (Spring 2022)</li>
                </ul>
                <h2 className="sub-header">
                    Other
                </h2>
                <ul className="bullet-points">
                    <li>
                        Teaching Assistant: BioResearch Academy (Summer 2024)<br/>
                        <i>A high school intensive biology program with Professor Sam Kunes (Harvard Molecular and Cellular Biology)</i>
                    </li>
                </ul>
            </div>
        </div>
    );
}