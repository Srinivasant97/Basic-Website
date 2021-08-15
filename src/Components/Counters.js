import React , {Component} from 'react';

class Counters extends Component{
	
	constructor(props){
		super();
		

	}



//	handleDecrement = ()=> {
//		this.setState({value : this.state.value - 1 < 0 ? 0 : this.state.value - 1})
//	}

	render(){
		return(
			<div>
				<span>{this.formatCount()}</span>
				{/*<span>{this.formatCount()}</span>*/}
				<button onClick ={() => this.props.onIncrement(this.props.count)} >Increment</button>
				<button onClick ={() => this.props.OnDecrement(this.props.count)} >Decrement</button>
				<button onClick = {() => this.props.handleDelete(this.props.id)} >Delete</button>
			</div>
			
			)
	}
	formatCount(){
		return this.props.value === 0 ? 'zero' : this.props.value ;
		 
	}
}

export default Counters; 