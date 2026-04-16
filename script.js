'use strict';
/* ================================================
   ANUSHKA BOUTIQUE — script.js
   Products: Kurti, Corset, Sharara, Pant, Skirt,
   Lahenga, Crop Top, Bow, Mask, Bodycon, Baby Frock
   ================================================ */

const PRODUCTS = [
  {id:1,name:'Floral Anarkali Kurti',category:'kurtis',price:1299,mrp:1800,rating:4.8,reviews:34,badge:'new',
   fabric:'Pure Cotton',delivery:'5–7 days',
   desc:'Elegantly flared Anarkali kurti with intricate hand-block floral print on breathable pure cotton. Features a mandarin collar, three-quarter sleeves, and a graceful flared hem with contrast piping. Custom-stitched to your exact measurements.',
   care:['Hand wash in cold water with mild detergent','Do not bleach or tumble dry','Iron on medium heat inside out','Dry in shade'],
   colors:[{n:'Rose Beige',h:'#C9A090'},{n:'Ivory White',h:'#F0E8DC'},{n:'Deep Teal',h:'#2D6A65'}],
   sizes:['XS','S','M','L','XL','XXL'],na:['XS'],
   img:'https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=600&q=80',
   img2:'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=600&q=80',
   gallery:['https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=800&q=80','https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=800&q=80','https://images.unsplash.com/photo-1495385794356-15371f348c31?auto=format&fit=crop&w=800&q=80']},

  {id:2,name:'Chikankari Cotton Kurti',category:'kurtis',price:1599,mrp:2200,rating:4.8,reviews:62,badge:null,
   fabric:'Lucknowi Cotton',delivery:'5–7 days',
   desc:'Experience the legacy of Lucknow chikankari — delicate hand embroidery with white thread on white cotton. A-line silhouette with V-neck and 3/4 sleeves. Timeless, elegant, and utterly breathable.',
   care:['Gentle hand wash in cold water only','Use very mild detergent — avoid scrubbing embroidery','Dry in deep shade to preserve whiteness'],
   colors:[{n:'Classic White',h:'#F5F0E8'},{n:'Powder Blue',h:'#B8D0E8'},{n:'Mint Green',h:'#B0D8C8'}],
   sizes:['XS','S','M','L','XL','XXL'],na:['XS'],
   img:'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80',
   img2:'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80',
   gallery:['https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80','https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80','https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=800&q=80']},

  {id:3,name:'Silk Banarasi Blouse',category:'blouses',price:1199,mrp:1700,rating:4.9,reviews:58,badge:'bestseller',
   fabric:'Pure Silk',delivery:'5–7 days',
   desc:'Handwoven pure silk blouse with authentic Banarasi zari work along the hem and neckline. Deep square back with decorative hook closure. Pairs beautifully with silk or Chanderi sarees.',
   care:['Dry clean only','Store in muslin cloth to preserve silk lustre','Do not expose to direct sunlight'],
   colors:[{n:'Champagne Gold',h:'#D4C4A0'},{n:'Deep Maroon',h:'#7A2040'},{n:'Royal Blue',h:'#2040A0'}],
   sizes:['XS','S','M','L','XL','XXL'],na:[],
   img:'https://images.unsplash.com/photo-1512436991641-6745cae63385?auto=format&fit=crop&w=600&q=80',
   img2:'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80',
   gallery:['https://images.unsplash.com/photo-1512436991641-6745cae63385?auto=format&fit=crop&w=800&q=80','https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80','https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80']},

  {id:4,name:'Mirror Work Corset Blouse',category:'blouses',price:1499,mrp:2100,rating:4.9,reviews:31,badge:'bestseller',
   fabric:'Raw Silk',delivery:'7–10 days',
   desc:'A showstopper corset-style blouse with hand-set mirror work shisha embroidery inspired by Rajasthani folk art. Structured boning for shape, deep V-neckline with fringe trim, back lace-up closure. Perfect for weddings and celebrations.',
   care:['Dry clean only','Handle with care to protect mirror work','Store flat in padded box with tissue'],
   colors:[{n:'Peacock Blue',h:'#207090'},{n:'Magenta',h:'#B02070'},{n:'Saffron',h:'#D07020'}],
   sizes:['XS','S','M','L','XL'],na:[],
   img:'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80',
   img2:'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?auto=format&fit=crop&w=600&q=80',
   gallery:['https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80','https://images.unsplash.com/photo-1591369822096-ffd140ec948f?auto=format&fit=crop&w=800&q=80','https://images.unsplash.com/photo-1512436991641-6745cae63385?auto=format&fit=crop&w=800&q=80']},

  {id:5,name:'Palazzo Sharara Set',category:'lehenga',price:2499,mrp:3400,rating:4.7,reviews:29,badge:'new',
   fabric:'Georgette + Silk',delivery:'7–10 days',
   desc:'A contemporary sharara set with heavily flared palazzo bottoms and a cropped kurta top with embroidered yoke. The dupatta features embroidered borders. A festive ensemble that gives the grandeur of ethnic wear with the ease of modern dressing.',
   care:['Dry clean recommended','Hand wash gently in cold water if needed','Iron dupatta on low heat only','Store folded with tissue between layers'],
   colors:[{n:'Mint & Gold',h:'#90C8A8'},{n:'Peach & Rose',h:'#E8B098'},{n:'Lavender',h:'#C0A8D8'}],
   sizes:['S','M','L','XL','XXL'],na:[],
   img:'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80',
   img2:'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=600&q=80',
   gallery:['https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80','https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80','https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80']},

  {id:6,name:'Bridal Lehenga Set',category:'lehenga',price:8500,mrp:12000,rating:5.0,reviews:18,badge:'bestseller',
   fabric:'Pure Silk + Net',delivery:'15–20 days',
   desc:'A regal bridal lehenga set featuring dense zari embroidery with hand-set stone work on the bodice and hem. Includes embellished lehenga, blouse, and dupatta. Fully lined and padded for structure. Available in custom measurements and colour combinations.',
   care:['Dry clean only — take to specialist bridal cleaner','Store hanging in breathable garment bag','Never fold the lehenga — always hang'],
   colors:[{n:'Bridal Red',h:'#9A1020'},{n:'Royal Pink',h:'#C04080'},{n:'Ivory Gold',h:'#D4C080'}],
   sizes:['Custom Fit'],na:[],
   img:'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80',
   img2:'https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=600&q=80',
   gallery:['https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80','https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=800&q=80','https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=800&q=80']},

  {id:7,name:'Embroidered Crop Top',category:'tops',price:799,mrp:1100,rating:4.6,reviews:53,badge:'new',
   fabric:'Cotton Cambric',delivery:'5–7 days',
   desc:'A breezy embroidered crop top with delicate thread-work at the neckline and hem. Relaxed fit with short sleeves and flattering cropped length. Pairs perfectly with high-waist skirts, sharara, or palazzo bottoms.',
   care:['Machine wash on gentle in cold water','Use colour-safe detergent','Do not bleach','Iron on low heat — avoid embroidered areas'],
   colors:[{n:'White',h:'#F5F0E8'},{n:'Powder Pink',h:'#F0C8C0'},{n:'Sky Blue',h:'#90B8D8'}],
   sizes:['XS','S','M','L','XL','XXL'],na:[],
   img:'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=600&q=80',
   img2:'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=600&q=80',
   gallery:['https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80','https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800&q=80','https://images.unsplash.com/photo-1591369822096-ffd140ec948f?auto=format&fit=crop&w=800&q=80']},

  {id:8,name:'Brocade Corset Top',category:'tops',price:1699,mrp:2400,rating:4.8,reviews:41,badge:'bestseller',
   fabric:'Brocade + Cotton Lining',delivery:'7–10 days',
   desc:'A structured brocade corset top with full cotton lining for comfort. Boning channels provide shape and support. Back lace-up closure allows adjustable fit. Perfect styled over a saree or with wide-leg trousers for a fashion-forward look.',
   care:['Hand wash gently or dry clean','Do not twist or wring','Lay flat to dry to preserve structure','Stuff with tissue paper when storing'],
   colors:[{n:'Black Brocade',h:'#1C1C1C'},{n:'Wine Red',h:'#7A1830'},{n:'Gold Ivory',h:'#D4C080'}],
   sizes:['XS','S','M','L','XL'],na:[],
   img:'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?auto=format&fit=crop&w=600&q=80',
   img2:'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80',
   gallery:['https://images.unsplash.com/photo-1591369822096-ffd140ec948f?auto=format&fit=crop&w=800&q=80','https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80','https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80']},

  {id:9,name:'Flared A-Line Skirt',category:'bottoms',price:999,mrp:1499,rating:4.6,reviews:37,badge:null,
   fabric:'Georgette + Lining',delivery:'5–7 days',
   desc:'A graceful flared A-line midi skirt in sheer georgette with full lining. Elastic waistband for comfort. The flare begins from the hip giving a beautiful silhouette when you move. Pairs beautifully with crop tops, kurtis, or blouses.',
   care:['Hand wash in cold water','Hang to dry to prevent creasing','Iron at low temperature on lining side'],
   colors:[{n:'Blush Pink',h:'#E8B0B8'},{n:'Cream White',h:'#F5EDE4'},{n:'Olive Green',h:'#808840'}],
   sizes:['XS','S','M','L','XL','XXL'],na:[],
   img:'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=600&q=80',
   img2:'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80',
   gallery:['https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=800&q=80','https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80','https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=800&q=80']},

  {id:10,name:'Wide Leg Palazzo Pant',category:'bottoms',price:1099,mrp:1599,rating:4.7,reviews:45,badge:null,
   fabric:'Crepe',delivery:'5–7 days',
   desc:'Elegant wide-leg palazzo pants in fluid crepe fabric with beautiful drape. High waist with concealed elastic band for a clean look. Can be dressed up or down — from office wear to festive evenings.',
   care:['Machine wash on gentle or hand wash','Hang dry — do not tumble dry','Iron at medium heat for best drape'],
   colors:[{n:'Ivory',h:'#F0E8DC'},{n:'Charcoal',h:'#404040'},{n:'Dusty Rose',h:'#C8A0A0'}],
   sizes:['XS','S','M','L','XL','XXL'],na:[],
   img:'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=600&q=80',
   img2:'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=600&q=80',
   gallery:['https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800&q=80','https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=800&q=80','https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80']},

  {id:11,name:'Chanderi Festive Dress',category:'dresses',price:2299,mrp:3000,rating:4.7,reviews:22,badge:'new',
   fabric:'Chanderi Silk',delivery:'7–10 days',
   desc:'An ethereal Chanderi silk dress with delicate silver thread work along the bodice and hemline. Flared A-line silhouette with hidden side zip. Fully lined for comfort. A perfect statement piece for weddings and festivities.',
   care:['Dry clean strongly recommended','If hand washing, use cold water and extreme care','Lay flat to dry — never wring'],
   colors:[{n:'Silver Mist',h:'#D0CCC4'},{n:'Dusty Rose',h:'#C89090'},{n:'Sage Green',h:'#8AAA90'}],
   sizes:['S','M','L','XL','XXL'],na:['XXL'],
   img:'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=600&q=80',
   img2:'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=600&q=80',
   gallery:['https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80','https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80','https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80']},

  {id:12,name:'Bodycon Evening Dress',category:'dresses',price:1899,mrp:2600,rating:4.7,reviews:33,badge:null,
   fabric:'Stretch Jersey',delivery:'5–7 days',
   desc:'A figure-flattering bodycon dress in premium stretch jersey. Modest V-neckline, cap sleeves, knee-length hem. Fully lined for a smooth silhouette. Elegant enough for evening events, comfortable enough for long nights.',
   care:['Hand wash in cold water or machine wash on gentle','Use mild detergent','Do not bleach or tumble dry','Iron on low heat if needed'],
   colors:[{n:'Midnight Black',h:'#1C1C1C'},{n:'Burgundy',h:'#7A1830'},{n:'Forest Green',h:'#2A4A30'}],
   sizes:['XS','S','M','L','XL'],na:[],
   img:'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80',
   img2:'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=600&q=80',
   gallery:['https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80','https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80','https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80']},

  {id:13,name:'Princess Baby Frock',category:'kids',price:699,mrp:999,rating:5.0,reviews:26,badge:'bestseller',
   fabric:'Cotton + Net',delivery:'5–7 days',
   desc:'A darling baby frock in soft pure cotton base with a delicate net overlay on the skirt. Puffed sleeves, satin ribbon bow at the waist, lace hem detailing. Fully lined for baby-soft comfort. Perfect for birthdays, naming ceremonies, and special occasions.',
   care:['Machine wash on gentle cycle in cold water','Use baby-safe detergent only','Tumble dry on low or hang to dry','Iron at low heat — avoid lace and net'],
   colors:[{n:'Baby Pink',h:'#F5C8D0'},{n:'White',h:'#F8F4F0'},{n:'Lemon Yellow',h:'#F5E880'}],
   sizes:['0-6m','6-12m','1-2yr','2-3yr','3-4yr','4-5yr'],na:[],
   img:'https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&w=600&q=80',
   img2:'https://images.unsplash.com/photo-1515488764276-beab7607c1e6?auto=format&fit=crop&w=600&q=80',
   gallery:['https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&w=800&q=80','https://images.unsplash.com/photo-1515488764276-beab7607c1e6?auto=format&fit=crop&w=800&q=80','https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80']},

  {id:14,name:'Satin Hair Bow Set',category:'accessories',price:299,mrp:499,rating:4.9,reviews:88,badge:'bestseller',
   fabric:'Satin Ribbon',delivery:'3–5 days',
   desc:'Handcrafted satin hair bows in a set of 3 coordinating colours. Oversized bow design with alligator clip backing. Perfect for girls and women alike — as hair accessories, bag charms, or gift wrapping embellishments.',
   care:['Hand wash gently in cold water','Reshape while wet and air dry flat','Do not machine wash or iron'],
   colors:[{n:'Blush Trio',h:'#F0B0B8'},{n:'Pastel Set',h:'#D0E0D0'},{n:'Classic Black+White',h:'#2C2C2C'}],
   sizes:['One Size'],na:[],
   img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80',
   img2:'https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&w=600&q=80',
   gallery:['https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80','https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&w=800&q=80','https://images.unsplash.com/photo-1515488764276-beab7607c1e6?auto=format&fit=crop&w=800&q=80']},

  {id:15,name:'Designer Face Mask Set',category:'accessories',price:199,mrp:350,rating:4.8,reviews:120,badge:'bestseller',
   fabric:'3-Layer Cotton',delivery:'3–5 days',
   desc:'Stylish 3-layer cotton face masks with comfortable nose wire and adjustable ear loops. Outer layer is printed cotton, middle is filter layer, inner is soft skin-friendly cotton. Set of 3 in coordinating prints. Washable and reusable.',
   care:['Machine wash at 60°C after each use','Reshape nose wire before drying','Air dry completely before use','Replace every 3 months or when fabric is worn'],
   colors:[{n:'Floral Prints',h:'#D4A0A8'},{n:'Solid Pastels',h:'#B8D0C8'},{n:'Block Print',h:'#C8A870'}],
   sizes:['Adult S/M','Adult L/XL','Kids'],na:[],
   img:'https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=600&q=80',
   img2:'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80',
   gallery:['https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=800&q=80','https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80','https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80']},

  {id:16,name:'Custom Salwar Suit Set',category:'custom',price:3200,mrp:4500,rating:5.0,reviews:44,badge:'custom',
   fabric:'Your Choice',delivery:'10–15 days',
   desc:'Design your dream salwar suit from scratch. Choose your fabric (cotton, silk, georgette, crepe), style (Anarkali, straight, palazzo), neckline, sleeve length, and every embellishment detail. Stitched to your exact body measurements.',
   care:['Care instructions as per selected fabric — will be provided on delivery'],
   colors:[{n:'Any Colour',h:'#C49A3C'},{n:'Pastel Tones',h:'#E8D8C8'},{n:'Deep & Rich',h:'#3C2C24'}],
   sizes:['Custom Fit'],na:[],
   img:'https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=600&q=80',
   img2:'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=600&q=80',
   gallery:['https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=800&q=80','https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800&q=80','https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80']}
];

