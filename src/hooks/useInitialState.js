import { useEffect, useState } from "react"

const useInitialState = (API) => {
  //Se declara la variable para la data y la función para asignarle la data
  const [videos, setVideos] = useState([]);
  //Se declara la logica para setear la data
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setVideos(data)); //Se setea la data en videos
  }, []);
  return videos;
};

export default useInitialState;