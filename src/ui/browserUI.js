const dialog = document.getElementById('dialog');

function openDialog() {
  dialog.showModal(); // Відкриває як модальне вікно (блокує фон)
}

function closeDialog() {
  dialog.close(); // Закриває вікно
}

openDialog();