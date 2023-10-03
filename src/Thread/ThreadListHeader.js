import React from "react";
import './css/ThreadList.css';

export const ThreadListHeader = () =>{
    return(
        <header className='header'>
            <b className='header_title'>掲示板</b>
            <div className="container">
                <a className='header_a' href="/thread/new">スレッドをたてる</a>
                <a className="header_a" href="/thread">TOPに戻る</a>
            </div>
        </header>
    ) 
}