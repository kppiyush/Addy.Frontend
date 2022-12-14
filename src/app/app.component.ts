import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UrlShortner';
  heading = 'URL';
  outputOkay = false;
  showVar: boolean = true;

    

  public myForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({
      url: ['', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]]
    })
  }
  onSubmit() {
    console.log(this.myForm.value);
    this.outputOkay = true;
  }

  toggleChild(){
    this.showVar = !this.showVar;
}
}
