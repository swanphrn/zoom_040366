document.getElementById("btn").addEventListener('click',search)
function search(){
    event.preventDefault()
    var name = document.getElementById("keyword").value
    // window.open("https://www.youtube.com/results?search_query="+name, '_blank', 'location=yes,height=840,width=580,scrollbars=yes,status=yes')
     window.open("https://www.youtube.com/@sompongpokasri5783/search?query="+name, '_blank', 'location=yes,height=840,width=580,scrollbars=yes,status=yes')
    

}