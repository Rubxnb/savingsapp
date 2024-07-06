import { useState } from 'react';
import viteLogo from '/vite.svg';
import { MyGoals } from './components/MyGoals';
import './App.css';
import { ButtonGroup, Button, InputLabel, Select, MenuItem } from '@mui/material';

function App() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <div>
        <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">Badge</span>
        <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">Badge</span>
        <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">Badge</span>
        <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Badge</span>
        <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Badge</span>
        <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">Badge</span>
        <p className="text-3xl font-bold underline ">
      Hello world!
        </p>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={viteLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <MyGoals>
        <p 
          className="text-3xl font-bold underline">HOLA MUNDO</p>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button> 
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <div
          style={{
            backgroundColor: 'rgba(238, 238, 238)',
            padding: '1rem',
            borderRadius: 12,
            margin: '1rem 0',
            overflow: 'hidden',
          }}
        >
          <button
            style={{
              fontSize: '1.1em',
              fontWeight: 500,
              width: '100%',
              textAlign: 'left',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
            onClick={() => setIsOpen(!isOpen)}
          >
          Click me to see my content
            <svg
              key="exclude"
              style={{
                transform: `rotate(${isOpen ? 180 : 0}deg)`,
                transition: '320ms ease-in-out',
              }}
              width="20"
              height="20"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.5 10L15.6714 21L27.5 10"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          {isOpen && (
            <div
              style={{
                gap: '1rem',
                display: 'flex',
                flexDirection: 'column',
                marginTop: '1rem',
              }}
            >
              <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              gravida lobortis sem, vel blandit dolor ultrices nec. Donec
              dapibus tellus ut libero sagittis, a pharetra eros placerat.
              Aliquam erat volutpat. Nunc nec nisl ac turpis semper pharetra.
              Nullam pulvinar pellentesque mauris, sit amet tincidunt nisl
              convallis id.
              </div>
              <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              gravida lobortis sem, vel blandit dolor ultrices nec. Donec
              dapibus tellus ut libero sagittis, a pharetra eros placerat.
              Aliquam erat volutpat. Nunc nec nisl ac turpis semper pharetra.
              Nullam pulvinar pellentesque mauris, sit amet tincidunt nisl
              convallis id.
              </div>
              <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              gravida lobortis sem, vel blandit dolor ultrices nec. Donec
              dapibus tellus ut libero sagittis, a pharetra eros placerat.
              Aliquam erat volutpat. Nunc nec nisl ac turpis semper pharetra.
              Nullam pulvinar pellentesque mauris, sit amet tincidunt nisl
              convallis id.
              </div>
            </div>
          )}
        </div>
        <ButtonGroup variant="contained" aria-label="Basic button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </MyGoals>
    </>
  );
}

export default App;
