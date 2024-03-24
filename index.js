const images=document.querySelector('#images')
const forms=document.querySelector('form')
const showImage=document.querySelector('.image')

forms.addEventListener('submit',(e)=>{
 // e.preventDefault();
 let file=images.files[0];
 if(file){
  const reader= new FileReader();
    reader.onload=function (e){
     const data=e.target.result;
   // using sessionStorage

   sessionStorage.setItem('image',data)
    }
    reader.readAsDataURL(file);
 }
})
showImage.src=sessionStorage.getItem('image')