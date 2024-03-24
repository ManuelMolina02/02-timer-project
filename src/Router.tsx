import { Routes, Route } from 'react-router-dom';
import { History } from './views/History';
import { Home } from './views/Home';
import { DefaultLayout } from './layouts/DefaultLayout';

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/history" element={<History />} />
            </Route>
        </Routes>
    )
}