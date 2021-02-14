import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { PDFViewer } from './react-view-pdf';


class Viewer extends Component {
    render() {
        return ( <
            PDFViewer url = "/damyotte.pdf" / >
        );
    }
}


ReactDOM.render( < Viewer / > ,
    document.getElementById('root')
);