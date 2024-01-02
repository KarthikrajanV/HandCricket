import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  buttons:number[]=[1,2,3,4,5,6]
  gameCompleted:boolean=true;
  target:number=0;
  score:number=0;
  pcRandom:number=0;
  totScore:number=0;
  disable:boolean=false;
  showResults:boolean=false;  //change
  win:boolean=true;
  counter:number=5
  intervalId!: number;
  applyBounce:boolean=false
  showDash:boolean=true;

  counterFunc() {

    const intervalId = setInterval(() => {
      console.log(this.counter);
      if (this.counter <= 1) {
        clearInterval(intervalId);
        console.log('Countdown completed');
      }
      this.counter -= 1;
    }, 1000);

  }
  

  startGame(){
    if(this.gameCompleted){
      this.disable=false;
      this.gameCompleted=false
      this.target=Math.floor(Math.random() * (51-20)+20)
      this.applyBounce=true
    }
  }

  reset(){
    this.gameCompleted=true;
    this.totScore=0;
    this.target=0;
    this.showResults=false;
    this.win=true;
    this.counter=5;
    this.applyBounce=false
    this.showDash=true;
  }

  setScore(btn:number){
    this.showDash=false;
    this.score=btn;
    this.pcRandom=Math.floor(Math.random()*(7-1)+1)
    if(btn!=this.pcRandom){
      this.totScore=this.totScore+btn
    }
    this.check();

  }

  check(): void {
    if(this.score===this.pcRandom && this.target>this.totScore){
      this.disable=true;
      this.win=false;
      this.showResults=true;
      this.counterFunc();
     setTimeout(()=>{
       this.reset()
     },5000)
    }
    else if(this.target<=this.totScore){
      this.showResults=true;
      this.win=true;
      this.counterFunc();
      setTimeout(()=>{
        this.reset()
     },5000)
    }
  }

}
