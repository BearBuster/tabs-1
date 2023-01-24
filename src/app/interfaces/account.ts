export class Account implements IAccount{
  _abi_code: string
  _account_naming: string
  _alias: string
  _company_name: string
  _currency: string
  _iban: string
  _is_default_account: boolean
  _type: string
  _type_name: string


  constructor() {
  }

  get abi_code(): string {
    return this._abi_code;
  }

  set abi_code(value: string) {
    this._abi_code = value;
  }

  get account_naming(): string {
    return this._account_naming;
  }

  set account_naming(value: string) {
    this._account_naming = value;
  }

  get alias(): string {
    return this._alias;
  }

  set alias(value: string) {
    this._alias = value;
  }

  get company_name(): string {
    return this._company_name;
  }

  set company_name(value: string) {
    this._company_name = value;
  }

  get currency(): string {
    return this._currency;
  }

  set currency(value: string) {
    this._currency = value;
  }

  get iban(): string {
    return this._iban;
  }

  set iban(value: string) {
    this._iban = value;
  }

  get is_default_account(): boolean {
    return this._is_default_account;
  }

  set is_default_account(value: boolean) {
    this._is_default_account = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    if(['01'].includes(value)){
      this._type_name = 'Conti Correnti'
    }else if(['05'].includes(value)){
      this._type_name = 'Portafoglio Incassi'
    }else if(['06','07','21'].includes(value)){
      this._type_name = 'Finanziamenti'
    }else if(['18'].includes(value)){
      this._type_name = 'Conti Anticipi Esteri'
    }else if(['04'].includes(value)){
      this._type_name = 'Libertti de risparmio'
    }
    this._type = value;
  }

  get type_name(): string {
    return this._type_name;
  }
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
