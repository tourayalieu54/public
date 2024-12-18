// To scroll back to to the top of the page

const scrollTop = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        scrollTop.classList.add("active");
    } else {
        scrollTop.classList.remove("active");
    }
});


// Navigate to other sections

$(documentation).ready(function() {
    var scrollLink = $('nav-link');

    scrollLink.click(function(e) {
      e.preventDefault();
      $('body,html').animate({
        scrollTop: $(this.hash).offset().top
      }, 1000);
    });

    $(window).scroll(function() {
        var scrollBarLocation = $(this).scrollTop();
        scrollLink.each(function() {
            var sectionOffset = $(this).offset().top - 20;
            if(sectionOffset <= scrollBarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        })
    });
})