import type { INodeProperties } from 'n8n-workflow';

export const paymentMethodsMerchantLevelDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Methods Merchant Level"
					]
				}
			},
			"options": [
				{
					"name": "Get Merchants Merchant ID Payment Method Settings",
					"value": "Get Merchants Merchant ID Payment Method Settings",
					"action": "Get all payment methods",
					"description": "Returns details for all payment methods of the merchant account identified in the path.\n\nTo make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—Payment methods read\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/merchants/{{$parameter[\"merchantId\"]}}/paymentMethodSettings"
						}
					}
				},
				{
					"name": "Post Merchants Merchant ID Payment Method Settings",
					"value": "Post Merchants Merchant ID Payment Method Settings",
					"action": "Request a payment method",
					"description": "Sends a request to add a new payment method to the merchant account identified in the path.\n\nTo make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—Payment methods read and write\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/merchants/{{$parameter[\"merchantId\"]}}/paymentMethodSettings"
						}
					}
				},
				{
					"name": "Get Merchants Merchant ID Payment Method Settings Payment Method ID",
					"value": "Get Merchants Merchant ID Payment Method Settings Payment Method ID",
					"action": "Get payment method details",
					"description": "Returns details for the merchant account and the payment method identified in the path.\n\nTo make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—Payment methods read\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/merchants/{{$parameter[\"merchantId\"]}}/paymentMethodSettings/{{$parameter[\"paymentMethodId\"]}}"
						}
					}
				},
				{
					"name": "Patch Merchants Merchant ID Payment Method Settings Payment Method ID",
					"value": "Patch Merchants Merchant ID Payment Method Settings Payment Method ID",
					"action": "Update a payment method",
					"description": "Updates payment method details for the merchant account and the payment method identified in the path.\n\nTo make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—Payment methods read and write\n",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/merchants/{{$parameter[\"merchantId\"]}}/paymentMethodSettings/{{$parameter[\"paymentMethodId\"]}}"
						}
					}
				},
				{
					"name": "Post Merchants Merchant ID Payment Method Settings Payment Method ID Add Apple Pay Domains",
					"value": "Post Merchants Merchant ID Payment Method Settings Payment Method ID Add Apple Pay Domains",
					"action": "Add an Apple Pay domain",
					"description": "Adds the new domain to the list of Apple Pay domains that are registered with the merchant account and the payment method identified in the path. For more information, see [Apple Pay documentation](https://docs.adyen.com/payment-methods/apple-pay/enable-apple-pay#register-merchant-domain).\n\nTo make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—Payment methods read and write\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/merchants/{{$parameter[\"merchantId\"]}}/paymentMethodSettings/{{$parameter[\"paymentMethodId\"]}}/addApplePayDomains"
						}
					}
				},
				{
					"name": "Get Merchants Merchant ID Payment Method Settings Payment Method ID Get Apple Pay Domains",
					"value": "Get Merchants Merchant ID Payment Method Settings Payment Method ID Get Apple Pay Domains",
					"action": "Get Apple Pay domains",
					"description": "Returns all Apple Pay domains that are registered with the merchant account and the payment method identified in the path. For more information, see [Apple Pay documentation](https://docs.adyen.com/payment-methods/apple-pay/enable-apple-pay#register-merchant-domain).\n\nTo make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—Payment methods read\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/merchants/{{$parameter[\"merchantId\"]}}/paymentMethodSettings/{{$parameter[\"paymentMethodId\"]}}/getApplePayDomains"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /merchants/{merchantId}/paymentMethodSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Methods Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant ID Payment Method Settings"
					]
				}
			}
		},
		{
			"displayName": "Merchant ID",
			"name": "merchantId",
			"required": true,
			"description": "The unique identifier of the merchant account.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Methods Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant ID Payment Method Settings"
					]
				}
			}
		},
		{
			"displayName": "Store ID",
			"name": "storeId",
			"description": "The unique identifier of the store for which to return the payment methods.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "storeId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Methods Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant ID Payment Method Settings"
					]
				}
			}
		},
		{
			"displayName": "Business Line ID",
			"name": "businessLineId",
			"description": "The unique identifier of the Business Line for which to return the payment methods.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "businessLineId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Methods Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant ID Payment Method Settings"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "pageSize",
			"description": "The number of items to have on a page, maximum 100. The default is 10 items on a page.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pageSize",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Methods Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant ID Payment Method Settings"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "The number of the page to fetch.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pageNumber",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Methods Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant ID Payment Method Settings"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP basic authentication for BasicAuth",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Methods Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant ID Payment Method Settings"
					]
				}
			}
		},
		{
			"displayName": "X API Key (Header)",
			"name": "security_apikeyauth",
			"type": "string",
			"default": "",
			"description": "API key for ApiKeyAuth (header: X-API-Key)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-Key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Methods Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant ID Payment Method Settings"
					]
				}
			}
		},
		{
			"displayName": "POST /merchants/{merchantId}/paymentMethodSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Methods Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Payment Method Settings"
					]
				}
			}
		},
		{
			"displayName": "Merchant ID",
			"name": "merchantId",
			"required": true,
			"description": "The unique identifier of the merchant account.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Methods Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Payment Method Settings"
					]
				}
			}
		},
		{
			"displayName": "Apple Pay",
			"name": "applePay",
			"type": "json",
			"default": "{\n  \"domains\": [\n    null\n  ]\n}",
			"description": "Apple Pay details.",
			"routing": {
				"send": {
					"property": "applePay",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Methods Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Payment Method Settings"
					]
				}
			}
		},
		{
			"displayName": "Bcmc",
			"name": "bcmc",
			"type": "json",
			"default": "{}",
			"description": "Bancontact details.",
			"routing": {
				"send": {
					"property": "bcmc",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Methods Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Payment Method Settings"
					]
				}
			}
		},
		{
			"displayName": "Business Line ID",
			"name": "businessLineId",
			"type": "string",
			"default": "",
			"description": "The unique identifier of the business line.",
			"routing": {
				"send": {
					"property": "businessLineId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Methods Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Payment Method Settings"
					]
				}
			}
		},
		{
			"displayName": "Cartes Bancaires",
			"name": "cartesBancaires",
			"type": "json",
			"default": "{}",
			"description": "Cartes Bancaires details.",
			"routing": {
				"send": {
					"property": "cartesBancaires",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Methods Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Payment Method Settings"
					]
				}
			}
		},
		{
			"displayName": "Countries",
			"name": "countries",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The list of countries where a payment method is available. By default, all countries supported by the payment method.",
			"routing": {
				"send": {
					"property": "countries",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Methods Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Payment Method Settings"
					]
				}
			}
		},
		{
			"displayName": "Currencies",
			"name": "currencies",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The list of currencies that a payment method supports. By default, all currencies supported by the payment method.",
			"routing": {
				"send": {
					"property": "currencies",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Methods Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Payment Method Settings"
					]
				}
			}
		},
		{
			"displayName": "Custom Routing Flags",
			"name": "customRoutingFlags",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The list of custom routing flags to route payment to the intended acquirer.",
			"routing": {
				"send": {
					"property": "customRoutingFlags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Methods Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Payment Method Settings"
					]
				}
			}
		},
		{
			"displayName": "Giro Pay",
			"name": "giroPay",
			"type": "json",
			"default": "{}",
			"description": "giropay details.",
			"routing": {
				"send": {
					"property": "giroPay",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Methods Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Payment Method Settings"
					]
				}
			}
		},
		{
			"displayName": "Google Pay",
			"name": "googlePay",
			"type": "json",
			"default": "{}",
			"description": "Google Pay details.",
			"routing": {
				"send": {
					"property": "googlePay",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Methods Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Payment Method Settings"
					]
				}
			}
		},
		{
			"displayName": "Klarna",
			"name": "klarna",
			"type": "json",
			"default": "{}",
			"description": "Klarna details.",
			"routing": {
				"send": {
					"property": "klarna",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Methods Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Payment Method Settings"
					]
				}
			}
		},
		{
			"displayName": "Meal Voucher FR",
			"name": "mealVoucher_FR",
			"type": "json",
			"default": "{\n  \"subTypes\": [\n    null\n  ]\n}",
			"description": "Meal Voucher FR details.",
			"routing": {
				"send": {
					"property": "mealVoucher_FR",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Methods Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Payment Method Settings"
					]
				}
			}
		},
		{
			"displayName": "Paypal",
			"name": "paypal",
			"type": "json",
			"default": "{}",
			"description": "PayPal details.",
			"routing": {
				"send": {
					"property": "paypal",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Methods Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Payment Method Settings"
					]
				}
			}
		},
		{
			"displayName": "Reference",
			"name": "reference",
			"type": "string",
			"default": "",
			"description": "Your reference for the payment method. Supported characters a-z, A-Z, 0-9.",
			"routing": {
				"send": {
					"property": "reference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Methods Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Payment Method Settings"
					]
				}
			}
		},
		{
			"displayName": "Shopper Interaction",
			"name": "shopperInteraction",
			"type": "options",
			"default": "eCommerce",
			"description": "The sales channel. Required if the merchant account does not have a sales channel. When you provide this field, it overrides the default sales channel set on the merchant account.\n\nPossible values: **eCommerce**, **pos**, **contAuth**, and **moto**. ",
			"options": [
				{
					"name": "E Commerce",
					"value": "eCommerce"
				},
				{
					"name": "Pos",
					"value": "pos"
				},
				{
					"name": "Moto",
					"value": "moto"
				},
				{
					"name": "Cont Auth",
					"value": "contAuth"
				}
			],
			"routing": {
				"send": {
					"property": "shopperInteraction",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Methods Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Payment Method Settings"
					]
				}
			}
		},
		{
			"displayName": "Sofort",
			"name": "sofort",
			"type": "json",
			"default": "{}",
			"description": "Sofort details.",
			"routing": {
				"send": {
					"property": "sofort",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Methods Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Payment Method Settings"
					]
				}
			}
		},
		{
			"displayName": "Store ID",
			"name": "storeId",
			"type": "string",
			"default": "",
			"description": "The ID of the [store](https://docs.adyen.com/api-explorer/#/ManagementService/latest/post/stores__resParam_id), if any.",
			"routing": {
				"send": {
					"property": "storeId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Methods Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Payment Method Settings"
					]
				}
			}
		},
		{
			"displayName": "Swish",
			"name": "swish",
			"type": "json",
			"default": "{}",
			"description": "Swish details.",
			"routing": {
				"send": {
					"property": "swish",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Methods Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Payment Method Settings"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "options",
			"default": "afterpaytouch",
			"description": "Payment method [variant](https://docs.adyen.com/development-resources/paymentmethodvariant#management-api).",
			"options": [
				{
					"name": "Afterpaytouch",
					"value": "afterpaytouch"
				},
				{
					"name": "Alipay",
					"value": "alipay"
				},
				{
					"name": "Alipay Hk",
					"value": "alipay_hk"
				},
				{
					"name": "Amex",
					"value": "amex"
				},
				{
					"name": "Applepay",
					"value": "applepay"
				},
				{
					"name": "Bcmc",
					"value": "bcmc"
				},
				{
					"name": "Blik",
					"value": "blik"
				},
				{
					"name": "Cartebancaire",
					"value": "cartebancaire"
				},
				{
					"name": "Clearpay",
					"value": "clearpay"
				},
				{
					"name": "Cup",
					"value": "cup"
				},
				{
					"name": "Diners",
					"value": "diners"
				},
				{
					"name": "Direct Ebanking",
					"value": "directEbanking"
				},
				{
					"name": "Directdebit GB",
					"value": "directdebit_GB"
				},
				{
					"name": "Discover",
					"value": "discover"
				},
				{
					"name": "Ebanking FI",
					"value": "ebanking_FI"
				},
				{
					"name": "Eftpos Australia",
					"value": "eftpos_australia"
				},
				{
					"name": "Elo",
					"value": "elo"
				},
				{
					"name": "Elocredit",
					"value": "elocredit"
				},
				{
					"name": "Elodebit",
					"value": "elodebit"
				},
				{
					"name": "Girocard",
					"value": "girocard"
				},
				{
					"name": "Giropay",
					"value": "giropay"
				},
				{
					"name": "Googlepay",
					"value": "googlepay"
				},
				{
					"name": "Hiper",
					"value": "hiper"
				},
				{
					"name": "Hipercard",
					"value": "hipercard"
				},
				{
					"name": "Ideal",
					"value": "ideal"
				},
				{
					"name": "Interac Card",
					"value": "interac_card"
				},
				{
					"name": "Jcb",
					"value": "jcb"
				},
				{
					"name": "Klarna",
					"value": "klarna"
				},
				{
					"name": "Klarna Account",
					"value": "klarna_account"
				},
				{
					"name": "Klarna Paynow",
					"value": "klarna_paynow"
				},
				{
					"name": "Maestro",
					"value": "maestro"
				},
				{
					"name": "Mbway",
					"value": "mbway"
				},
				{
					"name": "Mc",
					"value": "mc"
				},
				{
					"name": "Mcdebit",
					"value": "mcdebit"
				},
				{
					"name": "Meal Voucher FR",
					"value": "mealVoucher_FR"
				},
				{
					"name": "Mobilepay",
					"value": "mobilepay"
				},
				{
					"name": "Multibanco",
					"value": "multibanco"
				},
				{
					"name": "Online Banking PL",
					"value": "onlineBanking_PL"
				},
				{
					"name": "Paypal",
					"value": "paypal"
				},
				{
					"name": "Payshop",
					"value": "payshop"
				},
				{
					"name": "Swish",
					"value": "swish"
				},
				{
					"name": "Trustly",
					"value": "trustly"
				},
				{
					"name": "Vipps",
					"value": "vipps"
				},
				{
					"name": "Visa",
					"value": "visa"
				},
				{
					"name": "Visadebit",
					"value": "visadebit"
				},
				{
					"name": "Vpay",
					"value": "vpay"
				},
				{
					"name": "Wechatpay",
					"value": "wechatpay"
				},
				{
					"name": "Wechatpay Pos",
					"value": "wechatpay_pos"
				}
			],
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Methods Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Payment Method Settings"
					]
				}
			}
		},
		{
			"displayName": "Vipps",
			"name": "vipps",
			"type": "json",
			"default": "{}",
			"description": "Vipps details.",
			"routing": {
				"send": {
					"property": "vipps",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Methods Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Payment Method Settings"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP basic authentication for BasicAuth",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Methods Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Payment Method Settings"
					]
				}
			}
		},
		{
			"displayName": "X API Key (Header)",
			"name": "security_apikeyauth",
			"type": "string",
			"default": "",
			"description": "API key for ApiKeyAuth (header: X-API-Key)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-Key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Methods Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Payment Method Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /merchants/{merchantId}/paymentMethodSettings/{paymentMethodId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Methods Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant ID Payment Method Settings Payment Method ID"
					]
				}
			}
		},
		{
			"displayName": "Merchant ID",
			"name": "merchantId",
			"required": true,
			"description": "The unique identifier of the merchant account.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Methods Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant ID Payment Method Settings Payment Method ID"
					]
				}
			}
		},
		{
			"displayName": "Payment Method ID",
			"name": "paymentMethodId",
			"required": true,
			"description": "The unique identifier of the payment method.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Methods Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant ID Payment Method Settings Payment Method ID"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP basic authentication for BasicAuth",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Methods Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant ID Payment Method Settings Payment Method ID"
					]
				}
			}
		},
		{
			"displayName": "X API Key (Header)",
			"name": "security_apikeyauth",
			"type": "string",
			"default": "",
			"description": "API key for ApiKeyAuth (header: X-API-Key)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-Key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Methods Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant ID Payment Method Settings Payment Method ID"
					]
				}
			}
		},
		{
			"displayName": "PATCH /merchants/{merchantId}/paymentMethodSettings/{paymentMethodId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Methods Merchant Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Payment Method Settings Payment Method ID"
					]
				}
			}
		},
		{
			"displayName": "Merchant ID",
			"name": "merchantId",
			"required": true,
			"description": "The unique identifier of the merchant account.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Methods Merchant Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Payment Method Settings Payment Method ID"
					]
				}
			}
		},
		{
			"displayName": "Payment Method ID",
			"name": "paymentMethodId",
			"required": true,
			"description": "The unique identifier of the payment method.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Methods Merchant Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Payment Method Settings Payment Method ID"
					]
				}
			}
		},
		{
			"displayName": "Countries",
			"name": "countries",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The list of countries where a payment method is available. By default, all countries supported by the payment method.",
			"routing": {
				"send": {
					"property": "countries",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Methods Merchant Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Payment Method Settings Payment Method ID"
					]
				}
			}
		},
		{
			"displayName": "Currencies",
			"name": "currencies",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The list of currencies that a payment method supports. By default, all currencies supported by the payment method.",
			"routing": {
				"send": {
					"property": "currencies",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Methods Merchant Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Payment Method Settings Payment Method ID"
					]
				}
			}
		},
		{
			"displayName": "Custom Routing Flags",
			"name": "customRoutingFlags",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Custom routing flags for acquirer routing.",
			"routing": {
				"send": {
					"property": "customRoutingFlags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Methods Merchant Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Payment Method Settings Payment Method ID"
					]
				}
			}
		},
		{
			"displayName": "Enabled",
			"name": "enabled",
			"type": "boolean",
			"default": true,
			"description": "Indicates whether the payment method is enabled (**true**) or disabled (**false**).",
			"routing": {
				"send": {
					"property": "enabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Methods Merchant Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Payment Method Settings Payment Method ID"
					]
				}
			}
		},
		{
			"displayName": "Shopper Statement",
			"name": "shopperStatement",
			"type": "json",
			"default": "{\n  \"type\": \"dynamic\"\n}",
			"description": "Information regarding the shopper statement.",
			"routing": {
				"send": {
					"property": "shopperStatement",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Methods Merchant Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Payment Method Settings Payment Method ID"
					]
				}
			}
		},
		{
			"displayName": "Store Ids",
			"name": "storeIds",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The list of stores for this payment method",
			"routing": {
				"send": {
					"property": "storeIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Methods Merchant Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Payment Method Settings Payment Method ID"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP basic authentication for BasicAuth",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Methods Merchant Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Payment Method Settings Payment Method ID"
					]
				}
			}
		},
		{
			"displayName": "X API Key (Header)",
			"name": "security_apikeyauth",
			"type": "string",
			"default": "",
			"description": "API key for ApiKeyAuth (header: X-API-Key)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-Key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Methods Merchant Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Payment Method Settings Payment Method ID"
					]
				}
			}
		},
		{
			"displayName": "POST /merchants/{merchantId}/paymentMethodSettings/{paymentMethodId}/addApplePayDomains",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Methods Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Payment Method Settings Payment Method ID Add Apple Pay Domains"
					]
				}
			}
		},
		{
			"displayName": "Merchant ID",
			"name": "merchantId",
			"required": true,
			"description": "The unique identifier of the merchant account.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Methods Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Payment Method Settings Payment Method ID Add Apple Pay Domains"
					]
				}
			}
		},
		{
			"displayName": "Payment Method ID",
			"name": "paymentMethodId",
			"required": true,
			"description": "The unique identifier of the payment method.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Methods Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Payment Method Settings Payment Method ID Add Apple Pay Domains"
					]
				}
			}
		},
		{
			"displayName": "Domains",
			"name": "domains",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The list of merchant domains. Maximum: 99 domains per request.\n\nFor more information, see [Apple Pay documentation](https://docs.adyen.com/payment-methods/apple-pay/web-drop-in?tab=adyen-certificate-live_1#going-live).",
			"routing": {
				"send": {
					"property": "domains",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Methods Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Payment Method Settings Payment Method ID Add Apple Pay Domains"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP basic authentication for BasicAuth",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Methods Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Payment Method Settings Payment Method ID Add Apple Pay Domains"
					]
				}
			}
		},
		{
			"displayName": "X API Key (Header)",
			"name": "security_apikeyauth",
			"type": "string",
			"default": "",
			"description": "API key for ApiKeyAuth (header: X-API-Key)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-Key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Methods Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Payment Method Settings Payment Method ID Add Apple Pay Domains"
					]
				}
			}
		},
		{
			"displayName": "GET /merchants/{merchantId}/paymentMethodSettings/{paymentMethodId}/getApplePayDomains",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Methods Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant ID Payment Method Settings Payment Method ID Get Apple Pay Domains"
					]
				}
			}
		},
		{
			"displayName": "Merchant ID",
			"name": "merchantId",
			"required": true,
			"description": "The unique identifier of the merchant account.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Methods Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant ID Payment Method Settings Payment Method ID Get Apple Pay Domains"
					]
				}
			}
		},
		{
			"displayName": "Payment Method ID",
			"name": "paymentMethodId",
			"required": true,
			"description": "The unique identifier of the payment method.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Methods Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant ID Payment Method Settings Payment Method ID Get Apple Pay Domains"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP basic authentication for BasicAuth",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Methods Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant ID Payment Method Settings Payment Method ID Get Apple Pay Domains"
					]
				}
			}
		},
		{
			"displayName": "X API Key (Header)",
			"name": "security_apikeyauth",
			"type": "string",
			"default": "",
			"description": "API key for ApiKeyAuth (header: X-API-Key)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-Key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Methods Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant ID Payment Method Settings Payment Method ID Get Apple Pay Domains"
					]
				}
			}
		},
];
