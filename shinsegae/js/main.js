const header=document.querySelector(".header")
window.addEventListener("scroll",()=>{
    const scrollY=window.scrollY;
    console.log(scrollY);
    if(scrollY>900 && scrollY<3800){
        header.classList.add("on");
    }else{
        header.classList.remove("on");
    }
});

new Swiper(".main-visual .mask",{
    slidesPerView:1,
    loop:true,
    pagination:{
        el:".main-visual .mask .pagination",
        clickable:true,
    }
})

new Swiper(".activity .mask",{
    slidesPerView:3,
    spaceBetween:20,
    loop:true,
})

const menu = document.querySelectorAll(".project .case .menu li");
const contentsList=document.querySelector(".project .case .contents li")

menu.forEach((item,idx)=>{
    item.addEventListener("mouseenter",()=>{
        contentsList.forEach((item2,idx2)=>{
            item2.classList.remove("on");
        })
        const target=document.querySelector(`.project .contents li:nth-child(${idx + 1})`);
        target.classList.add("on");
    });
    item.addEventListener("mouseleave",()=>{
        contentsList.forEach((item2,idx2)=>{
            item2.classList.remove("on");
        })
    })
});