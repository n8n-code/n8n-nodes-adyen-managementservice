import type { INodeProperties } from 'n8n-workflow';

export const allowedOriginsCompanyLevelDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Allowed Origins Company Level"
					]
				}
			},
			"options": [
				{
					"name": "Get Companies Company Id Api Credentials Api Credential Id Allowed Origins",
					"value": "Get Companies Company Id Api Credentials Api Credential Id Allowed Origins",
					"action": "Get a list of allowed origins",
					"description": "Returns the list of [allowed origins](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) for the API credential identified in the path.\n\nTo make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—API credentials read and write",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/companies/{{$parameter[\"companyId\"]}}/apiCredentials/{{$parameter[\"apiCredentialId\"]}}/allowedOrigins"
						}
					}
				},
				{
					"name": "Post Companies Company Id Api Credentials Api Credential Id Allowed Origins",
					"value": "Post Companies Company Id Api Credentials Api Credential Id Allowed Origins",
					"action": "Create an allowed origin",
					"description": "Adds a new [allowed origin](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) to the API credential's list of allowed origins.\n\nTo make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—API credentials read and write",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/companies/{{$parameter[\"companyId\"]}}/apiCredentials/{{$parameter[\"apiCredentialId\"]}}/allowedOrigins"
						}
					}
				},
				{
					"name": "Delete Companies Company Id Api Credentials Api Credential Id Allowed Origins Origin Id",
					"value": "Delete Companies Company Id Api Credentials Api Credential Id Allowed Origins Origin Id",
					"action": "Delete an allowed origin",
					"description": "Removes the [allowed origin](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) identified in the path. As soon as an allowed origin is removed, we no longer accept client-side requests from that domain.\n\nTo make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—API credentials read and write",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/companies/{{$parameter[\"companyId\"]}}/apiCredentials/{{$parameter[\"apiCredentialId\"]}}/allowedOrigins/{{$parameter[\"originId\"]}}"
						}
					}
				},
				{
					"name": "Get Companies Company Id Api Credentials Api Credential Id Allowed Origins Origin Id",
					"value": "Get Companies Company Id Api Credentials Api Credential Id Allowed Origins Origin Id",
					"action": "Get an allowed origin",
					"description": "Returns the [allowed origin](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) identified in the path.\n\nTo make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—API credentials read and write",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/companies/{{$parameter[\"companyId\"]}}/apiCredentials/{{$parameter[\"apiCredentialId\"]}}/allowedOrigins/{{$parameter[\"originId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /companies/{companyId}/apiCredentials/{apiCredentialId}/allowedOrigins",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Allowed Origins Company Level"
					],
					"operation": [
						"Get Companies Company Id Api Credentials Api Credential Id Allowed Origins"
					]
				}
			}
		},
		{
			"displayName": "Company Id",
			"name": "companyId",
			"required": true,
			"description": "The unique identifier of the company account.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Allowed Origins Company Level"
					],
					"operation": [
						"Get Companies Company Id Api Credentials Api Credential Id Allowed Origins"
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
						"Allowed Origins Company Level"
					],
					"operation": [
						"Get Companies Company Id Api Credentials Api Credential Id Allowed Origins"
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
						"Allowed Origins Company Level"
					],
					"operation": [
						"Get Companies Company Id Api Credentials Api Credential Id Allowed Origins"
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
						"Allowed Origins Company Level"
					],
					"operation": [
						"Get Companies Company Id Api Credentials Api Credential Id Allowed Origins"
					]
				}
			}
		},
		{
			"displayName": "POST /companies/{companyId}/apiCredentials/{apiCredentialId}/allowedOrigins",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Allowed Origins Company Level"
					],
					"operation": [
						"Post Companies Company Id Api Credentials Api Credential Id Allowed Origins"
					]
				}
			}
		},
		{
			"displayName": "Company Id",
			"name": "companyId",
			"required": true,
			"description": "The unique identifier of the company account.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Allowed Origins Company Level"
					],
					"operation": [
						"Post Companies Company Id Api Credentials Api Credential Id Allowed Origins"
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
						"Allowed Origins Company Level"
					],
					"operation": [
						"Post Companies Company Id Api Credentials Api Credential Id Allowed Origins"
					]
				}
			}
		},
		{
			"displayName": "Links",
			"name": "_links",
			"type": "json",
			"default": "{\n  \"self\": {}\n}",
			"description": "References to resources linked to the allowed origin.",
			"routing": {
				"send": {
					"property": "_links",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Allowed Origins Company Level"
					],
					"operation": [
						"Post Companies Company Id Api Credentials Api Credential Id Allowed Origins"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Domain",
			"name": "domain",
			"type": "string",
			"default": "",
			"description": "Domain of the allowed origin.",
			"routing": {
				"send": {
					"property": "domain",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Allowed Origins Company Level"
					],
					"operation": [
						"Post Companies Company Id Api Credentials Api Credential Id Allowed Origins"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "",
			"description": "Unique identifier of the allowed origin.",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Allowed Origins Company Level"
					],
					"operation": [
						"Post Companies Company Id Api Credentials Api Credential Id Allowed Origins"
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
						"Allowed Origins Company Level"
					],
					"operation": [
						"Post Companies Company Id Api Credentials Api Credential Id Allowed Origins"
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
						"Allowed Origins Company Level"
					],
					"operation": [
						"Post Companies Company Id Api Credentials Api Credential Id Allowed Origins"
					]
				}
			}
		},
		{
			"displayName": "DELETE /companies/{companyId}/apiCredentials/{apiCredentialId}/allowedOrigins/{originId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Allowed Origins Company Level"
					],
					"operation": [
						"Delete Companies Company Id Api Credentials Api Credential Id Allowed Origins Origin Id"
					]
				}
			}
		},
		{
			"displayName": "Company Id",
			"name": "companyId",
			"required": true,
			"description": "The unique identifier of the company account.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Allowed Origins Company Level"
					],
					"operation": [
						"Delete Companies Company Id Api Credentials Api Credential Id Allowed Origins Origin Id"
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
						"Allowed Origins Company Level"
					],
					"operation": [
						"Delete Companies Company Id Api Credentials Api Credential Id Allowed Origins Origin Id"
					]
				}
			}
		},
		{
			"displayName": "Origin Id",
			"name": "originId",
			"required": true,
			"description": "Unique identifier of the allowed origin.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Allowed Origins Company Level"
					],
					"operation": [
						"Delete Companies Company Id Api Credentials Api Credential Id Allowed Origins Origin Id"
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
						"Allowed Origins Company Level"
					],
					"operation": [
						"Delete Companies Company Id Api Credentials Api Credential Id Allowed Origins Origin Id"
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
						"Allowed Origins Company Level"
					],
					"operation": [
						"Delete Companies Company Id Api Credentials Api Credential Id Allowed Origins Origin Id"
					]
				}
			}
		},
		{
			"displayName": "GET /companies/{companyId}/apiCredentials/{apiCredentialId}/allowedOrigins/{originId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Allowed Origins Company Level"
					],
					"operation": [
						"Get Companies Company Id Api Credentials Api Credential Id Allowed Origins Origin Id"
					]
				}
			}
		},
		{
			"displayName": "Company Id",
			"name": "companyId",
			"required": true,
			"description": "The unique identifier of the company account.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Allowed Origins Company Level"
					],
					"operation": [
						"Get Companies Company Id Api Credentials Api Credential Id Allowed Origins Origin Id"
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
						"Allowed Origins Company Level"
					],
					"operation": [
						"Get Companies Company Id Api Credentials Api Credential Id Allowed Origins Origin Id"
					]
				}
			}
		},
		{
			"displayName": "Origin Id",
			"name": "originId",
			"required": true,
			"description": "Unique identifier of the allowed origin.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Allowed Origins Company Level"
					],
					"operation": [
						"Get Companies Company Id Api Credentials Api Credential Id Allowed Origins Origin Id"
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
						"Allowed Origins Company Level"
					],
					"operation": [
						"Get Companies Company Id Api Credentials Api Credential Id Allowed Origins Origin Id"
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
						"Allowed Origins Company Level"
					],
					"operation": [
						"Get Companies Company Id Api Credentials Api Credential Id Allowed Origins Origin Id"
					]
				}
			}
		},
];
