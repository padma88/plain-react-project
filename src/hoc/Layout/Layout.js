import React, {Component} from 'react';
import Auxilary from '../Auxilary/Auxilary';
import ToolBar from '../../Components/ToolBar/ToolBar';
import SideDrawer from '../../Components/SideDrawer/SideDrawer';


class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerCloseHandler = () => {
        this.setState({ showSideDrawer: false })
    }

    toggleSideDrawer = () => {
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    }

    render () {
        return (
            <Auxilary>
                <ToolBar showSideDrawer={this.toggleSideDrawer}></ToolBar>
                <SideDrawer
                    open={this.state.showSideDrawer}
                    close={this.sideDrawerCloseHandler}/>
                <main>
                    {this.props.children}
                </main>
            </Auxilary>
        )
    }
}

export default Layout;