/* ---- HELPERS ---- */
const fmt = n => '₹' + n.toLocaleString('en-IN');
const calcDisc = (p,m) => Math.round((m-p)/m*100);
const starStr = r => '★'.repeat(Math.floor(r))+(r%1>=.5?'★':'')+'☆'.repeat(5-Math.ceil(r));
const catLabel = c => ({kurtis:'Kurtis',blouses:'Blouses & Corsets',lehenga:'Lehenga & Sharara',tops:'Tops & Crop Tops',bottoms:'Skirts & Pants',dresses:'Dresses',kids:'Kids Wear',accessories:'Accessories',custom:'Custom Orders'}[c]||c);
const WA = 'https://wa.me/918369876543';

/* ---- TOAST ---- */
function toast(msg,type=''){
  let t=document.getElementById('toast');
  if(!t){t=document.createElement('div');t.id='toast';t.className='toast';document.body.appendChild(t);}
  t.textContent=msg; t.className='toast show'+(type?' toast-'+type:'');
  clearTimeout(t._t); t._t=setTimeout(()=>t.classList.remove('show'),3000);
}

/* ---- CART ---- */
const Cart={
  KEY:'anushka_cart',
  all(){try{return JSON.parse(localStorage.getItem(this.KEY))||[];}catch{return[];}},
  save(items){localStorage.setItem(this.KEY,JSON.stringify(items));this.ui();},
  add(p,size,color,qty=1){
    const items=this.all();
    const key=`${p.id}_${size}_${color}`;
    const ex=items.find(i=>i.key===key);
    if(ex){ex.qty+=qty;}else{items.push({...p,key,selectedSize:size,selectedColor:color,qty});}
    this.save(items); toast('✨ Added to cart','success'); openCart();
  },
  remove(key){this.save(this.all().filter(i=>i.key!==key));},
  upd(key,qty){
    const items=this.all(); const item=items.find(i=>i.key===key);
    if(item){if(qty<1){this.remove(key);return;}item.qty=qty;this.save(items);}
  },
  clear(){localStorage.removeItem(this.KEY);this.ui();},
  total(){return this.all().reduce((s,i)=>s+i.price*i.qty,0);},
  count(){return this.all().reduce((s,i)=>s+i.qty,0);},
  ui(){
    const n=this.count();
    document.querySelectorAll('.cart-badge').forEach(b=>{
      b.textContent=n;
      if(n>0){b.classList.add('show');b.classList.add('bump');setTimeout(()=>b.classList.remove('bump'),400);}
      else{b.classList.remove('show');}
    });
    renderCartDrawer();
    if(document.getElementById('cartPageItems'))renderCartPage();
    if(document.getElementById('checkoutItems'))renderCheckoutSummary();
  }
};

