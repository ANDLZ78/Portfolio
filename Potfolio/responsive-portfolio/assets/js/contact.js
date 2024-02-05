/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    //serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_erhf4oh', 'template_1qn9qhh', '#contact-form', 'IXVhIv0pRbKBf7bVm')
        .then(() => {
            //show sent message
            contactMessage.textContent = 'Mensagem enviada com sucesso ✅'

            //remove message after five seconds
            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)

            //Clear input fields
            contactForm.reset()
        }, () => {
            //Show error message
            contactMessage.textContent = 'Mensagem não enviada (erro de serviço) ❌'
        })
}

contactForm.addEventListener('submit', sendEmail)