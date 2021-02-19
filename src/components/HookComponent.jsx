import React, { useEffect, useState } from 'react';

const HookComponent = () => {
  const [name, setName] = useState('Nombre por defecto');

  useEffect(() => {
    document.title = name;
    return () => {
      document.title = 'el componente se desmonto';
    };
  }, [name]);

  return <div>{name}</div>;
}

export default HookComponent;