/* ---- WISHLIST ---- */
const Wish={
  KEY:'anushka_wish',
  all(){try{return JSON.parse(localStorage.getItem(this.KEY))||[];}catch{return[];}},
  toggle(id){
    const list=this.all();const i=list.indexOf(id);
    if(i===-1){list.push(id);toast('♡ Added to wishlist');}
    else{list.splice(i,1);toast('Removed from wishlist');}
    localStorage.setItem(this.KEY,JSON.stringify(list));
    this.sync(id);return i===-1;
  },
  has(id){return this.all().includes(id);},
  sync(id){
    document.querySelectorAll(`[data-wid="${id}"]`).forEach(b=>{
      b.classList.toggle('wishlisted',this.has(id));
      const svg=b.querySelector('svg');if(svg)svg.setAttribute('fill',this.has(id)?'currentColor':'none');
    });
    const mb=document.querySelector('.modal-wish-btn');
    if(mb&&parseInt(mb.dataset.pid)===id){
      mb.classList.toggle('active',this.has(id));
      const svg=mb.querySelector('svg');if(svg)svg.setAttribute('fill',this.has(id)?'currentColor':'none');
    }
  }
};

/* ---- CART DRAWER ---- */
function openCart(){
  document.getElementById('cartDrawer')?.classList.add('open');
  document.getElementById('cartOverlay')?.classList.add('open');
  document.body.style.overflow='hidden';
  renderCartDrawer();
}
function closeCart(){
  document.getElementById('cartDrawer')?.classList.remove('open');
  document.getElementById('cartOverlay')?.classList.remove('open');
  document.body.style.overflow='';
}
function renderCartDrawer(){
  const items=Cart.all();
  const body=document.getElementById('cartBody');
  const foot=document.getElementById('cartFoot');
  const cnt=document.getElementById('cartHeadCount');
  const sub=document.getElementById('cartSubtotal');
  if(!body)return;
  if(cnt)cnt.textContent=`${Cart.count()} item${Cart.count()!==1?'s':''}`;
  if(sub)sub.textContent=fmt(Cart.total());
  if(!items.length){
    body.innerHTML=`<div class="c-empty"><div class="c-empty-icon">🛍️</div><h4>Your cart is empty</h4><p>Discover our handcrafted collection</p><a href="collection.html" class="btn btn-rose btn-md" onclick="closeCart()">Shop Now</a></div>`;
    if(foot)foot.style.display='none';return;
  }
  if(foot)foot.style.display='block';
  body.innerHTML=items.map(item=>`
    <div class="c-item">
      <img class="c-img" src="${item.img}" alt="${item.name}" onerror="this.style.background='#D4A8A0'"/>
      <div>
        <div class="c-name">${item.name}</div>
        <div class="c-meta">${item.selectedSize} · ${item.selectedColor}</div>
        <div class="c-price">${fmt(item.price)}</div>
        <div class="c-controls">
          <div class="c-qty">
            <button class="c-qbtn" onclick="Cart.upd('${item.key}',${item.qty-1})">−</button>
            <span class="c-qnum">${item.qty}</span>
            <button class="c-qbtn" onclick="Cart.upd('${item.key}',${item.qty+1})">+</button>
          </div>
          <span class="c-remove" onclick="Cart.remove('${item.key}')">Remove</span>
        </div>
      </div>
    </div>`).join('');
}

