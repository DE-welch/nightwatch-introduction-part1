import React, { Component } from "react";
import { connect } from "react-redux";

import "./Calculator.css";

import { operators } from "../operators";
import {
	  enterNumber
	, setOperator
	, percentage
	, clear
	, evaluate
	, toggleNegative
} from "../ducks/calculator";

import CalculatorButton from "./CalculatorButton/CalculatorButton";
import Display from "./Display/Display";

export class Calculator extends Component {
	render() {
		const {
			  currentValue
			, enterNumber
			, setOperator
			, percentage
			, clear
			, evaluate
			, toggleNegative
		} = this.props;
		const numberButtons = [ 7, 8, 9, 4, 5, 6, 1, 2, 3, 0 ].map( ( number ) => (
			<CalculatorButton
				callback={ () => enterNumber( number ) }
				key={ number }
				value={ number }
				wide={ number === 0 }
				name={`${number}Button`}
			/>
		) );

		return (
			<main className="calculator">
				<Display value={ currentValue } />
				<div className="calculator__buttons-wrapper">
					<section className="calculator__left-buttons">
						<CalculatorButton
							backgroundColor="#d6d6d6"
							callback={ clear }
							value="AC"
							name="clearButton"
						/>
						<CalculatorButton
							backgroundColor="#d6d6d6"
							callback={ toggleNegative }
							value="+/-"
							name="negativeButton"
						/>
						<CalculatorButton
							backgroundColor="#d6d6d6"
							callback={ percentage }
							value="%"
							name="percentButton"
						/>
						{ numberButtons }
						<CalculatorButton
							callback={ () => enterNumber( "." ) }
							value="."
							name="decimalButton"
						/>
					</section>
					<section className="calculator__operator-buttons">
						<CalculatorButton
							backgroundColor="#f5923e"
							callback={ () => setOperator( operators.DIVIDE ) }
							color="#ffffff"
							value="÷"
							name="divideButton"
						/>
						<CalculatorButton
							backgroundColor="#f5923e"
							callback={ () => setOperator( operators.MULTIPLY ) }
							color="#ffffff"
							value="×"
							name="multiplyButton"
						/>
						<CalculatorButton
							backgroundColor="#f5923e"
							callback={ () => setOperator( operators.SUBTRACT ) }
							color="#ffffff"
							value="-"
							name="subtractButton"
						/>
						<CalculatorButton
							backgroundColor="#f5923e"
							callback={ () => setOperator( operators.ADD ) }
							color="#ffffff"
							value="+"
							name="addButton"
						/>
						<CalculatorButton
							backgroundColor="#f5923e"
							callback={ evaluate }
							color="#ffffff"
							value="="
							name="equalsButton"
						/>
					</section>
				</div>
			</main>
		);
	}
}

export default connect( state => state, {
	  enterNumber
	, setOperator
	, percentage
	, clear
	, evaluate
	, toggleNegative
} )( Calculator );
