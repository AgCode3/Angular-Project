import { Component, ElementRef, ViewChild } from '@angular/core';
import {lorem} from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  inputText = '';
  randomText = lorem.sentence();
  correct = 0;
  incorrect = 0;
  acuricy = 0;
  overallAcuricy = 0;
  finishMsg = false;

  onChangeInput(value: string){
    this.inputText = value;
  }

  onClickNext(){
    this.inputText = '';
    this.randomText = lorem.sentence();
    this.correct = 0;
    this.incorrect = 0;
    this.acuricy = 0;
    this.finishMsg = false;
  }

  onClickDone(){
    const randomTextArr = this.randomText.split('');
    const inputTextArr = this.inputText.split('');

    for(let i=0; i<inputTextArr.length; i++){

      if(inputTextArr[i] === randomTextArr[i]) {
        this.correct++;
      } else {
        this.incorrect++;
      }
    }

    //acuricy calculation
    this.acuricy = Math.floor((this.correct/randomTextArr.length) * 100);
    this.overallAcuricy = this.overallAcuricy === 0? Math.floor(this.acuricy) :
     Math.floor((this.overallAcuricy + this.acuricy) / 2);

    this.finishMsg = true;
  }


  correctColor(randomLetter: string, inputLetter: string){
    if(!inputLetter){
      return 'pending';
    }

    return randomLetter === inputLetter? 'correct' : 'incorrect';
  }
}