/* ---- MODAL ---- */
let _mp=null,_msize=null,_mcolor=null,_mqty=1,_mimg=0;
function openModal(id){
  const p=PRODUCTS.find(x=>x.id===id);if(!p)return;
  _mp=p;_msize=p.sizes.filter(s=>!p.na.includes(s))[0]||null;_mcolor=p.colors[0].n;_mqty=1;_mimg=0;
  document.getElementById('modalBigImg').src=p.gallery[0];
  document.getElementById('modalThumbs').innerHTML=p.gallery.map((g,i)=>`
    <div class="modal-thumb${i===0?' active':''}" onclick="switchImg(${i})"><img src="${g}" loading="lazy"/></div>`).join('');
  const d=calcDisc(p.price,p.mrp);
  document.getElementById('modalInfo').innerHTML=`
    <div class="modal-cat">${catLabel(p.category)}</div>
    <h3 class="modal-name">${p.name}</h3>
    <div class="modal-rating-row"><span class="m-stars">${starStr(p.rating)}</span><span>${p.rating} · ${p.reviews} reviews</span></div>
    <div class="modal-price-row">
      <span class="modal-price">${fmt(p.price)}</span>
      <span class="modal-mrp">${fmt(p.mrp)}</span>
      <span class="modal-disc-pill">${d}% off</span>
    </div>
    <div class="modal-divider"></div>
    <div>
      <div class="m-lbl">Colour <span id="mColName">${p.colors[0].n}</span></div>
      <div class="color-wrap">${p.colors.map((c,i)=>`<button class="color-opt${i===0?' active':''}" style="background:${c.h}" title="${c.n}" onclick="selMCol('${c.n}',this)"></button>`).join('')}</div>
    </div>
    <div>
      <div class="m-lbl">Size <span id="mSizeName">${_msize||'Select'}</span> <span class="sz-guide-link" onclick="openSG()">Size Guide</span></div>
      <div class="size-wrap">${p.sizes.map(s=>`<button class="size-opt${s===_msize?' active':''}${p.na.includes(s)?' na':''}" onclick="selMSz('${s}',this)">${s}</button>`).join('')}</div>
    </div>
    <div>
      <div class="m-lbl">Quantity</div>
      <div class="qty-row">
        <div class="qty-ctrl">
          <button class="qty-btn" onclick="mQty(-1)">−</button>
          <span class="qty-num" id="mQtyN">1</span>
          <button class="qty-btn" onclick="mQty(1)">+</button>
        </div>
        <span style="font-size:.77rem;color:var(--text-s)">Free delivery</span>
      </div>
    </div>
    <div class="modal-action-row">
      <button class="btn btn-rose modal-add-btn" onclick="addMToCart()">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
        Add to Cart
      </button>
      <button class="modal-wish-btn${Wish.has(p.id)?' active':''}" data-pid="${p.id}" onclick="mWish(this)">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="${Wish.has(p.id)?'currentColor':'none'}" stroke="currentColor" stroke-width="1.5"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
      </button>
    </div>
    <div class="acc">
      <div class="acc-item open"><button class="acc-trig" onclick="accTog(this)">Description <span class="acc-icon">+</span></button><div class="acc-body open"><div class="acc-content">${p.desc}</div></div></div>
      <div class="acc-item"><button class="acc-trig" onclick="accTog(this)">Fabric & Care <span class="acc-icon">+</span></button><div class="acc-body"><div class="acc-content"><strong>Fabric:</strong> ${p.fabric}<br><br><ul>${p.care.map(c=>`<li>${c}</li>`).join('')}</ul></div></div></div>
      <div class="acc-item"><button class="acc-trig" onclick="accTog(this)">Delivery <span class="acc-icon">+</span></button><div class="acc-body"><div class="acc-content"><ul><li>Estimated: ${p.delivery}</li><li>Free delivery on all orders</li><li>Custom fit via WhatsApp</li><li>Easy exchange available</li></ul></div></div></div>
    </div>
    <a href="product.html?id=${p.id}" style="font-size:.78rem;color:var(--rose);text-decoration:underline;text-align:center;display:block">View full product details →</a>`;
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow='hidden';
}
function switchImg(i){_mimg=i;document.getElementById('modalBigImg').src=_mp.gallery[i];document.querySelectorAll('.modal-thumb').forEach((t,j)=>t.classList.toggle('active',j===i));}
function selMCol(n,btn){_mcolor=n;document.querySelectorAll('#modalInfo .color-opt').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const e=document.getElementById('mColName');if(e)e.textContent=n;}
function selMSz(s,btn){_msize=s;document.querySelectorAll('#modalInfo .size-opt').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const e=document.getElementById('mSizeName');if(e)e.textContent=s;}
function mQty(d){_mqty=Math.max(1,_mqty+d);const e=document.getElementById('mQtyN');if(e)e.textContent=_mqty;}
function addMToCart(){if(!_mp)return;if(!_msize){toast('⚠️ Please select a size','warn');return;}Cart.add(_mp,_msize,_mcolor||_mp.colors[0].n,_mqty);closeModal();}
function mWish(btn){const id=parseInt(btn.dataset.pid);const w=Wish.toggle(id);btn.classList.toggle('active',w);const svg=btn.querySelector('svg');if(svg)svg.setAttribute('fill',w?'currentColor':'none');}
function openSG(){const m=document.getElementById('sgModal');if(m)m.classList.add('open');}
function closeSG(){document.getElementById('sgModal')?.classList.remove('open');}
function closeModal(){document.getElementById('modalOverlay')?.classList.remove('open');document.body.style.overflow='';_mp=null;}
function accTog(btn){const item=btn.closest('.acc-item');const body=item.querySelector('.acc-body');const was=item.classList.contains('open');document.querySelectorAll('.acc-item').forEach(i=>{i.classList.remove('open');i.querySelector('.acc-body').classList.remove('open');});if(!was){item.classList.add('open');body.classList.add('open');}}

