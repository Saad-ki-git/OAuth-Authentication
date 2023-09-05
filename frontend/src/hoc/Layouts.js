import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { checkAuthenticated,load_user } from '../actions/auth';
import Navbar from "../auth/components/Navbar"

const Layout = ({ checkAuthenticated, load_user, children }) => {
    useEffect(() => {
        checkAuthenticated();
        load_user();
    }, []);

    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
};

export default connect(null, { checkAuthenticated, load_user })(Layout);