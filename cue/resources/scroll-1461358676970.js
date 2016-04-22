(function(window, undefined) {

    /*********************** START STATIC ACCESS METHODS ************************/

    jQuery.extend(jimMobile, {
        "loadScrollBars": function() {
            jQuery(".s-6210c73a-7f87-4cb9-9e1d-8bffc4029650 .ui-page").overscroll({ showThumbs:true, direction:'vertical' });
            jQuery(".s-6210c73a-7f87-4cb9-9e1d-8bffc4029650 #s-Cell-content .layout").overscroll({ showThumbs:true, direction:'multi' });
            jQuery(".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .ui-page").overscroll({ showThumbs:true, direction:'vertical' });
            jQuery(".s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Cell_center .layout").overscroll({ showThumbs:true, direction:'vertical' });
            jQuery(".s-9ae28311-ada2-4b53-a225-b0740d70735b .ui-page").overscroll({ showThumbs:true, direction:'vertical' });
            jQuery(".s-9ae28311-ada2-4b53-a225-b0740d70735b #s-Cell-content .layout").overscroll({ showThumbs:true, direction:'vertical' });
            jQuery(".s-e2cf73be-043b-458d-8b6a-323c6d6c9973 .ui-page").overscroll({ showThumbs:true, direction:'vertical' });
            jQuery(".s-1f962bd9-be19-4c1f-9d4a-e91920073ad5 .ui-page").overscroll({ showThumbs:true, direction:'vertical' });
         }
    });

    /*********************** END STATIC ACCESS METHODS ************************/

}) (window);