let menuIcon = document.querySelector('.navbar-toggler-icon');
menuIcon.addEventListener('click',function(){
    if(menuIcon.classList.contains('active')){
        menuIcon.classList.toggle('not-active');
    }else{
        menuIcon.classList.toggle('active');
    }
});

//nav-link toggler
let navlink = document.querySelectorAll(".nav-link");

navlink.forEach((e) => {
    e.onclick = () => {
        if(!(e.classList.contains("active"))){
            navlink.forEach((e) => {
                e.classList.remove("active")
            })
            e.classList.add("active")
        }
    }
})



let img_profile = document.getElementsByClassName("profile-photo");
let left_hero = document.getElementsByClassName("left-hero");
let project_photo = document.getElementsByClassName("project-photo");
let project_desc = document.getElementsByClassName("project-desc");
let skill_icon = document.getElementsByClassName("skill-icon");
let skill_desc = document.getElementsByClassName("skill-desc");


img_profile[0].style.animationName = "dari-bawah";
img_profile[0].style.animationDuration = "1000ms";
img_profile[0].style.animationFillMode = "both";

left_hero[0].style.animationName = "dari-kiri";
left_hero[0].style.animationDuration = "1000ms";
left_hero[0].style.animationFillMode = "both";

window.addEventListener("scroll", () => {
    if (screen.width > 1000) {
        if (window.scrollY > 400) {
            project_photo[0].classList.remove("hidden")
            project_desc[0].classList.remove("hidden")

            project_photo[0].style.animationName = "dari-kiri";
            project_photo[0].style.animationDuration = "1000ms";
            project_photo[0].style.animationFillMode = "both";
            
            project_desc[0].style.animationName = "dari-kanan";
            project_desc[0].style.animationDuration = "1000ms";
            project_desc[0].style.animationFillMode = "both";
        }
        if(window.scrollY > 600){
            project_photo[1].classList.remove("hidden")
            project_desc[1].classList.remove("hidden")

            project_photo[1].style.animationName = "dari-kanan";
            project_photo[1].style.animationDuration = "1000ms";
            project_photo[1].style.animationFillMode = "both";
            
            project_desc[1].style.animationName = "dari-kiri";
            project_desc[1].style.animationDuration = "1000ms";
            project_desc[1].style.animationFillMode = "both";
        }
        if (window.scrollY > 800) {
            project_photo[2].classList.remove("hidden")
            project_desc[2].classList.remove("hidden")

            project_photo[2].style.animationName = "dari-kiri";
            project_photo[2].style.animationDuration = "1000ms";
            project_photo[2].style.animationFillMode = "both";
            
            project_desc[2].style.animationName = "dari-kanan";
            project_desc[2].style.animationDuration = "1000ms";
            project_desc[2].style.animationFillMode = "both";
            
        }
    }else if (screen.width <= 1000) {
        if(window.scrollY > 500){
            project_photo[0].classList.remove("hidden")
            project_desc[0].classList.remove("hidden")

            project_photo[0].style.animationName = "dari-kiri";
            project_photo[0].style.animationDuration = "1000ms";
            project_photo[0].style.animationFillMode = "both";
            
            project_desc[0].style.animationName = "dari-kanan";
            project_desc[0].style.animationDuration = "1000ms";
            project_desc[0].style.animationFillMode = "both";
        }
        if(window.scrollY > 700){
            project_photo[1].classList.remove("hidden")
            project_desc[1].classList.remove("hidden")

            project_photo[1].style.animationName = "dari-kanan";
            project_photo[1].style.animationDuration = "1000ms";
            project_photo[1].style.animationFillMode = "both";
            
            project_desc[1].style.animationName = "dari-kiri";
            project_desc[1].style.animationDuration = "1000ms";
            project_desc[1].style.animationFillMode = "both";

        }
        if (window.scrollY > 900) {
            project_photo[2].classList.remove("hidden")
            project_desc[2].classList.remove("hidden")

            project_photo[2].style.animationName = "dari-kiri";
            project_photo[2].style.animationDuration = "1000ms";
            project_photo[2].style.animationFillMode = "both";
            
            project_desc[2].style.animationName = "dari-kanan";
            project_desc[2].style.animationDuration = "1000ms";
            project_desc[2].style.animationFillMode = "both";

        }
    }
})