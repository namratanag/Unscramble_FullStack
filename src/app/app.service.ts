import{Injectable } from'@angular/core';
import {Http,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WordService{
         constructor(private http:Http){
           
 
        }
     //name:string[];    
    ran:any;
   size:number;
   num:number;
   guess:string;
   word:string;
     str:any[];
len:number;
score:number=0;

        getAllword(){
                 return this.http.get("http://localhost:3000/scramble/").map(res=>res.json());
        }
   name=['Angular','sovereign','transcends','genius','surpass','welcome','saviour','appetite'];
   
    
        getWord(){
           // return this.http.get("http://localhost:3000/scramble/").map(res =>{ this.name=res.json()});
        }

        Randomize(){
            //this.name=value;
          this.size=this.name.length;
            this.num= Math.floor(Math.random()*this.size);
            console.log(this.num);
        this.word=this.name[this.num];
        console.log(this.word);
        this.word=this.word.toUpperCase();
         this.str=this.word.split('');
    this.len=Math.floor(this.word.length);
       for(var i=0;i<this.len;i++){
      var j= Math.floor(Math.random()*this.size);
      var k= Math.floor(Math.random()*this.size);
      var a=this.str[j];
      var b=this.str[k];
      this.str[k]=a;
      this.str[j]=b;

        }
        return this.str;
}

guessWord(){
    return this.word;

}

compare(val1:string,val2:string){
   
    var str1:string[];
    var str2:string[];
    //val1
    str1=val1.toLowerCase().split("");
    str2=val2.toLowerCase().split("");
    console.log("///////////////////////////////////////////////");
    console.log( str1);
    console.log( str2);
    console.log("///////////////////////////////////////////////");
 // console.log();
    if(str1.length>str2.length || str1.length<str2.length ){return false}
    else{
           for(var i=0;i<str1.length;i++){
            
               if(str1[i].charAt(0)==str2[i].charAt(0))
               {
               console.log(str1[i].charAt(0));
               console.log(str2[i].charAt(0));
            }
               else{return false;}


           }
           
       }
       return true;
}


}