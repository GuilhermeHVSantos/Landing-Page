
const mobileBtn = document.getElementById('mobile-cta');
    nav = document.querySelector('nav');
    mobileBtnExit = document.getElementById('mobile-exit');

    mobileBtn.addEventListener('click', () => {
        nav.classList.add('menu-btn')
    })

    mobileBtnExit.addEventListener('click', () => {
        nav.classList.remove('menu-btn')
    })

    /*const btnSendMessage = document.querySelector(".send-message-cta");
    btnSendMessage.addEventListener("click", event => {
        formObject.reset()
    })*/
    const valorInputName = document.getElementById('name');
    const valorInputEmail = document.getElementById('email');
    const valorInputTel = document.getElementById('tel');
    const valorInputMsg = document.getElementById('message');

    function startModal (modalID) {
        const modal = document.getElementById(modalID);
        modal.classList.add('show');
    }

    const btnSendMessage = document.querySelector('.send-message-cta');
    btnSendMessage.addEventListener('click', ()=> {
        if(valorInputMsg.value != '' && valorInputName.value != '' && valorInputEmail.value != '' && valorInputTel.value != '' ) {
            startModal('modal')
        } else {
            alert("Fill all the Fields!");
        }
        
    })

    function closeModal (modalID) {
        const modal = document.getElementById(modalID);
        modal.classList.remove('show');
        
    valorInputName.value = '';
    valorInputEmail.value = '';
    valorInputTel.value = '';
    valorInputMsg.value = '';
    }

    const btnCloseModal = document.querySelector('.btn-modal-exit');
    btnCloseModal.addEventListener('click', ()=> {
        closeModal('modal')
    })

   const valorinput = document.getElementById('name');
  valorinput.value = '';

/* new Glider(document.querySelector('.glider'), {
    slidesToShow: 3,
    draggable: true,
    dots: '#dots',
    arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
    },
}) */

new Glider(document.querySelector('.glider'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    scrollLock: true,
    draggable: true,
    dots: '#dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    },
    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 768,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 2,
          slidesToScroll: 1,
          itemWidth: 100,
          duration: 0.25
        }
      },{
        // screens greater than >= 1024px
        breakpoint: 1080,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          itemWidth: 150,
          duration: 0.25
        }
      }
    ]
  });