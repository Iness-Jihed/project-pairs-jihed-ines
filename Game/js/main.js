jQuery(document).ready(function($){
	
	
	$('.wheel-with-image').superWheel({
		slices: [
		{
			text: 'images/walk.png',
			value: 1,
			message: "You can watch the Walking Dead for free",
			background: "white",
			
		},
		{
			text: 'images/Casa.png',
			value: 1,
			message:"You can watch La Casa de Papel for free" ,
			background: "black",
			
		},
		{
			text: 'images/harry.png',
			value: 1,
			message: "You can watch harry Potter for free",
			background: "white",
			
		},
		{
			text: 'images/AVGD.png',
			value: 1,
			message: "You can watch the Avengers for free",
			background: "black",
			
		},
		{
			text: 'images/john.png',
			value: 1,
			message: "You can watch John Wick for free",
			background: "white",
			
		},
		{
			text: 'images/5.png',
			value: 1,
			message: "You can watch Fast & Furious for free",
			background: "black",
			
		}
	],
	text : {
		type: 'image',
		color: 'You win reduction on this item',
		size: 25,
		offset : 10,
		orientation: 'h'
		
	},
	line: {
		width: 10,
		color: "#78909C"
	},

	inner: {
		width: 15,
		color: "black"
	},
	marker: {
		background: "black",
		animate: 1
	},
	
	selector: "value",
	
	
	
	});
	
	
	
	var tick = new Audio('media/tick.mp3');
	
	$(document).on('click','.wheel-with-image-spin-button',function(e){
		
		$('.wheel-with-image').superWheel('start','value',1);
		$(this).prop('disabled',true);
	});
	
	
	$('.wheel-with-image').superWheel('onStart',function(results){
		
		
		$('.wheel-with-image-spin-button').text('Spinning...');
		
	});
	$('.wheel-with-image').superWheel('onStep',function(results){
		
		if (typeof tick.currentTime !== 'undefined')
			tick.currentTime = 0;
        
		tick.play();
		
	});
	
	
	$('.wheel-with-image').superWheel('onComplete',function(results){
			if(results.value === 1){
			
			swal({
				type: 'success',
				title: "Congratulations!", 
				html: results.message
			});
			
		}else{
			swal("Oops!", results.message, "error");
		}
		
		
		$('.wheel-with-image-spin-button:disabled').prop('disabled',false).text('Spin');
	
		
	});
	
	
	
		$("#btn").click(function(){
	     location.href="../index1.html"
         })
	
});