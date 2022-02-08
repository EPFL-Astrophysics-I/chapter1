import React from 'react';
import Unity, { UnityContent } from 'react-unity-webgl';
import './UnityApp.css';

class UnityApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 'unity-app-' + this.props.index,
      progress: 0,
      isLoading: false,
      canLoad: false,
    };

    this.unityContent = new UnityContent(props.json, props.unityLoader);
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
    const unityElement = document.getElementById(this.state.id);
    const width = parseFloat(window.getComputedStyle(unityElement).width);

    unityElement.setAttribute(
      'style',
      'height: ' + (width / 16) * 10 + 'px !important'
    );
  };

  render() {
    return (
      <div className='unity-app'>
        {/* <p>{this.state.isLoading ? 'Loading...' : ''}</p> */}
        <div id={this.state.id} className='unity-player'>
          {this.state.canLoad ? (
            <Unity unityContent={this.unityContent} />
          ) : (
            <img
              src={this.props.image}
              onClick={() => {
                this.setState({
                  canLoad: !this.state.canLoad,
                  isLoading: true,
                });
              }}
            ></img>
          )}
        </div>
        <h3>{this.props.name}</h3>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default UnityApp;
