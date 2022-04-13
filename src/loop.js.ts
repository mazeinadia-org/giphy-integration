const reviewedGifs = [];
let intervalId

const autoplay = window.document.getElementById('autoplay')


intervalId = setInterval(async () => {
	const embeds = await miro.board.get({type: 'embed'})
	const nextItem = embeds.find(embed => !reviewedGifs.includes(embed.id))

	if (nextItem) {
		if (autoplay.className === "hidden") {
			autoplay.className = ""
		}
		console.log('show')
		reviewedGifs.push(nextItem.id)
		const reaction = window.document.createElement('iframe')
		reaction.className = "reaction"
		reaction.src = nextItem.url
		autoplay.prepend(reaction)
	} else {
		autoplay.className = "hidden"
	}
}, 2500)