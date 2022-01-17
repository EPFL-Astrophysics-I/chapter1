import React from 'react';
import Unity, { UnityContent } from 'react-unity-webgl';
import './Main.css';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { progress: 0, isLoading: true };

    this.unityContent = new UnityContent(
      'Chapter1/Build/Chapter1.json',
      'Chapter1/Build/UnityLoader.js'
    );

    this.unityContent.on('progress', (progress) => {
      this.setState({ progress: progress });
    });

    this.unityContent.on('loaded', () => {
      this.setState({ isLoading: false });
    });
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize);
    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  resize = () => {
    const unityElement = document.getElementById('unity');
    const width = parseFloat(window.getComputedStyle(unityElement).width);

    unityElement.setAttribute(
      'style',
      'height: ' + (width / 16) * 10 + 'px !important'
    );
  };

  render() {
    return (
      <main className='content'>
        {/* <Chapter props={chapter1} />
      <Chapter props={chapter2} />
      <Chapter props={chapter3} /> */}
        <div className='unity-player'>
          {this.state.isLoading === true && (
            <p style={{ textAlign: 'left' }}>Loading...</p>
          )}
          <div id='unity'>
            <Unity unityContent={this.unityContent} />
          </div>
        </div>
      </main>
    );
  }
}

export default Main;
