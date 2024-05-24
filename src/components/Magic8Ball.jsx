import React, {useState} from 'react';
import st from './MagicBallStyles.css'

const Magic8Ball = ({data}) => {
    const predictions = data;
    const [prediction, setPrediction] = useState('');

    const getRandomPrediction = () => {
        const randomIndex = Math.floor(Math.random() * predictions.length);
        setPrediction('Предсказание:\n'+predictions[randomIndex]);
    };
    return (
        <div className='block block_V1'>
            <br/>
            <div className="magicBall_V1">
                <div className="magicBall_V2n">
                    <div className="triangle-down_V1"></div>
                    <div className="triangle-down_V2" onClick={getRandomPrediction}></div>
                    <span id="magicSp" className='mt'>&nbsp;Встряхнуть<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;шар</span>
                </div>
            </div>
            <br/>
            <div id="div_pred">
                <p id='p1' className='mt'>Загадайте вопрос и нажмите на кнопку с надписью "Встряхнуть шар"</p>
                <p id="p2" className='mt'>{prediction}</p>
            </div>

        </div>
    );
};

export default Magic8Ball;
