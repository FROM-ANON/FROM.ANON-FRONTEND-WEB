import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Main } from "pages/Main";
import { Inbox } from "pages/Inbox";
import { InboxMail } from "pages/Inbox/InboxMail";
import { Search } from "pages/Send/Search";
import { Write } from "pages/Send/Write";
import { Success } from "pages/Send/Success";

function App() {
    return (
        <RecoilRoot>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/inbox" element={<Inbox />} />
                    <Route path="/inbox/mail/:id" element={<InboxMail />} />
                    <Route path="/send" element={<Search />} />
                    <Route path="/send/write" element={<Write />} />
                    <Route path="/send/success" element={<Success />} />
                </Routes>
            </BrowserRouter>
        </RecoilRoot>
    );
}

export default App;
