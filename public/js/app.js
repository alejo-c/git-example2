let validation_form = document.getElementById('validation_form')
let name_input = document.getElementById('name_input')
let age_input = document.getElementById('age_input')
let occupation_input = document.getElementById('occupation_input')
let text_msg = document.getElementById('msg')

validation_form.addEventListener('submit', (e) => {
	e.preventDefault()
})

validation_form.addEventListener('reset', () => {
	text_msg.innerHTML = '&nbsp;'
})

let validate = () => {
	let age = age_input.value
	let valid = age >= 18
	let state = `${valid ? '' : 'in'}valid`
	let text = `The user age [${age}] is ${state}`

	text += valid ? '' : ', must be above 17 years old.'
	text_msg.className = state
	text_msg.innerText = text

	setTimeout(() => { alert(text) }, 10)
}

let test = () => {
	name_input.value = 'José Alejandro Castrillón Ortega'
	age_input.value = 23
	occupation_input.value = 'Systems Engineering Student'
}
