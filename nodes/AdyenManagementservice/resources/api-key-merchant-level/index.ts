import type { INodeProperties } from 'n8n-workflow';

export const apiKeyMerchantLevelDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"API Key Merchant Level"
					]
				}
			},
			"options": [
				{
					"name": "Post Merchants Merchant Id Api Credentials Api Credential Id Generate Api Key",
					"value": "Post Merchants Merchant Id Api Credentials Api Credential Id Generate Api Key",
					"action": "Generate new API key",
					"description": "Returns a new API key for the API credential. You can use the new API key a few minutes after generating it. The old API key stops working 24 hours after generating a new one.\n\nTo make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—API credentials read and write",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/merchants/{{$parameter[\"merchantId\"]}}/apiCredentials/{{$parameter[\"apiCredentialId\"]}}/generateApiKey"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /merchants/{merchantId}/apiCredentials/{apiCredentialId}/generateApiKey",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"API Key Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant Id Api Credentials Api Credential Id Generate Api Key"
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
						"API Key Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant Id Api Credentials Api Credential Id Generate Api Key"
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
						"API Key Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant Id Api Credentials Api Credential Id Generate Api Key"
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
						"API Key Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant Id Api Credentials Api Credential Id Generate Api Key"
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
						"API Key Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant Id Api Credentials Api Credential Id Generate Api Key"
					]
				}
			}
		},
];
