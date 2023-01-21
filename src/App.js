import logo from './logo.svg';
import './App.css';

class App2 extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            curZone: {CurZone.curZone},
        }
    }

    calcHours = () => {
        let format = 'hh:mm:ss';

        let m = moment();

        const { curZone } = this.state.curZone;

        return (m.add({h: curZone - Date.TimezoneOffset()}).format(format));
    }

    render() {
        return (
            <div>
                <p>{this.calcHours()}</p>
            </div>
        )
    }
}

function CapName(){
    
    return(
        <div>
            <table>
                <tr rowspan="2">
                    <h1>Название</h1>
                    <input
                        type="text"
                        name="capName"
                        defaultValue={this.state.capName}
                        onChange={this.onChangeHandler}
                    />
                </tr>
            </table>
        </div>
    )
}

function CurZone(){
    
    return(
        <div>
            <table>
                <tr rowspan="2">
                    <h1>Временная зона</h1>
                    <input
                        type="number"
                        min="-12"
                        max="12"
                        name="curZone"
                        defaultValue={this.state.curZone}
                        onChange={this.onChangeHandler}
                    />
                </tr>
            </table>
        </div>
    )
}


function App() {
  return (
    <div>
        <CapName />
        <CurZone />
        <button caption="Добавить" onClick={ () => {return (<div><App2 /></div>)}}></button>
    </div>
  );
}

export default App;
