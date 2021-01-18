import React from 'react';
import Auxilary from '../../hoc/Auxilary'

const Layout = (props) => (
    <Auxilary>
        <div>Tool Bar, Sidebar, Backdrop</div>
        <main>
            {props.children}
        </main>
    </Auxilary>
);

export default Layout;