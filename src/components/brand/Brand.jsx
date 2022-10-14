import React from 'react';
import { mystic, core } from './imports';
import './brand.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img src={core} />
    </div>
    <div>
      <img src={mystic} />
    </div>
  </div>
);

export default Brand;
