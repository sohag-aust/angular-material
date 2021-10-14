import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

//  for autocomplete
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
// autocomplete purpose done

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {

  constructor() { }

  // AutoComplete
  options: string[] = ['Angular', 'React', 'Vue', 'React-Native'];
  objectOptions = [
    {name: 'Angular'},
    {name: 'Angular Material'},
    {name: 'React'},
    {name: 'Vue'}
  ];

  myFormControl = new FormControl();
  filteredOptions!: Observable<string[]>;

  ngOnInit(): void {
    this.filteredOptions = this.myFormControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterFn(value))
    );
  }
  private _filterFn(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}
