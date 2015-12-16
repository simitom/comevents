$(document).ready(function(){
	$('#deleteEvent').on('click',function(){
		deleteId= $('#deleteEvent').data('delete');
		$.ajax({
			url: '/events/delete/'+deleteId,
			type:'DELETE',
			success: function(result){

			}
		});
		window.location = '/events';
	});
});