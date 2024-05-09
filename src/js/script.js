const submit = document.getElementById('submit')
const rate = document.querySelectorAll('.rate li')


rate.forEach(liElement => {
    liElement.addEventListener('click', () => {
        let valorLi = parseInt(liElement.textContent)
        
    submit.addEventListener('click', () => {
        function enviar(){
            const imagemIlustrativa = document.querySelector('.star')
            const title = document.getElementById('title')
            const description = document.getElementById('description')
            const submit = document.getElementById('submit')
            const rate = document.querySelector('.rate')
            const selection = document.getElementById('selection')

            imagemIlustrativa.src = './src/images/illustration-thank-you.svg'
            imagemIlustrativa.classList.remove('star');
            imagemIlustrativa.classList.add('thank-you-img');

            selection.classList.add('showed')
            selection.innerText = `You selected ${valorLi} out of 5`

            title.innerText = 'Thank you!';
            title.style.textAlign = 'center';

            description.innerText = 'We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!';
            description.style.textAlign = 'center';

            rate.style.display = 'none'
            submit.style.display = 'none'
        }
            enviar()
        })
        
    })
    
})