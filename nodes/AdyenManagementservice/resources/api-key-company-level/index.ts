import type { INodeProperties } from 'n8n-workflow';

export const apiKeyCompanyLevelDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"API Key Company Level"
					]
				}
			},
			"options": [
				{
					"name": "Post Companies Company ID API Credentials API Credential ID Generate API Key",
					"value": "Post Companies Company ID API Credentials API Credential ID Generate API Key",
					"action": "Generate new API key",
					"description": "Returns a new API key for the API credential. You can use the new API key a few minutes after generating it. The old API key stops working 24 hours after generating a new one.\n\nTo make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—API credentials read and write",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/companies/{{$parameter[\"companyId\"]}}/apiCredentials/{{$parameter[\"apiCredentialId\"]}}/generateApiKey"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /companies/{companyId}/apiCredentials/{apiCredentialId}/generateApiKey",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"API Key Company Level"
					],
					"operation": [
						"Post Companies Company ID API Credentials API Credential ID Generate API Key"
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
						"API Key Company Level"
					],
					"operation": [
						"Post Companies Company ID API Credentials API Credential ID Generate API Key"
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
						"API Key Company Level"
					],
					"operation": [
						"Post Companies Company ID API Credentials API Credential ID Generate API Key"
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
						"API Key Company Level"
					],
					"operation": [
						"Post Companies Company ID API Credentials API Credential ID Generate API Key"
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
						"API Key Company Level"
					],
					"operation": [
						"Post Companies Company ID API Credentials API Credential ID Generate API Key"
					]
				}
			}
		},
];
