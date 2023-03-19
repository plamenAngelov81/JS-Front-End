function create(words) {
   let divContent = document.getElementById('content')
   for (const word of words) {
      let newDiv = document.createElement('div')
      let p = document.createElement('p')
      p.textContent = word
      p.style.display = 'none'
      newDiv.addEventListener('click', () => {p.style.display = 'block'})
      newDiv.appendChild(p)
      divContent.appendChild(newDiv)
   }
}