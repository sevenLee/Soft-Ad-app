import React, {PureComponent} from 'react'

const textSet = [
  "text1", "text2", "text3", "text4", "text5", "text6", "text7", "text8", "text9", "text10"
];

const imageSet = [
    "chip1", "chip2", "chip3", "chip4", "chip5", "chip6", "chip7", "chip8", "chip9", "chip10"
];


class MagicBox extends PureComponent{
    constructor(props) {
        super(props);
        this.makeBox = this.makeBox.bind(this)
    }

    makeBox() {
        return this.props.boxState.map((box, index) => {
            // 0: text
            // 1: image
            const randomStyle = {
                fontSize: 10 + parseInt(Math.random()*10),
                fontWeight: 300 + 100*parseInt(Math.random()*5)
            };
            let node =  (box) ?
                (<img key={index} alt="ad" width="80" src={ require(`./images/${imageSet[this.props.imageState[index]]}.png`) } />)
                :
                (<span key={index} style={randomStyle}>{textSet[this.props.textState[index]]}</span>);

            return node;
        })
    }

    render() {
        return (
            <div style={{background: '#fcff07', display: 'inline-block', padding: 10}}>
                {this.makeBox()}
            </div>
        )
    }
}

export default MagicBox