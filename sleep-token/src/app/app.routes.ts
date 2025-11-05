import { Routes } from '@angular/router';
import { AlbumList } from './components/album-list/album-list';
import { AlbumDetail } from './components/album-details/album-details';

export const appRoutes: Routes = [
  { path: '', component: AlbumList },
  { path: 'album/:id', component: AlbumDetail },
];