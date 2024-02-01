// import '../css/styles.css'
import React from "react";

export default function Column({ backgroundcolor, children}) {
    const newClass = ['grid-column', backgroundcolor].join(' ');
    console.log(newClass);
    return <div className={newClass}>{children}</div>
}