/* ---- PRODUCT CARD ---- */
function renderCard(p,delay=0){
  const d=calcDisc(p.price,p.mrp);
  const w=Wish.has(p.id);
  const badge=p.badge?`<span class="prod-badge badge-${p.badge}">${p.badge==='new'?'NEW':p.badge==='bestseller'?'BEST SELLER':p.badge==='custom'?'CUSTOM':p.badge.toUpperCase()}</span>`:'';
  const swatches=p.colors.slice(0,3).map((c,i)=>`<span class="swatch${i===0?' active':''}" style="background:${c.h}" title="${c.n}"></span>`).join('');
  return `<div class="prod-card reveal${delay?' reveal-d'+delay:''}" data-id="${p.id}">
    <div class="prod-img-wrap">
      <img class="prod-img" src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.style.background='#D4A8A0'"/>
      <img class="prod-img2" src="${p.img2}" alt="${p.name}" loading="lazy" onerror="this.style.background='#C49890'"/>
      ${badge}
      <button class="prod-wish${w?' wishlisted':''}" data-wid="${p.id}" onclick="event.stopPropagation();Wish.toggle(${p.id})">
        <svg viewBox="0 0 24 24" fill="${w?'currentColor':'none'}" stroke="currentColor" stroke-width="1.5"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
      </button>
      <div class="prod-quick-bar">
        <button class="quick-cart" onclick="event.stopPropagation();quickAdd(${p.id})">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
          Add to Cart
        </button>
        <button class="quick-view" onclick="event.stopPropagation();openModal(${p.id})" title="Quick View">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
        </button>
      </div>
    </div>
    <div class="prod-swatches">${swatches}</div>
    <div class="prod-info">
      <div class="prod-cat">${catLabel(p.category)}</div>
      <a href="product.html?id=${p.id}" class="prod-name">${p.name}</a>
      <div class="prod-fabric">${p.fabric}</div>
      <div class="prod-price-row">
        <span class="prod-price">${fmt(p.price)}</span>
        <span class="prod-mrp">${fmt(p.mrp)}</span>
        <span class="prod-disc">${d}% off</span>
      </div>
      <div class="prod-rating"><span class="stars">${starStr(p.rating)}</span><span>${p.rating} (${p.reviews})</span></div>
    </div>
  </div>`;
}

function quickAdd(id){
  const p=PRODUCTS.find(x=>x.id===id);if(!p)return;
  if(p.category==='custom'||p.sizes.filter(s=>!p.na.includes(s)).length>1){openModal(id);return;}
  Cart.add(p,p.sizes.filter(s=>!p.na.includes(s))[0],p.colors[0].n);
}

function renderGrid(elId,products){
  const el=document.getElementById(elId);if(!el)return;
  el.innerHTML=products.map((p,i)=>renderCard(p,i%4)).join('');
  initReveal();
}

/* ---- NAVBAR ---- */
function initNavbar(){
  const nav=document.getElementById('navbar');
  const ham=document.getElementById('hamburger');
  const mob=document.getElementById('mobileNav');
  window.addEventListener('scroll',()=>{
    nav?.classList.toggle('scrolled',window.scrollY>10);
    document.getElementById('backTop')?.classList.toggle('show',window.scrollY>400);
  },{passive:true});
  ham?.addEventListener('click',()=>{ham.classList.toggle('open');mob?.classList.toggle('open');document.body.style.overflow=mob?.classList.contains('open')?'hidden':'';});
  mob?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{ham?.classList.remove('open');mob?.classList.remove('open');document.body.style.overflow='';}));
  // Active link
  const cur=window.location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('.nav-link,.mobile-nav-link').forEach(l=>l.classList.toggle('active',l.getAttribute('href')===cur));
  // Search
  document.getElementById('searchBtn')?.addEventListener('click',()=>{document.getElementById('searchOverlay')?.classList.add('open');setTimeout(()=>document.getElementById('searchInput')?.focus(),100);document.body.style.overflow='hidden';});
  document.getElementById('sCloseBtn')?.addEventListener('click',closeSearch);
  document.getElementById('searchOverlay')?.addEventListener('click',e=>{if(e.target===document.getElementById('searchOverlay'))closeSearch();});
  document.getElementById('searchInput')?.addEventListener('input',doSearch);
  // Cart
  document.getElementById('cartBtn')?.addEventListener('click',openCart);
  document.getElementById('cartOverlay')?.addEventListener('click',closeCart);
  // ESC
  document.addEventListener('keydown',e=>{
    if(e.key==='Escape'){closeSearch();closeModal();closeCart();closeSG();document.body.style.overflow='';}
  });
  // Modals
  document.getElementById('modalOverlay')?.addEventListener('click',e=>{if(e.target===document.getElementById('modalOverlay'))closeModal();});
  document.getElementById('sgModal')?.addEventListener('click',e=>{if(e.target===document.getElementById('sgModal'))closeSG();});
}
function closeSearch(){document.getElementById('searchOverlay')?.classList.remove('open');document.getElementById('searchResults')?.classList.remove('show');document.body.style.overflow='';}
function doSearch(e){
  const q=e.target.value.trim().toLowerCase();
  const res=document.getElementById('searchResults');if(!res)return;
  if(q.length<2){res.classList.remove('show');return;}
  const matches=PRODUCTS.filter(p=>p.name.toLowerCase().includes(q)||p.category.includes(q)||p.fabric.toLowerCase().includes(q));
  if(!matches.length){res.innerHTML='<div style="padding:14px 20px;font-size:.85rem;color:var(--text-s)">No results found</div>';res.classList.add('show');return;}
  res.innerHTML=matches.slice(0,6).map(p=>`
    <div class="sri" onclick="closeSearch();window.location='product.html?id=${p.id}'">
      <img src="${p.img}" alt="${p.name}" onerror="this.style.background='#D4A8A0'"/>
      <div><div class="sri-name">${p.name}</div><div class="sri-price">${fmt(p.price)}</div></div>
    </div>`).join('');
  res.classList.add('show');
}

