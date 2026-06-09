import type { INodeProperties } from 'n8n-workflow';

export const myApiCredentialDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"My API Credential"
					]
				}
			},
			"options": [
				{
					"name": "Get Me",
					"value": "Get Me",
					"action": "Get API credential details",
					"description": "Returns your [API credential](https://docs.adyen.com/development-resources/api-credentials) details based on the API Key you used in the request.\n\nYou can make this request with any of the Management API roles.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me"
						}
					}
				},
				{
					"name": "Get Me Allowed Origins",
					"value": "Get Me Allowed Origins",
					"action": "Get allowed origins",
					"description": "Returns the list of [allowed origins](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) of your [API credential](https://docs.adyen.com/development-resources/api-credentials) based on the API key you used in the request.\n\nYou can make this request with any of the Management API roles.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/allowedOrigins"
						}
					}
				},
				{
					"name": "Post Me Allowed Origins",
					"value": "Post Me Allowed Origins",
					"action": "Add allowed origin",
					"description": "Adds an allowed origin to the list of [allowed origins](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) of your API credential.\nThe API key from the request is used to identify the [API credential](https://docs.adyen.com/development-resources/api-credentials).\n\nYou can make this request with any of the Management API roles.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/allowedOrigins"
						}
					}
				},
				{
					"name": "Delete Me Allowed Origins Origin ID",
					"value": "Delete Me Allowed Origins Origin ID",
					"action": "Remove allowed origin",
					"description": "Removes the [allowed origin](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) specified in the path.\nThe API key from the request is used to identify the [API credential](https://docs.adyen.com/development-resources/api-credentials).\n\nYou can make this request with any of the Management API roles.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/allowedOrigins/{{$parameter[\"originId\"]}}"
						}
					}
				},
				{
					"name": "Get Me Allowed Origins Origin ID",
					"value": "Get Me Allowed Origins Origin ID",
					"action": "Get allowed origin details",
					"description": "Returns the details of the [allowed origin](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) specified in the path.\nThe API key from the request is used to identify the [API credential](https://docs.adyen.com/development-resources/api-credentials).\n\nYou can make this request with any of the Management API roles.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/allowedOrigins/{{$parameter[\"originId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /me",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My API Credential"
					],
					"operation": [
						"Get Me"
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
						"My API Credential"
					],
					"operation": [
						"Get Me"
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
						"My API Credential"
					],
					"operation": [
						"Get Me"
					]
				}
			}
		},
		{
			"displayName": "GET /me/allowedOrigins",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My API Credential"
					],
					"operation": [
						"Get Me Allowed Origins"
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
						"My API Credential"
					],
					"operation": [
						"Get Me Allowed Origins"
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
						"My API Credential"
					],
					"operation": [
						"Get Me Allowed Origins"
					]
				}
			}
		},
		{
			"displayName": "POST /me/allowedOrigins",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My API Credential"
					],
					"operation": [
						"Post Me Allowed Origins"
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
						"My API Credential"
					],
					"operation": [
						"Post Me Allowed Origins"
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
						"My API Credential"
					],
					"operation": [
						"Post Me Allowed Origins"
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
						"My API Credential"
					],
					"operation": [
						"Post Me Allowed Origins"
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
						"My API Credential"
					],
					"operation": [
						"Post Me Allowed Origins"
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
						"My API Credential"
					],
					"operation": [
						"Post Me Allowed Origins"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/allowedOrigins/{originId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My API Credential"
					],
					"operation": [
						"Delete Me Allowed Origins Origin ID"
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
						"My API Credential"
					],
					"operation": [
						"Delete Me Allowed Origins Origin ID"
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
						"My API Credential"
					],
					"operation": [
						"Delete Me Allowed Origins Origin ID"
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
						"My API Credential"
					],
					"operation": [
						"Delete Me Allowed Origins Origin ID"
					]
				}
			}
		},
		{
			"displayName": "GET /me/allowedOrigins/{originId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My API Credential"
					],
					"operation": [
						"Get Me Allowed Origins Origin ID"
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
						"My API Credential"
					],
					"operation": [
						"Get Me Allowed Origins Origin ID"
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
						"My API Credential"
					],
					"operation": [
						"Get Me Allowed Origins Origin ID"
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
						"My API Credential"
					],
					"operation": [
						"Get Me Allowed Origins Origin ID"
					]
				}
			}
		},
];
