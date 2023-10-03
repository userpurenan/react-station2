import { Route, Routes } from 'react-router-dom';
import App from './App';

import ThreadList from './Thread/ThreadList';
import { CreateNewThreads } from './Thread/CreateNewThreads';
import { ReplyThreads } from './Thread/ReplyThreads';

//このファイルはルート定義用ファイル。以下にルートを定義する。
function Home() {
    return (
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/thread" element={<ThreadList />} />
        <Route path="/thread/:threadId" element={<ReplyThreads />} />    
        <Route path="/thread/new" element={<CreateNewThreads />} />
    </Routes>
)}

export default Home;
