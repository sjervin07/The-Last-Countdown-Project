import React, { Component } from 'react'
import {
    VrButton,
    View,
    Image,
    asset
} from 'react-vr'

export default class Wrench extends Component {
    constructor(props) {
        super(props)
        this.state = {
            displayingControlText: true
        }
        this.toggleDisplayText = this.toggleDisplayText.bind(this)
    }

    toggleDisplayText() {
        if (!this.state.displayingControlText) {
            this.setState({ displayingControlText: true })

        } else {
            this.setState({ displayingControlText: false })
        }
    }

    render() {
        return (
           // <View>
                <VrButton onClick={this.toggleDisplayText}>
                    {this.state.displayingControlText === true ?
                        (
                           // <View>

 //------------Here is where I set the positioning of the wrench  -N8 ------------------------        

                           <Image
                           source={asset('wrench.png')}
                           style={{
                               position: 'absolute',
                               width: 300,
                               height: 172.2,
                               layoutOrigin: [ 0, 0],
                               transform: [
                                   { translate: [ 500, 150, 500]}, 
                                   { rotateY: -120},
                                   { rotateZ: -150},
                                   
                                ],
                           }} 
                            />
                           // </View>
                        )
                        : (

//------------Here is where I set the positioning of the MIR-tip1.jpg  -N8 ------------------------                             
                            <Image
                          source={asset('MIR-tip1.jpg')}
                                style={{
                                    position: 'absolute',
                                    width: 106.5,
                                    height: 79.5,
                                    layoutOrigin: [ 0, 0],
                                    transform: [
                                        { translate: [-400, 50, 200]}, 
                                        { rotateY: 140 },
                                        { rotateX: -15},
                                    ],
                                }}
                       />
                        )
                    }

                </VrButton>
          //  </View>

        )
    }
}


module.exports = Wrench

