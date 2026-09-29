const slides=[...document.querySelectorAll('.slide')],dotsWrap=document.querySelector('.dots');let current=0,timer;
slides.forEach((_,i)=>{const b=document.createElement('button');b.className='dot'+(i===0?' active':'');b.setAttribute('aria-label',`Go to slide ${i+1}`);b.onclick=()=>go(i);dotsWrap.appendChild(b)});
const dots=[...document.querySelectorAll('.dot')];
function go(i){current=(i+slides.length)%slides.length;slides.forEach((s,n)=>s.classList.toggle('active',n===current));dots.forEach((d,n)=>d.classList.toggle('active',n===current));restart()}
function restart(){clearInterval(timer);timer=setInterval(()=>go(current+1),5000)}
document.querySelector('.prev').onclick=()=>go(current-1);document.querySelector('.next').onclick=()=>go(current+1);restart();

const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav');
menu.onclick=()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open)};
nav.querySelectorAll('a').forEach(a=>a.onclick=()=>nav.classList.remove('open'));

const products=[
['graphic','Facebook Post','Rs. 500.00','✦','https://www.nafa.edu.sg/images/default-source/corp-images/courses/certificate-courses/graphic-communication-digital-graphics-and-principles.png?sfvrsn=ace2cbb2_4'],
['graphic','Tute Cover','Rs. 1,000.00','▤','https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=900&q=85'],
['graphic','Leaflet','Rs. 1,000.00','▥','https://colophonpress.com/auto_image/output%3Dformat%3Awebp/resize%3Dw%3A700%2Cf%3Amax/pKPeVDfdRpm4Ki0boDTX'],
['graphic','Logo','Rs. 5,000 - 10,000','◈','https://www.nafa.edu.sg/images/default-source/corp-images/courses/certificate-courses/graphic-communication-digital-graphics-and-principles.png?sfvrsn=ace2cbb2_4'],
['graphic','Banner Design','Rs. 1,000.00','▰','https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85'],
['graphic','Tute Bag Design','Rs. 1,000.00','▣','assets/tute-bag-printing.jpg'],
['graphic','Label Design','Rs. 500.00','◫','https://uniqueprint.com.au/cdn/shop/files/sticker_01.jpg?v=1755657411'],
['graphic','Box File','Rs. 2,500.00','▤','https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=900&q=85'],
['digital','Flex Printing','Contact for Price','▰','https://assets.website-files.com/55eeba108c3a43fa48d62e64/56243ef85ff4c43b472eac6d_digital.JPG'],
['digital','Sticker Printing','Contact for Price','◇','https://uniqueprint.com.au/cdn/shop/files/sticker_01.jpg?v=1755657411'],
['digital','Digital Board Printing','Contact for Price','▥','https://assets.website-files.com/55eeba108c3a43fa48d62e64/56243ef85ff4c43b472eac6d_digital.JPG'],
['offset','Digital Offset Printer Machine','Contact for Price','▣','assets/digital-offset-machine.jpg'],
['offset','Offset Printer Machine','Contact for Price','▤','https://cdn.pressxchange.com/998/800/x800_heidelberg-sm102-3491111.jpg'],
['offset','Sticker Label Printing','Contact for Price','◇','https://uniqueprint.com.au/cdn/shop/files/sticker_01.jpg?v=1755657411'],
['offset','Visiting Card Printing','Contact for Price','▤','https://www.mockupcloud.com/uploads/thumbs/images/2021/07/08/Business-Card-04-1170x780.jpg'],
['offset','Calendar Printing','Contact for Price','◫','https://www.printingcafe.co.uk/wp-content/uploads/2020/03/Wall-Calender-_Print-.jpg'],
['offset','Invite Card','Contact for Price','✉','https://colophonpress.com/auto_image/output%3Dformat%3Awebp/resize%3Dw%3A700%2Cf%3Amax/pKPeVDfdRpm4Ki0boDTX'],
['offset','Tute Bag','Contact for Price','▣','assets/tute-bag-printing.jpg'],
['offset','Tute Cover','Contact for Price','▤','https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=900&q=85'],
['offset','Fill Cover','Contact for Price','▥','https://images.unsplash.com/photo-1600508774634-4e11d34730e2?auto=format&fit=crop&w=900&q=85'],
['offset','Menu Card','Contact for Price','▤','https://colophonpress.com/auto_image/output%3Dformat%3Awebp/resize%3Dw%3A700%2Cf%3Amax/pKPeVDfdRpm4Ki0boDTX'],
['offset','Leaflet','Contact for Price','▥','https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=900&q=85'],
['sublimation','Mug Printing','Contact for Price','☕','assets/mug-printing.jpg'],
['sublimation','T-Shirt Printing','Contact for Price','▱','https://s.alicdn.com/%40sc04/kf/H041c674b03ff400399c8b9a82485cd95T/Wholesale-Polyester-Men-T-shirt-Custom-Sublimation-Transfer-all-over-full-Print-design-logo-tshirt-quick-dry-fit-t-shirt-for-Men.jpg'],
['sublimation','Medal','Contact for Price','◉','https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=900&q=85'],
['sublimation','Souvenirs','Contact for Price','★','https://www.longforte.com/cdn/shop/articles/How_to_print_on_a_sublimation_mug.jpg']
];
const grid=document.getElementById('productGrid');
function wa(product){return `https://wa.me/94712000541?text=${encodeURIComponent(`Hello MS DESIGN Studio & Printing, I would like to order ${product}. Please provide more details.`)}`}
function render(filter='all'){grid.innerHTML=products.filter(p=>filter==='all'||p[0]===filter).map(p=>`<article class="product-card"><div class="product-art photo-art" style="background-image:url('${p[4]}')"><span>${p[3]}</span></div><div class="product-body"><h3>${p[1]}</h3><p>Professional MS DESIGN service.</p><div class="price">${p[2]}</div><a class="btn btn-dark order" href="${wa(p[1])}" target="_blank" rel="noopener">Order on WhatsApp</a></div></article>`).join('')}
render();
document.querySelectorAll('.filter').forEach(btn=>btn.onclick=()=>{document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));btn.classList.add('active');render(btn.dataset.filter)});

