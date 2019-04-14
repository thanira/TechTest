import { computedFrom } from 'aurelia-framework';
import { IPerson } from '../interfaces/iperson';
import { IColour } from '../interfaces/icolour';

export class Person implements IPerson {

  constructor(person: IPerson) {
    this.id = person.id;
    this.firstName = person.firstName;
    this.lastName = person.lastName;
    this.authorised = person.authorised;
    this.enabled = person.enabled;
    this.colours = person.colours;
  }

  id: number;
  firstName: string;
  lastName: string;
  authorised: boolean;
  enabled: boolean;
  colours: IColour[];

  @computedFrom('firstName', 'lastName')
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  @computedFrom('fullName')
  get palindrome(): boolean {
    // TODO: Step 5
    //
    // Implement the palindrome computed field.
    // True should be returned When the FullName is spelt the same
    // forwards as it is backwards. The match should ignore any
    // spaces and should also be case insensitive.
    //
    // Example: 'Bo Bob' is a palindrome.
    let name = this.fullName;
    name = name.replace(/[\s\n\r\t]/g, "");
    name = name.toLowerCase();

    let nameReverse = "";
    
    nameReverse = name.split("").reverse().join("");
    //or
    //nameReverse = this.reverseString(name);

    return name === nameReverse;
  }

  private reverseString(str: string): string {
    let strReverse = "";

    for (let i = str.length - 1; i >= 0; i--) {
      strReverse += str[i];
    }
    return strReverse;
  }
}
 