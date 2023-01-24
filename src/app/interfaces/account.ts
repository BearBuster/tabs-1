export class Account implements IAccount{
  abi_code: string
  account_naming: string
  alias: string
  company_name: string
  currency: string
  iban: string
  is_default_account: boolean
  type: string
  constructor(){}
  
}

export interface IAccount {
  is_default_account: boolean
  account_naming: string
  company_name: string
  abi_code: string
  iban: string
  alias: string
  currency: string
}
