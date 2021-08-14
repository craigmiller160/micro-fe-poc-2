import React from 'react';

class NewReactChild extends React.Component {
    componentDidMount() {
        import('newReactChild');
    }

    render() {
        return <new-react-child />;
    }
}

export default NewReactChild;
