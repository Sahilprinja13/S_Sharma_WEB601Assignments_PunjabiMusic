import { Component } from '@angular/core';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {
  PMusic:ContentList= new ContentList();
  constructor(){
    this.PMusic.add({
      id:1,
      "title": "Udaarian",
      "description": "Immerse yourself in the soul-stirring melodies of 'Udaarian,' a Punjabi music sensation that narrates a poignant tale of unrequited love. With heartfelt lyrics and a mesmerizing composition, this track captures the essence of Punjabi folk music.",
      "imgUrl": "https://melodytracks.com/image/cache/catalog/karaoke/2020_images/0_new_uploads/udaarian_satinder-500x500.jpg",
      "type": "Punjabi Folk, Romantic",
      "creator": "Satinder Sartaaj"

    })

    this.PMusic.add({
      id:2,
      "title": "Laung Laachi",
      "description": "Step into the vibrant world of 'Laung Laachi,' a Punjabi musical extravaganza that blends traditional beats with contemporary vibes. The film's chart-topping soundtrack and energetic dance numbers make it a must-watch for Punjabi music enthusiasts.",
      "imgUrl": "https://southmp3.org/wp-content/uploads/2020/05/Laung-Laachi-2018jpeg.jpg",
      "type": "Punjabi Musical, Romance",
      "creator": "Neeru Bajwa Entertainment"

    })
    this.PMusic.add({
      id:3,
      "title": "High Rated Gabru",
      "description": "Get ready to groove with the infectious beats of 'High Rated Gabru.' This Punjabi chartbuster is a celebration of swag, style, and the vibrant spirit of Punjabi music. The catchy tune and upbeat rhythm will have you hitting the dance floor in no time!",
      "imgUrl": "https://i1.sndcdn.com/artworks-000232859794-z66p7q-t500x500.jpg",
      "type": "Punjabi Pop, Dance",
      "creator": "Guru Randhawa"

    })

  }}
