import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const useGenerateHash = () => {
  const [hash, setHash] = useState('');

  useEffect(() => {
    setHash(uuidv4());
  }, []);

  return hash;
};

export default useGenerateHash;
