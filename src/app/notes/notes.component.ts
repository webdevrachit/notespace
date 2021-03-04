import { Component, OnInit } from '@angular/core';
import { Note } from '../shared/note.model';
import { NotesService } from '../shared/notes.service';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  notes: Note[] = new Array<Note>();

  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
    //we want to retrieve all notes from notesService
    this.notes = this.notesService.getAll();
  }

}
