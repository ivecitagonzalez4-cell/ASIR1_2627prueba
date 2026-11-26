document.addEventListener('DOMContentLoaded',()=>{
  const toggle=document.querySelector('.menu-toggle');
  const links=document.querySelector('.nav-links');
  if(toggle&&links) toggle.addEventListener('click',()=>links.classList.toggle('open'));

  const years=document.querySelector('#yearsSingle');
  const output=document.querySelector('#promoResult');
  const calc=document.querySelector('#calculatePromo');
  if(calc&&years&&output){
    calc.addEventListener('click',()=>{
      const n=Math.max(0,parseInt(years.value||'0',10));
      const discount=Math.min(n*5,30);
      output.textContent=`¡Tienes un ${discount}% de descuento en un cóctel de autor!`;
    });
  }

  const form=document.querySelector('#bookingForm');
  if(form) form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(!form.reportValidity()) return;
    const name=form.querySelector('[name="name"]').value.trim();
    document.querySelector('#formMessage').textContent=
      `Gracias, ${name}. Tu solicitud de reserva se ha registrado como demostración. El restaurante confirmaría la disponibilidad por contacto directo.`;
    form.reset();
  });
});
