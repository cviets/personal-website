import Head from 'next/head';
import MyHeader from './myheader';

export default function CV() {
    return (
        <div>
            <MyHead myText="CV" />
            <MyHeader/>
            <h1 className="page-header">Curriculum Vitae</h1>
            <div className="foreground centered-text">
                <ul>
                    <li>[<a href="../CViets/CV.pdf">Download PDF</a>]</li>
                </ul>
                <div id="CV-container">
                    <iframe id="CV" src="../CViets_CV.pdf" />
                </div>
            </div>
        </div>
    );
}