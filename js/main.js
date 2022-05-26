/*-----------------------------------------------------*/
/* Navigation Menu
----------------------------------------------------- */  
    var toggleButton = $('.menu-toggle'),
    nav = $('.main-navigation');

   // toggle button
    toggleButton.on('click', function(e) {

	e.preventDefault();
	toggleButton.toggleClass('is-clicked');
	nav.slideToggle();

});

   // nav items
nav.find('li a').on("click", function() {   

   	// update the toggle button 		
    toggleButton.toggleClass('is-clicked'); 
   	// fadeout the navigation panel
    nav.fadeOut();   		

});

/*---------------------------------------------------- */
/* Smooth Scrolling
------------------------------------------------------ */
$('.smoothscroll').on('click', function (e) {
	
	e.preventDefault();

var target = this.hash,
    $target = $(target);

    $('html, body').stop().animate({
    'scrollTop': $target.offset().top
    }, 800, 'swing', function () {
    window.location.hash = target;
    });

});  

/*==================== QUALIFICATION ====================*/
function openTab(event, idtab) {
    var tabContent = document.getElementsByClassName('tabcontent')
  
    for(var i = 0; i < tabContent.length; i++){
      tabContent[i].style.display = 'none'
    }
  
    var tabs = document.getElementsByClassName('tab_button')
    for(var i = 0; i < tabs.length; i++){
      tabs[i].className = tabs[i].className.replace('active', '');
    }
  
    document.getElementById(idtab).style.display = 'block';
    event.currentTarget.className += ' active'
  }
  
  document.getElementById('Open').click()








