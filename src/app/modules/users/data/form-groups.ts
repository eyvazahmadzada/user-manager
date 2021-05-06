import { FormGroup } from '../models/form-group.model';

const formGroups: FormGroup[] = [
  {
    label: 'First Name',
    name: 'first_name',
    type: 'text',
    value: '',
    icon: 'user',
    placeholder: 'Byron'
  },
  {
    label: 'Last Name',
    name: 'last_name',
    type: 'text',
    value: '',
    icon: 'user',
    placeholder: 'Fields'
  },
  {
    label: 'Email',
    name: 'email',
    type: 'email',
    value: '',
    icon: 'letter',
    placeholder: 'byron.fields@reqres.in'
  }
];

export default formGroups;
