import UnityApp from '../UnityApp/UnityApp';
import './Main.css';

const app1 = {
  index: 1,
  name: 'Two-body problem',
  json: 'TwoBodyProblem/Build/TwoBodyProblem.json',
  unityLoader: 'TwoBodyProblem/Build/UnityLoader.js',
  description:
    'The two-body problem describes how two objects interact and move through space according to their mutual ' +
    "gravitational attraction. It is the foundation for understanding Kepler's three laws of planetary motion. " +
    'Unlike the general N-body problem, the equations of motion governing two bodies have a closed-form solution, which ' +
    'can also be understood in terms of single body moving in a spherically symmetric gravitational potential well.',
};

const app2 = {
  index: 2,
  name: "Kepler's First Law",
  json: 'KeplersFirstLaw/Build/UnityApp.json',
  unityLoader: 'KeplersFirstLaw/Build/UnityLoader.js',
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
