// js/app.js
// TODO ESTO ES TU TRABAJO DE JQUERY
$(document).ready(function() {

  console.log("jQuery cargado. Bootstrap plugins listos. DOM funcionando");

  // Cambiar color de los elementos de la lista
  $('#miLista li').css('color', '#b203c2');

  // Agregar dinámicamente un elemento extra (evitar duplicados)
 // if ($('#miLista li').filter(function() {
 //       return $(this).text().trim() === 'Elemento 4 (agregado dinámicamente)';
 //     }).length === 0) {
 //   const nuevo = $('<li>')
 //     .addClass('list-group-item')
 //     .text('Elemento 4 (agregado dinámicamente)');
 //   $('#miLista').append(nuevo);
 // }

  // Toggle lista con slideToggle
  $('#btnToggle').on('click', function() {
    const $btn = $(this);
    $('#miLista').slideToggle(300, function() {
      $btn.text($('#miLista').is(':visible') ? 'Ocultar lista' : 'Mostrar lista');
    });
  });

  // Eventos de modal de Bootstrap usando jQuery
  $('#ejemploModal').on('shown.bs.modal', function () {
    console.log('Modal abierto');
  });

  $('#ejemploModal').on('hidden.bs.modal', function () {
    console.log('Modal cerrado');
  });

});
