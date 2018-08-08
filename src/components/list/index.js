import React,{Component} from 'react';

class List extends Component{
	ChildAdd(store){
		console.log(this.refs.txt.value)
		// this.props.add(this.refs.txt.value)
		store.dispatch({type:'add',text:this.refs.txt.value})
	}
	remove(i,store){
		console.log(i)
		store.dispatch({type:'remove',index:i})
	}
	render(){
		console.log(this.props.store.getState())
		let store = this.props.store;
		let aLi = [];
		store.getState().forEach((v,i)=>{
			aLi.push(<li key={i} onClick={this.remove.bind(this,i,store)}>{v}</li>)
		})
		return(<div>
			<input type="text" ref="txt" />
			<input type="button" value="add" onClick={this.ChildAdd.bind(this,store)} />
			<ul>{aLi}</ul>
		</div>)
	}
}

export default List;