/* ---- REVEAL ---- */
function initReveal(){
  const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');obs.unobserve(e.target);}});},{threshold:.08,rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('.reveal:not(.in)').forEach(el=>obs.observe(el));
}

/* ---- COUNTERS ---- */
function initCounters(){
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(!e.isIntersecting)return;
      const el=e.target;const t=parseInt(el.dataset.t||'0');const s=el.dataset.s||'';
      let cur=0;const step=t/60;
      const tm=setInterval(()=>{cur=Math.min(cur+step,t);el.textContent=Math.floor(cur)+s;if(cur>=t)clearInterval(tm);},16);
      obs.unobserve(el);
    });
  },{threshold:.5});
  document.querySelectorAll('[data-t]').forEach(el=>obs.observe(el));
}

/* ---- PRELOADER ---- */
function initPreloader(){
  const pl=document.getElementById('preloader');if(!pl)return;
  window.addEventListener('load',()=>setTimeout(()=>pl.classList.add('hidden'),1500));
  setTimeout(()=>pl?.classList.add('hidden'),3000);
}

/* ---- NEWSLETTER ---- */
function handleNewsletter(e){e.preventDefault();const inp=e.target.querySelector('input');if(!inp?.value)return;toast('🎉 Thank you for subscribing!','success');inp.value='';}

/* ================================================
   HOME PAGE
   ================================================ */
function initHome(){
  // Fix counter targets
  const c1=document.getElementById('cnt1'),c2=document.getElementById('cnt2'),c3=document.getElementById('cnt3');
  if(c1){c1.dataset.t='300';c1.dataset.s='+';}
  if(c2){c2.dataset.t='5';c2.dataset.s='+';}
  if(c3){c3.dataset.t='100';c3.dataset.s='%';}
  initCounters();
  renderGrid('newArrivalsGrid',PRODUCTS.filter(p=>p.badge==='new').concat(PRODUCTS.filter(p=>!p.badge)).slice(0,8));
  renderGrid('bestSellersGrid',PRODUCTS.filter(p=>p.badge==='bestseller').concat(PRODUCTS.filter(p=>p.reviews>40&&p.badge!=='bestseller')).slice(0,8));
}

/* ================================================
   COLLECTION PAGE
   ================================================ */
let _fCat='all',_fSizes=new Set(),_fMaxP=12000,_fSort='featured';
function initCollection(){
  renderFiltered();
  document.querySelectorAll('[data-filter]').forEach(btn=>{
    btn.addEventListener('click',()=>{
      document.querySelectorAll('[data-filter]').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');_fCat=btn.dataset.filter;renderFiltered();
    });
  });
  document.querySelectorAll('.filter-size-chip').forEach(chip=>{
    chip.addEventListener('click',()=>{chip.classList.toggle('active');chip.classList.contains('active')?_fSizes.add(chip.dataset.sz):_fSizes.delete(chip.dataset.sz);renderFiltered();});
  });
  const pr=document.getElementById('priceRange');
  if(pr){pr.addEventListener('input',()=>{_fMaxP=parseInt(pr.value);const pv=document.getElementById('priceVal');if(pv)pv.textContent=fmt(_fMaxP);renderFiltered();});}
  const sort=document.getElementById('sortSelect');
  if(sort){sort.addEventListener('change',()=>{_fSort=sort.value;renderFiltered();});}
  document.getElementById('clearFiltersBtn')?.addEventListener('click',clearFilters);
  document.querySelectorAll('.filter-group-hd').forEach(hd=>hd.addEventListener('click',()=>hd.closest('.filter-group').classList.toggle('open')));
  // mobile drawer
  document.getElementById('filterMobBtn')?.addEventListener('click',()=>{document.getElementById('filterDrawer')?.classList.add('open');document.getElementById('filterDrawerOv')?.classList.add('open');document.body.style.overflow='hidden';});
  const closeDrawer=()=>{document.getElementById('filterDrawer')?.classList.remove('open');document.getElementById('filterDrawerOv')?.classList.remove('open');document.body.style.overflow='';};
  document.getElementById('closeFilterDrawer')?.addEventListener('click',closeDrawer);
  document.getElementById('filterDrawerOv')?.addEventListener('click',closeDrawer);
}
function renderFiltered(){
  let prods=[...PRODUCTS];
  if(_fCat!=='all')prods=prods.filter(p=>p.category===_fCat);
  if(_fSizes.size)prods=prods.filter(p=>[..._fSizes].some(s=>p.sizes.includes(s)&&!p.na.includes(s)));
  prods=prods.filter(p=>p.price<=_fMaxP);
  if(_fSort==='price_asc')prods.sort((a,b)=>a.price-b.price);
  else if(_fSort==='price_desc')prods.sort((a,b)=>b.price-a.price);
  else if(_fSort==='rating')prods.sort((a,b)=>b.rating-a.rating);
  else if(_fSort==='newest')prods.sort((a,b)=>(b.badge==='new'?1:0)-(a.badge==='new'?1:0));
  const grid=document.getElementById('collectionGrid');
  const res=document.getElementById('collResult');
  if(res)res.innerHTML=`Showing <strong>${prods.length}</strong> result${prods.length!==1?'s':''}`;
  if(!grid)return;
  if(!prods.length){grid.innerHTML=`<div style="grid-column:1/-1;text-align:center;padding:80px 0"><div style="font-size:2.5rem;margin-bottom:12px">🔍</div><h3 style="font-family:'Playfair Display',serif;margin-bottom:8px">No products found</h3><p style="color:var(--text-s);margin-bottom:20px;font-size:.9rem">Try adjusting your filters</p><button class="btn btn-rose btn-md" onclick="clearFilters()">Clear Filters</button></div>`;return;}
  grid.innerHTML=prods.map((p,i)=>renderCard(p,i%4)).join('');
  initReveal();
}
function clearFilters(){_fCat='all';_fSizes.clear();_fMaxP=12000;_fSort='featured';document.querySelectorAll('[data-filter]').forEach(b=>b.classList.toggle('active',b.dataset.filter==='all'));document.querySelectorAll('.filter-size-chip').forEach(c=>c.classList.remove('active'));const pr=document.getElementById('priceRange');if(pr)pr.value=12000;const pv=document.getElementById('priceVal');if(pv)pv.textContent=fmt(12000);const so=document.getElementById('sortSelect');if(so)so.value='featured';renderFiltered();}

