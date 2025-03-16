import { useState } from 'react'
import './App.css'
import Input from './Input'

function App() {
	const [form, setForm] = useState({ name: 'Nisse', year: '2001', email: 'example@email.com', password: '1234' })
	const errors = validateName(form.name) || validateYear(form.year) || validateEmail(form.email) || validatePassword(form.password)
	// const filled = !!form.name && !!form.year

	return (
		<div className="form">
		<header>
			<h1> Registrera dig </h1>
		</header>
		<main>

			<section>
			<Input text={'Namn'} value={form.name} validate={validateName} onChange={e => setForm({ ...form, name: e.target.value})} />
			</section>

			<section>
			<Input text={'Födelseår'} value={form.year} validate={validateYear} onChange={e => setForm({ ...form, year: e.target.value})} />
			</section>

			<section>
			<Input text={'E-post'} value={form.email} validate={validateEmail} onChange={e => setForm({ ...form, email: e.target.value})} />
			</section>

			<section>
			<Input text={'Lösenord'} value={form.password} validate={validatePassword} onChange={e => setForm({ ...form, password: e.target.value})} />
			</section>

			<section>
				<button
					disabled={errors}
					type="submit"> Ok nu kör vi </button>
			</section>


		</main>
		</div>
	)
}

function validateName(text) {
	const isInvalid = !text || text.length < 1
	return isInvalid ? 'Skriv in ditt namn.' : null
}
function validateYear(text) {
	if( text.length !== 4 ) {
		return 'Skriv årtal med fyra siffror.'
	}
	let x = text.split('').reduce((acc, cur) => acc && "0123456789".includes(cur), true)
	return x ? null : 'Skriv siffror mellan 0-9.'
}
function validateEmail(text) {
	if( !text ) return 'Skriv en e-postadress.'
	if( !text.includes('@') || !text.includes('.') ) return 'Använd formatet: email@domän.com'
	return null
}
function validatePassword(text) {
	if( !text ) return 'Du måste skriva ett lösenord.'
	if( text.length < 4 ) return 'Lösenordet ska vara minst 4 tecken.'
	if( '1234567890'.includes(text) || 'password'.includes(text) )
		return 'Lösenordet är för lätt, välj något svårare.'

	return null
}

export default App
