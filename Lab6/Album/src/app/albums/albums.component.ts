import {Component, OnInit} from '@angular/core';
import {Album} from "../models";
import {AlbumService} from "../album.service";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit{
  albums: Album[];
  newAlbum: Album;
  changeAlbum: Album;

  constructor(private postService: AlbumService) {
    this.albums = [];
    this.newAlbum = {} as Album;
    this.changeAlbum = {} as Album;
  }

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums(){
    this.postService.getAlbums().subscribe((albums) =>{
      this.albums = albums;
    })
  }

  addAlbum(){
    this.postService.addAlbum(this.newAlbum).subscribe((album) => {
      this.albums.unshift(album);
      this.newAlbum = {} as Album;
    });
  }


  deleteAlbum(album: Album){
    this.albums = this.albums.filter(al => al !== album)
  }

  updateAlbum(album: Album){
    this.changeAlbum = album;
  }

}
