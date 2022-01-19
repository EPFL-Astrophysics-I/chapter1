import UnityApp from '../UnityApp/UnityApp';
import './Main.css';

const app1 = {
  index: 1,
  name: 'Two-body problem',
  json: 'UnityApp/Build/UnityApp.json',
  unityLoader: 'UnityApp/Build/UnityLoader.js',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
};

const app2 = {
  index: 2,
  name: "Kepler's First Law",
  json: 'UnityApp/Build/UnityApp.json',
  unityLoader: 'UnityApp/Build/UnityLoader.js',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
};

const app3 = {
  index: 3,
  name: "Kepler's Second Law",
  json: 'UnityApp/Build/UnityApp.json',
  unityLoader: 'UnityApp/Build/UnityLoader.js',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
};

const app4 = {
  index: 4,
  name: "Kepler's Third Law",
  json: 'UnityApp/Build/UnityApp.json',
  unityLoader: 'UnityApp/Build/UnityLoader.js',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
};

export default function Main() {
  return (
    <main className='content'>
      <UnityApp {...app1} />
      <UnityApp {...app2} />
      <UnityApp {...app3} />
      <UnityApp {...app4} />
    </main>
  );
}
