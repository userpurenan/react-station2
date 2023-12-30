import './css/ThreadList.css';
import { ThreadListHeader } from './ThreadListHeader';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { url } from '../const';

export const ThreadList = () => {
  const [threads, SetThreads] = useState([]);

  useEffect(() => {
    axios.get(`${url}/threads`)
      .then((response) => {
        SetThreads(response.data); //スレッドにAPIから取ってきた値をセット
      })
      .catch ((error) => {
        console.error(error);
      }) 
  }, []);

  return (
    <div>
      <ThreadListHeader />
      <h1 className='thread_title'>スレッド一覧</h1>
      <ul className='ul'>
      {threads && threads.map((thread) => (
          <li key={thread.id} className='li'>
              <Link to={`/thread/${thread.id}`} className='Link'>
                  {thread.title}
              </Link>
          </li>
      ))}
      </ul>
    </div>
  );
}

export default ThreadList;