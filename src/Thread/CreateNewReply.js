import './css/CreateNewReply.css';

import React from "react";
import { useParams } from "react-router-dom";
import  axios  from "axios";
import { url } from '../const';

export const CreateNewReply = (onUpdateReplies) => {

    const { threadId } = useParams();

    const NewReply = (event) => {
      console.log(event);
      const threadReply = event;
      axios.post(`${url}/threads/${threadId}/posts`, { post: threadReply })
           .then(response => {
              onUpdateReplies(response.data); // 新しい投稿を親コンポーネントに渡す
           })       
           .catch(error => {
              console.error("スレッド作成エラー:", error);
           });
    };
  
    return(
        <div className='AAA'>
          <form onSubmit={NewReply}>
            <textarea
              placeholder='コメントを入力'
              className='ThreadsReply'
            />
            <button type='submit' className='CreateReply'>投稿</button>
          </form>
        </div>
    );
}
