import React, { useState } from 'react';

const Pet = ({data}) => {
    return (
        <div>
        <div className="dv">
            <h1 className="h1">Домашний любимец</h1>
            <div className="dv1 fl">
                <div className="div_sh_info fr"><br />
                    <h3 className="h3m">{data.name}</h3>
                    <h4 className="h4m">{data.year}</h4>
                    <h3 className="h3m">Знает команды</h3>
                    <h4 className="h4m">{data.commands[0]}<br />{data.commands[1]}<br />{data.commands[2]}</h4>
                    <h3 className="h3m">Любимая игрушка</h3>
                    <h4 className="h4m">{data.toy}</h4>
                    <h3 className="h3m">Любимая еда</h3>
                    <h4 className="h4m">{data.eat}</h4>
                    <h3 className="h3m">Характер</h3>
                    <h4 className="h4m">{data.character}</h4>
                </div>
            </div>
            <div className="dv1v fr">
                <div className="div3 fl">
                    <img className="img2" width="360" src={data.photos[0]} alt="dog"/>
                </div>
            </div>
        </div>
            <div>
                <h1 className="h1v">Фото</h1>

                <div className="div3n">
                    <img className="img2" width="470" src={data.photos[1]} alt="dog3" />
                </div>
                <div className="div3n">
                    <img className="img2" width="470" src={data.photos[2]} alt="dog2" />
                </div>
                <div className="div3n1">
                    <img className="img2" width="470" src={data.photos[4]} alt="dog1" />
                </div>

            </div>
        </div>
    );
}

export default Pet;
