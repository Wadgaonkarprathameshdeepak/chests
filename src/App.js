import './App.scss';
import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom';
import About from './pages/About';
import Services from './pages/Services';
import BlogsPage from './pages/BlogsPage';
import SingleBlog from './pages/SingleBlog/SingleBlog';
import Contactus from './pages/Contact/Contactus';
import ContactList from './components/Table/ContactList';
import AdminLoginForm from './components/Admin/Admin'; // Ensure the path is correct



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/singleservice" element={<Services />} />
      <Route path="/blogs" element={<BlogsPage />} />
      <Route path="/blog/:url" element={<SingleBlog />} />
      <Route path="/contact" element={<Contactus />} />
      <Route path="/contactList" element={<ContactList />} />
      <Route path="/" element={<AdminLoginForm />} />

      
    </Routes>
  );
}

export default App;
