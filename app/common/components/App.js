import { Link } from 'react-router';

function App(React){
  const Wrapper = (props) => {
    return (
      <section>
        {props.children}
      </section>
    );
  }

  return Wrapper;
}

export default App;
