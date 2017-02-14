(function($) {

	jQuery.fn.progressBar = function( options ) {

		//Default values for progress_bar
		var defaults = {
			height : "20",
			backgroundColor : "#E0E0E0",
			barColor : "#F97352",
			targetBarColor : "#CCC",
			percentage : true,
			shadow : false,
			border : true,
			animation : false,
			animateTarget : false,
		};

		var settings = $.extend( {}, defaults, options );

		return this.each( function() {
			var elem = $( this );
			$.fn.replaceProgressBar( elem, settings );
		});
	};

	$.fn.replaceProgressBar = function( item, settings ) {
		var skill		= item.text();
		var progress	= item.data( 'width' );
		var target		= item.data ( 'target' );
		var bar_classes = ' ';
		var animation_class = '';
		var bar_styles	= 'background-color:' + settings.backgroundColor + ';height:' + settings.height + 'px;';
		if ( settings.shadow ) { bar_classes += 'shadow'; }
		if ( settings.border ) { bar_classes += ' border'; }
		if ( settings.animation ) { animation_class = ' animate'; }

		var overlay = '<div class="sonny_progressbar' + animation_class + '" data-width="' + progress + '">';
		overlay += '<p class="title">' + skill + '</p>';
		overlay += '<div class="bar-container' + bar_classes + '" style="' + bar_styles + '">';

		// Render the progress bar background
		overlay += '<span class="backgroundBar"></span>';

		// Display target bar only if set
		if ( target ) {
			if ( settings.animateTarget ) {
				overlay += '<span class="targetBar loader" style="width:' + target + '%;background-color:' + settings.targetBarColor + ';"></span>';
			}
			else {
				overlay += '<span class="targetBar" style="width:' + target + '%;background-color:' + settings.targetBarColor + ';"></span>';
			}
		}

		// Render the progress bar
		if ( settings.animation ) {
			overlay += '<span class="bar" style="background-color:' + settings.barColor + ';"></span>';
		}
		else {
			overlay += '<span class="bar" style="width:' + progress + '%;background-color:' + settings.barColor + ';"></span>';
		}

		// Render the percentage if enabled
		if ( settings.percentage ) {
			overlay += '<span class="progress-percent" style="line-height:' + settings.height + 'px;">' + progress + '%</span>';
		}

		// End
		overlay += '</div></div>';

		// Render the progress bar on the page
		$( item ).replaceWith( overlay );

	};

	var animate = function() {

		var doc_height = $(window).height();

		$( '.sonny_progressbar.animate' ).each( function() {
			var position = $( this ).offset().top;

			if ( ( $(window).scrollTop() + doc_height - 60 ) > position ) {
				var progress = $( this ).data( 'width' ) + "%";

				$( this ).removeClass( 'animate' );
				$( this ).find( '.bar' ).css('opacity', '0.1');

				$( this ).find( '.bar' ).animate({
					width : progress,
					opacity : 1
				}, 3000 );
			}

		});

	};

	// Looking for an animation element in the view
	$(window).scroll(function() {

		if ( $( '.sonny_progressbar.animate' ).length < 1 ) {
			return;
		}

		// If there is an animate element visible on the page, trigger the animation
		animate();

	});

 // ##########################   SKILLS PROGRESS BAR ######################

		$('.progressbarHTML').progressBar({
			shadow : true,
			percentage : true,
			animation : true,
			barColor : "#DB4514",
		});

		$('.progressbarCSS').progressBar({
			shadow : true,
			percentage : true,
			animation : true,
			barColor : "#1D65B3",
		});

		$('.progressbarJavaScript').progressBar({
			shadow : true,
			percentage : true,
			animation : true,
			barColor : "#527AF9",
		});

		$('.progressbarjQuery').progressBar({
			shadow : true,
			percentage : true,
			animation : true,
			barColor : "#F6D800",
		});

		$('.progressbarWP').progressBar({
			shadow : true,
			percentage : true,
			animation : true,
			barColor : "#197ABB",
		});

		$('.progressbarBootstrap').progressBar({
			shadow : true,
			percentage : true,
			animation : true,
			barColor : "#4E2648",
		});

		$('.progressbarReact').progressBar({
			shadow : true,
			percentage : true,
			animation : true,
			barColor : "#60D4FF",
		});

		$('.progressbarGit').progressBar({
			shadow : true,
			percentage : true,
			animation : true,
			barColor : "#E94823",
		});

		$('.progressbarPhp').progressBar({
			shadow : true,
			percentage : true,
			animation : true,
			barColor : "#7E87BA",
		});

		$('.progressbarAdobe').progressBar({
			shadow : true,
			percentage : true,
			animation : true,
			barColor : "#E51E19",
		});


})(jQuery);
