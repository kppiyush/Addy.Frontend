import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddyurlserviceService } from '../services/addyurlservice.service';

@Component({
  selector: 'app-output-url',
  templateUrl: './output-url.component.html',
  styleUrls: ['./output-url.component.css']
})
export class OutputUrlComponent implements OnInit {
 @Input() showMePartially: boolean | undefined;
  shortUrls:any;
  id: any;
  constructor(private addyUrlService: AddyurlserviceService, private route: ActivatedRoute) { }

  ngOnInit() {
    debugger;
    //this.id = this.route.snapshot.paramMap.get('id');
//     this.id = this.route.queryParamMap
//        .subscribe(params => {
//              this.id = +params.get('id');     
// });

   this.id = this.route.snapshot.queryParamMap.get('id');
    console.log(this.id);

    this.addyUrlService.getShortUrl(this.id)
        .subscribe(response => {
         // this.shortUrls = response;
          console.log(response);
        });
  }

}
