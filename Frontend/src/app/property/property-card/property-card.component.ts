import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPropertyBase } from 'src/app/model/IPropertyBase';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {
  
  constructor() { }
  
  ngOnInit() {
    
  }

  @Input() property!: IPropertyBase;
  @Input() hideIcons!: boolean;
}
