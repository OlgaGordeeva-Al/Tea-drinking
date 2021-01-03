const addButton = document.getElementById('addComment');
const addForm = document.getElementById('addForm');
if (addButton) {
  addButton.addEventListener('click', (event) => {
    event.preventDefault()
    addForm.style = 'display: block';
    addButton.style = 'display: none';
  })
}
if (addForm) {
  addForm.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    const comment = ev.target.comment.value;
    const entryId = ev.target.entryId.value;   
    const res = await fetch('/comment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ comment, entryId })
    })
    window.location.assign(`/card/${entryId}`)
  })
} 
