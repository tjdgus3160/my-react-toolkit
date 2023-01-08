import {useEffect, useMemo, useState} from 'react';
import axios, {AxiosRequestConfig} from 'axios';

interface State {
  loading: boolean;
  error: null | Error;
  data: any;
}

export default function useAxios(opts: string | (AxiosRequestConfig<any> & {url: string})) {
  const [state, setState] = useState<State>({loading: true, error: null, data: null});
  const [trigger, setTrigger] = useState(0);

  const refetch = () => {
    setState({...state, loading: true});
    setTrigger(Date.now());
  };

  const config = useMemo(() => {
    return typeof opts === 'string' ? {url: opts} : opts;
  }, []);

  useEffect(() => {
    axios(config)
      .then(data => {
        setState({...state, loading: false, data});
      })
      .catch(error => {
        setState({...state, loading: false, error});
      });
  }, [trigger]);

  return {...state, refetch};
}

// export default function App() {
//   const {loading, data, error, refetch} = useAxios('https://api.sampleapis.com/avatar/info');

//   return (
//     <div className="App">
//       <h1>{data && data.status}</h1>
//       <h2>{loading && 'Loading'}</h2>
//       <h2>{error && 'error'}</h2>
//       <button onClick={refetch}>Refetch</button>
//     </div>
//   );
// }