/* ================================================
   PRODUCT PAGE
   ================================================ */
let _pp=null,_ppSz=null,_ppCol=null,_ppQty=1,_ppImg=0;
function initProductPage(){
  const id=parseInt(new URLSearchParams(window.location.search).get('id'));
  const p=PRODUCTS.find(x=>x.id===id);
  if(!p){document.getElementById('productContent').innerHTML='<div style="text-align:center;padding:80px"><h2>Product not found</h2><a href="collection.html" class="btn btn-rose btn-md" style="margin-top:20px">Browse Collection</a></div>';return;}
  _pp=p;_ppSz=p.sizes.filter(s=>!p.na.includes(s))[0]||null;_ppCol=p.colors[0].n;_ppQty=1;_ppImg=0;
  document.title=`${p.name} — Anushka Boutique`;
  // breadcrumb
  const bc=document.getElementById('ppBc');
  if(bc)bc.innerHTML=`<a href="index.html">Home</a><span class="sep">›</span><a href="collection.html">Collection</a><span class="sep">›</span><span>${p.name}</span>`;
  // gallery
  const mi=document.getElementById('ppMainImg');if(mi)mi.src=p.gallery[0];
  const th=document.getElementById('ppThumbs');
  if(th)th.innerHTML=p.gallery.map((g,i)=>`<div class="gallery-thumb${i===0?' active':''}" onclick="ppSelectImg(${i})"><img src="${g}" loading="lazy"/></div>`).join('');
  // info
  const d=calcDisc(p.price,p.mrp);
  document.getElementById('ppCat').textContent=catLabel(p.category);
  document.getElementById('ppName').textContent=p.name;
  document.getElementById('ppStars').textContent=starStr(p.rating);
  document.getElementById('ppRating').textContent=`${p.rating} · ${p.reviews} reviews`;
  document.getElementById('ppPrice').textContent=fmt(p.price);
  document.getElementById('ppMrp').textContent=fmt(p.mrp);
  document.getElementById('ppDisc').textContent=d+'% off';
  // colors
  const colEl=document.getElementById('ppColors');
  if(colEl)colEl.innerHTML=p.colors.map((c,i)=>`<button class="color-opt${i===0?' active':''}" style="background:${c.h}" title="${c.n}" onclick="ppSelCol('${c.n}',this)"></button>`).join('');
  document.getElementById('ppColName').textContent=p.colors[0].n;
  // sizes
  const szEl=document.getElementById('ppSizes');
  if(szEl)szEl.innerHTML=p.sizes.map(s=>`<button class="size-opt${s===_ppSz?' active':''}${p.na.includes(s)?' na':''}" onclick="ppSelSz('${s}',this)">${s}</button>`).join('');
  document.getElementById('ppSzName').textContent=_ppSz||'Select';
  // accordion
  const descEl=document.getElementById('ppDesc');if(descEl)descEl.innerHTML=`<p>${p.desc}</p><br><p><strong>Fabric:</strong> ${p.fabric}</p>`;
  const careEl=document.getElementById('ppCare');if(careEl)careEl.innerHTML=`<ul>${p.care.map(c=>`<li>${c}</li>`).join('')}</ul>`;
  const delEl=document.getElementById('ppDel');if(delEl)delEl.innerHTML=`<ul><li>Estimated delivery: <strong>${p.delivery}</strong></li><li>Free delivery on all orders across India</li><li>Custom fit consultation on WhatsApp after order</li><li>Easy exchange if sizing needs adjustment</li></ul>`;
  // wishlist
  const wb=document.getElementById('ppWishBtn');
  if(wb){wb.dataset.pid=p.id;wb.classList.toggle('active',Wish.has(p.id));const svg=wb.querySelector('svg');if(svg)svg.setAttribute('fill',Wish.has(p.id)?'currentColor':'none');}
  // related
  renderGrid('relatedGrid',PRODUCTS.filter(x=>x.category===p.category&&x.id!==p.id).slice(0,4));
}
function ppSelectImg(i){_ppImg=i;const img=document.getElementById('ppMainImg');if(img)img.src=_pp.gallery[i];document.querySelectorAll('.gallery-thumb').forEach((t,j)=>t.classList.toggle('active',j===i));}
function ppPrev(){ppSelectImg((_ppImg-1+_pp.gallery.length)%_pp.gallery.length);}
function ppNext(){ppSelectImg((_ppImg+1)%_pp.gallery.length);}
function ppSelCol(n,btn){_ppCol=n;document.querySelectorAll('#ppColors .color-opt').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const e=document.getElementById('ppColName');if(e)e.textContent=n;}
function ppSelSz(s,btn){_ppSz=s;document.querySelectorAll('#ppSizes .size-opt').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const e=document.getElementById('ppSzName');if(e)e.textContent=s;}
function ppChgQty(d){_ppQty=Math.max(1,_ppQty+d);const e=document.getElementById('ppQtyN');if(e)e.textContent=_ppQty;}
function ppAddCart(){if(!_pp)return;if(!_ppSz){toast('⚠️ Please select a size','warn');return;}Cart.add(_pp,_ppSz,_ppCol||_pp.colors[0].n,_ppQty);}
function ppWish(btn){const id=parseInt(btn.dataset.pid);const w=Wish.toggle(id);btn.classList.toggle('active',w);const svg=btn.querySelector('svg');if(svg)svg.setAttribute('fill',w?'currentColor':'none');}

