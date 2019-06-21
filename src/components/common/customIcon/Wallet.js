import React from "react";

export const Wallet = ({ color = "blue", size = "100%", className = "", style = {} }) => (
    <svg
        viewBox="0 0 39.272 36"
        className={`svg-icon ${className || ""}`}
        style={{width:size, ...style}}
    >
        <path id="Union_7" data-name="Union 7" fill={color}
              d="M-5483.238-153a5.781,5.781,0,0,1-5.762-5.786v-26.357a3.853,3.853,0,0,1,3.84-3.857h25.607a.641.641,0,0,1,.641.642v3.857h-1.281v-3.214h-24.967a2.568,2.568,0,0,0-2.56,2.572,2.567,2.567,0,0,0,2.56,2.571h32.649a.642.642,0,0,1,.641.643v9h-6.4a5.138,5.138,0,0,0-5.12,5.144,5.138,5.138,0,0,0,5.12,5.142h6.4v9a.642.642,0,0,1-.641.643Zm26.011-11.425a3.215,3.215,0,0,1-3.215-3.214,3.215,3.215,0,0,1,3.215-3.215h6.964a.536.536,0,0,1,.536.536v5.357a.536.536,0,0,1-.536.536Zm-1.071-3.214a1.071,1.071,0,0,0,1.071,1.07,1.072,1.072,0,0,0,1.072-1.07,1.072,1.072,0,0,0-1.072-1.072A1.071,1.071,0,0,0-5458.3-167.639Z"
              transform="translate(5489 188.999)"/>


    </svg>
);