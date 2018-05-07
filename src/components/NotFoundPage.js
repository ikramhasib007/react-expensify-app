import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        <p className="display-3 text-center">404 </p> 
        <Link to="/">Go Home</Link>
    </div>
);
 
export default NotFoundPage;