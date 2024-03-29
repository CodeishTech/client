import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../components/home/home';
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Login from "../components/user/login";
import Register from "../components/user/register";
import Explore from "../components/course/explore";
// import AddCategory from "../components/category_subject/add_category";
// import AddSubject from "../components/category_subject/add_subject";
// import Main from "../components/dashboard/main";
// import EditArticle from "../components/dashboard/editArticle";
import Showarticals from "../components/article/showArticle";
import ComingSoon from "../components/coming_soon/coming_soon";
// import Admin from "../components/admin/admin";
import AllArticles from "../components/articles/all_articles";

export default function Routing() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        {/* <Route path="/admin" exact element={<Admin/>} /> */}
        <Route path="/login" exact element={<Login/>} />
        <Route path="/register" exact element={<Register/>} />
        <Route path="/explore" exact element={<Explore/>} />
        {/* <Route path="/addcategory" exact element={<AddCategory/>} />
        <Route path="/addsubject" exact element={<AddSubject/>} /> */}
        {/* <Route path="/dashboard" exact element={<Main/>} />
        <Route path="/dashboard/editarticle/:id" exact element={<EditArticle/>} /> */}
        <Route path="/explore/showarticals/:subject" exact element={<Showarticals/>} />
        <Route path="/comingsoon" exact element={<ComingSoon/>} />
        <Route path="/allarticles/:cat" exact element={<AllArticles/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}