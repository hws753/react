
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";


interface FetchGenresResponse<T>{
    count:  number;
    result: Genre[];
}

const useGenres = <T>(endPoint: string) => {

    const [data , setData] = useState<T[]>([]);
      const [error, setError] = useState("");
      const [isLoading, setLoading] = useState(false);
    
      
    
      useEffect(() => {
        const controller = new AbortController();
    
        setLoading(true);
        apiClient
          .get<FetchGenresResponse<T></FetchGenresResponse>?>(endPoint, { signal: controller.signal })
          .then((res) => {
            setGames(res.data.results);
            setLoading(false);
          })
          .catch((err) => {
           if (err instanceof CanceledError) return;
            setError(err.message);
            setLoading(false);
        });
    
        return () => controller.abort();
      
      }, [] );
     return { data, error, isLoading };
};



export default useGenres;