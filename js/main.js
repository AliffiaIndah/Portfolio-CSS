document.addEventListener('click', function (e) {
  if (e.target.classList.contains('galeri-item')) {
    const src = e.target.getAttribute('src');
    document.querySelector('.modal-img').src = src;
    const myModal = new bootstrap.Modal(document.getElementById('galeri-modal'));
    myModal.show();
  }
});

const skillsContent = document.getElementsByClassName('skills__content'),
  skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = 'skills__content skills__close';
  }
  if (itemClass === 'skills__content skills__close') {
    this.parentNode.className = 'skills__content skills__open';
  }
}
skillsHeader.forEach((el) => {
  el.addEventListener('click', toggleSkills);
});
