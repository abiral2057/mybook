import axios from "axios";
import { useEffect, useState } from "react"


export const About = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      // Use Axios to fetch data from the API
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
          setData(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setLoading(false);
        });
    }, []);
  
    if (loading) {
      return <p>Loading...</p>;
    }

  return (
    <div>
<h1>API Data</h1>
<ul>
    
</ul>
    {data.map((item)=>(
        <li key={item.id}>{item.title}</li>
    ))}    
    </div>
  )
}
