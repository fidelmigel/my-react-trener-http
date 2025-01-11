import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contacts from "./pages/Contacts/Contacts";
import NotFound from "./pages/NotFound/NotFound";
import Aim from "./nestedRoutes/Aim";
import Team from "./nestedRoutes/Team";
import Company from "./nestedRoutes/Company";
import Users from "./pages/Users/Users";
import UserDetails from "./pages/UserDetails/UserDetails";
import UserPosts from "./nestedRoutes/UserPosts";
import UserInfo from "./nestedRoutes/UserInfo";
const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="aim" element={<Aim />} />
          <Route path="company" element={<Company />} />
          <Route path="team" element={<Team />} />
        </Route>
        <Route path="/users" element={<Users />} />
        <Route path="/users/:userId" element={<UserDetails />} />
        <Route path="posts" element={<UserPosts />} />
        <Route path="info" element={<UserInfo />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
