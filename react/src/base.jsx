function App() {
    return (
    <BrowserRouter basename="/app">
        <Routes>
        <Route path="/" /> {
            <Route path="react" element={<g/>} />
        }
        </Routes>
    </BrowserRouter>
    );
}