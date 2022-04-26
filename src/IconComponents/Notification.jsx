import React from 'react'

const Notification = ( {fill, width, height}) => {
    return (
        <svg className="NavIcon" version="1.0" xmlns="http://www.w3.org/2000/svg"
        width={width} height={height} viewBox="0 0 50.000000 50.000000"
        preserveAspectRatio="xMidYMid meet">
        <g transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)"
        fill={fill} stroke="none">
        <path d="M0 250 l0 -180 250 0 250 0 0 180 0 180 -250 0 -250 0 0 -180z m480
        147 c0 -18 -208 -197 -230 -197 -21 0 -223 173 -228 195 -3 13 29 15 227 15
        182 0 231 -3 231 -13z m-387 -100 l58 -53 -66 -52 -65 -53 0 106 c0 58 3 105
        8 105 4 -1 33 -25 65 -53z m387 -52 l0 -106 -65 53 c-36 28 -65 52 -65 53 0 3
        122 105 126 105 2 0 4 -47 4 -105z m-230 -65 c8 0 31 11 51 24 l35 24 72 -56
        c40 -30 72 -61 72 -68 0 -11 -43 -14 -231 -14 -194 0 -230 2 -227 14 2 8 34
        39 72 69 l69 55 36 -24 c20 -13 43 -24 51 -24z"/>
        </g>
        </svg> 
    )
}

export default Notification
