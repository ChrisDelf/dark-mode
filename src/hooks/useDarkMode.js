import React, { useState, useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage('isOn',  true );
  console.log("DarkmodeStatus", darkMode);

  useEffect(() => {
    if (darkMode) {
      let element = document.querySelector('body');
      element.classList.add('dark-mode');
      console.log("I'm in the true Statment");
    } else {
      let element = document.querySelector('body');
      element.classList.remove('dark-mode');
      console.log("I'm in the false statement");
    }

  }, [darkMode]);
  return [darkMode, setDarkMode ]
};
