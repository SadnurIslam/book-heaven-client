import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="my-footer py-7 text-center">
                <div>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by The Book Heaven</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;