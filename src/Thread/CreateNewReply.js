import './css/CreateNewReply.css';

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import  axios  from "axios";

export const CreateNewReply = (onUpdateReplies) => {

    const [threadReply, setThreadReply] = useState('');
    const { threadId } = useParams();

  
    const NewReply = () => {
      axios.post(`https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/${threadId}/posts`,
        {
          post: threadReply
        }
      )
      .then(response => {
            //console.log(response);
            //window.location.reload(); // 返信のリクエストが成功したらリロードすして、投稿をブラウザ上で反映させる
            onUpdateReplies(response.data); // 新しい投稿を親コンポーネントに渡す
      })       
      .catch(error => {
        console.error("スレッド作成エラー:", error);
      });
    };
  

    return(
        <div className='AAA'>
          <form>
            <textarea
            value={threadReply}
            onChange={(e) => setThreadReply(e.target.value)}
            placeholder='コメントを入力'
            className='ThreadsReply'
            />
            <button className='CreateReply' onClick={NewReply}>投稿</button>
          </form>
        </div>
    );
}
