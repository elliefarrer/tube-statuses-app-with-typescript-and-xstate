import React, { FC } from 'react';
import { render } from 'react-dom';
import { StatusBoard } from './components';

const App: FC = () => (
    <div>
        <StatusBoard />
    </div>
)

render(<App />, document.getElementById('root'));
