import spinner from './spinner.gif';

const Spinner = () => (
  <div
    style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <img
      src={spinner}
      alt="Loading..."
      style={{
        width: '70px',
        margin: 'auto',
        display: 'block',
      }}
    />
  </div>
);

export default Spinner;
