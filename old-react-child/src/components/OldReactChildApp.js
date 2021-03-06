import React from 'react';
import classes from './OldReactChild.css';

const supportText = (isSupported) => isSupported ? 'Yes' : 'No';

class OldReactChild extends React.Component {

    render() {
        const supportReact167 = !!React.createContext;
        const supportReact168 = !!React.useEffect;

        return (
            <div className={ classes.OldReactChild }>
                <h1>Old React Child</h1>
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
        );
    }
}

export default OldReactChild;
