import React from 'react';

const ReactParentApp = () => {
    const supportReact167 = !!React.createContext;
    const supportReact168 = !!React.useEffect;

    return (
        <div>
            <h1>React Parent</h1>
            <p>React 16.7 Support: { supportReact167 }</p>
            <p>React 16.8 Support: { supportReact168 }</p>
        </div>
    );
};

export default ReactParentApp;
