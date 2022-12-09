import { Component, OnInit } from '@angular/core';
import { zip } from 'rxjs';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { Album, AlbumsService, AlbumUser } from '../albums.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  albumUsers: AlbumUser[] = [];
  albums: Album[] = [];

  constructor(private albumService: AlbumsService) {
    const albumObservable = this.albumService.getAlbums();
    const userObservable= this.albumService.getUsers();

    // forkJoin()
    zip(albumObservable, userObservable).subscribe(value => {
      this.albums = value[0];
      this.albumUsers = value[1];
      console.log(this.albumUsers)
      console.log(this.albums)
    });
  }

  ngOnInit(): void {

  }

}
