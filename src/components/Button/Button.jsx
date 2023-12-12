import React from 'react';

const Button = ({btnText}) => {
    return (
        <div>
            <button className=" py-2 rounded-lg mt-8 px-5 text-[#191919] border-none font-bold uppercase hover:bg-[#c49037] text-lg bg-[#dbb878]">{btnText}
            </button>
        </div>
    );
};

export default Button;