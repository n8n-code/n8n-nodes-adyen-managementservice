import type { INodeProperties } from 'n8n-workflow';

export const terminalSettingsStoreLevelDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Settings Store Level"
					]
				}
			},
			"options": [
				{
					"name": "Get Merchants Merchant ID Stores Reference Terminal Logos",
					"value": "Get Merchants Merchant ID Stores Reference Terminal Logos",
					"action": "Get the terminal logo",
					"description": "Returns the logo that is configured for a specific payment terminal model at the store identified in the path. \nThe logo is returned as a Base64-encoded string. You need to Base64-decode the string to get the actual image file. \nThis logo applies to all terminals of the specified model under the store, unless a different logo is configured for an individual terminal.\n\nTo make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—Terminal settings read\n* Management API—Terminal settings read and write",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/merchants/{{$parameter[\"merchantId\"]}}/stores/{{$parameter[\"reference\"]}}/terminalLogos"
						}
					}
				},
				{
					"name": "Patch Merchants Merchant ID Stores Reference Terminal Logos",
					"value": "Patch Merchants Merchant ID Stores Reference Terminal Logos",
					"action": "Update the terminal logo",
					"description": "Updates the logo that is configured for a specific payment terminal model at the store identified in the path. You can update the logo for only one terminal model at a time.\nThis logo applies to all terminals of the specified model under the store, unless a different logo is configured for an individual terminal. \n\n* To change the logo, specify the image file as a Base64-encoded string.\n* To restore the logo inherited from a higher level (merchant or company account), specify an empty logo value.\n\nTo make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—Terminal settings read and write",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/merchants/{{$parameter[\"merchantId\"]}}/stores/{{$parameter[\"reference\"]}}/terminalLogos"
						}
					}
				},
				{
					"name": "Get Merchants Merchant ID Stores Reference Terminal Settings",
					"value": "Get Merchants Merchant ID Stores Reference Terminal Settings",
					"action": "Get terminal settings",
					"description": "Returns the payment terminal settings that are configured for the store identified in the path. These settings apply to all terminals under the store unless different values are configured for an individual terminal.\n\nTo make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—Terminal settings read\n* Management API—Terminal settings read and write\n\nFor [sensitive terminal settings](https://docs.adyen.com/point-of-sale/automating-terminal-management/configure-terminals-api#sensitive-terminal-settings), your API credential must have the following role:\n* Management API—Terminal settings Advanced read and write",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/merchants/{{$parameter[\"merchantId\"]}}/stores/{{$parameter[\"reference\"]}}/terminalSettings"
						}
					}
				},
				{
					"name": "Patch Merchants Merchant ID Stores Reference Terminal Settings",
					"value": "Patch Merchants Merchant ID Stores Reference Terminal Settings",
					"action": "Update terminal settings",
					"description": "Updates payment terminal settings for the store identified in the path. These settings apply to all terminals under the store, unless different values are configured for an individual terminal.\n\n* To change a parameter value, include the full object that contains the parameter, even if you don't want to change all parameters in the object.\n* To restore a parameter value inherited from a higher level, include the full object that contains the parameter, and specify an empty value for the parameter or omit the parameter.\n* Objects that are not included in the request are not updated.\n\nTo make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—Terminal settings read and write\n\nFor [sensitive terminal settings](https://docs.adyen.com/point-of-sale/automating-terminal-management/configure-terminals-api#sensitive-terminal-settings), your API credential must have the following role:\n* Management API—Terminal settings Advanced read and write",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/merchants/{{$parameter[\"merchantId\"]}}/stores/{{$parameter[\"reference\"]}}/terminalSettings"
						}
					}
				},
				{
					"name": "Get Stores Store ID Terminal Logos",
					"value": "Get Stores Store ID Terminal Logos",
					"action": "Get the terminal logo",
					"description": "Returns the logo that is configured for a specific payment terminal model at the store identified in the path. \nThe logo is returned as a Base64-encoded string. You need to Base64-decode the string to get the actual image file. \nThis logo applies to all terminals of that model under the store unless a different logo is configured for an individual terminal.\n\nTo make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—Terminal settings read\n* Management API—Terminal settings read and write",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/stores/{{$parameter[\"storeId\"]}}/terminalLogos"
						}
					}
				},
				{
					"name": "Patch Stores Store ID Terminal Logos",
					"value": "Patch Stores Store ID Terminal Logos",
					"action": "Update the terminal logo",
					"description": "Updates the logo that is configured for a specific payment terminal model at the store identified in the path. You can update the logo for only one terminal model at a time.\nThis logo applies to all terminals of the specified model under the store, unless a different logo is configured for an individual terminal. \n\n* To change the logo, specify the image file as a Base64-encoded string.\n* To restore the logo inherited from a higher level (merchant or company account), specify an empty logo value.\n\nTo make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—Terminal settings read and write",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/stores/{{$parameter[\"storeId\"]}}/terminalLogos"
						}
					}
				},
				{
					"name": "Get Stores Store ID Terminal Settings",
					"value": "Get Stores Store ID Terminal Settings",
					"action": "Get terminal settings",
					"description": "Returns the payment terminal settings that are configured for the store identified in the path. These settings apply to all terminals under the store unless different values are configured for an individual terminal.\n\nTo make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—Terminal settings read\n* Management API—Terminal settings read and write\n\nFor [sensitive terminal settings](https://docs.adyen.com/point-of-sale/automating-terminal-management/configure-terminals-api#sensitive-terminal-settings), your API credential must have the following role:\n* Management API—Terminal settings Advanced read and write",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/stores/{{$parameter[\"storeId\"]}}/terminalSettings"
						}
					}
				},
				{
					"name": "Patch Stores Store ID Terminal Settings",
					"value": "Patch Stores Store ID Terminal Settings",
					"action": "Update terminal settings",
					"description": "Updates payment terminal settings for the store identified in the path. These settings apply to all terminals under the store, unless different values are configured for an individual terminal.\n\n* To change a parameter value, include the full object that contains the parameter, even if you don't want to change all parameters in the object.\n* To restore a parameter value inherited from a higher level, include the full object that contains the parameter, and specify an empty value for the parameter or omit the parameter.\n* Objects that are not included in the request are not updated.\n\nTo make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—Terminal settings read and write\n\nFor [sensitive terminal settings](https://docs.adyen.com/point-of-sale/automating-terminal-management/configure-terminals-api#sensitive-terminal-settings), your API credential must have the following role:\n* Management API—Terminal settings Advanced read and write",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/stores/{{$parameter[\"storeId\"]}}/terminalSettings"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /merchants/{merchantId}/stores/{reference}/terminalLogos",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Settings Store Level"
					],
					"operation": [
						"Get Merchants Merchant ID Stores Reference Terminal Logos"
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
						"Terminal Settings Store Level"
					],
					"operation": [
						"Get Merchants Merchant ID Stores Reference Terminal Logos"
					]
				}
			}
		},
		{
			"displayName": "Reference",
			"name": "reference",
			"required": true,
			"description": "The reference that identifies the store.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Settings Store Level"
					],
					"operation": [
						"Get Merchants Merchant ID Stores Reference Terminal Logos"
					]
				}
			}
		},
		{
			"displayName": "Model",
			"name": "model",
			"required": true,
			"description": "The terminal model. Possible values: E355, VX675WIFIBT, VX680, VX690, VX700, VX820, M400, MX925, P400Plus, UX300, UX410, V200cPlus, V240mPlus, V400cPlus, V400m, e280, e285, e285p, S1E, S1EL, S1F2, S1L, S1U, S7T.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "model",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Settings Store Level"
					],
					"operation": [
						"Get Merchants Merchant ID Stores Reference Terminal Logos"
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
						"Terminal Settings Store Level"
					],
					"operation": [
						"Get Merchants Merchant ID Stores Reference Terminal Logos"
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
						"Terminal Settings Store Level"
					],
					"operation": [
						"Get Merchants Merchant ID Stores Reference Terminal Logos"
					]
				}
			}
		},
		{
			"displayName": "PATCH /merchants/{merchantId}/stores/{reference}/terminalLogos",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Settings Store Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Stores Reference Terminal Logos"
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
						"Terminal Settings Store Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Stores Reference Terminal Logos"
					]
				}
			}
		},
		{
			"displayName": "Reference",
			"name": "reference",
			"required": true,
			"description": "The reference that identifies the store.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Settings Store Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Stores Reference Terminal Logos"
					]
				}
			}
		},
		{
			"displayName": "Model",
			"name": "model",
			"required": true,
			"description": "The terminal model. Possible values: E355, VX675WIFIBT, VX680, VX690, VX700, VX820, M400, MX925, P400Plus, UX300, UX410, V200cPlus, V240mPlus, V400cPlus, V400m, e280, e285, e285p, S1E, S1EL, S1F2, S1L, S1U, S7T",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "model",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Settings Store Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Stores Reference Terminal Logos"
					]
				}
			}
		},
		{
			"displayName": "Data",
			"name": "data",
			"type": "string",
			"default": "",
			"description": "The image file, converted to a Base64-encoded string, of the logo to be shown on the terminal.",
			"routing": {
				"send": {
					"property": "data",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Settings Store Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Stores Reference Terminal Logos"
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
						"Terminal Settings Store Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Stores Reference Terminal Logos"
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
						"Terminal Settings Store Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Stores Reference Terminal Logos"
					]
				}
			}
		},
		{
			"displayName": "GET /merchants/{merchantId}/stores/{reference}/terminalSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Settings Store Level"
					],
					"operation": [
						"Get Merchants Merchant ID Stores Reference Terminal Settings"
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
						"Terminal Settings Store Level"
					],
					"operation": [
						"Get Merchants Merchant ID Stores Reference Terminal Settings"
					]
				}
			}
		},
		{
			"displayName": "Reference",
			"name": "reference",
			"required": true,
			"description": "The reference that identifies the store.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Settings Store Level"
					],
					"operation": [
						"Get Merchants Merchant ID Stores Reference Terminal Settings"
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
						"Terminal Settings Store Level"
					],
					"operation": [
						"Get Merchants Merchant ID Stores Reference Terminal Settings"
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
						"Terminal Settings Store Level"
					],
					"operation": [
						"Get Merchants Merchant ID Stores Reference Terminal Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /merchants/{merchantId}/stores/{reference}/terminalSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Settings Store Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Stores Reference Terminal Settings"
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
						"Terminal Settings Store Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Stores Reference Terminal Settings"
					]
				}
			}
		},
		{
			"displayName": "Reference",
			"name": "reference",
			"required": true,
			"description": "The reference that identifies the store.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Settings Store Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Stores Reference Terminal Settings"
					]
				}
			}
		},
		{
			"displayName": "Cardholder Receipt",
			"name": "cardholderReceipt",
			"type": "json",
			"default": "{}",
			"description": "Settings to define the header of the shopper receipt.",
			"routing": {
				"send": {
					"property": "cardholderReceipt",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Settings Store Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Stores Reference Terminal Settings"
					]
				}
			}
		},
		{
			"displayName": "Connectivity",
			"name": "connectivity",
			"type": "json",
			"default": "{}",
			"description": "Settings for terminal connectivity features.",
			"routing": {
				"send": {
					"property": "connectivity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Settings Store Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Stores Reference Terminal Settings"
					]
				}
			}
		},
		{
			"displayName": "Gratuities",
			"name": "gratuities",
			"type": "json",
			"default": "[\n  {\n    \"predefinedTipEntries\": [\n      null\n    ]\n  }\n]",
			"description": "Settings for tipping with or without predefined options to choose from. The maximum number of predefined options is four, or three plus the option to enter a custom tip.",
			"routing": {
				"send": {
					"property": "gratuities",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Settings Store Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Stores Reference Terminal Settings"
					]
				}
			}
		},
		{
			"displayName": "Hardware",
			"name": "hardware",
			"type": "json",
			"default": "{}",
			"description": "Settings for terminal hardware features.",
			"routing": {
				"send": {
					"property": "hardware",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Settings Store Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Stores Reference Terminal Settings"
					]
				}
			}
		},
		{
			"displayName": "Nexo",
			"name": "nexo",
			"type": "json",
			"default": "{\n  \"displayUrls\": {\n    \"localUrls\": [\n      {}\n    ],\n    \"publicUrls\": [\n      {}\n    ]\n  },\n  \"encryptionKey\": {},\n  \"eventUrls\": {\n    \"eventLocalUrls\": [\n      {}\n    ],\n    \"eventPublicUrls\": [\n      {}\n    ]\n  },\n  \"nexoEventUrls\": [\n    null\n  ]\n}",
			"description": "Settings for a Terminal API integration.",
			"routing": {
				"send": {
					"property": "nexo",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Settings Store Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Stores Reference Terminal Settings"
					]
				}
			}
		},
		{
			"displayName": "Offline Processing",
			"name": "offlineProcessing",
			"type": "json",
			"default": "{\n  \"offlineSwipeLimits\": [\n    {}\n  ]\n}",
			"description": "Settings for [offline payment](https://docs.adyen.com/point-of-sale/offline-payments) features.",
			"routing": {
				"send": {
					"property": "offlineProcessing",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Settings Store Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Stores Reference Terminal Settings"
					]
				}
			}
		},
		{
			"displayName": "Opi",
			"name": "opi",
			"type": "json",
			"default": "{}",
			"description": "Settings for an Oracle Payment Interface (OPI) integration.",
			"routing": {
				"send": {
					"property": "opi",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Settings Store Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Stores Reference Terminal Settings"
					]
				}
			}
		},
		{
			"displayName": "Passcodes",
			"name": "passcodes",
			"type": "json",
			"default": "{}",
			"description": "Settings for [passcodes](https://docs.adyen.com/point-of-sale/managing-terminals/menu-access?tab=manage_passcodes_with_an_api_call_2#manage-passcodes) features.",
			"routing": {
				"send": {
					"property": "passcodes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Settings Store Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Stores Reference Terminal Settings"
					]
				}
			}
		},
		{
			"displayName": "Pay At Table",
			"name": "payAtTable",
			"type": "json",
			"default": "{}",
			"description": "Settings for [Pay-at-table](https://docs.adyen.com/point-of-sale/pay-at-x) features.",
			"routing": {
				"send": {
					"property": "payAtTable",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Settings Store Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Stores Reference Terminal Settings"
					]
				}
			}
		},
		{
			"displayName": "Payment",
			"name": "payment",
			"type": "json",
			"default": "{\n  \"hideMinorUnitsInCurrencies\": [\n    null\n  ]\n}",
			"description": "Settings for payment features.",
			"routing": {
				"send": {
					"property": "payment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Settings Store Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Stores Reference Terminal Settings"
					]
				}
			}
		},
		{
			"displayName": "Receipt Options",
			"name": "receiptOptions",
			"type": "json",
			"default": "{}",
			"description": "Generic receipt settings.",
			"routing": {
				"send": {
					"property": "receiptOptions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Settings Store Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Stores Reference Terminal Settings"
					]
				}
			}
		},
		{
			"displayName": "Receipt Printing",
			"name": "receiptPrinting",
			"type": "json",
			"default": "{}",
			"description": "Transaction outcomes that you want the terminal to print a merchant receipt or a shopper receipt for.",
			"routing": {
				"send": {
					"property": "receiptPrinting",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Settings Store Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Stores Reference Terminal Settings"
					]
				}
			}
		},
		{
			"displayName": "Signature",
			"name": "signature",
			"type": "json",
			"default": "{}",
			"description": "Settings to skip signature, sign on display, or sign on receipt.",
			"routing": {
				"send": {
					"property": "signature",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Settings Store Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Stores Reference Terminal Settings"
					]
				}
			}
		},
		{
			"displayName": "Standalone",
			"name": "standalone",
			"type": "json",
			"default": "{}",
			"description": "Settings for [standalone](https://docs.adyen.com/point-of-sale/standalone/standalone-build/set-up-standalone#set-up-standalone-using-an-api-call) features.",
			"routing": {
				"send": {
					"property": "standalone",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Settings Store Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Stores Reference Terminal Settings"
					]
				}
			}
		},
		{
			"displayName": "Surcharge",
			"name": "surcharge",
			"type": "json",
			"default": "{\n  \"configurations\": [\n    {\n      \"currencies\": [\n        {}\n      ],\n      \"sources\": [\n        null\n      ]\n    }\n  ]\n}",
			"description": "Settings for payment [surcharge](https://docs.adyen.com/point-of-sale/surcharge) features.",
			"routing": {
				"send": {
					"property": "surcharge",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Settings Store Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Stores Reference Terminal Settings"
					]
				}
			}
		},
		{
			"displayName": "Timeouts",
			"name": "timeouts",
			"type": "json",
			"default": "{}",
			"description": "Settings for device [time-outs](https://docs.adyen.com/point-of-sale/pos-timeouts#device-time-out).",
			"routing": {
				"send": {
					"property": "timeouts",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Settings Store Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Stores Reference Terminal Settings"
					]
				}
			}
		},
		{
			"displayName": "Wifi Profiles",
			"name": "wifiProfiles",
			"type": "json",
			"default": "{\n  \"profiles\": [\n    {\n      \"eapCaCert\": {},\n      \"eapClientCert\": {},\n      \"eapClientKey\": {},\n      \"eapIntermediateCert\": {}\n    }\n  ],\n  \"settings\": {}\n}",
			"description": "Remote Wi-Fi profiles for WPA and WPA2 PSK and EAP Wi-Fi networks.",
			"routing": {
				"send": {
					"property": "wifiProfiles",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Settings Store Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Stores Reference Terminal Settings"
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
						"Terminal Settings Store Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Stores Reference Terminal Settings"
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
						"Terminal Settings Store Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Stores Reference Terminal Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /stores/{storeId}/terminalLogos",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Settings Store Level"
					],
					"operation": [
						"Get Stores Store ID Terminal Logos"
					]
				}
			}
		},
		{
			"displayName": "Store ID",
			"name": "storeId",
			"required": true,
			"description": "The unique identifier of the store.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Settings Store Level"
					],
					"operation": [
						"Get Stores Store ID Terminal Logos"
					]
				}
			}
		},
		{
			"displayName": "Model",
			"name": "model",
			"required": true,
			"description": "The terminal model. Possible values: E355, VX675WIFIBT, VX680, VX690, VX700, VX820, M400, MX925, P400Plus, UX300, UX410, V200cPlus, V240mPlus, V400cPlus, V400m, e280, e285, e285p, S1E, S1EL, S1F2, S1L, S1U, S7T.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "model",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Settings Store Level"
					],
					"operation": [
						"Get Stores Store ID Terminal Logos"
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
						"Terminal Settings Store Level"
					],
					"operation": [
						"Get Stores Store ID Terminal Logos"
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
						"Terminal Settings Store Level"
					],
					"operation": [
						"Get Stores Store ID Terminal Logos"
					]
				}
			}
		},
		{
			"displayName": "PATCH /stores/{storeId}/terminalLogos",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Settings Store Level"
					],
					"operation": [
						"Patch Stores Store ID Terminal Logos"
					]
				}
			}
		},
		{
			"displayName": "Store ID",
			"name": "storeId",
			"required": true,
			"description": "The unique identifier of the store.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Settings Store Level"
					],
					"operation": [
						"Patch Stores Store ID Terminal Logos"
					]
				}
			}
		},
		{
			"displayName": "Model",
			"name": "model",
			"required": true,
			"description": "The terminal model. Possible values: E355, VX675WIFIBT, VX680, VX690, VX700, VX820, M400, MX925, P400Plus, UX300, UX410, V200cPlus, V240mPlus, V400cPlus, V400m, e280, e285, e285p, S1E, S1EL, S1F2, S1L, S1U, S7T.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "model",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Settings Store Level"
					],
					"operation": [
						"Patch Stores Store ID Terminal Logos"
					]
				}
			}
		},
		{
			"displayName": "Data",
			"name": "data",
			"type": "string",
			"default": "",
			"description": "The image file, converted to a Base64-encoded string, of the logo to be shown on the terminal.",
			"routing": {
				"send": {
					"property": "data",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Settings Store Level"
					],
					"operation": [
						"Patch Stores Store ID Terminal Logos"
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
						"Terminal Settings Store Level"
					],
					"operation": [
						"Patch Stores Store ID Terminal Logos"
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
						"Terminal Settings Store Level"
					],
					"operation": [
						"Patch Stores Store ID Terminal Logos"
					]
				}
			}
		},
		{
			"displayName": "GET /stores/{storeId}/terminalSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Settings Store Level"
					],
					"operation": [
						"Get Stores Store ID Terminal Settings"
					]
				}
			}
		},
		{
			"displayName": "Store ID",
			"name": "storeId",
			"required": true,
			"description": "The unique identifier of the store.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Settings Store Level"
					],
					"operation": [
						"Get Stores Store ID Terminal Settings"
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
						"Terminal Settings Store Level"
					],
					"operation": [
						"Get Stores Store ID Terminal Settings"
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
						"Terminal Settings Store Level"
					],
					"operation": [
						"Get Stores Store ID Terminal Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /stores/{storeId}/terminalSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Settings Store Level"
					],
					"operation": [
						"Patch Stores Store ID Terminal Settings"
					]
				}
			}
		},
		{
			"displayName": "Store ID",
			"name": "storeId",
			"required": true,
			"description": "The unique identifier of the store.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Settings Store Level"
					],
					"operation": [
						"Patch Stores Store ID Terminal Settings"
					]
				}
			}
		},
		{
			"displayName": "Cardholder Receipt",
			"name": "cardholderReceipt",
			"type": "json",
			"default": "{}",
			"description": "Settings to define the header of the shopper receipt.",
			"routing": {
				"send": {
					"property": "cardholderReceipt",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Settings Store Level"
					],
					"operation": [
						"Patch Stores Store ID Terminal Settings"
					]
				}
			}
		},
		{
			"displayName": "Connectivity",
			"name": "connectivity",
			"type": "json",
			"default": "{}",
			"description": "Settings for terminal connectivity features.",
			"routing": {
				"send": {
					"property": "connectivity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Settings Store Level"
					],
					"operation": [
						"Patch Stores Store ID Terminal Settings"
					]
				}
			}
		},
		{
			"displayName": "Gratuities",
			"name": "gratuities",
			"type": "json",
			"default": "[\n  {\n    \"predefinedTipEntries\": [\n      null\n    ]\n  }\n]",
			"description": "Settings for tipping with or without predefined options to choose from. The maximum number of predefined options is four, or three plus the option to enter a custom tip.",
			"routing": {
				"send": {
					"property": "gratuities",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Settings Store Level"
					],
					"operation": [
						"Patch Stores Store ID Terminal Settings"
					]
				}
			}
		},
		{
			"displayName": "Hardware",
			"name": "hardware",
			"type": "json",
			"default": "{}",
			"description": "Settings for terminal hardware features.",
			"routing": {
				"send": {
					"property": "hardware",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Settings Store Level"
					],
					"operation": [
						"Patch Stores Store ID Terminal Settings"
					]
				}
			}
		},
		{
			"displayName": "Nexo",
			"name": "nexo",
			"type": "json",
			"default": "{\n  \"displayUrls\": {\n    \"localUrls\": [\n      {}\n    ],\n    \"publicUrls\": [\n      {}\n    ]\n  },\n  \"encryptionKey\": {},\n  \"eventUrls\": {\n    \"eventLocalUrls\": [\n      {}\n    ],\n    \"eventPublicUrls\": [\n      {}\n    ]\n  },\n  \"nexoEventUrls\": [\n    null\n  ]\n}",
			"description": "Settings for a Terminal API integration.",
			"routing": {
				"send": {
					"property": "nexo",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Settings Store Level"
					],
					"operation": [
						"Patch Stores Store ID Terminal Settings"
					]
				}
			}
		},
		{
			"displayName": "Offline Processing",
			"name": "offlineProcessing",
			"type": "json",
			"default": "{\n  \"offlineSwipeLimits\": [\n    {}\n  ]\n}",
			"description": "Settings for [offline payment](https://docs.adyen.com/point-of-sale/offline-payments) features.",
			"routing": {
				"send": {
					"property": "offlineProcessing",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Settings Store Level"
					],
					"operation": [
						"Patch Stores Store ID Terminal Settings"
					]
				}
			}
		},
		{
			"displayName": "Opi",
			"name": "opi",
			"type": "json",
			"default": "{}",
			"description": "Settings for an Oracle Payment Interface (OPI) integration.",
			"routing": {
				"send": {
					"property": "opi",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Settings Store Level"
					],
					"operation": [
						"Patch Stores Store ID Terminal Settings"
					]
				}
			}
		},
		{
			"displayName": "Passcodes",
			"name": "passcodes",
			"type": "json",
			"default": "{}",
			"description": "Settings for [passcodes](https://docs.adyen.com/point-of-sale/managing-terminals/menu-access?tab=manage_passcodes_with_an_api_call_2#manage-passcodes) features.",
			"routing": {
				"send": {
					"property": "passcodes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Settings Store Level"
					],
					"operation": [
						"Patch Stores Store ID Terminal Settings"
					]
				}
			}
		},
		{
			"displayName": "Pay At Table",
			"name": "payAtTable",
			"type": "json",
			"default": "{}",
			"description": "Settings for [Pay-at-table](https://docs.adyen.com/point-of-sale/pay-at-x) features.",
			"routing": {
				"send": {
					"property": "payAtTable",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Settings Store Level"
					],
					"operation": [
						"Patch Stores Store ID Terminal Settings"
					]
				}
			}
		},
		{
			"displayName": "Payment",
			"name": "payment",
			"type": "json",
			"default": "{\n  \"hideMinorUnitsInCurrencies\": [\n    null\n  ]\n}",
			"description": "Settings for payment features.",
			"routing": {
				"send": {
					"property": "payment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Settings Store Level"
					],
					"operation": [
						"Patch Stores Store ID Terminal Settings"
					]
				}
			}
		},
		{
			"displayName": "Receipt Options",
			"name": "receiptOptions",
			"type": "json",
			"default": "{}",
			"description": "Generic receipt settings.",
			"routing": {
				"send": {
					"property": "receiptOptions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Settings Store Level"
					],
					"operation": [
						"Patch Stores Store ID Terminal Settings"
					]
				}
			}
		},
		{
			"displayName": "Receipt Printing",
			"name": "receiptPrinting",
			"type": "json",
			"default": "{}",
			"description": "Transaction outcomes that you want the terminal to print a merchant receipt or a shopper receipt for.",
			"routing": {
				"send": {
					"property": "receiptPrinting",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Settings Store Level"
					],
					"operation": [
						"Patch Stores Store ID Terminal Settings"
					]
				}
			}
		},
		{
			"displayName": "Signature",
			"name": "signature",
			"type": "json",
			"default": "{}",
			"description": "Settings to skip signature, sign on display, or sign on receipt.",
			"routing": {
				"send": {
					"property": "signature",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Settings Store Level"
					],
					"operation": [
						"Patch Stores Store ID Terminal Settings"
					]
				}
			}
		},
		{
			"displayName": "Standalone",
			"name": "standalone",
			"type": "json",
			"default": "{}",
			"description": "Settings for [standalone](https://docs.adyen.com/point-of-sale/standalone/standalone-build/set-up-standalone#set-up-standalone-using-an-api-call) features.",
			"routing": {
				"send": {
					"property": "standalone",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Settings Store Level"
					],
					"operation": [
						"Patch Stores Store ID Terminal Settings"
					]
				}
			}
		},
		{
			"displayName": "Surcharge",
			"name": "surcharge",
			"type": "json",
			"default": "{\n  \"configurations\": [\n    {\n      \"currencies\": [\n        {}\n      ],\n      \"sources\": [\n        null\n      ]\n    }\n  ]\n}",
			"description": "Settings for payment [surcharge](https://docs.adyen.com/point-of-sale/surcharge) features.",
			"routing": {
				"send": {
					"property": "surcharge",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Settings Store Level"
					],
					"operation": [
						"Patch Stores Store ID Terminal Settings"
					]
				}
			}
		},
		{
			"displayName": "Timeouts",
			"name": "timeouts",
			"type": "json",
			"default": "{}",
			"description": "Settings for device [time-outs](https://docs.adyen.com/point-of-sale/pos-timeouts#device-time-out).",
			"routing": {
				"send": {
					"property": "timeouts",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Settings Store Level"
					],
					"operation": [
						"Patch Stores Store ID Terminal Settings"
					]
				}
			}
		},
		{
			"displayName": "Wifi Profiles",
			"name": "wifiProfiles",
			"type": "json",
			"default": "{\n  \"profiles\": [\n    {\n      \"eapCaCert\": {},\n      \"eapClientCert\": {},\n      \"eapClientKey\": {},\n      \"eapIntermediateCert\": {}\n    }\n  ],\n  \"settings\": {}\n}",
			"description": "Remote Wi-Fi profiles for WPA and WPA2 PSK and EAP Wi-Fi networks.",
			"routing": {
				"send": {
					"property": "wifiProfiles",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Settings Store Level"
					],
					"operation": [
						"Patch Stores Store ID Terminal Settings"
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
						"Terminal Settings Store Level"
					],
					"operation": [
						"Patch Stores Store ID Terminal Settings"
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
						"Terminal Settings Store Level"
					],
					"operation": [
						"Patch Stores Store ID Terminal Settings"
					]
				}
			}
		},
];
