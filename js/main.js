document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el){
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth'});
    }
  });
});

// Mobile menu toggle
const menuBtn = document.querySelector('.menu-toggle');
const menuList = document.querySelector('.nav ul');
if(menuBtn && menuList){
  menuBtn.addEventListener('click', ()=>{
    menuList.classList.toggle('show');
  });
}
