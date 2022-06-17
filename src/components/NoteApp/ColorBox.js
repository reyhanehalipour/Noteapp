import React, { Component } from 'react'

export default class ColorBox extends Component {


    clickhandler(color){
        this.props.onColor(color)
      
    }
    render() {
        let {color}= this.props    
           return (
            <div className='color-box' style={{backgroundColor: color}}
             onClick={this.clickhandler.bind(this, color)}  >
                
            </div>
        )
    }
}
