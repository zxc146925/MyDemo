import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as UIActions from "../../../reducers/UI/ui.actions";
import { Router } from '@angular/router';


@Component({
  selector: 'app-sub-content',
  templateUrl: './sub-content.component.html',
  styleUrls: ['./sub-content.component.css']
})
export class SubContentComponent implements OnInit {

  constructor(private _store:Store<any>,private routes:Router) { }

  ngOnInit() {
  }


  selectPage(item:string){
    this._store.dispatch(new UIActions.Selectitem(item));
    // this._store.subscribe(x =>{
    //   console.log('store',x);
    // })
    this.routes.navigate(['/container-content',item]);

  }

}
