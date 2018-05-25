import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  spinners = [1, 2, 3, 4, 5];

  myAnimation = 'spin 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite';

  colors = [{
    name: 'primary'
  }, {
    name: 'secondary'
  }];

  sizes = [{
    size: 10
  }, {
    size: 20
  }, {
    size: 30
  }];

  animationExamples = [{
    animation: 'spin 1s ease-in-out infinite'
  }];

  constructor() {
  }


  codeSnippet(codeName: string): string {
    const codesSnippets = {
      inlineColor: `<span style="color: #F728FC">Hello <spinner display="inline"></spinner></span>`,
      button: `<button style="background: #FCBE41; color: white">
  <span>Loading</span>
  <spinner display="inline"></spinner>
</button>`,
      animation: `<spinner [animation]="myAnimation" color="primary"></spinner>`,
      animationRoot: `SpinnerModule.forRoot({
  primaryColor: '#FCBE41',
  secondaryColor: '#309488',
  animation: 'spin 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite'
})`,
      keyframes: `@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`
    };
    return codesSnippets[codeName];
  }

}
