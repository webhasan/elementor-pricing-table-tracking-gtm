(function() {
   var buttons = document.querySelectorAll('.elementor-price-table .elementor-price-table__button');
   buttons.forEach(function(button) {
       button.addEventListener('click', function() {
          var table = this.closest('.elementor-price-table');

          if(table) {
             var packageName = table.querySelector('.elementor-price-table__heading').innerText;
             var price = +(table.querySelector('.elementor-price-table__integer-part').innerText);

             window.dataLayer = window.dataLayer || [];
             dataLayer.push({
               event: 'select_package',
               package: packageName,
               price: price
             });
          }

       });
   });
})();
