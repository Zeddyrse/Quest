import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  User = {
    name : 'Kakarot',
    firstName : 'Goku',
    age :  'J\'ai 40 ans',
    quote : 'Les limites existent uniquement si tu le permets',
    photo : 'http://image.noelshack.com/fichiers/2018/42/1/1539629145-supersayajin3-f6f919a01468cbc6c36c3aab9ab9b06473aad00c.jpeg'
  };
  
  
  public show:boolean = true;
  
  constructor() { }
  
  public toggleShow(){
    this.show = !this.show;
  }

  ngOnInit() {
  }

}
