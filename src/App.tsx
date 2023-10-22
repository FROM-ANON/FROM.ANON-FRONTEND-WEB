import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Main } from "pages/Main";
import { Inbox } from "pages/Inbox";
import { InboxMail } from "pages/Inbox/InboxMail";

function App() {
    return (
        <RecoilRoot>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/inbox" element={<Inbox />} />
                    <Route path="/inbox/mail" element={<InboxMail />} />
                </Routes>
            </BrowserRouter>
        </RecoilRoot>
    );
}

export default App;
