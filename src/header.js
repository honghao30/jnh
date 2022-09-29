import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <div>
            <h1>sunny와 함께</h1>
            <p>
                <Link to="/Profile/">프로필//</Link>
                <Link to="/Agency/">에이전시//</Link>
                <Link to="/Media/">미디어</Link>
           </p>
        </div>
    )
}

export default Header;