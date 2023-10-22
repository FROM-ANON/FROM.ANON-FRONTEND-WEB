import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Main } from "pages/Main";
import { Inbox } from "pages/Inbox";

function App() {
    return (
        <RecoilRoot>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/inbox" element={<Inbox />} />
                </Routes>
            </BrowserRouter>
        </RecoilRoot>
    );
}

export default App;
