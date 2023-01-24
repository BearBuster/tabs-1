export const data = {
  "user_id": "06085R2541M01",
  "uid": "temp-uid",
  "company_id": "06085R2541",
  "surname": "PAIOLOMSK",
  "name": "VADESMSK",
  "ndg_code": "000000406381",
  "email": "000000406381@LIBERO.IT",
  "phone_number": "5564711206",
  "tax_code": "PLMVSM71P27A479Y",
  "nickname": null,
  "type": "MASTER",
  "ndg_locked": false,
  "token_serial_number": null,
  "language": "it",
  "role_type": "AUTHORIZE",
  "companies": [
    {
      "nickname": null,
      "defaultPermissionForNewAccount": "AUTHORIZE",
      "defaultPermissionForNewFunction": "AUTHORIZE",
      "limits": {
        "monthly": 200000,
        "daily": 100000,
        "operation": null
      },
      "company_id": "06085R2541",
      //
      "abi_code": "798798798",
      "cab_code": "10301",
      "cuc_code": "SIAAHH11",
      "tax_code": "00107140055",
      "product_code": "NC-A-C75",
      "sia_code": "AHH11",
      //
      "company_name": "A.C. FILATURA NORDMSK",
      "functions": [
        {
          "function_code": "CBI-BALANCE-TRANSACTIONS",
          "permission_type": "ACCOUNT",
          "permission": "READ",
          "limits": {
            "monthly": null,
            "daily": null,
            "operation": null
          },
          "additionalAttributes": [],
          "accounts": [
            {
              "company_id": "06085R2541",
              //
              "iban": "IT78Z0608547300000000022720",
              "types": [
                {
                  "status": "ACTIVE",
                  "type": "01",
                  //
                  "alias": null,
                  "is_passive_bank": false,
                  //
                  "currency": null,
                  //
                  "account_naming": "A.C. FILATURA NORDMSK",
                  //
                  "is_default_account": true,
                  "tax_code": "00107140055"
                }
              ],
              "roleAccount": {
                "iban": "IT78Z0608547300000000022720",
                "permission": "READ",
                "limits": {
                  "monthly": null,
                  "daily": null,
                  "operation": null
                }
              }
            }
          ],
          "max_permission": "READ"
        },
        {
          "function_code": "CBI-ACTIVE-MAV",
          "permission_type": "ACCOUNT",
          "permission": "AUTHORIZE",
          "limits": {
            "monthly": null,
            "daily": null,
            "operation": null
          },
          "additionalAttributes": [],
          "accounts": [
            {
              "company_id": "06085R2541",
              "iban": "IT43H0608547300000040022720",
              "types": [
                {
                  "status": "ACTIVE",
                  "type": "05",
                  "alias": null,
                  "is_passive_bank": false,
                  "currency": null,
                  "account_naming": "A.C. FILATURA NORDMSK",
                  "is_default_account": null,
                  "tax_code": "00107140055"
                }
              ],
              "roleAccount": {
                "iban": "IT43H0608547300000040022720",
                "permission": "AUTHORIZE",
                "limits": {
                  "monthly": null,
                  "daily": null,
                  "operation": null
                }
              }
            }
          ],
          "max_permission": "AUTHORIZE"
        },
        {
          "function_code": "CBI-ITALY-TRANSFER",
          "permission_type": "ACCOUNT",
          "permission": "AUTHORIZE",
          "limits": {
            "monthly": null,
            "daily": null,
            "operation": null
          },
          "additionalAttributes": [],
          "accounts": [
            {
              "company_id": "06085R2541",
              "iban": "IT49O0608510301000000050255",
              "types": [
                {
                  "status": "ACTIVE",
                  "type": "01",
                  "alias": null,
                  "is_passive_bank": false,
                  "currency": null,
                  "account_naming": "A.C. FILATURA NORDMSK",
                  "is_default_account": null,
                  "tax_code": "00107140055"
                }
              ],
              "roleAccount": {
                "iban": "IT49O0608510301000000050255",
                "permission": "AUTHORIZE",
                "limits": {
                  "monthly": null,
                  "daily": null,
                  "operation": null
                }
              }
            },
            {
              "company_id": "06085R2541",
              "iban": "IT78Z0608547300000000022720",
              "types": [
                {
                  "status": "ACTIVE",
                  "type": "01",
                  "alias": null,
                  "is_passive_bank": false,
                  "currency": null,
                  "account_naming": "A.C. FILATURA NORDMSK",
                  "is_default_account": null,
                  "tax_code": "00107140055"
                }
              ],
              "roleAccount": {
                "iban": "IT78Z0608547300000000022720",
                "permission": "AUTHORIZE",
                "limits": {
                  "monthly": null,
                  "daily": null,
                  "operation": null
                }
              }
            }
          ],
          "max_permission": "AUTHORIZE"
        },
        {
          "function_code": "BANKBOOK-STATEMENT",
          "permission_type": "FUNCTION",
          "permission": "READ",
          "limits": {
            "monthly": null,
            "daily": null,
            "operation": null
          },
          "additionalAttributes": [],
          "accounts": [],
          "max_permission": "READ"
        },
        {
          "function_code": "CBI-F24-ACCOUNTANT-PAYMENT",
          "permission_type": "FUNCTION",
          "permission": "AUTHORIZE",
          "limits": {
            "monthly": null,
            "daily": null,
            "operation": null
          },
          "additionalAttributes": [],
          "accounts": [],
          "max_permission": "AUTHORIZE"
        },
        {
          "function_code": "CBI-XML-URGENT-TRANSFER",
          "permission_type": "ACCOUNT",
          "permission": "AUTHORIZE",
          "limits": {
            "monthly": null,
            "daily": null,
            "operation": null
          },
          "additionalAttributes": [],
          "accounts": [
            {
              "company_id": "06085R2541",
              "iban": "IT49O0608510301000000050255",
              "types": [
                {
                  "status": "ACTIVE",
                  "type": "01",
                  "alias": null,
                  "is_passive_bank": false,
                  "currency": null,
                  "account_naming": "A.C. FILATURA NORDMSK",
                  "is_default_account": null,
                  "tax_code": "00107140055"
                }
              ],
              "roleAccount": {
                "iban": "IT49O0608510301000000050255",
                "permission": "AUTHORIZE",
                "limits": {
                  "monthly": null,
                  "daily": null,
                  "operation": null
                }
              }
            },
            {
              "company_id": "06085R2541",
              "iban": "IT78Z0608547300000000022720",
              "types": [
                {
                  "status": "ACTIVE",
                  "type": "01",
                  "alias": null,
                  "is_passive_bank": false,
                  "currency": null,
                  "account_naming": "A.C. FILATURA NORDMSK",
                  "is_default_account": null,
                  "tax_code": "00107140055"
                }
              ],
              "roleAccount": {
                "iban": "IT78Z0608547300000000022720",
                "permission": "AUTHORIZE",
                "limits": {
                  "monthly": null,
                  "daily": null,
                  "operation": null
                }
              }
            }
          ],
          "max_permission": "AUTHORIZE"
        },
        {
          "function_code": "CBI-F24-PAYMENT",
          "permission_type": "ACCOUNT",
          "permission": "AUTHORIZE",
          "limits": {
            "monthly": null,
            "daily": null,
            "operation": null
          },
          "additionalAttributes": [],
          "accounts": [
            {
              "company_id": "06085R2541",
              "iban": "IT49O0608510301000000050255",
              "types": [
                {
                  "status": "ACTIVE",
                  "type": "01",
                  "alias": null,
                  "is_passive_bank": false,
                  "currency": null,
                  "account_naming": "A.C. FILATURA NORDMSK",
                  "is_default_account": null,
                  "tax_code": "00107140055"
                }
              ],
              "roleAccount": {
                "iban": "IT49O0608510301000000050255",
                "permission": "AUTHORIZE",
                "limits": {
                  "monthly": null,
                  "daily": null,
                  "operation": null
                }
              }
            },
            {
              "company_id": "06085R2541",
              "iban": "IT78Z0608547300000000022720",
              "types": [
                {
                  "status": "ACTIVE",
                  "type": "01",
                  "alias": null,
                  "is_passive_bank": false,
                  "currency": null,
                  "account_naming": "A.C. FILATURA NORDMSK",
                  "is_default_account": null,
                  "tax_code": "00107140055"
                }
              ],
              "roleAccount": {
                "iban": "IT78Z0608547300000000022720",
                "permission": "AUTHORIZE",
                "limits": {
                  "monthly": null,
                  "daily": null,
                  "operation": null
                }
              }
            }
          ],
          "max_permission": "AUTHORIZE"
        },
        {
          "function_code": "CBI-ACTIVE-MAV-RECALL",
          "permission_type": "ACCOUNT",
          "permission": "AUTHORIZE",
          "limits": {
            "monthly": null,
            "daily": null,
            "operation": null
          },
          "additionalAttributes": [],
          "accounts": [
            {
              "company_id": "06085R2541",
              "iban": "IT43H0608547300000040022720",
              "types": [
                {
                  "status": "ACTIVE",
                  "type": "05",
                  "alias": null,
                  "is_passive_bank": false,
                  "currency": null,
                  "account_naming": "A.C. FILATURA NORDMSK",
                  "is_default_account": null,
                  "tax_code": "00107140055"
                }
              ],
              "roleAccount": {
                "iban": "IT43H0608547300000040022720",
                "permission": "AUTHORIZE",
                "limits": {
                  "monthly": null,
                  "daily": null,
                  "operation": null
                }
              }
            }
          ],
          "max_permission": "AUTHORIZE"
        }
      ],
      "charge_account": "0103700022720",
      "ndg_code": "000000000104",
      "creditor_id": null,
      "status": "ACTIVE",
      "full_address": "A.C. FILATURA NORDMSK, VIA LATINA 27, 14053 CANELLI AT",
      "allow_update_ceilings": true
    }
  ]
}
