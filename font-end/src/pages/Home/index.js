import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [datas, setDatas] = useState({ "user":[]});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(false);
      const result = await axios(
        '/'
      ).catch(error => console.log(error));
      setDatas({ "user": result.data});
      setIsLoading(true);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Trạng thái: {isLoading?"Success":"Loading"}</h1>
      <ul>
        {datas.user.map(item => (
          <li key={item.name}>
            {item.name} | {item.email} | {item.website}
          </li>
        ))}
      </ul>
    </div>
    
  );
}
export default App;


// export default class PersonList extends React.Component {
//   state = {
//     persons: []
//   }

//   componentDidMount() {
//     axios.get('http://localhost:3060/')
//       .then(res => {
//         const persons = res.data;
//         this.setState({ persons });
//       })
//   }

//   render() {
//     return (
//       <ul>
//         { this.state.persons.map(person => <li key={person.name}>{person.name}</li>)}
//       </ul>
//     )
//   }
// }