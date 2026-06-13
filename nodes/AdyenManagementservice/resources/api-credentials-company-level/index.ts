import type { INodeProperties } from 'n8n-workflow';

export const apiCredentialsCompanyLevelDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"API Credentials Company Level"
					]
				}
			},
			"options": [
				{
					"name": "Get Companies Company ID API Credentials",
					"value": "Get Companies Company ID API Credentials",
					"action": "Get a list of API credentials",
					"description": "Returns the list of [API credentials](https://docs.adyen.com/development-resources/api-credentials) for the company account. The list is grouped into pages as defined by the query parameters.\n\nTo make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—API credentials read and write",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/companies/{{$parameter[\"companyId\"]}}/apiCredentials"
						}
					}
				},
				{
					"name": "Post Companies Company ID API Credentials",
					"value": "Post Companies Company ID API Credentials",
					"action": "Create an API credential.",
					"description": "Creates an [API credential](https://docs.adyen.com/development-resources/api-credentials) for the company account identified in the path. In the request, you can specify which merchant accounts the new API credential will have access to, as well as its roles and allowed origins.\n\nThe response includes several types of authentication details:\n* [API key](https://docs.adyen.com/development-resources/api-authentication#api-key-authentication): used for API request authentication.\n* [Client key](https://docs.adyen.com/development-resources/client-side-authentication#how-it-works): public key used for client-side authentication.\n* [Username and password](https://docs.adyen.com/development-resources/api-authentication#using-basic-authentication): used for basic authentication.\n\n> Make sure you store the API key securely in your system. You won't be able to retrieve it later.\n\nIf your API key is lost or compromised, you need to [generate a new API key](https://docs.adyen.com/api-explorer/#/ManagementService/v1/post/companies/{companyId}/apiCredentials/{apiCredentialId}/generateApiKey).\n\nTo make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—API credentials read and write",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/companies/{{$parameter[\"companyId\"]}}/apiCredentials"
						}
					}
				},
				{
					"name": "Get Companies Company ID API Credentials API Credential ID",
					"value": "Get Companies Company ID API Credentials API Credential ID",
					"action": "Get an API credential",
					"description": "Returns the [API credential](https://docs.adyen.com/development-resources/api-credentials) identified in the path.\n\nTo make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—API credentials read and write",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/companies/{{$parameter[\"companyId\"]}}/apiCredentials/{{$parameter[\"apiCredentialId\"]}}"
						}
					}
				},
				{
					"name": "Patch Companies Company ID API Credentials API Credential ID",
					"value": "Patch Companies Company ID API Credentials API Credential ID",
					"action": "Update an API credential.",
					"description": "Changes the API credential's roles, merchant account access, or allowed origins. The request has the new values for the fields you want to change. The response contains the full updated API credential, including the new values from the request. \n\nTo make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—API credentials read and write",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/companies/{{$parameter[\"companyId\"]}}/apiCredentials/{{$parameter[\"apiCredentialId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /companies/{companyId}/apiCredentials",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"API Credentials Company Level"
					],
					"operation": [
						"Get Companies Company ID API Credentials"
					]
				}
			}
		},
		{
			"displayName": "Company ID",
			"name": "companyId",
			"required": true,
			"description": "The unique identifier of the company account.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"API Credentials Company Level"
					],
					"operation": [
						"Get Companies Company ID API Credentials"
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
						"API Credentials Company Level"
					],
					"operation": [
						"Get Companies Company ID API Credentials"
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
						"API Credentials Company Level"
					],
					"operation": [
						"Get Companies Company ID API Credentials"
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
						"API Credentials Company Level"
					],
					"operation": [
						"Get Companies Company ID API Credentials"
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
						"API Credentials Company Level"
					],
					"operation": [
						"Get Companies Company ID API Credentials"
					]
				}
			}
		},
		{
			"displayName": "POST /companies/{companyId}/apiCredentials",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"API Credentials Company Level"
					],
					"operation": [
						"Post Companies Company ID API Credentials"
					]
				}
			}
		},
		{
			"displayName": "Company ID",
			"name": "companyId",
			"required": true,
			"description": "The unique identifier of the company account.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"API Credentials Company Level"
					],
					"operation": [
						"Post Companies Company ID API Credentials"
					]
				}
			}
		},
		{
			"displayName": "Allowed Origins",
			"name": "allowedOrigins",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "List of [allowed origins](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) for the new API credential.",
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
						"API Credentials Company Level"
					],
					"operation": [
						"Post Companies Company ID API Credentials"
					]
				}
			}
		},
		{
			"displayName": "Associated Merchant Accounts",
			"name": "associatedMerchantAccounts",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "List of merchant accounts that the API credential has access to.",
			"routing": {
				"send": {
					"property": "associatedMerchantAccounts",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"API Credentials Company Level"
					],
					"operation": [
						"Post Companies Company ID API Credentials"
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
						"API Credentials Company Level"
					],
					"operation": [
						"Post Companies Company ID API Credentials"
					]
				}
			}
		},
		{
			"displayName": "Roles",
			"name": "roles",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "List of [roles](https://docs.adyen.com/development-resources/api-credentials#roles-1) of the API credential.",
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
						"API Credentials Company Level"
					],
					"operation": [
						"Post Companies Company ID API Credentials"
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
						"API Credentials Company Level"
					],
					"operation": [
						"Post Companies Company ID API Credentials"
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
						"API Credentials Company Level"
					],
					"operation": [
						"Post Companies Company ID API Credentials"
					]
				}
			}
		},
		{
			"displayName": "GET /companies/{companyId}/apiCredentials/{apiCredentialId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"API Credentials Company Level"
					],
					"operation": [
						"Get Companies Company ID API Credentials API Credential ID"
					]
				}
			}
		},
		{
			"displayName": "Company ID",
			"name": "companyId",
			"required": true,
			"description": "The unique identifier of the company account.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"API Credentials Company Level"
					],
					"operation": [
						"Get Companies Company ID API Credentials API Credential ID"
					]
				}
			}
		},
		{
			"displayName": "API Credential ID",
			"name": "apiCredentialId",
			"required": true,
			"description": "Unique identifier of the API credential.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"API Credentials Company Level"
					],
					"operation": [
						"Get Companies Company ID API Credentials API Credential ID"
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
						"API Credentials Company Level"
					],
					"operation": [
						"Get Companies Company ID API Credentials API Credential ID"
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
						"API Credentials Company Level"
					],
					"operation": [
						"Get Companies Company ID API Credentials API Credential ID"
					]
				}
			}
		},
		{
			"displayName": "PATCH /companies/{companyId}/apiCredentials/{apiCredentialId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"API Credentials Company Level"
					],
					"operation": [
						"Patch Companies Company ID API Credentials API Credential ID"
					]
				}
			}
		},
		{
			"displayName": "Company ID",
			"name": "companyId",
			"required": true,
			"description": "The unique identifier of the company account.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"API Credentials Company Level"
					],
					"operation": [
						"Patch Companies Company ID API Credentials API Credential ID"
					]
				}
			}
		},
		{
			"displayName": "API Credential ID",
			"name": "apiCredentialId",
			"required": true,
			"description": "Unique identifier of the API credential.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"API Credentials Company Level"
					],
					"operation": [
						"Patch Companies Company ID API Credentials API Credential ID"
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
						"API Credentials Company Level"
					],
					"operation": [
						"Patch Companies Company ID API Credentials API Credential ID"
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
						"API Credentials Company Level"
					],
					"operation": [
						"Patch Companies Company ID API Credentials API Credential ID"
					]
				}
			}
		},
		{
			"displayName": "Associated Merchant Accounts",
			"name": "associatedMerchantAccounts",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "List of merchant accounts that the API credential has access to.",
			"routing": {
				"send": {
					"property": "associatedMerchantAccounts",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"API Credentials Company Level"
					],
					"operation": [
						"Patch Companies Company ID API Credentials API Credential ID"
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
						"API Credentials Company Level"
					],
					"operation": [
						"Patch Companies Company ID API Credentials API Credential ID"
					]
				}
			}
		},
		{
			"displayName": "Roles",
			"name": "roles",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "List of [roles](https://docs.adyen.com/development-resources/api-credentials#roles-1) of the API credential.",
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
						"API Credentials Company Level"
					],
					"operation": [
						"Patch Companies Company ID API Credentials API Credential ID"
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
						"API Credentials Company Level"
					],
					"operation": [
						"Patch Companies Company ID API Credentials API Credential ID"
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
						"API Credentials Company Level"
					],
					"operation": [
						"Patch Companies Company ID API Credentials API Credential ID"
					]
				}
			}
		},
];
