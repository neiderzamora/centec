import { useState, useEffect } from 'react';
import CryptoJS from 'crypto-js';

// Función para generar una cadena aleatoria
const generateRandomString = (length = 16) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

// Función para generar un hash MD5
const generateMD5Hash = (input) => {
  return CryptoJS.MD5(input).toString();
};

const useGenerateHash = () => {
  const [hash, setHash] = useState('');

  useEffect(() => {
    const randomString = generateRandomString(); // Generar una cadena aleatoria
    const newHash = generateMD5Hash(randomString); // Generar el hash basado en la cadena aleatoria
    setHash(newHash);
  }, []);

  return hash;
};

export default useGenerateHash;
