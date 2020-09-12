import React from 'react';
import KLine from '../KLine';
import './GridView.css';

const GridView = () => {
  return (
    <div styleName="container">
      {/*走势图*/}
      <div styleName="line">
        <KLine />
      </div>
    </div>
  );
};

export default GridView;
