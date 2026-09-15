const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('seen')}),{threshold:.12});
document.querySelectorAll('.path,.big-values article,.officers>div,.live-grid>div,.gallery div').forEach(x=>{x.classList.add('reveal');obs.observe(x)});
