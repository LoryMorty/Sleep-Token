import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Album {
  id: number;
  title: string;
  year: number;
  cover: string;
  description: string;
  tracks: string[];
}

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album-details.html',
  styleUrls: ['./album-details.css']
})
export class AlbumDetail implements OnInit {
  album?: Album;

  albums: Album[] = [
    {
      id: 1,
      title: 'Sundowing',
      year: 2019,
      cover: 'https://upload.wikimedia.org/wikipedia/en/f/fc/SleepTokenSundowning.jpg',
      description: "È il primo album in studio della band, quello che li ha fatti conoscere al grande pubblico. Nel disco si sente bene l’anima sperimentale: un mix tra metal alternativo, ambientazioni post-rock, momenti più melodici e anche un po’ di “ritmo interiore”.",
      tracks: ['The Night Does Not Belong To God', 'The Offering', 'Levitate', 'Dark Signs', 'Higher', 'Take Aim', 'Give', 'Gods', 'Sugar', 'Say That You Will', 'Drag Me Under', 'Blood Sport']
    },
    {
      id: 2,
      title: 'This Place Will Become Your Tomb',
      year: 2021,
      cover: 'https://upload.wikimedia.org/wikipedia/en/9/9f/SleepTokenTPWBYT.jpg',
      description: "Secondo album, dove gli Sleep Token raffinano ancora il proprio sound: più dinamica, tocchi più pop-ambient, momenti più “leggeri” accostati a parti più pesanti. È stato anche quello che li ha portati per la prima volta nelle classifiche UK.",
      tracks: ['Atlantic', 'Hypnosis', 'Mine', 'Like That', 'The Love You Want', 'Fall For Me', 'Alkaline', 'Distraction', 'Descending', 'Telomeres', 'High Water', 'Missing Limbs']
    },
    {
      id: 3,
      title: 'Take Me Back To Eden',
      year: 2023,
      cover: 'https://upload.wikimedia.org/wikipedia/en/4/48/SleepTokenTMBTE.jpg',
      description: "Terzo album, e viene descritto come “la parte tre di una trilogia”. Qui gli Sleep Token spingono ancora di più sull’ibridazione: metal, djent, pop, R&B, momenti epici e melodie larghe. Molto ambizioso.",
      tracks: ['Chokehold', 'The Summoning', 'Granite', 'Aqua Regia', 'Vore', 'Ascensionism', 'Are You Really Okay?', 'The Apparition', 'DYWTYLM (Do You Wish That You Loved Me)', 'Rain', 'Take Me Back To Eden', 'Euclid']
    },
    {
      id: 4,
      title: 'Even In Arcadia',
      year: 2025,
      cover: 'https://upload.wikimedia.org/wikipedia/en/8/8c/Even_in_Arcadia.jpg',
      description: "Quarto album, primo sotto etichetta major (RCA), che segna un ulteriore salto per la band. Il sound esplora ancora di più, con contaminazioni, sperimentazioni e un registro più ampio.",
      tracks: ['Look To Windward', 'Emergence', 'Past Self', 'Dangerous', 'Caramel', 'Even In Arcadia', 'Provider', 'Damocles', 'Gethsemane', 'Infinite Baths']
    }
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.album = this.albums.find(a => a.id === id);
  }

  goBack() {
    this.router.navigate(['/']);
  }
}