    import React, { Component } from 'react'
    import vanpicture from '../images/van-to-right.png'
    import swirley from '../images/swirley2.png'

    class App extends Component {
      state = {
        items: []
      }

      componentDidMount () {
        console.log('mount')
        const url = 'https://api.github.com/users/klockey'
        window.fetch(url)
       .then(r => r.json())
       .then(data => {
         this.setState({
           items: data
         })
       })
      }

      render () {
        return (
          <div className='main'>
            <div className='header'>
              <ul className='container container-flex'>
                <li className='item'>Home</li>
                <li className='item'>Index</li>
                <li className='item'>More</li>
              </ul>
            </div>

            <div className='history'>
              <div />
              <div />
              <span>{this.state.items.name}</span>
              <span>{this.state.items.bio}</span>
            </div>

            <div id='axis' className='one'>
              <img className='object van move-right' src={vanpicture} />
            </div>

            {/* <span className='move-me'> move it </span> */}

            <div className='container-flex container x'>
              <span className='item'>Home</span>
              <span className='item'>Index</span>
              <span className='item'>More</span>
            </div>
          </div>
        )
      }
}

    export default App
