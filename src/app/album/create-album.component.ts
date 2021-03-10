import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-create-album',
  templateUrl: './create-album.component.html',
  styleUrls: ['./create-album.component.css']
})
export class CreateAlbumComponent implements OnInit {
	albumForm: FormGroup;

  constructor() { }

  ngOnInit() {
  	this.albumForm = new FormGroup(
  	{
  		// albumName = new FormControl(),
  		// albumCreater = new FormControl()

  	});
  }

}
