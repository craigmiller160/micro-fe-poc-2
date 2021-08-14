import React from 'react';
import classes from './ReactParentApp.css';
import OldReactChild from './OldReactChild';
import NewReactChild from './NewReactChild';

const supportText = (isSupported) => isSupported ? 'Yes' : 'No';

class ReactParentApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showOldReactChild: false,
            showNewReactChild: false
        };
        this.toggleOldReactChild = this.toggleOldReactChild.bind(this);
        this.toggleNewReactChild = this.toggleNewReactChild.bind(this);
    }

    toggleOldReactChild() {
        this.setState((prevState) => ({
            ...prevState,
            showOldReactChild: !prevState.showOldReactChild
        }));
    }

    toggleNewReactChild() {
        this.setState((prevState) => ({
            ...prevState,
            showNewReactChild: !prevState.showNewReactChild
        }));
    }

    render() {
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
                <div>
                    <button onClick={ this.toggleOldReactChild }>Show Old React Child</button>
                    <button onClick={ this.toggleNewReactChild }>Show New React Child</button>
                </div>
                {
                    this.state.showOldReactChild &&
                        <OldReactChild />
                }
                {
                    this.state.showNewReactChild &&
                        <NewReactChild />
                }
            </div>
        );
    }
}

export default ReactParentApp;
