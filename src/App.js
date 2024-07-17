import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import styles from './App.module.css';

import Header from './Header';
import Nav from './Nav';
import { useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation, useParams } from 'react-router-dom';

// PDF 2.28 2.30
// const Header = () => {
//   return (
//     <header>
//       <h1>WEB</h1>
//       World Wide Web!
//     </header>
//   );
// };
// const Nav = () => {
//   return (
//     <nav>
//       {/* PDF 2.45 */}
//       {/* <ul style={
//         {
//           border: '1px solid red',
//           backgroundColor: 'beige'
//         }
//       }> */}
//       {/* PDF 2.46 */}
//       <ul className={styles.border}>
//         <li><a href="1.html">HTML</a></li>
//         <li><a href="2.html">CSS</a></li>
//         <li><a href="3.html">JavaScript</a></li>
//       </ul>
//     </nav >
//   );
// };

// PDF 2.37
const Profile = (props) => {
  return (
    <div>
      <ul>
        <li>{props.name}</li>
        <li>{props.text}</li>
        <li>{props.count}</li>
      </ul>
    </div>
  );
};

// Bootstrap Cards 적용
function BasicExample(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.src} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

// Cards 가로로 가운데에 배치하기 위한 컴포넌트 생성
const Cards = (props) => {
  return (
    <div className='cards'>
      <BasicExample src={"http://ggoreb.com/images/" + props.src1} />
      <BasicExample src={"http://ggoreb.com/images/" + props.src2} />
      <BasicExample src={"http://ggoreb.com/images/" + props.src3} />
    </div>
  );
};

// PDF 2.43
const Avatar = (props) => {
  return (
    <img className="avatar"
      src={props.author.avatarUrl}
      alt={props.author.name}
    />
  );
};
// PDF 2.44
const UserInfo = (props) => {
  return (
    <div className="user-info">
      <Avatar author={props.author} />
      <div className="user-info-name">
        {props.author.name}
      </div>
    </div>
  );
};
// PDF 2.42
function Comment(props) {
  return (
    <div className="comment">
      <UserInfo author={props.author} />
      <div className="comment-text">
        {props.text}
      </div>
      <div className="comment-date">
        {new Date().toString()}
      </div>
    </div>
  )
}

// // PDF 2.48
// const Header = (props) => {
//   return (
//     <header>
//       <h1>{props.title}</h1>
//       {props.content}
//     </header>
//   );
// };
// // PDF 2.49
// const Nav = (props) => {
//   return (
//     <nav>
//       <ul className={styles.border}>
//         <li><a href={props.list1.url}>{props.list1.desc}</a></li>
//         <li><a href={props.list2.url}>{props.list2.desc}</a></li>
//         <li><a href={props.list3.url}>{props.list3.desc}</a></li>
//       </ul>
//     </nav >
//   );
// };

function App() {
  console.log("App 생성");
  // const age = 30;

  // PDF 2.71
  // const list = [
  //   { url: '1.html', desc: 'HTML' },
  //   { url: '2.html', desc: 'CSS' },
  //   { url: '3.html', desc: 'JavaScript' }
  // ];

  // updateList에 데이터를 추가 ===> 추가된 데이터를 state에 반영
  // state가 변경되면 컴포넌트가 다시 렌더링됨 . nav에 넘겨주는 데이터도 다시 넘어가게됨 .
  // PDF 2.76
  // const [list, setList] = useState([
  //   { url: '1.html', desc: 'HTML' },
  //   { url: '2.html', desc: 'CSS' },
  //   { url: '3.html', desc: 'JavaScript' }
  // ]);
  // const append = () => {
  //   const data = parseInt(Math.random() * 10) + 1;
  //   const obj = { url: data, desc: data };
  //   const updateList = [...list]; // 원본 데이터를 updateList에 옮겨담음 (깊은 복사 test.html)
  //   updateList.push(obj);
  //   setList(updateList);
  //   // console.log(list);
  // }

  // return (
  //   <div className="App">
  //     {/* PDF 2.76 */}
  //     {/* <button onClick={append}>추가</button> */}

  //     {/* PDF 2.71 */}
  //     <Nav list={list} />

  //     {/* PDF 2.48 */}
  //     {/* <Header title='WEB' content='World Wide Web!' /> */}
  //     {/* PDF 2.49 */}
  //     {/* <Nav
  //       list1={{ url: '1.html', desc: 'HTML' }}
  //       list2={{ url: '2.html', desc: 'CSS' }}
  //       list3={{ url: '3.html', desc: 'JavaScript' }}
  //     /> */}

  //     {/* PDF 2.42 */}
  //     {/* <Comment author={
  //       {
  //         avatarUrl: 'http://ggoreb.com/images/img_avatar1.png',
  //         name: 'scott'
  //       }
  //     } /> */}

  //     {/* Cards 가로로 가운데에 배치 */}
  //     {/* <Cards src1="img_avatar1.png" src2="img_avatar2.png" src3="img_avatar3.png" /> */}

  //     {/* Bootstrap Cards */}
  //     {/* <BasicExample src="http://ggoreb.com/images/img_avatar1.png" />
  //     <BasicExample src="http://ggoreb.com/images/img_avatar2.png" />
  //     <BasicExample src="http://ggoreb.com/images/img_avatar3.png" /> */}

  //     {/* PDF 2.37 */}
  //     {/* <Profile name="abc" text="123" count="100" /> */}
  //     {/* 값을 지정해둔 age를 count에 넣기 */}
  //     {/* <Profile name="abc" text="123" count={age} /> JSX 내부에서 자바스크립트를 표현하려면 중괄호 사용 */}

  //     {/* PDF 2.29 2.31 */}
  //     <Header />
  //     {/* <Nav /> */}
  //   </div>
  // );

  // PDF 12. Router
  const [list, setList] = useState([
    { url: '/html', desc: 'HTML' },
    { url: '/css', desc: 'CSS' },
    { url: '/js', desc: 'JavaScript' }
  ]);
  function HTML() {
    return (<h1>HTML</h1>)
  }
  function CSS() {
    return (<h1>CSS</h1>)
  }
  function JavaScript() {
    return (<h1>JavaScript</h1>)
  }

  // function Component() {
  //   const { address } = useParams();
  //   const url = window.location.href;
  //   return <h3>url : {url} 내용 : {address}</h3>
  // }
  // 강사님 풀이
  function Component() {
    const { url } = useParams();
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const desc = params.get('desc');
    return <h3>url : {url} 내용 : {desc}</h3>
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Header title='WEB' content='World Wide Web!' />
        <Nav list={list} />
        <Routes>
          {/* <Route path='/html' element={<HTML />}></Route>
          <Route path='/css' element={<CSS />}></Route>
          <Route path='/js' element={<JavaScript />}></Route> */}
          {/* <Route path='/:address' element={<Component />} /> */}
          {/* 강사님 풀이 */}
          <Route path='/:url' element={<Component />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
