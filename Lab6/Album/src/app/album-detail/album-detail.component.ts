import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Album} from "../models";
import {AlbumService} from "../album.service";

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit{

  album: Album;

  albums: Album[];
  newAlbum: Album;
  changeAlbum: Album;

  constructor(private route: ActivatedRoute,
              private postService: AlbumService) {
    this.album = {} as Album;

    this.albums = [];
    this.newAlbum = {} as Album;
    this.changeAlbum = {} as Album;

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.postService.getAlbum(id).subscribe((album) => {
        this.album = album;
      });
    })

  }



  updateAlbum(album: Album){
    this.changeAlbum = album;
  }



}
