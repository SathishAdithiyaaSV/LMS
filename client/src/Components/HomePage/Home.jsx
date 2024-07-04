import React from 'react';
import { backendURL } from '../../constants';

export default function Home(){
    const [message, setMessage] = React.useState("");

    const init = async () => {
        const response = await fetch(`${backendURL}`, {
          method: "GET",
        });
    
        const json = await response.json();
        setMessage(json.msg);
      }

      React.useEffect(() => {
        init()
      }, []);

      return (
        <div>
            <h1>{message}</h1>
        </div>
      )
}