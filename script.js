const envelope=document.getElementById('envelope'),cover=document.getElementById('cover'),invitation=document.getElementById('invitation'),music=document.getElementById('music'),button=document.getElementById('musicButton'),label=document.getElementById('musicLabel'),icon=document.getElementById('musicIcon'),note=document.getElementById('musicNote');
let opened=false;
async function playMusic(){try{await music.play();label.textContent='Pausar música';icon.textContent='Ⅱ';note.textContent='♫ Acompañando este momento especial ♫';}catch(e){note.textContent='Agrega el MP3 indicado en LEEME.txt para escuchar la canción.';}}
function openInvite(){if(opened)return;opened=true;envelope.classList.add('open');setTimeout(()=>{cover.classList.add('hidden');invitation.classList.remove('hidden');window.scrollTo({top:0,behavior:'smooth'});playMusic();},1100);}
envelope.addEventListener('click',openInvite);envelope.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openInvite();}});
button.addEventListener('click',async()=>{if(music.paused){await playMusic();}else{music.pause();label.textContent='Reproducir música';icon.textContent='♫';note.textContent='La música está en pausa.';}});
music.addEventListener('error',()=>{note.textContent='Falta agregar el archivo MP3 en assets/musica.';});
