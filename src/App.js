import axios from 'axios';

function App() {
  const btnClick = () => {
    // axios.post('http://localhost:3030')
    // axios
    //   .post('http://localhost:3030', { withCredentials: true })
    //   .then((response) => console.log(response))
    //   .catch((error) => console.log(error));
    axios.post(
      'https://nodecode.onrender.com/get-cookie',
      { email: 'password' },
      { withCredentials: true }
    );
  };

  return (
    <div>
      <button onClick={btnClick}>ClickMe</button>
    </div>
  );
}

export default App;
