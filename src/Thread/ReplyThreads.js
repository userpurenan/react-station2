import { ThreadListHeader } from './ThreadListHeader';
import './css/CreateNewReply.css'

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import { CreateNewReply } from './CreateNewReply';

export const ReplyThreads = () => {

    const [ReplyThreads, setReplyThread] = useState([]);
    const { threadId } = useParams();

    const updateReplies = (newReply) => {
        setReplyThread([...ReplyThreads, newReply]);
      };
    
    //第二引数にセットしたthreadIdが変化するたびに実行。（「/thread/1」が「/thread/2」になった時など）
    useEffect(() => {
        axios.get(`https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/${threadId}/posts`)
        .then((response) => {
          console.log(response.data); //デバック用
          setReplyThread(response.data.posts); //スレッド内の投稿にAPIから取ってきた一覧をセット
        })
        .catch ((error) => {
          console.error(error); //例外処理が発生した場合にエラーを表示
        }) 
    }, [threadId]);
  
    return (
        <div>
            <ThreadListHeader />
            <div className='Reply_Container'>
                <ul className='Reply_ul'>
                    {ReplyThreads && ReplyThreads.map((ReplyThread) => (
                        <li key={ReplyThread.threadId} className='Reply_li'>
                            <b>{ReplyThread.post}</b>
                        </li>
                    ))}
                </ul>
                <CreateNewReply onUpdateReplies={updateReplies} />
            </div>
        </div>
    );
}