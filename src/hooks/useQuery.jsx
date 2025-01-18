import { useLocation } from "react-router-dom"; //10. importamos useLocation 

 //12. utilizamos este hook para tomar lo que viene por parametro.
  export const useQuery = () =>{
    return new URLSearchParams(useLocation().search)
  }



  //11. vemos en el navegador lo que vaiaja en la URL( query params), separamos lo que buscamos (location.search)
  // const location = useLocation()
  // console.log(location);
  // console.log(location.search)
