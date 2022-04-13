async function init() {
  const reviewedGifs = [];
  miro.board.ui.on('icon:click', async () => {
    await miro.board.ui.openPanel({url: 'app.html'});
  });

  setInterval(async () => {
    const embeds = await miro.board.get({type: 'embed'})
    embeds.forEach(embed => {
      if (reviewedGifs.includes(embed.id)) {
        return
      }
      reviewedGifs.push(embed.id)
    })
  }, 3000)
}

init();
