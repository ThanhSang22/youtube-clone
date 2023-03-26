import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import SittingPage from "./Pages/SittingPage/SittingPage";
import WatchPage from "./Pages/WatchPage/WatchPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/account" element={<SittingPage />} />
      <Route path="/watch" element={<WatchPage />} />
    </Routes>
    // <div>
    //   <Header />
    //   <div className="barr">
    //     <Navbar />
    //     <div className="app-content">
    //       <Sidebar />
    //       <div className="app-card">
    //         {dataCard &&
    //           dataCard.map((item, i) => {
    //             return (
    //               <Card
    //                 key={i}
    //                 imageBig={item.imgBig}
    //                 imageSmall={item.imgSmall}
    //                 title={item.title}
    //                 profile={item.profile}
    //                 view={item.view}
    //               />
    //             );
    //           })}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;
