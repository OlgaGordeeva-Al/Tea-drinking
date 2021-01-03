const deleteEntry = document.getElementById('deleteEntry')


if (deleteEntry) {
  deleteEntry.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    const entryId = ev.target.entryId.value;

    const res = await fetch('/entry', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: entryId })
    })
    window.location.assign('/')
  })
} 
