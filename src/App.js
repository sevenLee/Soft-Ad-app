import React from 'react';
import MagicBox from "./MagicBox";
const TEXTSET_NUM = 10;
const IMAGESET_NUM = 10;

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boxState: [0, 0, 0],
            textState: [1, 1, 1],
            imageState: [1, 1, 1]
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            const newBoxState = this.randomBoxState();
            const newTextState = this.randomTextState();
            const newImageState = this.randomImageState();
            this.setState({
                boxState: newBoxState,
                textState: newTextState,
                imageState: newImageState
            });
        }, 2000);
    }

    randomBoxState() {
        return this.state.boxState.map(() => {
            return (Math.random() * 10 > 5) ? 1 : 0;
        });
    }

    randomTextState() {
        return this.state.textState.map(() => {
            return parseInt(Math.random() * TEXTSET_NUM);
        });
    }

    randomImageState() {
        return this.state.textState.map(() => {
            return parseInt(Math.random() * IMAGESET_NUM);
        });
    }

    render() {
        const {boxState, imageState, textState} = this.state;
        return (
            <div>
                {/*<div>{JSON.stringify(this.state.boxState)}</div>*/}
                {/*<div>{JSON.stringify(this.state.textState)}</div>*/}
                {/*<div>{JSON.stringify(this.state.imageState)}</div>*/}
                <MagicBox boxState={boxState} imageState={imageState} textState={textState}/>
            </div>
        )
    }
}

