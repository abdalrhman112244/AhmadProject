import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Pages/Home/Home";

export const products = [
  {
    id: "1",
    name: "براد مقاس 80",
    description:
      " عزل 6 سم مواسير نحاس بالكامل 28 متر مبخرة و مروحة محرك انفرتر حمّاية 8 متر من النحاس تبريد هجين (تجميد + تبريد مضاعف) R600 غاز فريون انفرتر ويوجد منه اللون الابيض و اللون الاسود",
    photo: "./assets/images/barad-black.png",
  },
  {
    id: "2",
    name: "براد مقاس 70",
    description:
      "عزل 6 سم مواسير نحاس بالكامل 23 متر مبخرة و مروحة محرك انفرتر  حمّاية 6 متر من النحاس  تبريد هجين (تجميد + تبريد مضاعف)600R غاز فريون انفرتر و يوجد منه اللون الابيض و اللون الاسود ",
    photo: "./assets/images/barad-white.png",
  },
  {
    id: "3",
    name: "براد مقاس 65 ",
    description:
      "عزل 5.5 سم تبريد هجين (تجميد + تبريد مضاعف) مواسير نحاس بالكامل 19 متر  مبخرة و مروحة محرك انفرتر حمّاية 6 متر R600غاز فريون انفرتر و يوجد منه اللون الابيض و اللون الاسود ",
    photo: "./assets/images/barad-black.png",
  },
  {
    id: "4",
    name: "براد مقاس 65 سبور",
    description:
      "عزل 6 سم مواسير نحاس بالكامل 20 متر مروحة محرك انفرتر حمّاية 5 متر أربع رفوف و يوجد منه اللون الاسود و اللون الابيض",
    photo: "./assets/images/barad-white.png",
  },
];
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
