import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Note } from 'src/app/shared/note.model';
import { NotesService } from 'src/app/shared/notes.service';

@Component({
  selector: 'app-notes-details',
  templateUrl: './notes-details.component.html',
  styleUrls: ['./notes-details.component.scss']
})
export class NotesDetailsComponent implements OnInit {

  note: Note = new Note;
  

  constructor(private notesService : NotesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    //we want to find out if we are creating a new note or editing an existing note.
    this.route.paramMap
      .subscribe((params: Params) => {
        this.note = new Note();
        if (params.params.id !== undefined && params.params.id !== null) {   //checks whether params.id has a value
          this.note = this.notesService.get(params.params.id); //if so it has value
          if (this.note) {
            this.note.id = params.params.id;
          } else {
            this.note = { title: undefined, body: undefined };
          }
        } else {
          this.note = { title: undefined, body: undefined };
        }
      })


  }

  onSubmit(form: NgForm) {
    if (this.note && this.note.id !== undefined && this.note.id !== null) {
      //says the new=true. thus we should save this note
      this.notesService.update(this.note.id, form.value.title, form.value.body);
    } else {
      this.notesService.add(form.value);
    }
    this.router.navigateByUrl('/');
  }

  cancel() {
    this.router.navigateByUrl('/');
  }

}

