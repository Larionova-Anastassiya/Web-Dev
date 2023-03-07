import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Album, Photo} from "../models";
import {AlbumService} from "../album.service";


@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit{
  photos:Photo[] = [];

  constructor(private albumsService:AlbumService, private route:ActivatedRoute) {
    this.photos = [];
  }

  goToLink(link: string){
    window.open(link, "_blank");
  }


  ngOnInit(){
    this.getId();
  }
  getId(){
    this.route.paramMap.subscribe((params)=>{
      const id = Number(params.get('id'));
      this.albumsService.getPhotos(id).subscribe((photos)=>{this.photos = photos;});
    })
  }

}
