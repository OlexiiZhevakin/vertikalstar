'use client'
import styles from './MenuBtn.module.scss'
import { useState, useEffect } from 'react';

const MenuBtn = () => {
  const [isBtnActive, setIsBtnActive] = useState(false);
  const toggleMenu = () => {
    setIsBtnActive(!isBtnActive);
  };

  const closeMenu = () => {
    setIsBtnActive(false);
  };

  return (
    <div className={`${styles.btn} ${isBtnActive ? styles.btnActive : ''}`}
      onClick={toggleMenu}>
      <span></span>
    </div>
  )
}

export default MenuBtn