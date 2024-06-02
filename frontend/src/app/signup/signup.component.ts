import { Component } from '@angular/core';
import { StringData } from '../shared/domain/string-data.interface';
import { SignupDefaultConst } from './signup-default.const';

@Component({
  selector: 'app-signup',
  standalone: true,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SingupComponent {
  readonly title: StringData = SignupDefaultConst.title;
}
