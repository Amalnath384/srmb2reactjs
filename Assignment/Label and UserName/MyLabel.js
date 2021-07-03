import React, { Component } from 'react'

export default class MyLabel extends Component {
    render() {
        return (
            <div>
                
                <label>
                Name:<input type="text" name="name"/>
                </label> 
                <br></br>
                <label>
                Email:<input type="text" name="Email"/>
                </label> 
                <br></br>
                <label>
                Mobile:<input type="text" name="mobile"/>
                </label> 
                <br></br>
                
                <input type="submit" value="submit"/>
                
            </div>
        )
    }
}
