import {BrowserRouter, Routes, Route} from "react-router-dom";
import {NavLink} from "react-router-dom";

import Magic8Ball from "./components/Magic8Ball";
import Pet from "./components/Pet"
import Nav from './components/Nav'

function App() {

  const petData= {
    name: 'Джек', year: '23.04.2018',
    commands: ['Сидеть', 'Лежать', 'Дай лапу'],
    toy: 'Мячик', eat: 'Ест абсолютно все!', character: 'Дружелюбный, добрый',
    photos:[require('./img/dogT.jpg'), require('./img/dog2.jpg'), require('./img/dog3.jpg'),
        , require('./img/dog1.jpg')]
  };

  const predictionsData = [
    'Бесспорно', 'Предрешено', 'Никаких сомнений', 'Определенно да',
    'Можешь быть уверен в этом', 'Мне кажется - да', 'Вероятнее всего',
    'Хорошие перспективы', 'Знаки говорят - да', 'Да',
    'Пока не ясно, попробуй снова', 'Спроси позже', 'Лучше не рассказывать',
    'Сейчас нельзя предсказать', 'Сконцентрируйся и спроси опять'
  ];
  return (
      <BrowserRouter>
        <div className="app">
          <Nav/>
          <Routes>
            <Route path="/" element={<Pet data={petData}/>}/>
            <Route path="/magicBall" element={<Magic8Ball data={predictionsData} />}/>
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;