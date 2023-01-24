import {Component, OnInit} from '@angular/core';
import {Account} from "./interfaces/account";
import {data} from "./data/data";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  panelOpenState = false;
  accountsArray: Account[] = []
  arr2 = {
    'Conti Corrente': [],
    'Portafoglio Incassi': [],
    'Finanziamente': [],
    'Conti Anticipi Esteri': [],
    'Libertti de risparmio': []
  }
  types = {
    'Conti Corrente': ['01'],
    'Portafoglio Incassi': ['05'],
    'Finanziamente': ['06','07','21'],
    'Conti Anticipi Esteri': ['18'],
    'Libertti de risparmio': ['04']
  }
  cols: string[] = Object.keys(new Account())

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
              if(this.accountsArray.find((e) => {
                return e.iban == tmpObj.iban && e.type == tmpObj.type
              })){
                console.log('skip')
              }else {
                tmpObj.alias = type.alias
                tmpObj.currency = type.currency
                tmpObj.account_naming = type.account_naming
                tmpObj.is_default_account = type.is_default_account
                if(['01'].includes(tmpObj.type)){
                  this.arr2['Conti Corrente'].push(structuredClone(tmpObj))
                }else if(['05'].includes(tmpObj.type)){
                  this.arr2['Portafoglio Incassi'].push(structuredClone(tmpObj))
                }else if(['06','07','21'].includes(tmpObj.type)){
                  this.arr2['Finanziamente'].push(structuredClone(tmpObj))
                }else if(['18'].includes(tmpObj.type)){
                  this.arr2['Conti Anticipi Esteri'].push(structuredClone(tmpObj))
                }else if(['04'].includes(tmpObj.type)){
                  this.arr2['Libertti de risparmio'].push(structuredClone(tmpObj))
                }
                this.accountsArray.push(structuredClone(tmpObj))
              }
            })
        })
      })
    })

    console.log(this.accountsArray)
    console.log(this.arr2)

  }

}
