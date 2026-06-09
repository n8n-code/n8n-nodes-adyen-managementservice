import type { INodeProperties } from 'n8n-workflow';

export const apiCredentialsMerchantLevelDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"API Credentials Merchant Level"
					]
				}
			},
			"options": [
				{
					"name": "Get Merchants Merchant Id Api Credentials",
					"value": "Get Merchants Merchant Id Api Credentials",
					"action": "Get a list of API credentials",
					"description": "Returns the list of [API credentials](https://docs.adyen.com/development-resources/api-credentials) for the merchant account. The list is grouped into pages as defined by the query parameters.\n\nTo make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—API credentials read and write",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/merchants/{{$parameter[\"merchantId\"]}}/apiCredentials"
						}
					}
				},
				{
					"name": "Post Merchants Merchant Id Api Credentials",
					"value": "Post Merchants Merchant Id Api Credentials",
					"action": "Create an API credential",
					"description": "Creates an [API credential](https://docs.adyen.com/development-resources/api-credentials) for the company account identified in the path. In the request, you can specify the roles and allowed origins for the new API credential.\n\nThe response includes the:\n* [API key](https://docs.adyen.com/development-resources/api-authentication#api-key-authentication): used for API request authentication.\n* [Client key](https://docs.adyen.com/development-resources/client-side-authentication#how-it-works): public key used for client-side authentication.\n* [Username and password](https://docs.adyen.com/development-resources/api-authentication#using-basic-authentication): used for basic authentication.\n\n> Make sure you store the API key securely in your system. You won't be able to retrieve it later.\n\nIf your API key is lost or compromised, you need to [generate a new API key](https://docs.adyen.com/api-explorer/#/ManagementService/v1/post/merchants/{merchantId}/apiCredentials/{apiCredentialId}/generateApiKey).\n\nTo make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—API credentials read and write",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/merchants/{{$parameter[\"merchantId\"]}}/apiCredentials"
						}
					}
				},
				{
					"name": "Get Merchants Merchant Id Api Credentials Api Credential Id",
					"value": "Get Merchants Merchant Id Api Credentials Api Credential Id",
					"action": "Get an API credential",
					"description": "Returns the [API credential](https://docs.adyen.com/development-resources/api-credentials) identified in the path.\n\nTo make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—API credentials read and write",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/merchants/{{$parameter[\"merchantId\"]}}/apiCredentials/{{$parameter[\"apiCredentialId\"]}}"
						}
					}
				},
				{
					"name": "Patch Merchants Merchant Id Api Credentials Api Credential Id",
					"value": "Patch Merchants Merchant Id Api Credentials Api Credential Id",
					"action": "Update an API credential",
					"description": "Changes the API credential's roles, or allowed origins. The request has the new values for the fields you want to change. The response contains the full updated API credential, including the new values from the request. \n\nTo make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—API credentials read and write",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/merchants/{{$parameter[\"merchantId\"]}}/apiCredentials/{{$parameter[\"apiCredentialId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /merchants/{merchantId}/apiCredentials",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"API Credentials Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant Id Api Credentials"
					]
				}
			}
		},
		{
			"displayName": "Merchant Id",
			"name": "merchantId",
			"required": true,
			"description": "The unique identifier of the merchant account.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"API Credentials Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant Id Api Credentials"
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
						"API Credentials Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant Id Api Credentials"
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
						"API Credentials Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant Id Api Credentials"
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
						"API Credentials Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant Id Api Credentials"
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
						"API Credentials Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant Id Api Credentials"
					]
				}
			}
		},
		{
			"displayName": "POST /merchants/{merchantId}/apiCredentials",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"API Credentials Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant Id Api Credentials"
					]
				}
			}
		},
		{
			"displayName": "Merchant Id",
			"name": "merchantId",
			"required": true,
			"description": "The unique identifier of the merchant account.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"API Credentials Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant Id Api Credentials"
					]
				}
			}
		},
		{
			"displayName": "Allowed Origins",
			"name": "allowedOrigins",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The list of [allowed origins](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) for the new API credential.",
			"routing": {
				"send": {
					"property": "allowedOrigins",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"API Credentials Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant Id Api Credentials"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"description": "Description of the API credential.",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"API Credentials Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant Id Api Credentials"
					]
				}
			}
		},
		{
			"displayName": "Roles",
			"name": "roles",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "List of [roles](https://docs.adyen.com/development-resources/api-credentials#roles-1) for the API credential.",
			"routing": {
				"send": {
					"property": "roles",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"API Credentials Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant Id Api Credentials"
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
						"API Credentials Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant Id Api Credentials"
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
						"API Credentials Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant Id Api Credentials"
					]
				}
			}
		},
		{
			"displayName": "GET /merchants/{merchantId}/apiCredentials/{apiCredentialId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"API Credentials Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant Id Api Credentials Api Credential Id"
					]
				}
			}
		},
		{
			"displayName": "Merchant Id",
			"name": "merchantId",
			"required": true,
			"description": "The unique identifier of the merchant account.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"API Credentials Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant Id Api Credentials Api Credential Id"
					]
				}
			}
		},
		{
			"displayName": "Api Credential Id",
			"name": "apiCredentialId",
			"required": true,
			"description": "Unique identifier of the API credential.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"API Credentials Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant Id Api Credentials Api Credential Id"
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
						"API Credentials Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant Id Api Credentials Api Credential Id"
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
						"API Credentials Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant Id Api Credentials Api Credential Id"
					]
				}
			}
		},
		{
			"displayName": "PATCH /merchants/{merchantId}/apiCredentials/{apiCredentialId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"API Credentials Merchant Level"
					],
					"operation": [
						"Patch Merchants Merchant Id Api Credentials Api Credential Id"
					]
				}
			}
		},
		{
			"displayName": "Merchant Id",
			"name": "merchantId",
			"required": true,
			"description": "The unique identifier of the merchant account.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"API Credentials Merchant Level"
					],
					"operation": [
						"Patch Merchants Merchant Id Api Credentials Api Credential Id"
					]
				}
			}
		},
		{
			"displayName": "Api Credential Id",
			"name": "apiCredentialId",
			"required": true,
			"description": "Unique identifier of the API credential.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"API Credentials Merchant Level"
					],
					"operation": [
						"Patch Merchants Merchant Id Api Credentials Api Credential Id"
					]
				}
			}
		},
		{
			"displayName": "Active",
			"name": "active",
			"type": "boolean",
			"default": true,
			"description": "Indicates if the API credential is enabled.",
			"routing": {
				"send": {
					"property": "active",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"API Credentials Merchant Level"
					],
					"operation": [
						"Patch Merchants Merchant Id Api Credentials Api Credential Id"
					]
				}
			}
		},
		{
			"displayName": "Allowed Origins",
			"name": "allowedOrigins",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The new list of [allowed origins](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) for the API credential.",
			"routing": {
				"send": {
					"property": "allowedOrigins",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"API Credentials Merchant Level"
					],
					"operation": [
						"Patch Merchants Merchant Id Api Credentials Api Credential Id"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"description": "Description of the API credential.",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"API Credentials Merchant Level"
					],
					"operation": [
						"Patch Merchants Merchant Id Api Credentials Api Credential Id"
					]
				}
			}
		},
		{
			"displayName": "Roles",
			"name": "roles",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "List of [roles](https://docs.adyen.com/development-resources/api-credentials#roles-1) for the API credential.",
			"routing": {
				"send": {
					"property": "roles",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"API Credentials Merchant Level"
					],
					"operation": [
						"Patch Merchants Merchant Id Api Credentials Api Credential Id"
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
						"API Credentials Merchant Level"
					],
					"operation": [
						"Patch Merchants Merchant Id Api Credentials Api Credential Id"
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
						"API Credentials Merchant Level"
					],
					"operation": [
						"Patch Merchants Merchant Id Api Credentials Api Credential Id"
					]
				}
			}
		},
];
