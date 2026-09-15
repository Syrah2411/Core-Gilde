const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('seen')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(e=>io.observe(e));
