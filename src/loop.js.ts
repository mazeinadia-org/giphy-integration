const reviewedGifs = [];
let intervalId

const autoplay = window.document.getElementById('autoplay')
const reaction = window.document.createElement('iframe')
reaction.className = "reaction"
autoplay.prepend(reaction)

intervalId = setInterval(async () => {
	const embeds = await miro.board.get({type: 'embed'})
	const nextItem = embeds.find(embed => !reviewedGifs.includes(embed.id))

	if (nextItem) {
		if (autoplay.className === "hidden") {
			autoplay.className = ""
		}
		reviewedGifs.push(nextItem.id)
		reaction.src = nextItem.url

	} else {
		autoplay.className = "hidden"
	}
}, 2500)