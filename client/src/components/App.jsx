import React from 'react';
import '../components/App.scss';
import { Login, Register } from './login/index';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogginActive: true,
        }
    }

    changeState() {
        const { isLogginActive } = this.state;
        if (isLogginActive) {

         }
    }

    render() {
        const { isLogginActive } = this.state;
        const current = isLogginActive ? 'Register' : 'Login';
        const currentActive = isLogginActive ? 'Login' : 'Register';
        return (
            <div className='App'>
                <div className='login'>
                    <div className='container'>
                        {isLogginActive && (<Login containerRef={ref => (this.current = ref)} />)}
                        {!isLogginActive && (<Register containerRef={ref => (this.current = ref)} />)}

                    </div>
                    <RightSide current={current} containerRef={ref => this.RightSide = ref} onClick={this.changeState.bind(this)} />
                </div>
            </div>
        )
    }
}

const RightSide = props => {
    return <div className='right-side' ref={props.containerRef} onClick={props.onClick}>
        <div className='inner-container'>
            <div className='text'>{props.current}</div>
        </div>
    </div>
}

export default App;