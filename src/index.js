import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { PDFViewer } from 'react-view-pdf';

class Viewer extends Component {
    render() {
        return ( <
            span > test < /span>
        );
    }
}


ReactDOM.render( < Viewer / > ,
    document.getElementById('root')
);