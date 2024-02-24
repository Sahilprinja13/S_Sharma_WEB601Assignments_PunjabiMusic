import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Content } from '../helper-files/content-interface';
import {ContentCardComponent} from '../content-card/content-card.component';
import {FilterTypePipe} from '../filter-type.pipe';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule, ContentCardComponent, FilterTypePipe, FormsModule],
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  contentArray: Content[] = [
    {
      id:1,
      title: 'Udaarian',
      description: 'Immerse yourself in the soul-stirring melodies of  a Punjabi music sensation that narrates a poignant tale of unrequited love. With heartfelt lyrics and a mesmerizing composition, this track captures the essence of Punjabi folk music.',
      imgURL: 'https://melodytracks.com/image/cache/catalog/karaoke/2020_images/0_new_uploads/udaarian_satinder-500x500.jpg',
      creator: 'Satinder Sartaaj',
      tags: ['punjabi', 'song', 'punjabi'],
      type: "Romantic"
    },
    {
      id:2,
       title: 'Laung Laachi',
       description: 'Step into the vibrant world of  a Punjabi musical extravaganza that blends traditional beats with contemporary vibes. The films chart-topping soundtrack and energetic dance numbers make it a must-watch for Punjabi music enthusiasts.',
       imgURL: 'https://southmp3.org/wp-content/uploads/2020/05/Laung-Laachi-2018jpeg.jpg',
       creator: 'Neeru Bajwa Entertainment',
       tags: ['punjabi', 'music', 'trending', 'video'],
      type: "Romantic"
    },
    {
      id: 3,
      title: 'High Rated Gabru',
      description: 'A punjabi song sing by guru randhawa',
      creator: 't series',
      imgURL: 'https://i1.sndcdn.com/artworks-000232859794-z66p7q-t500x500.jpg',
      tags: ['punjabi', 'music', 'records '],
        type: "Modern Punjabi", 
    },
    {
      id: 4,
       title: 'Qismat',
       description: 'Immerse yourself in the emotional journey depicted through the soulful track "Qismat." The poignant lyrics and heartfelt composition by Ammy Virk bring to life a tale of fate and love.',
       creator: 'Ammy Virk',
       imgURL: 'https://media.themoviedb.org/t/p/w500/8ZXB6vBqhV3aA0kf6OP4zrmeFsw.jpg',
       tags: ['punjabi', 'song', 'love'],
      type: "Romantic", 
    },
    {
      id: 5,
       title: 'Diljit Dosanjh',
       description: 'Get ready to groove to the beats of Diljit Dosanjh\'s latest Punjabi chartbuster. The energetic music and catchy lyrics make it a perfect addition to your playlist for any occasion.',
       creator: 'Diljit Dosanjh',
       imgURL: 'https://static.india.com/wp-content/uploads/2023/05/When-Diljit-Dosanjh-Said-Doing-Films-Without-Turban-is-Not-Possible.jpg?impolicy=Medium_Resize&w=1200&h=800',
       tags: ['punjabi', 'music', 'dance'],
      type: "Folks", 
    },
    {
      id: 6,
       title: 'Ishq Da Uda Adaa',
       description: 'Allow yourself to be swept away by the enchanting melody of "Ishq Da Uda Adaa." Sung by Sajjan Adeeb, this Punjabi track beautifully captures the essence of love with its soul-stirring composition.',
       creator: 'Sajjan Adeeb',
       imgURL: 'https://starsunfolded.com/wp-content/uploads/2018/03/Sajjan-Adeeb-2.jpg',
       tags: ['punjabi', 'song', 'love'],
        type: "Melody", 
    },
    
    {
      id: 7,
  title: "Whispers in the Shadows",
  description: "Embark on a journey into the unknown with 'Whispers in the Shadows.' This haunting thriller explores the depths of human psyche and the chilling secrets that lurk beneath the surface. Brace yourself for an adrenaline-fueled ride that will leave you questioning reality.",
  creator: "Elena Nightingale",
  imgURL: "https://cdn.kobo.com/book-images/973788b4-08b7-4309-81db-5d450df0cfb7/1200/1200/False/whispers-in-the-shadows-1.jpg",
  tags: ["thriller", "mystery", "suspense"],
    },
  ];

  filterContent: Content[] = [];
  title:string = ''; 
  message: string = '';
  isFound: boolean = false;

  checkTitle(){
    this.filterContent = this.contentArray.filter(item => item.title.toLowerCase() === this.title.toLowerCase());

    this.isFound = this.filterContent.length > 0;
    
    this.message = this.isFound ? `Content with title '${this.title}' found.` : `Content with title '${this.title}' not found.`;
  }

  constructor(){

  }
}
