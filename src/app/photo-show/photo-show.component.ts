import { Component, OnInit } from '@angular/core';
import { PhotosService, PhotoResponse } from '../photos.service';

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css']
})
export class PhotoShowComponent implements OnInit {

  photoUrl = "";

  constructor(private photoService: PhotosService) { }

  getPhoto = () => {
    this.photoService.getPhoto().subscribe((value:PhotoResponse) => {
      this.photoUrl= value.regular;
    });
  }

  ngOnInit(): void {
  }

}
