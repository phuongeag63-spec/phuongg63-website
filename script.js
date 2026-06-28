function openCheckout(product, amount, priceText){
  const note = encodeURIComponent(product + ' - So Zalo');
  document.getElementById('checkoutProduct').innerText = product;
  document.getElementById('checkoutPrice').innerText = priceText;
  document.getElementById('payNote').innerText = product + ' + Số Zalo';
  document.getElementById('qrImage').src = 'https://img.vietqr.io/image/970415-888889060666-compact2.png?amount=' + amount + '&addInfo=' + note + '&accountName=NGUYEN%20HOANG%20PHUONG';
  document.getElementById('noticeBox').style.display = 'none';
  document.getElementById('checkoutModal').style.display = 'flex';
}
function closeCheckout(){document.getElementById('checkoutModal').style.display='none'}
function showNotice(){document.getElementById('noticeBox').style.display='block'}
window.addEventListener('click',function(e){if(e.target.id==='checkoutModal') closeCheckout()});
const observer = new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting) entry.target.classList.add('show')})},{threshold:.14});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
