import type { INodeProperties } from 'n8n-workflow';

export const clientKeyMerchantLevelDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Client Key Merchant Level"
					]
				}
			},
			"options": [
				{
					"name": "Post Merchants Merchant ID API Credentials API Credential ID Generate Client Key",
					"value": "Post Merchants Merchant ID API Credentials API Credential ID Generate Client Key",
					"action": "Generate new client key",
					"description": "Returns a new [client key](https://docs.adyen.com/development-resources/client-side-authentication#how-it-works) for the API credential identified in the path. You can use the new client key a few minutes after generating it. The old client key stops working 24 hours after generating a new one.\n\nTo make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—API credentials read and write",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/merchants/{{$parameter[\"merchantId\"]}}/apiCredentials/{{$parameter[\"apiCredentialId\"]}}/generateClientKey"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /merchants/{merchantId}/apiCredentials/{apiCredentialId}/generateClientKey",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Client Key Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID API Credentials API Credential ID Generate Client Key"
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
						"Client Key Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID API Credentials API Credential ID Generate Client Key"
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
						"Client Key Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID API Credentials API Credential ID Generate Client Key"
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
						"Client Key Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID API Credentials API Credential ID Generate Client Key"
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
						"Client Key Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID API Credentials API Credential ID Generate Client Key"
					]
				}
			}
		},
];
