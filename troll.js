function r(l)   {return Math.floor(Math.random() * l) + 'px';}
function e(m)   {m.addEventListener('mousemove', o, false);}
function o(n)   {'A'===n.target.tagName&&(n.target.style.margin=[r(100), r(100), r(100), r(100)].join(' '));}
function r() { return Math.floor(Math.random() * 255); }
function fakk(){ this.style.color = ['rgb(',[r(),r(),r()].join(','),')'].join(''),
this.style.backgroundColor = ['rgb(',[r(),r(),r()].join(','),')'].join(''); }
[].forEach.call(document.all, function(item) {
    setTimeout(function() {fakk.call(item)}, (Math.random()*500)+100)
});
                e(document);
                
