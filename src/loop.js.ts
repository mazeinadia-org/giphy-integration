const reviewedGifs = [];
let intervalId

let isGifPlayIsInProgress = false

const autoplay = window.document.getElementById('autoplay')
const root = window.document.getElementById('root')
const reaction = window.document.createElement('img')
const user = window.document.createElement('div')

reaction.className = "reaction"
user.className = "user"
autoplay.prepend(user)
autoplay.prepend(reaction)

intervalId = setInterval(async () => {
	const embeds = await miro.board.get({type: 'image'})
	const nextItem = embeds.find(embed => !reviewedGifs.includes(embed.id))
	user.className = 'user'

	if (nextItem) {
		if (!isGifPlayIsInProgress) {
			isGifPlayIsInProgress = true
			autoplay.className = 'autoplay'
			root.className = 'root-giphy-opened'
		}
		reviewedGifs.push(nextItem.id)
		reaction.src = nextItem.url

		user.innerHTML = nextItem.title
		user.className = 'user user-border'

	}
}, 2500)