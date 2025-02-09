import { Route, Routes, NavLink, useParams } from "react-router-dom";
import "./AppNavLink.css";

function Home() {
  return (
    <div>
      <h2>Home</h2>
      Home...
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  );
}

var contents = [
  { id: 1, title: "HTML", description: "HTML is..." },
  { id: 2, title: "JS", description: "JS is..." },
  { id: 3, title: "React", description: "React is..." },
];

function Topic() {
  var parmas = useParams();
  var topic_id = parmas.topic_id;
  var selected_topic = {
    title: "Sorry",
    description: "Not Found",
  };

  for (var i = 0; i < contents.length; i++) {
    // contents에서 id가같은 데이터를 찾은 후 selected_id에 넣어준다
    if (contents[i].id === Number(topic_id)) {
      selected_topic = contents[i];
      break; // 찾은 이후에는 for 문을 빠져나옴
    }
  }
  return (
    <div>
      <h3>{selected_topic.title}</h3>
      {selected_topic.description}
    </div>
  );
}

function Topics() {
  var lis = [];
  for (var i = 0; i < contents.length; i++) {
    lis.push(
      <li key={contents[i].id}>
        <NavLink to={"/topics/" + contents[i].id}>{contents[i].title}</NavLink>
      </li>
    );
  }

  return (
    <div>
      <h2>Topics</h2>
      <ul>{lis}</ul>
      <Routes>
        <Route path="/:topic_id" element={<Topic></Topic>}></Route>
      </Routes>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>리액트 라우터</h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/topics">Topics</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topics/*" element={<Topics />} />
        <Route path="/contact" element={<Contact />} />
        {/*지정한 경로외에 다른 모든 경로는 Not Found를 보여준다 */}
        <Route path="/*" element={"Not Found"} />
      </Routes>
    </div>
  );
}

export default App;
