const users = [
	{name: 'Seva', avatar: ''},
	{name: 'Memie', avatar: ''},
	{name: 'Edu', avatar: ''},
	{name: 'Juan', avatar: ''},
	{name: 'Nadia', avatar: ''},
]

function getRandomUser () {
	const seed = (Math.random() * users.length).toFixed()
	return users[seed]
}

const reviewedGifs = [];
let intervalId

let isGifPlayIsInProgress = false

const autoplay = window.document.getElementById('autoplay')
const reaction = window.document.createElement('iframe')
const user = window.document.createElement('div')

reaction.className = "reaction"
user.className = "user"
autoplay.prepend(user)
autoplay.prepend(reaction)

intervalId = setInterval(async () => {
	const embeds = await miro.board.get({type: 'embed'})
	const nextItem = embeds.find(embed => !reviewedGifs.includes(embed.id))
	user.className = 'user'

	if (nextItem) {
		if (!isGifPlayIsInProgress) {
			isGifPlayIsInProgress = true
			autoplay.className = 'autoplay'
		}
		reviewedGifs.push(nextItem.id)
		reaction.src = nextItem.url
		const userData = getRandomUser()
		user.innerHTML = userData.name
		user.className = 'user user-border'

	}
}, 2500)