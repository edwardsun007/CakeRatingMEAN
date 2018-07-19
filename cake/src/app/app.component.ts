import { Component,OnInit } from '@angular/core';
import { CakeService } from './cake.service';
import { log } from 'util';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'app';

  cakes = [];
  newCake:any;

  addRating:any;

  oneCake:any;

  avg:any;

  sum:any;

  constructor(private _cakeService:CakeService){}

  ngOnInit(){
     console.log('Component is running');
     let obs = this._cakeService.getCakes();
     obs.subscribe(
       data=>{
         console.log('Got data back via service:',data);
         this.cakes=data['data'];
         console.log('Checing cakes array now',this.cakes);
       }
     )

     this.newCake={
      baker:"",
      image:""
    };

    this.addRating={
        rating:undefined,
        comment:undefined
      }
   }

   onSubmit():void{
     console.log('component onSubmit');
     console.log('newCake.baker=',this.newCake.baker);
     console.log('newCake.image=',this.newCake.image);
     
     let obs = this._cakeService.createCakes(this.newCake);
     obs.subscribe(
       data=>{
        console.log('Got data back for creating via service:',data);
       }
     )
   }

   onRating(id:string):void{
    console.log('check addRating',this.addRating);
    console.log('id=',id);
    console.log('rating=',this.addRating.rating);
    console.log('comment',this.addRating.comment);

    let obs = this._cakeService.rateCake(id,this.addRating);
    obs.subscribe(
      data=>{
       console.log('Got data back for onRating via service:',data);
      }
    )
  }

  onClickImage(id:string):void{
    console.log('Running click image...');
    console.log('id=',id);
    let obs = this._cakeService.getOneCake(id);
    obs.subscribe(
      data=>{
       console.log('Got data back from getOneCake via service:',data);
       this.oneCake=data['data'];
       console.log('checking oneCake=',this.oneCake);
       let sum = 0;
       let total=0;
       for (let r of this.oneCake.ratings){
         console.log('whats type of r.rates?=',typeof(r.rates));
         if (r.rates!=undefined&&r.rates.length>0){ // make sure rates is not empty!
           total+=1;
           sum+=Number(r.rates);
         }
       }
       console.log('checking sum=',sum);
       console.log('checking total=',total);
       this.avg = sum / total;
       console.log('checking avg=',this.avg);
      }
    )

  }
}
