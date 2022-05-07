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


img_profile[0].classList.add("animate__backInDown")
left_hero[0].classList.add("animate__slideInLeft")
window.addEventListener("scroll", () => {
    if (screen.width > 1000) {
        if (window.scrollY > 400) {
            if(!(project_photo[0].classList.contains("animate__slideInLeft") && project_desc[0].classList.contains("animate__slideInRight"))){
                project_photo[0].classList.remove("hidden")
                project_desc[0].classList.remove("hidden")
                project_photo[0].classList.add("animate__slideInLeft")
                project_desc[0].classList.add("animate__slideInRight")
            }
        }
        if(window.scrollY > 600){
            if(!(project_photo[1].classList.contains("animate__slideInLeft") && project_desc[1].classList.contains("animate__slideInRight"))){
                project_photo[1].classList.remove("hidden")
                project_desc[1].classList.remove("hidden")
                project_photo[1].classList.add("animate__slideInRight")
                project_desc[1].classList.add("animate__slideInLeft")
            }
        }
        if (window.scrollY > 800) {
            if(!(project_photo[2].classList.contains("animate__slideInLeft") && project_desc[2].classList.contains("animate__slideInRight"))){
                project_photo[2].classList.remove("hidden")
                project_desc[2].classList.remove("hidden")
                project_photo[2].classList.add("animate__slideInLeft")
                project_desc[2].classList.add("animate__slideInRight")
            }
        }
        if (window.scrollY > 1300){
            for(let i = 0; i < skill_icon.length; i++){
                if(!(skill_icon[i].classList.contains("animate__bounceIn") && skill_desc[i].classList.contains("animate__zoomIn"))){
                    skill_icon[i].classList.remove("hidden")
                    skill_desc[i].classList.remove("hidden")
                    skill_icon[i].classList.add("animate__bounceIn")
                    skill_desc[i].classList.add("animate__zoomIn")
                }
            }
        }
    }else if (screen.width <= 1000) {
        if(window.scrollY > 500){
            if(!(project_photo[0].classList.contains("animate__slideInLeft") && project_desc[0].classList.contains("animate__slideInRight"))){
                project_photo[0].classList.remove("hidden")
                project_desc[0].classList.remove("hidden")
                project_photo[0].classList.add("animate__slideInLeft")
                project_desc[0].classList.add("animate__slideInRight")
            }
        }
        if(window.scrollY > 700){
            if(!(project_photo[1].classList.contains("animate__slideInLeft") && project_desc[1].classList.contains("animate__slideInRight"))){
                project_photo[1].classList.remove("hidden")
                project_desc[1].classList.remove("hidden")
                project_photo[1].classList.add("animate__slideInRight")
                project_desc[1].classList.add("animate__slideInLeft")
            }
        }
        if (window.scrollY > 900) {
            if(!(project_photo[2].classList.contains("animate__slideInLeft") && project_desc[2].classList.contains("animate__slideInRight"))){
                project_photo[2].classList.remove("hidden")
                project_desc[2].classList.remove("hidden")
                project_photo[2].classList.add("animate__slideInLeft")
                project_desc[2].classList.add("animate__slideInRight")
            }
        }
        if (window.scrollY > 1500){
            for(let i = 0; i < skill_icon.length; i++){
                if(!(skill_icon[i].classList.contains("animate__bounceIn") && skill_desc[i].classList.contains("animate__zoomIn"))){
                    skill_icon[i].classList.remove("hidden")
                    skill_desc[i].classList.remove("hidden")
                    skill_icon[i].classList.add("animate__bounceIn")
                    skill_desc[i].classList.add("animate__zoomIn")
                }
            }
        }
    }
})