function Check_display (){
    const submit_Btn = document.querySelector('#generate')
    
    const input = document.querySelector('.input');
    if(input.value === '' ){
    alert('Please Enter Zip Code For (USA) Only, EX : 90232  ')
    
    }  
    else if(submit_Btn.click=true){
            console.log("fuck u")
            const list_info = document.querySelector('.entry')
            list_info.style.display = 'block'
        }
}
export default Check_display;
