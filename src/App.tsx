import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Main } from "pages/Main";
import { Inbox } from "pages/Inbox";
import { InboxMail } from "pages/Inbox/InboxMail";
import { Search } from "pages/Send/Search";
import { Write } from "pages/Send/Write";
import { Success } from "pages/Send/Success";
import { Mailpaper } from "pages/Mailpaper";
import { Pro } from "pages/Pro";
import { Login } from "pages/Login";
import { Oauth } from "pages/Login/Oauth";

function App() {
    return (
        <RecoilRoot>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/login/oauth" element={<Oauth />} />
                    <Route path="/inbox" element={<Inbox />} />
                    <Route path="/inbox/mail/:id" element={<InboxMail />} />
                    <Route path="/send" element={<Search />} />
                    <Route path="/send/write" element={<Write />} />
                    <Route path="/send/success" element={<Success />} />
                    <Route path="/mailpaper" element={<Mailpaper />} />
                    <Route path="/pro" element={<Pro />} />
                </Routes>
            </BrowserRouter>
        </RecoilRoot>
    );
}

export default App;
