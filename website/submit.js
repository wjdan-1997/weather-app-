function Check_display (code){
    var zipCodePattern = /^\d{5}$|^\d{5}-\d{4}$/;
    if( zipCodePattern.test(code)){
        console.log('ok yes')
          const list_info = document.querySelector('.entry')
          list_info.style.display = 'block'
    }else {
     alert('invalid zip code (USA) Only, EX : 90232  ')  
    }

  

}
export default Check_display;
    