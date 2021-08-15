import React , {Component} from 'react';
import Counters from './Counters'

class Counter extends Component{

	constructor(){
		super();
		this.state = {
						Count : [{id : 1 , value : 0},
								{id : 2 , value : 0},
								{id : 3 , value : 0},
								{id : 4 , value : 0}]
	
		}

	}

	handleIncrement= count =>{
		const Count = [...this.state.Count];
		const index = Count.indexOf(count);
		Count[index].value++
		this.setState({Count})
	}

	handleDecrement = count => {
		const Count = [...this.state.Count];
		const index = Count.indexOf(count);
		Count[index].value = Count[index].value - 1 < 0 ? 0 : Count[index].value - 1;
		this.setState({Count})
	}

	Delete = id => {
		const Filtered = this.state.Count.filter(c => c.id !== id);
		this.setState({Count : Filtered})
		console.log(Filtered)
		//const Count = this.state.Count.filter(c => c.id !== id);
		//this.setState({Count }) 
	}

	Reset = () => {
		const Refreshed =this.state.Count.map(c => {
			c.value = 0;
			return c;
		});
		this.setState({Count : Refreshed})
	}

	Total() {
		return this.state.Count.filter(c => c.value > 0).length;
		

	}

	render(){
		return(
			<div>
				<h1>NavBar </h1>
				<span>{this.Total()}</span>
				<button onClick={this.Reset} >Reset</button>
				{this.state.Count.map(a => <Counters key={a.id} id ={a.id} value={a.value} OnDecrement={this.handleDecrement} onIncrement={this.handleIncrement} count={a} handleDelete ={this.Delete}/>)}

			</div>
			)
	}
}


export default Counter;