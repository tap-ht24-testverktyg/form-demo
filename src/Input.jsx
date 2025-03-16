
const Input = ({ text, value, validate, onChange }) => {
	// console.log('Input: ', text, value)
	const error = validate(value)
	// console.log('Input error: ', error)
	const errorClass = 'error' + (error ? ' visible' : '')

	return (
		<div>
			<label>
				<div>{text}</div>
				<input
					className={error ? 'error' : ''}
					type="text"
					value={value}
					onChange={onChange} />
			</label>
			<p className={errorClass}> {error} </p>
		</div>
	)
}

export default Input
