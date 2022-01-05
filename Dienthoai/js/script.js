function init() {
    var images = document.querySelectorAll("div.thumb img")
    for(var i= 0; i < images.length ; i++)
        images[i].onclick = function() {
            var path = this.src
            var image = document.getElementById("mainImg")
            image.setAttribute("src" , path)
        }
    
    var button = document.querySelectorAll(".btn a")
    for(var i= 0; i < button.length ; i++)
        button[i].onclick = function() {
            event.preventDefault()
            var color = this.getAttribute("rel")
            var image = document.getElementById("mainImg")
            // image.src = "images/" + color +"_1.jpg"
            image.src = `images/${color}_1.jpg`
        }

    var subImg = document.querySelectorAll(".thumb img")
    for(var i = 0 ; i < subImg.length ; i++){
        subImg[i].src = `images/${color}_${i+1}.jpg`
    }

    var timer = setInterval(function(){
        var c = document.getElementById("clocks")
        var d = new Date()
        c.innerText = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
    },1000)
    clearInterval(timer)
        
}
function Change(obj){
    subject = document.getElementById("subject")
    subject.innerHTML = obj.value
}

$(document).ready(function(){
    $("#top").hide()

    $(window).scroll(function(){
        if($(this).scrollTop() >= 100)
            $("#top").show("slow")
        else
            $("#top").hide("slow")
    })
    $("#top").click(function(){
        $("html,body").animate({
            scrollTop:0
        },2000);
    })
})