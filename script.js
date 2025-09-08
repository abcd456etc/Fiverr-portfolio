// Theme toggle
const htmlEl = document.documentElement;
const toggle = document.querySelector('.theme-toggle');
const saved = localStorage.getItem('theme');
if(saved){ htmlEl.setAttribute('data-theme', saved); }
if(toggle){
    toggle.addEventListener('click', ()=>{
        const current = htmlEl.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        htmlEl.setAttribute('data-theme', current);
        localStorage.setItem('theme', current);
    });
}

// Scroll reveal
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){ entry.target.classList.add('in'); }
    });
},{ threshold: 0.12 });

document.querySelectorAll('.section, .service-card, .polaroid, .note').forEach(el=>{
    el.setAttribute('data-anim','reveal');
    observer.observe(el);
});

// Active nav highlight
const navLinks = [...document.querySelectorAll('.nav a')];
const sections = [...document.querySelectorAll('section')];
window.addEventListener('scroll',()=>{
    const y = window.scrollY + 120;
    let current = sections[0].id;
    for(const s of sections){ if(y >= s.offsetTop) current = s.id; }
    navLinks.forEach(a=>{
        if(a.getAttribute('href') === `#${current}`){ a.style.transform = 'translateY(-1px)'; }
        else { a.style.transform = 'none'; }
    });
});

// Wiggle on hover for stickers
function wiggle(el){
    el.addEventListener('mouseenter',()=>{ el.style.transition='transform .15s'; el.style.transform='rotate(-2deg) translateY(-2px)'; });
    el.addEventListener('mouseleave',()=>{ el.style.transform='none'; });
}
document.querySelectorAll('.sticker-button,.badge,.service-card,.polaroid,.note').forEach(wiggle);


