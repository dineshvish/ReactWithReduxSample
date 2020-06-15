import React, {Component} from 'react';
import {createStore} from 'redux';


class ReduxDemo extends Component{
	render(){

		//https://www.youtube.com/watch?v=0ix_QLPkYhI
		//The step 2 will always come first for convinient
		//2. Create REDUCER - > is an agent and does what you say  -> it requires STATE and ACTION
		//What kind of action it needs to take based on current action type like if it is ATTACK return IronMan else Hulk else default
		const reducer = function (state, action){
			if(action.type=="ATTACK"){
				return action.payload
			}
			if(action.type=="GREENATTACK"){
				return action.payload
			}
			return state;
		}

		//1. Create STORE - > Require a Reducer and State
		const store = createStore(reducer, "Peace"); //Peace is our current state



		//3. Subscribe -> Base needs to be subscribe (Get the current state)
		store.subscribe(()=> {
			console.log("Store is new", store.getState());
		})

		//4. Dispatch -> What ACTION you need to take
		store.dispatch({type: "ATTACK", payload: "IRONMAN"})
		store.dispatch({type: "GREENATTACK", payload: "HULK"})


		//Check the console for current state
		return(
			<div>
				test
			</div>
		);
	}
}

export default ReduxDemo;