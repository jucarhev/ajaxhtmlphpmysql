$(document).on('ready',function(event) {
	event.preventDefault();
	listar();
});

function guardar(){
	var name = $('#name').val();
	var lastname = $('#lastname').val();
	var email = $('#email').val();
	var age = $('#age').val();
	var birthday = $('#birthday').val();
	$.ajax({
		url: 'crud.php',
		type: 'POST',
		data: {name:name,lastname:lastname,email:email,age:age,birthday:birthday,action:'create'},
		success: function(data){
			console.log(data);
			listar();
		}
	})
	.done(function() {
		console.log("success");
	})
	.fail(function() {
		console.log("error");
	});
}

function listar(){
	$.post('crud.php', {action: 'read'}, function(respuesta) {
		$('#tabla').html(respuesta);
	});
}

function delete_row(id){
	$.ajax({
		url: 'crud.php',
		type: 'POST',
		data: {action:"delete",id:id},
		success:function(datos){
			console.log(datos);
			listar();
		}
	}).done(function() {
		console.log("success");
	}).fail(function() {
		console.log("error");
	});
}

function edit_row(id){
	$.ajax({
		url: 'crud.php',
		type: 'POST',
		data: {action:"edit",id:id},
		success:function(datos){
			console.log(datos);
		}
	}).done(function() {
		console.log("success");
	}).fail(function() {
		console.log("error");
	});
}