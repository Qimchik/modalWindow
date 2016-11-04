$(document).ready(function() { 
	$('.gomodal').click( function(e){
		let text = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";
		e.preventDefault(); 
		$('body').addClass('scrollOff');
		$('body').append('<div id="bgAndModulWindow" class="bgOfModul">'+
				'<div class="wrapperModalWindow">'+
					'<div class="centerVert">'+
						'<section class="modulWindow">'+
							'<div class="close">&times;</div>'+
							'<h5>Modal</h5>'+
							'<p>' + text + '</p>'+
						'</section>'+
					'</div>'+
				'</div>'+
			'</div>');
		$('.modulWindow').fadeIn("slow");
		$('#bgAndModulWindow').click( function(e){
			e.preventDefault(); 
			if (e.target.tagName !== 'DIV') return false;
			$("#bgAndModulWindow").remove();
			$('body').removeClass('scrollOff');
		});	
	});
});