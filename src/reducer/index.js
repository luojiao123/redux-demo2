export default function counter(state=[],action){
	if(action.type=='add'){
		return state.concat([action.text]);
	}else if(action.type=='remove'){
		state.splice(action.i,1)
		return state;
	}else{
		return state;
	}
}