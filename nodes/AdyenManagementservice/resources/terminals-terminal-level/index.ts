import type { INodeProperties } from 'n8n-workflow';

export const terminalsTerminalLevelDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Terminals Terminal Level"
					]
				}
			},
			"options": [
				{
					"name": "Get Terminals",
					"value": "Get Terminals",
					"action": "Get a list of terminals",
					"description": "Returns the payment terminals that the API credential has access to and that match the query parameters. \nWhen using `searchQuery`, other query parameters are ignored.\n\nTo make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API — Terminal actions read",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/terminals"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /terminals",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Terminals Terminal Level"
					],
					"operation": [
						"Get Terminals"
					]
				}
			}
		},
		{
			"displayName": "Search Query",
			"name": "searchQuery",
			"description": "Returns terminals with an ID that contains the specified string. If present, other query parameters are ignored.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "searchQuery",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminals Terminal Level"
					],
					"operation": [
						"Get Terminals"
					]
				}
			}
		},
		{
			"displayName": "Countries",
			"name": "countries",
			"description": "Returns terminals located in the countries specified by their [two-letter country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "countries",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminals Terminal Level"
					],
					"operation": [
						"Get Terminals"
					]
				}
			}
		},
		{
			"displayName": "Merchant Ids",
			"name": "merchantIds",
			"description": "Returns terminals that belong to the merchant accounts specified by their unique merchant account ID.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "merchantIds",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminals Terminal Level"
					],
					"operation": [
						"Get Terminals"
					]
				}
			}
		},
		{
			"displayName": "Store Ids",
			"name": "storeIds",
			"description": "Returns terminals that are assigned to the [stores](https://docs.adyen.com/api-explorer/#/ManagementService/latest/get/stores) specified by their unique store ID.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "storeIds",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminals Terminal Level"
					],
					"operation": [
						"Get Terminals"
					]
				}
			}
		},
		{
			"displayName": "Brand Models",
			"name": "brandModels",
			"description": "Returns terminals of the [models](https://docs.adyen.com/api-explorer/#/ManagementService/latest/get/companies/{companyId}/terminalModels) specified in the format *brand.model*.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "brandModels",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminals Terminal Level"
					],
					"operation": [
						"Get Terminals"
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
						"Terminals Terminal Level"
					],
					"operation": [
						"Get Terminals"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "pageSize",
			"description": "The number of items to have on a page, maximum 100. The default is 20 items on a page.",
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
						"Terminals Terminal Level"
					],
					"operation": [
						"Get Terminals"
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
						"Terminals Terminal Level"
					],
					"operation": [
						"Get Terminals"
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
						"Terminals Terminal Level"
					],
					"operation": [
						"Get Terminals"
					]
				}
			}
		},
];
