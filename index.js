import { sampleNotes } from './sample-notes.js';

document.addEventListener('DOMContentLoaded', () => {
  const notesGrid = document.getElementById('notesGrid');
  sampleNotes.forEach(note => {
    const noteItem = document.createElement('note-item');
    noteItem.setAttribute('title', note.title);
    noteItem.setAttribute('body', note.body);
    noteItem.setAttribute('created-at', new Date().toLocaleString());
    notesGrid.appendChild(noteItem);
  });
});