const lists={
graphic:[['Facebook Post','Rs. 500.00'],['Tute Cover','Rs. 1,000.00'],['Leaflet','Rs. 1,000.00'],['Logo','Rs. 5,000 - 10,000'],['Banner Design','Rs. 1,000.00'],['Tute Bag Design','Rs. 1,000.00'],['Label Design','Rs. 500.00'],['Box File','Rs. 2,500.00']],
printing:[['Flex Printing','Contact for Price'],['Sticker Printing','Contact for Price'],['Digital Board Printing','Contact for Price'],['Sticker Label Printing','Contact for Price'],['Visiting Card Printing','Contact for Price'],['Calendar Printing','Contact for Price'],['Invite Card','Contact for Price'],['Tute Bag','Contact for Price'],['Tute Cover','Contact for Price'],['Fill Cover','Contact for Price'],['Menu Card','Contact for Price'],['Leaflet','Contact for Price']],
sublimation:[['Mug Printing','Contact for Price'],['T-Shirt Printing','Contact for Price'],['Medal','Contact for Price'],['Souvenirs','Contact for Price']]
};
Object.entries(lists).forEach(([id,items])=>{document.getElementById(id+'List').innerHTML=items.map(x=>`<div class="price-item"><strong>${x[0]}</strong><span>${x[1]}</span></div>`).join('')});

document.getElementById('contactForm').addEventListener('submit',e=>{e.preventDefault();const msg=`Hello MS DESIGN Studio & Printing,\n\nName: ${name.value}\nPhone: ${phone.value}\nService: ${service.value}\nMessage: ${message.value}`;window.open(`https://wa.me/94712000541?text=${encodeURIComponent(msg)}`,'_blank')});

const lightbox=document.getElementById('lightbox'),lbImg=lightbox.querySelector('img');document.querySelectorAll('.gallery-grid img').forEach(img=>img.onclick=()=>{lbImg.src=img.src;lbImg.alt=img.alt;lightbox.classList.add('open')});lightbox.querySelector('button').onclick=()=>lightbox.classList.remove('open');lightbox.onclick=e=>{if(e.target===lightbox)lightbox.classList.remove('open')};
