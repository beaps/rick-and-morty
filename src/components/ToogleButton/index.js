import React from 'react';

import './styles.css';

export const ToogleButton = ({ handleTheme }) => (
  <div className='toogle-container'>
    <input
      type='checkbox'
      id='switch'
      name='theme'
      onChange={handleTheme}
    />
    <label className='toogle__label' htmlFor="switch">Change theme</label>
  </div>
)