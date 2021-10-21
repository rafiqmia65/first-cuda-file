window.addEventListener("scroll",function(){
  
    var navbar = document.getElementById("navbar");
  
  if(window.pageYOffset >= 530 ){
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
  })
  
  var myNav=document.getElementById("myNav")
  var openNav=document.getElementById("openNav")
  var closeNav=document.getElementById("closeNav")
  
  
  openNav.addEventListener("click", function(){
      myNav.style.width="100%";
  })
  closeNav.addEventListener("click", function(){
      myNav.style.width="0%";
  })

  function closeN(){
    myNav.style.width="0%";
  }
  
//mixitup filter 


    // init Isotope
    var $grid = $('.grid').isotope({
      itemSelector: '.element-item',
      layoutMode: 'fitRows'
    });
    // filter functions
    var filterFns = {
      // show if number is greater than 50
      numberGreaterThan50: function() {
        var number = $(this).find('.number').text();
        return parseInt( number, 10 ) > 50;
      },
      // show if name ends with -ium
      ium: function() {
        var name = $(this).find('.name').text();
        return name.match( /ium$/ );
      }
    };
    
    // bind filter button click
    $filters = $('#filters').on( 'click', 'button', function() {
      var $this = $( this );
      var filterValue;
      if ( $this.is('.is-checked') ) {
        // uncheck
        filterValue = '*';
      } else {
        filterValue = $this.attr('data-filter');
        $filters.find('.is-checked').removeClass('is-checked');
      }
      
      // Uncomment this line if you want to make a filter button behave as a toggle
      //$this.toggleClass('is-checked');
    
      // use filterFn if matches value
      filterValue = filterFns[ filterValue ] || filterValue;
      $grid.isotope({ filter: filterValue });
    });
