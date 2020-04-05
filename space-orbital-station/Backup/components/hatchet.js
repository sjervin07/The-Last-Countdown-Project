import React, { Component } from 'react'
import {
    VrButton,
    View,
    Image,
    Sound,
    Scene,
    asset
} from 'react-vr'

export default class Door extends Component {
    

    constructor(props) {
        super(props);
        this.state = {
            OpenHatch: false,
            PuzzlesSolved : false,
            background : 'space1.jpg',
            sound: 'spacesound.mp3',
            visible: true
        }
        this.toggleOpenHatch = this.toggleOpenHatch.bind(this)
    }

    toggleOpenHatch() {
        if (this.state.PuzzlesSolved)  {
            this.setState({ OpenHatch: true })

        } else {
            this.setState({ OpenHatch: false })
        }
    }

    changeScene() {
        this.setState({
            background: 'space2.jpg',
            sound: 'spacesound.mp3',
            visible: false,
        })
    }
    render() {
        return (
            <View>
                
                    {this.state.OpenHatch === true ?
                        (
                            <VrButton 
                                    onClickSound={{
                                                    wav: asset('organ.wav'),
                                                 }}
                                                 style={{
                                                 transform: [
                                                 {translate: [-400, -200, -360]},
                                                 {rotateX: -90},
                                                 {rotateY: 15}
                                                 ]}} 
                                    onClick={this.changeScene.bind(this)}>
                          
                         </VrButton>

                        )
                        : (
                            <Image
                                source={asset('Hatch-closed.png')}
                                style={{
                                    position: 'absolute',
                                    width: 280,
                                    height: 280,
                                    layoutOrigin: [0, 0],
                                    transform: [
                                        {translate: [-400, -200, -360]},
                                        {rotateX: -90},
                                        {rotateY: 15}
                                    ]             
                                }}
                            />
                        )
                    }

                
            </View>

        )
    }
}


module.exports = Door