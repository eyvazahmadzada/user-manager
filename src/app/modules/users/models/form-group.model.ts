import { User } from './user.model';

export class FormGroup {
  constructor(
    public label: string,
    public name: keyof User,
    public type: string,
    public icon: string,
    public placeholder: string
  ) {}
}
