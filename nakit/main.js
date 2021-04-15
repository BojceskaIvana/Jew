jQuery(document).ready(function ($)
{
	$('#box').animate({
		width:2000,
		height:2000
	},3000,'swing' , function(){
		
	});
});
jQuery(document).ready(function ($)
{
	$('#video').animate({
		width:2500,
		height:2500
		
},3000,'swing' , function(){
		
	});
});

jQuery(document).ready(function ($)
{
	var holder = $('#holder');
	var current = 1;
	var loop;

	loop = setInterval (next,2000);

	function next (){
		current ++;
		if (current === 8) {
			current = 1;

		}
		holder.append('<img src = "images/'+current+'.jpg"></img>');
		holder.animate({
		 'margin-left' : '-=1000'
		},15000)
	}


});