/* ================================================
   CART PAGE
   ================================================ */
function renderCartPage(){
  const items=Cart.all();
  const el=document.getElementById('cartPageItems');
  const sumEl=document.getElementById('cartSummarySection');
  if(!el)return;
  if(!items.length){
    el.innerHTML=`<div class="cart-section-card"><div style="text-align:center;padding:80px 40px"><div style="font-size:3rem;margin-bottom:16px">🛍️</div><h3 style="font-family:'Playfair Display',serif;margin-bottom:8px">Your cart is empty</h3><p style="color:var(--text-s);margin-bottom:24px">Discover our handcrafted collection</p><a href="collection.html" class="btn btn-rose btn-md">Explore Collection</a></div></div>`;
    if(sumEl)sumEl.innerHTML='';return;
  }
  el.innerHTML=`<div class="cart-section-card">
    <div class="cart-section-head"><h3>Shopping Cart</h3><span class="cart-section-count">${items.length} item${items.length!==1?'s':''}</span></div>
    ${items.map(item=>`<div class="cart-page-item">
      <img class="cpi-img" src="${item.img}" alt="${item.name}" onerror="this.style.background='#D4A8A0'"/>
      <div>
        <div class="cpi-cat">${catLabel(item.category)}</div>
        <div class="cpi-name">${item.name}</div>
        <div class="cpi-meta">Size: ${item.selectedSize} · Colour: ${item.selectedColor}</div>
        <div class="cpi-bottom">
          <div class="qty-ctrl">
            <button class="qty-btn" onclick="Cart.upd('${item.key}',${item.qty-1})">−</button>
            <span class="qty-num">${item.qty}</span>
            <button class="qty-btn" onclick="Cart.upd('${item.key}',${item.qty+1})">+</button>
          </div>
          <div class="cpi-total">${fmt(item.price*item.qty)}</div>
          <button class="btn" style="font-size:.72rem;letter-spacing:.08em;text-transform:uppercase;color:var(--text-s)" onclick="Cart.remove('${item.key}')">✕ Remove</button>
        </div>
      </div>
    </div>`).join('')}
  </div>`;
  const t=Cart.total();
  if(sumEl)sumEl.innerHTML=`<div class="os-card">
    <div class="os-title">Order Summary</div>
    <div class="os-row"><span>Subtotal (${Cart.count()} items)</span><span class="val">${fmt(t)}</span></div>
    <div class="os-row"><span>Delivery</span><span class="val" style="color:var(--success)">Free</span></div>
    <div class="os-row"><span>Custom Fitting</span><span class="val" style="color:var(--success)">Complimentary</span></div>
    <div class="coupon-row"><input type="text" class="coupon-input" id="couponInput" placeholder="Enter coupon code"/><button class="btn btn-outline-rose btn-sm" onclick="applyCoupon()">Apply</button></div>
    <div class="os-row total"><span>Total</span><span class="val">${fmt(t)}</span></div>
    <a href="checkout.html" class="btn btn-rose btn-md" style="width:100%;justify-content:center;display:flex;margin-top:20px">Proceed to Checkout →</a>
    <a href="collection.html" class="btn btn-outline btn-sm" style="width:100%;justify-content:center;display:flex;margin-top:10px">Continue Shopping</a>
    <p class="os-note">💌 Anushka will contact you on WhatsApp to confirm your order & measurements</p>
  </div>`;
}
function applyCoupon(){const v=document.getElementById('couponInput')?.value.trim().toUpperCase();if(v==='ANUSHKA10')toast('🎉 Coupon applied! 10% off','success');else if(v==='WELCOME')toast('🎉 Welcome coupon: 5% off','success');else toast('❌ Invalid coupon code');}

/* ================================================
   CHECKOUT PAGE
   ================================================ */
function renderCheckoutSummary(){
  const items=Cart.all();
  const el=document.getElementById('checkoutItems');
  const totEl=document.getElementById('checkoutTotal');
  if(!el)return;
  if(!items.length){el.innerHTML='<p style="color:var(--text-s);font-size:.85rem;text-align:center;padding:16px 0">No items — <a href="collection.html" style="color:var(--rose)">shop now</a></p>';if(totEl)totEl.innerHTML='';return;}
  el.innerHTML=items.map(item=>`<div class="ck-item">
    <img src="${item.img}" alt="${item.name}" onerror="this.style.background='#D4A8A0'"/>
    <div class="ck-item-info"><div class="ck-item-name">${item.name}</div><div class="ck-item-meta">${item.selectedSize} · Qty ${item.qty}</div></div>
    <div class="ck-item-price">${fmt(item.price*item.qty)}</div>
  </div>`).join('');
  const t=Cart.total();
  if(totEl)totEl.innerHTML=`<div class="os-row"><span>Subtotal</span><span class="val">${fmt(t)}</span></div><div class="os-row"><span>Delivery</span><span class="val" style="color:var(--success)">Free</span></div><div class="os-row total"><span>Total</span><span class="val">${fmt(t)}</span></div>`;
}
function handleCheckout(e){
  e.preventDefault();let valid=true;
  ['coName','coPhone','coAddress'].forEach(id=>{
    const f=document.getElementById(id);const g=f?.closest('.form-field');
    if(!f?.value.trim()){g?.classList.add('err');valid=false;}else g?.classList.remove('err');
  });
  if(!valid){toast('⚠️ Please fill all required fields','warn');return;}
  e.target.style.display='none';
  const s=document.getElementById('orderSuccess');if(s){s.style.display='block';s.classList.add('show');}
  Cart.clear();window.scrollTo({top:0,behavior:'smooth'});
}

/* ================================================
   CONTACT PAGE
   ================================================ */
function initContact(){
  document.getElementById('contactForm')?.addEventListener('submit',e=>{
    e.preventDefault();toast('✅ Message sent! Anushka will reply soon','success');e.target.reset();
  });
}

/* ================================================
   INIT
   ================================================ */
document.addEventListener('DOMContentLoaded',()=>{
  initPreloader();
  initNavbar();
  Cart.ui();
  initReveal();
  document.getElementById('backTop')?.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
  const page=window.location.pathname.split('/').pop()||'index.html';
  if(page==='index.html'||page==='')initHome();
  else if(page==='collection.html')initCollection();
  else if(page==='product.html')initProductPage();
  else if(page==='cart.html'){renderCartPage();}
  else if(page==='checkout.html'){renderCheckoutSummary();document.getElementById('checkoutForm')?.addEventListener('submit',handleCheckout);}
  else if(page==='contact.html')initContact();
  else if(page==='about.html')initCounters();
});
