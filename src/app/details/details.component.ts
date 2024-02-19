import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  constructor(private route: ActivatedRoute) { }

  firstname = '';
  lastname = '';
  email = '';
  mobile = '';


  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const firstname = params['firstname'];
      const lastname = params['lastname'];
      const email = params['email'];
      const mobile = params['mobile'];
  

    // Update the tableData array with the new data
    this.valuePassing(firstname, lastname, email, mobile );
    });

    
  }
  valuePassing(firstnam: string, lastnam: string, emal: string, mobil: string){
    console.log('Firstname:', firstnam);
    console.log('Lastname:', lastnam);
    console.log('Email:', emal);
    console.log('Mobile:', mobil);
    this.firstname=firstnam;
    this.lastname=lastnam;
    this.email=emal;
    this.mobile=mobil;
    // this.tableData=
  }
  

}
