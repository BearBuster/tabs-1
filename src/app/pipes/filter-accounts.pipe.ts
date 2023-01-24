import { Pipe, PipeTransform } from '@angular/core';
import {Account} from "../interfaces/account";

@Pipe({
  name: 'filterAccounts'
})
export class FilterAccountsPipe implements PipeTransform {

  transform(accounts: Account[], type: string[]): Account[] {
    return accounts.filter((account)=> type.includes(account.type));
  }

}
