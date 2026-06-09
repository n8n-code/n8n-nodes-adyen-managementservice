import type { INodeProperties } from 'n8n-workflow';

export const allowedOriginsMerchantLevelDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Allowed Origins Merchant Level"
					]
				}
			},
			"options": [
				{
					"name": "Get Merchants Merchant ID API Credentials API Credential ID Allowed Origins",
					"value": "Get Merchants Merchant ID API Credentials API Credential ID Allowed Origins",
					"action": "Get a list of allowed origins",
					"description": "Returns the list of [allowed origins](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) for the API credential identified in the path.\n\nTo make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—API credentials read and write",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/merchants/{{$parameter[\"merchantId\"]}}/apiCredentials/{{$parameter[\"apiCredentialId\"]}}/allowedOrigins"
						}
					}
				},
				{
					"name": "Post Merchants Merchant ID API Credentials API Credential ID Allowed Origins",
					"value": "Post Merchants Merchant ID API Credentials API Credential ID Allowed Origins",
					"action": "Create an allowed origin",
					"description": "Adds a new [allowed origin](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) to the API credential's list of allowed origins.\n\nTo make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—API credentials read and write",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/merchants/{{$parameter[\"merchantId\"]}}/apiCredentials/{{$parameter[\"apiCredentialId\"]}}/allowedOrigins"
						}
					}
				},
				{
					"name": "Delete Merchants Merchant ID API Credentials API Credential ID Allowed Origins Origin ID",
					"value": "Delete Merchants Merchant ID API Credentials API Credential ID Allowed Origins Origin ID",
					"action": "Delete an allowed origin",
					"description": "Removes the [allowed origin](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) identified in the path. As soon as an allowed origin is removed, we no longer accept client-side requests from that domain.\n\nTo make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—API credentials read and write",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/merchants/{{$parameter[\"merchantId\"]}}/apiCredentials/{{$parameter[\"apiCredentialId\"]}}/allowedOrigins/{{$parameter[\"originId\"]}}"
						}
					}
				},
				{
					"name": "Get Merchants Merchant ID API Credentials API Credential ID Allowed Origins Origin ID",
					"value": "Get Merchants Merchant ID API Credentials API Credential ID Allowed Origins Origin ID",
					"action": "Get an allowed origin",
					"description": "Returns the [allowed origin](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) identified in the path.\n\nTo make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—API credentials read and write",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/merchants/{{$parameter[\"merchantId\"]}}/apiCredentials/{{$parameter[\"apiCredentialId\"]}}/allowedOrigins/{{$parameter[\"originId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /merchants/{merchantId}/apiCredentials/{apiCredentialId}/allowedOrigins",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Allowed Origins Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant ID API Credentials API Credential ID Allowed Origins"
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
						"Allowed Origins Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant ID API Credentials API Credential ID Allowed Origins"
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
						"Allowed Origins Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant ID API Credentials API Credential ID Allowed Origins"
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
						"Allowed Origins Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant ID API Credentials API Credential ID Allowed Origins"
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
						"Allowed Origins Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant ID API Credentials API Credential ID Allowed Origins"
					]
				}
			}
		},
		{
			"displayName": "POST /merchants/{merchantId}/apiCredentials/{apiCredentialId}/allowedOrigins",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Allowed Origins Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID API Credentials API Credential ID Allowed Origins"
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
						"Allowed Origins Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID API Credentials API Credential ID Allowed Origins"
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
						"Allowed Origins Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID API Credentials API Credential ID Allowed Origins"
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
						"Allowed Origins Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID API Credentials API Credential ID Allowed Origins"
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
						"Allowed Origins Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID API Credentials API Credential ID Allowed Origins"
					]
				}
			}
		},
		{
			"displayName": "ID",
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
						"Allowed Origins Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID API Credentials API Credential ID Allowed Origins"
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
						"Allowed Origins Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID API Credentials API Credential ID Allowed Origins"
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
						"Allowed Origins Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID API Credentials API Credential ID Allowed Origins"
					]
				}
			}
		},
		{
			"displayName": "DELETE /merchants/{merchantId}/apiCredentials/{apiCredentialId}/allowedOrigins/{originId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Allowed Origins Merchant Level"
					],
					"operation": [
						"Delete Merchants Merchant ID API Credentials API Credential ID Allowed Origins Origin ID"
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
						"Allowed Origins Merchant Level"
					],
					"operation": [
						"Delete Merchants Merchant ID API Credentials API Credential ID Allowed Origins Origin ID"
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
						"Allowed Origins Merchant Level"
					],
					"operation": [
						"Delete Merchants Merchant ID API Credentials API Credential ID Allowed Origins Origin ID"
					]
				}
			}
		},
		{
			"displayName": "Origin ID",
			"name": "originId",
			"required": true,
			"description": "Unique identifier of the allowed origin.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Allowed Origins Merchant Level"
					],
					"operation": [
						"Delete Merchants Merchant ID API Credentials API Credential ID Allowed Origins Origin ID"
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
						"Allowed Origins Merchant Level"
					],
					"operation": [
						"Delete Merchants Merchant ID API Credentials API Credential ID Allowed Origins Origin ID"
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
						"Allowed Origins Merchant Level"
					],
					"operation": [
						"Delete Merchants Merchant ID API Credentials API Credential ID Allowed Origins Origin ID"
					]
				}
			}
		},
		{
			"displayName": "GET /merchants/{merchantId}/apiCredentials/{apiCredentialId}/allowedOrigins/{originId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Allowed Origins Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant ID API Credentials API Credential ID Allowed Origins Origin ID"
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
						"Allowed Origins Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant ID API Credentials API Credential ID Allowed Origins Origin ID"
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
						"Allowed Origins Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant ID API Credentials API Credential ID Allowed Origins Origin ID"
					]
				}
			}
		},
		{
			"displayName": "Origin ID",
			"name": "originId",
			"required": true,
			"description": "Unique identifier of the allowed origin.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Allowed Origins Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant ID API Credentials API Credential ID Allowed Origins Origin ID"
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
						"Allowed Origins Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant ID API Credentials API Credential ID Allowed Origins Origin ID"
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
						"Allowed Origins Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant ID API Credentials API Credential ID Allowed Origins Origin ID"
					]
				}
			}
		},
];
