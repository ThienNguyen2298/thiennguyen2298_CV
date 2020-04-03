
//JS DOM
document.querySelectorAll('.full_info_wrap .tabs ul li').forEach(item => {
    item.addEventListener('click', e => {
        [...document.querySelectorAll('.full_info_wrap .tabs ul li')].map(ele => ele.classList.remove('active'));
        e.target.classList = "active";
        console.log(e.target.dataset.li);
        [...document.querySelectorAll('.full_info_item')].map(e => e.style.display = 'none')
        document.querySelector(`.${e.target.dataset.li}`).style.display ="block";
        
    })
})

//Jquery
/*$(".full_info_wrap .tabs ul li").click(function(){
    $(".full_info_wrap .tabs ul li").removeClass("active");
    console.log( $(".full_info_wrap .tabs ul li"));
    
    $(this).addClass("active");

    var datali = $(this).attr("data-li");

    $(".full_info_item").hide();

    if(datali == "experience"){
        $(".experience").show();
    }
    else if(datali == "education"){
        $(".education").show();
    }
    else if(datali == "contact"){
        $(".contact").show();
    }
    else{
        console.log("Loding...");
    }
})*/
