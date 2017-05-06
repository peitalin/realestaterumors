
import * as React from 'react'
import Title from './Title'
import 'styles/Parallax.scss'



interface ReactProps {
  data?: any
}

export class Parallax extends React.Component<ReactProps, any> {

  state = {}

  componentDidMount() {
    // let d = document.getElementById('parallax__textbox')
    window.addEventListener('scroll', this.handleScroll)
  }
  componentWillUnmount() {
    // let d = document.getElementById('parallax__textbox')
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    let scrollY = window.scrollY
    // console.info(scrollY)
    document.getElementById('parallax1').style.transform = `translate3d(0, ${scrollY/3}px, 0)`
    // document.getElementById('parallax2').style.transform = `translate3d(0, ${scrollY/2.5}px, 0)`
    // document.getElementById('map__subscriptions').style.transform = `translate3d(0, ${scrollY/1.5}px, 0)`
    let mapboxContainer = document.getElementById('mapbox__container')
    if (mapboxContainer) {
      mapboxContainer.style.transform = `translate3d(0, ${scrollY/3}px, 0)`
    }
    // must mount route on map/parallax/...
    // otherwise map will be unmounted when route changes
  }

  render() {
    return (
      <div id='parallax__textbox' className="parallax">
        <div className='parallax__spacer'></div>
        <Title>
          <div id='parallax1'></div>
        </Title>
      </div>
    )
  }
}

export default Parallax
