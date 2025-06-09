import React from "react";

const Footer: React.FC = () => {
    return (
        <div className="bg-gray-800 text-white text-center p-4">
            <p className="text-sm">
                &copy; {new Date().getFullYear()} AI Crush. All rights reserved.
            </p>
        </div>
    )
}

export default Footer;