import { WordService } from './app.service';
import { Component,OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 

name=['hello','same','bye','genius','sorry','welcome'];
ran:any;
size=6;
num:number;
guess:string;
word:string;
str:any[];
len:number;
score=0;
words:Array<any>;
guess1:string[];
word1:string[];
constructor(private WordService:WordService,private router: Router){};
ngOnInit(){  
  console.log(">>>>>>>" +typeof(this.word)+"" +typeof(this.num)
   
  );
   
  
     //this.WordService.getAllword().subscribe(res=>{this.words=res});
     this.words=this.WordService.Randomize();
           /*console.log("Initialising Books List...");
          console.log(this.words);
           this.words=this.WordService.Randomize();*/
 
 
}
onClick(){
 // this.words=this.WordService.Randomize();
 
}

onSubmit(value:any){
 this.guess=(value.title);
 //this.guess1=this.guess.split("");
 
 //console.log(this.guess)
this.word=this.WordService.guessWord();
//this.word1=this.word.split("");
console.log("hello hello hello");
    
  if(this.WordService.compare(this.guess,this.word)){
    this.score=this.score+2;
  }
  else{
    //console.log(this.guess);
       console.log("wrong answer");
  }
     this.words=this.WordService.Randomize();
  //this.router.navigate(['']);
}


}
