import UnityApp from '../UnityApp/UnityApp';
import './Main.css';
import image1 from './img-load-two-body.png';
import image2 from './img-load-first-law.png';
import image3 from './img-load-second-law.png';
import image4 from './img-load-third-law.png';

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
  image: image1,
};

const app2 = {
  index: 2,
  name: "Kepler's First Law",
  json: 'KeplersFirstLaw/Build/KeplersFirstLaw.json',
  unityLoader: 'KeplersFirstLaw/Build/UnityLoader.js',
  description:
    "Kepler's first law says that the orbit of a planet is an ellipse with the Sun at one focus. " +
    'It can be thought of as a limiting case of the more general two-body problem, where one of the bodies ' +
    'is significantly more massive than the other.',
  image: image2,
};

const app3 = {
  index: 3,
  name: "Kepler's Second Law",
  json: 'KeplersSecondLaw/Build/KeplersSecondLaw.json',
  unityLoader: 'KeplersSecondLaw/Build/UnityLoader.js',
  description:
    "Kepler's second law says that the radius vector of a planet sweeps out equal areas in equal time. " +
    "Although the planet's velocity and distance from its star may change throughout its orbit, the area " +
    'swept out is always simply proportional to the time elapsed.',
  image: image3,
};

const app4 = {
  index: 4,
  name: "Kepler's Third Law",
  json: 'KeplersThirdLaw/Build/KeplersThirdLaw.json',
  unityLoader: 'KeplersThirdLaw/Build/UnityLoader.js',
  description:
    "Kepler's third law says that the square of the orbital period of a planet is proportional to the " +
    'cube of its semi-major axis. ',
  image: image4,
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
