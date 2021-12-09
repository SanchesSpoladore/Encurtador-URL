const btEncurtar = document.getElementById('bt-encurtar').addEventListener(
  'click',
  async () => {
    document.querySelector('#bt-encurtar').classList.add('remove')
    document.querySelector('.loader').classList.remove('remove')

    var URL = document.getElementById('URL').value

    if (URL == '') {
      document.querySelector('#bt-encurtar').classList.remove('remove')
      document.querySelector('.loader').classList.add('remove')
    } else {
      const urlAPI = await fetch(`https://api.shrtco.de/v2/shorten?url=${URL}`)
      try {
        const dados = await urlAPI.json()

        const urlOriginal = dados.result.original_link
        const urlCurta = dados.result.short_link

        const linksField = document.querySelector('.lista-links')
        const liLinks = document.createElement('li')
        liLinks.innerHTML = `
          <p>${urlOriginal}</p>
          <a href="https://${urlCurta}" target="_blank">${urlCurta}</a>
        `

        document.querySelector('#bt-encurtar').classList.remove('remove')
        document.querySelector('.loader').classList.add('remove')

        linksField.appendChild(liLinks)
      } catch (error) {
        console.log(error)
        document.querySelector('#bt-encurtar').classList.remove('remove')
        document.querySelector('.loader').classList.add('remove')
      }
    }
  },
  false
)
