import React from 'react';
import classes from './ReactParentApp.css';

const supportText = (isSupported) => isSupported ? 'Yes' : 'No';

const ReactParentApp = () => {
    const supportReact167 = !!React.createContext;
    const supportReact168 = !!React.useEffect;

    return (
        <div className={ classes.ReactParentApp }>
            <div className={ classes.ParentWrapper }>
                <h1>React Parent</h1>
                <p>Supported Versions</p>
                <table>
                    <thead>
                    <tr>
                        <th>Version</th>
                        <th>Supported?</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>16.7</td>
                        <td>{ supportText(supportReact167) }</td>
                    </tr>
                    <tr>
                        <td>16.8</td>
                        <td>{ supportText(supportReact168) }</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReactParentApp;
