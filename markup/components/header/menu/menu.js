( function ( $ ) {
    // Create a new instance of Slidebars
    var controller = new slidebars();

    // Events
    $( controller.events ).on( 'init', function () {
        console.log( 'Init event' );
    } );

    $( controller.events ).on( 'exit', function () {
        console.log( 'Exit event' );
    } );

    $( controller.events ).on( 'css', function () {
        console.log( 'CSS event' );
    } );

    $( controller.events ).on( 'opening', function ( event, id ) {
        console.log( 'Opening event of slidebar with id ' + id );
    } );

    $( controller.events ).on( 'opened', function ( event, id ) {
        console.log( 'Opened event of slidebar with id ' + id );
    } );

    $( controller.events ).on( 'closing', function ( event, id ) {
        console.log( 'Closing event of slidebar with id ' + id );
    } );

    $( controller.events ).on( 'closed', function ( event, id ) {
        console.log( 'Closed event of slidebar with id ' + id );
    } );

    // Initialize Slidebars
    controller.init();

   // Close any
    $( controller.events ).on( 'opened', function () {
        $( '[canvas="container"]' ).addClass( 'js-close-any-slidebar' );
    } );

    $( controller.events ).on( 'closed', function () {
        $( '[canvas="container"]' ).removeClass( 'js-close-any-slidebar' );
    } );

    $( 'body' ).on( 'click', '.js-close-any-slidebar', function ( event ) {
        event.stopPropagation();
        controller.close();
    } );

    // Right Slidebar controls
    $( '.js-open-right-slidebar' ).on( 'click', function ( event ) {
        event.stopPropagation();
        controller.open( 'slidebar-2' );
    } );

    $( '.js-close-right-slidebar' ).on( 'click', function ( event ) {
        event.stopPropagation();
        controller.close( 'slidebar-2' );
    } );

    $( '.js-toggle-right-slidebar' ).on( 'click', function ( event ) {
        event.stopPropagation();
        controller.toggle( 'slidebar-2' );
    } );

    $(window).resize(function() {
        if ($(window).width() >= 1000) {
            event.stopPropagation();
            controller.close( 'slidebar-2' );
        }
    });
    
} ) ( jQuery );
