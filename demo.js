console.log('DEMO')

const aboutLink=document.getElementById('a#about')
aboutLink.addEventListener('click', function(event){
    event.preventDefault()
    var aboutSection=document.getElementById('about')
    var targetPos=aboutSection.getBoundingClientRect().y

    const myInterval=setInterval(function(){
        if(targetPos<=0){
            clearInterval(myInterval)
            return;
        }
        window.scrollBy(0, 50)
        targetPos=aboutSection.getBoundingClientRect().y
    }, 20)
})

const skillsLink=document.getElementById('a#skills')
skillsLink.addEventListener('click', function(event){
    event.preventDefault()
    var skillsSection=document.getElementById('skills')
    var targetPos=skillsSection.getBoundingClientRect().y

    const myInterval=setInterval(function(){
        if(targetPos<=0){
            clearInterval(myInterval)
            return;
        }
        window.scrollBy(0, 50)
        targetPos=skillsSection.getBoundingClientRect().y
    }, 20)
})

const portfolioLink=document.getElementById('a#portfolio')
portfolioLink.addEventListener('click', function(event){
    event.preventDefault()
    var portfolioSection=document.getElementById('portfolio')
    var targetPos=portfolioSection.getBoundingClientRect().y

    const myInterval=setInterval(function(){
        if(targetPos<=0){
            clearInterval(myInterval)
            return;
        }
        window.scrollBy(0, 50)
        targetPos=portfolioSection.getBoundingClientRect().y
    }, 20)
})

const experienceLink=document.getElementById('a#experiences')
experienceLink.addEventListener('click', function(event){
    event.preventDefault()
    var experienceSection=document.getElementById('experiences')
    var targetPos=experienceSection.getBoundingClientRect().y

    const myInterval=setInterval(function(){
        if(targetPos<=0){
            clearInterval(myInterval)
            return;
        }
        window.scrollBy(0, 50)
        targetPos=experienceSection.getBoundingClientRect().y
    }, 20)
})


const educationLink=document.getElementById('a#education')
educationLink.addEventListener('click', function(event){
    event.preventDefault()
    var educationSection=document.getElementById('education')
    var targetPos=educationSection.getBoundingClientRect().y

    const myInterval=setInterval(function(){
        if(targetPos<=0){
            clearInterval(myInterval)
            return;
        }
        window.scrollBy(0, 50)
        targetPos=educationSection.getBoundingClientRect().y
    }, 20)
})


const contactLink=document.getElementById('a#contact')
contactLink.addEventListener('click', function(event){
    event.preventDefault()
    var contactSection=document.getElementById('contact')
    var targetPos=contactSection.getBoundingClientRect().y
    const myInterval=setInterval(function(){
        if(targetPos<=0){
            clearInterval(myInterval)
            return;
        }
        window.scrollBy(0, 50)
        targetPos=contactSection.getBoundingClientRect().y
    }, 20)
})