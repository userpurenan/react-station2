import './css/CreateNewThreads.css'
import { ThreadListHeader } from './ThreadListHeader';

import { useNavigate } from "react-router-dom"; //react-router-domのversion6は「useHistory」ではなく「useNavigate」らしい
import React, { useState } from "react";
import axios from "axios";

export const CreateNewThreads = () => {

  const [threadTitle, setThreadTitle] = useState('');
  const navigate = useNavigate(); // useNavigateフックを使用

  const handleCreateThread = () => {
    axios.post('https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads',
      {
        title: threadTitle
      }
    )
    .then(response => {
        navigate("/thread"); // スレッド作成リクエストが成功したらスレッド一覧にリダイレクト
      }
    )
    .catch(error => {
      console.error("スレッド作成エラー:", error); // エラー文
    });
  };

  return (
    <div>
      <ThreadListHeader />
      <h1 className='CreateThreads'>スレッド新規作成</h1>
      <form>
      <input type='text'
        value={threadTitle}
        onChange={(e) => setThreadTitle(e.target.value)}
        placeholder='スレッドタイトル'
        className='TitleThreads'
      />
      <button className='CreateButton' onClick={handleCreateThread}>作成</button>
      </form>
    </div>
  );
}
