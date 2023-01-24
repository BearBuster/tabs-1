import {Component, OnInit} from '@angular/core';
import {Account} from "./interfaces/account";
import {data} from "./data/data";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  filterByIbanOrAlias: string = ''
  filter = {
    filterByIbanOrAlias: '',
    filterByType: [],
    filterByCompanyName: []
  }
  arr = {
    'Conti Correnti': [],
    'Portafoglio Incassi': [],
    'Finanziamenti': [],
    'Conti Anticipi Esteri': [],
    'Libertti de risparmio': []
  }

  companyNameSet: Set<string> = new Set<string>()

  ngOnInit(): void {
    data.companies.forEach((company)=>{
      let tmpObj: Account = new Account()
      tmpObj.abi_code = company.abi_code
      tmpObj.company_name = company.company_name
      company.functions.forEach((func) => {
        func.accounts.forEach((account) => {
            tmpObj.iban = account.iban
            account.types.forEach((type) => {
              tmpObj.type = type.type
              if(this.arr[tmpObj.type_name].filter((e)=>{
                return e._iban === tmpObj.iban
              }).length){
                console.log('skip')
              }else{
                tmpObj.alias = type.alias
                tmpObj.currency = type.currency
                tmpObj.account_naming = type.account_naming
                tmpObj.is_default_account = type.is_default_account
                this.arr[tmpObj.type_name].push(structuredClone(tmpObj))
                this.companyNameSet.add(tmpObj.company_name)
              }
            })
        })
      })
    })
  }
}
