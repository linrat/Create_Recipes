// import React from 'react';
// import {useState} from "react";
// import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
// import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
//
// const Slider = ({getPhoto, single}) => {
//
//     const [getCurrent, setCurrent] = useState(0)
//     const item = single.photo
//
//     const previous = () => {
//     setCurrent(getCurrent === 0 ? item.length - 1 : getCurrent -1)
//     }
//
//     const next = () => {
//     setCurrent(getCurrent === item.length - 1 ? 0 : getCurrent +1)
//     }
//
//     if (Array.isArray(getPhoto) || item.length <= 0) {
//     return null;
//     }
//
//     return (
//         <div>
//
//             <div className="slider">
//                 <ArrowBackIosIcon className="left" onClick={previous}/>
//                 <ArrowForwardIosIcon className="right" onClick={next}/>
//
//             {getPhoto.map((x, i) => {
//                 return (
//                     <div className={i === getCurrent ? 'slide active' : 'slide'} key={i}>
//                         {i === getCurrent && (<img src={x.image} alt="" className="image"/>)}
//                     </div>
//                 )
//             })}
//             </div>
//
//         </div>
//     );
// };
//
// export default Slider;