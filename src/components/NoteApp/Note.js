import React, { Component } from 'react'

export default class Note extends Component {


    clickhandler(id){
        console.log('remove')
        this.props.onRemove(id)
        
    }
    render() {
  
        
        return (
            <div className="card shadow-sm rounded" style={{ backgroundColor: this.props.color }}

            onClick={this.clickhandler.bind(this, this.props.id)}>
                <p className="card-text p-3">{this.props.title}</p></div>
        )
    }
}
