import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, ContactUs, ReviewMessage, News, NotFound } from './Pages'
import { Provider } from 'react-redux';
import store from './Redux/store';

function App() {
  return (
    <Provider store={store}>
        <Router>
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path="/contact_us" exact element={<ContactUs />} />
            <Route path="/review_message" element={<ReviewMessage />} />
            <Route path="/news" element={<News />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
    </Provider>
  );
}

export default App;
