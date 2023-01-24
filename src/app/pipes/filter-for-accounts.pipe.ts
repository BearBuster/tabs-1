import { Pipe, PipeTransform } from '@angular/core';
import {Account} from "../interfaces/account";

@Pipe({
  name: 'filterForAccounts'
})
export class FilterForAccountsPipe implements PipeTransform {
  transform(accounts: Account[], byIbanOrAlias: string, byType: string[], byCompanyName: string[]): Account[] {
    return accounts.filter((account)=>{
      return (byIbanOrAlias.length? account._iban.includes(byIbanOrAlias) : true)
      && (byType.length? byType.includes(account._type): true)
      && (byCompanyName.length? byCompanyName.includes(account._company_name) : true)
    });
  }

}
