import React from 'react';

class OldReactChild extends React.Component {
    componentDidMount() {
        import('oldReactChild');
    }

    render() {
        return <old-react-child />;
    }
}

export default OldReactChild;
