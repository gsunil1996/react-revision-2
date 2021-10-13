import React from "react";
import styles from "./image.module.css";

export default function Items({props}){
    return (
        <>
            <div className={styles.m1}>
            <img className="logo" src={props.image} alt=""/>
                <div className={styles.text}>{props.text}</div>
            </div>
        </>
    )
}