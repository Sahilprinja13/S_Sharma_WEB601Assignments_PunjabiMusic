import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentCardComponent } from "../content-card/content-card.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-content-list',
    standalone: true,
    templateUrl: './content-list.component.html',
    styleUrl: './content-list.component.scss',
    imports: [ContentCardComponent,CommonModule]
})
export class ContentListComponent implements OnInit{
  songsContent: Content[];
  constructor(){
    this.songsContent=[];
  }

  ngOnInit(): void {


   this.songsContent =[
    {
      id:1,
      title: 'Udaarian',
      description: 'Immerse yourself in the soul-stirring melodies of  a Punjabi music sensation that narrates a poignant tale of unrequited love. With heartfelt lyrics and a mesmerizing composition, this track captures the essence of Punjabi folk music.',
      imgUrl: 'https://melodytracks.com/image/cache/catalog/karaoke/2020_images/0_new_uploads/udaarian_satinder-500x500.jpg',
      type: 'Punjabi Folk, Romantic',
      creator: 'Satinder Sartaaj',
      tags: ['punjabi', 'song', 'punjabi']

     },
     {
       id:2,
       title: 'Laung Laachi',
       description: 'Step into the vibrant world of  a Punjabi musical extravaganza that blends traditional beats with contemporary vibes. The films chart-topping soundtrack and energetic dance numbers make it a must-watch for Punjabi music enthusiasts.',
       imgUrl: 'https://southmp3.org/wp-content/uploads/2020/05/Laung-Laachi-2018jpeg.jpg',
       type: 'Punjabi Musical, Romance',
       creator: 'Neeru Bajwa Entertainment',
      tags: ['punjabi', 'music', 'trending', 'video']
    },
    {
      id: 3,
      title: 'High Rated Gabru',
      description: 'A punjabi song sing by guru randhawa',
      creator: 't series',
      imgUrl: 'https://i1.sndcdn.com/artworks-000232859794-z66p7q-t500x500.jpg',
      type: 'entairtainment',
      tags: ['punjabi', 'music', 'records ']
    },
     {
       id: 4,
       title: 'Qismat',
       description: 'Immerse yourself in the emotional journey depicted through the soulful track "Qismat." The poignant lyrics and heartfelt composition by Ammy Virk bring to life a tale of fate and love.',
       creator: 'Ammy Virk',
       imgUrl: 'https://media.themoviedb.org/t/p/w500/8ZXB6vBqhV3aA0kf6OP4zrmeFsw.jpg',
       type: 'Punjabi Romantic',
       tags: ['punjabi', 'song', 'love']
     },
     {
       id: 5,
       title: 'Diljit Dosanjh',
       description: 'Get ready to groove to the beats of Diljit Dosanjh\'s latest Punjabi chartbuster. The energetic music and catchy lyrics make it a perfect addition to your playlist for any occasion.',
       creator: 'Diljit Dosanjh',
       imgUrl: 'https://static.india.com/wp-content/uploads/2023/05/When-Diljit-Dosanjh-Said-Doing-Films-Without-Turban-is-Not-Possible.jpg?impolicy=Medium_Resize&w=1200&h=800',
       type: 'Punjabi Dance, Upbeat',
       tags: ['punjabi', 'music', 'dance']
     },
     {
       id: 6,
       title: 'Ishq Da Uda Adaa',
       description: 'Allow yourself to be swept away by the enchanting melody of "Ishq Da Uda Adaa." Sung by Sajjan Adeeb, this Punjabi track beautifully captures the essence of love with its soul-stirring composition.',
       creator: 'Sajjan Adeeb',
       imgUrl: 'https://starsunfolded.com/wp-content/uploads/2018/03/Sajjan-Adeeb-2.jpg',
       type: 'Punjabi Love Ballad',
       tags: ['punjabi', 'song', 'love']
     }
]

  }
}
