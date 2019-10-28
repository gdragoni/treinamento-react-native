import React from 'react';
import FormRoutes from './routes/Form';
import { Provider } from 'react-redux';

import store from './store';

function App() {
    return (
        <Provider store={store}>
            <FormRoutes />
        </Provider>
    );
}

export default App;