import type { INodeProperties } from 'n8n-workflow';

export const webhooksMerchantLevelDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks Merchant Level"
					]
				}
			},
			"options": [
				{
					"name": "Get Merchants Merchant ID Webhooks",
					"value": "Get Merchants Merchant ID Webhooks",
					"action": "List all webhooks",
					"description": "Lists all webhook configurations for the merchant account.\n\nTo make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—Webhooks read\n* Management API—Webhooks read and write",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/merchants/{{$parameter[\"merchantId\"]}}/webhooks"
						}
					}
				},
				{
					"name": "Post Merchants Merchant ID Webhooks",
					"value": "Post Merchants Merchant ID Webhooks",
					"action": "Set up a webhook",
					"description": "Subscribe to receive webhook notifications about events related to your merchant account. You can add basic authentication to make sure the data is secure.\n\nTo make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—Webhooks read and write",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/merchants/{{$parameter[\"merchantId\"]}}/webhooks"
						}
					}
				},
				{
					"name": "Delete Merchants Merchant ID Webhooks Webhook ID",
					"value": "Delete Merchants Merchant ID Webhooks Webhook ID",
					"action": "Remove a webhook",
					"description": "Remove the configuration for the webhook identified in the path.\n\nTo make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—Webhooks read and write",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/merchants/{{$parameter[\"merchantId\"]}}/webhooks/{{$parameter[\"webhookId\"]}}"
						}
					}
				},
				{
					"name": "Get Merchants Merchant ID Webhooks Webhook ID",
					"value": "Get Merchants Merchant ID Webhooks Webhook ID",
					"action": "Get a webhook",
					"description": "Returns the configuration for the webhook identified in the path.\n\nTo make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—Webhooks read\n* Management API—Webhooks read and write",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/merchants/{{$parameter[\"merchantId\"]}}/webhooks/{{$parameter[\"webhookId\"]}}"
						}
					}
				},
				{
					"name": "Patch Merchants Merchant ID Webhooks Webhook ID",
					"value": "Patch Merchants Merchant ID Webhooks Webhook ID",
					"action": "Update a webhook",
					"description": "Make changes to the configuration of the webhook identified in the path. The request contains the new values you want to have in the webhook configuration. The response contains the full configuration for the webhook, which includes the new values from the request.\n\nTo make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—Webhooks read and write",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/merchants/{{$parameter[\"merchantId\"]}}/webhooks/{{$parameter[\"webhookId\"]}}"
						}
					}
				},
				{
					"name": "Post Merchants Merchant ID Webhooks Webhook ID Generate Hmac",
					"value": "Post Merchants Merchant ID Webhooks Webhook ID Generate Hmac",
					"action": "Generate an HMAC key",
					"description": "Returns an [HMAC key](https://en.wikipedia.org/wiki/HMAC) for the webhook identified in the path. This key allows you to check the integrity and the origin of the notifications you receive.By creating an HMAC key, you start receiving [HMAC-signed notifications](https://docs.adyen.com/development-resources/webhooks/verify-hmac-signatures#enable-hmac-signatures) from Adyen. Find out more about how to [verify HMAC signatures](https://docs.adyen.com/development-resources/webhooks/verify-hmac-signatures).\n\nTo make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—Webhooks read and write",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/merchants/{{$parameter[\"merchantId\"]}}/webhooks/{{$parameter[\"webhookId\"]}}/generateHmac"
						}
					}
				},
				{
					"name": "Post Merchants Merchant ID Webhooks Webhook ID Test",
					"value": "Post Merchants Merchant ID Webhooks Webhook ID Test",
					"action": "Test a webhook",
					"description": "Sends sample notifications to test if the webhook is set up correctly.\n\nWe send four test notifications for each event code you choose. They cover success and failure scenarios for the hard-coded currencies EUR and GBP, regardless of the currencies configured in the merchant accounts. For custom notifications, we only send the specified custom notification.\n\nThe response describes the result of the test. The `status` field tells you if the test was successful or not. You can use the other fields to troubleshoot unsuccessful tests.\n\nTo make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—Webhooks read and write",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/merchants/{{$parameter[\"merchantId\"]}}/webhooks/{{$parameter[\"webhookId\"]}}/test"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /merchants/{merchantId}/webhooks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant ID Webhooks"
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
						"Webhooks Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant ID Webhooks"
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
						"Webhooks Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant ID Webhooks"
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
						"Webhooks Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant ID Webhooks"
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
						"Webhooks Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant ID Webhooks"
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
						"Webhooks Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant ID Webhooks"
					]
				}
			}
		},
		{
			"displayName": "POST /merchants/{merchantId}/webhooks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Webhooks"
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
						"Webhooks Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Webhooks"
					]
				}
			}
		},
		{
			"displayName": "Accepts Expired Certificate",
			"name": "acceptsExpiredCertificate",
			"type": "boolean",
			"default": true,
			"description": "Indicates if expired SSL certificates are accepted. Default value: **false**.",
			"routing": {
				"send": {
					"property": "acceptsExpiredCertificate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Webhooks"
					]
				}
			}
		},
		{
			"displayName": "Accepts Self Signed Certificate",
			"name": "acceptsSelfSignedCertificate",
			"type": "boolean",
			"default": true,
			"description": "Indicates if self-signed SSL certificates are accepted. Default value: **false**.",
			"routing": {
				"send": {
					"property": "acceptsSelfSignedCertificate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Webhooks"
					]
				}
			}
		},
		{
			"displayName": "Accepts Untrusted Root Certificate",
			"name": "acceptsUntrustedRootCertificate",
			"type": "boolean",
			"default": true,
			"description": "Indicates if untrusted SSL certificates are accepted. Default value: **false**.",
			"routing": {
				"send": {
					"property": "acceptsUntrustedRootCertificate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Webhooks"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Active",
			"name": "active",
			"type": "boolean",
			"default": true,
			"description": "Indicates if the webhook configuration is active. The field must be **true** for us to send webhooks about events related an account.",
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
						"Webhooks Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Webhooks"
					]
				}
			}
		},
		{
			"displayName": "Additional Settings",
			"name": "additionalSettings",
			"type": "json",
			"default": "{\n  \"includeEventCodes\": [\n    null\n  ]\n}",
			"description": "Additional shopper and transaction information to be included in your [standard notifications](https://docs.adyen.com/development-resources/webhooks/understand-notifications#event-codes). Find out more about the available [additional settings](https://docs.adyen.com/development-resources/webhooks/additional-settings).",
			"routing": {
				"send": {
					"property": "additionalSettings",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Webhooks"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Communication Format",
			"name": "communicationFormat",
			"type": "options",
			"default": "http",
			"description": "Format or protocol for receiving webhooks. Possible values:\n* **soap**\n* **http**\n* **json** ",
			"options": [
				{
					"name": "HTTP",
					"value": "http"
				},
				{
					"name": "JSON",
					"value": "json"
				},
				{
					"name": "Soap",
					"value": "soap"
				}
			],
			"routing": {
				"send": {
					"property": "communicationFormat",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Webhooks"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"description": "Your description for this webhook configuration.",
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
						"Webhooks Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Webhooks"
					]
				}
			}
		},
		{
			"displayName": "Network Type",
			"name": "networkType",
			"type": "options",
			"default": "LOCAL",
			"description": "Network type for Terminal API notification webhooks. Possible values:\n* **public**\n* **local**\n\nDefault Value: **public**.",
			"options": [
				{
					"name": "LOCAL",
					"value": "LOCAL"
				},
				{
					"name": "PUBLIC",
					"value": "PUBLIC"
				}
			],
			"routing": {
				"send": {
					"property": "networkType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Webhooks"
					]
				}
			}
		},
		{
			"displayName": "Password",
			"name": "password",
			"type": "string",
			"default": "",
			"description": "Password to access the webhook URL.",
			"routing": {
				"send": {
					"property": "password",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Webhooks"
					]
				}
			}
		},
		{
			"displayName": "Populate Soap Action Header",
			"name": "populateSoapActionHeader",
			"type": "boolean",
			"default": true,
			"description": "Indicates if the SOAP action header needs to be populated. Default value: **false**.\n\nOnly applies if `communicationFormat`: **soap**.",
			"routing": {
				"send": {
					"property": "populateSoapActionHeader",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Webhooks"
					]
				}
			}
		},
		{
			"displayName": "SSL Version",
			"name": "sslVersion",
			"type": "options",
			"default": "HTTP",
			"description": "SSL version to access the public webhook URL specified in the `url` field. Possible values:\n* **TLSv1.3**\n* **TLSv1.2**\n* **HTTP** - Only allowed on Test environment.\n\nIf not specified, the webhook will use `sslVersion`: **TLSv1.2**.",
			"options": [
				{
					"name": "HTTP",
					"value": "HTTP"
				},
				{
					"name": "SSL",
					"value": "SSL"
				},
				{
					"name": "SS Lv 3",
					"value": "SSLv3"
				},
				{
					"name": "TLS",
					"value": "TLS"
				},
				{
					"name": "TL Sv 1",
					"value": "TLSv1"
				},
				{
					"name": "TL Sv 1 1",
					"value": "TLSv1.1"
				},
				{
					"name": "TL Sv 1 2",
					"value": "TLSv1.2"
				},
				{
					"name": "TL Sv 1 3",
					"value": "TLSv1.3"
				}
			],
			"routing": {
				"send": {
					"property": "sslVersion",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Webhooks"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Type",
			"name": "type",
			"type": "string",
			"default": "",
			"description": "The type of webhook that is being created. Possible values are:\n\n- **standard**\n- **account-settings-notification**\n- **banktransfer-notification**\n- **boletobancario-notification**\n- **directdebit-notification**\n- **pending-notification**\n- **ideal-notification**\n- **ideal-pending-notification**\n- **report-notification**\n- **rreq-notification**\n\nFind out more about [standard notification webhooks](https://docs.adyen.com/development-resources/webhooks/understand-notifications#event-codes) and [other types of notifications](https://docs.adyen.com/development-resources/webhooks/understand-notifications#other-notifications).",
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Webhooks"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "URL",
			"name": "url",
			"type": "string",
			"default": "",
			"description": "Public URL where webhooks will be sent, for example **https://www.domain.com/webhook-endpoint**.",
			"routing": {
				"send": {
					"property": "url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Webhooks"
					]
				}
			}
		},
		{
			"displayName": "Username",
			"name": "username",
			"type": "string",
			"default": "",
			"description": "Username to access the webhook URL.",
			"routing": {
				"send": {
					"property": "username",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Webhooks"
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
						"Webhooks Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Webhooks"
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
						"Webhooks Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Webhooks"
					]
				}
			}
		},
		{
			"displayName": "DELETE /merchants/{merchantId}/webhooks/{webhookId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks Merchant Level"
					],
					"operation": [
						"Delete Merchants Merchant ID Webhooks Webhook ID"
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
						"Webhooks Merchant Level"
					],
					"operation": [
						"Delete Merchants Merchant ID Webhooks Webhook ID"
					]
				}
			}
		},
		{
			"displayName": "Webhook ID",
			"name": "webhookId",
			"required": true,
			"description": "Unique identifier of the webhook configuration.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks Merchant Level"
					],
					"operation": [
						"Delete Merchants Merchant ID Webhooks Webhook ID"
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
						"Webhooks Merchant Level"
					],
					"operation": [
						"Delete Merchants Merchant ID Webhooks Webhook ID"
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
						"Webhooks Merchant Level"
					],
					"operation": [
						"Delete Merchants Merchant ID Webhooks Webhook ID"
					]
				}
			}
		},
		{
			"displayName": "GET /merchants/{merchantId}/webhooks/{webhookId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant ID Webhooks Webhook ID"
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
						"Webhooks Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant ID Webhooks Webhook ID"
					]
				}
			}
		},
		{
			"displayName": "Webhook ID",
			"name": "webhookId",
			"required": true,
			"description": "Unique identifier of the webhook configuration.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant ID Webhooks Webhook ID"
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
						"Webhooks Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant ID Webhooks Webhook ID"
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
						"Webhooks Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant ID Webhooks Webhook ID"
					]
				}
			}
		},
		{
			"displayName": "PATCH /merchants/{merchantId}/webhooks/{webhookId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks Merchant Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Webhooks Webhook ID"
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
						"Webhooks Merchant Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Webhooks Webhook ID"
					]
				}
			}
		},
		{
			"displayName": "Webhook ID",
			"name": "webhookId",
			"required": true,
			"description": "Unique identifier of the webhook configuration.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks Merchant Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Webhooks Webhook ID"
					]
				}
			}
		},
		{
			"displayName": "Accepts Expired Certificate",
			"name": "acceptsExpiredCertificate",
			"type": "boolean",
			"default": true,
			"description": "Indicates if expired SSL certificates are accepted. Default value: **false**.",
			"routing": {
				"send": {
					"property": "acceptsExpiredCertificate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks Merchant Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Webhooks Webhook ID"
					]
				}
			}
		},
		{
			"displayName": "Accepts Self Signed Certificate",
			"name": "acceptsSelfSignedCertificate",
			"type": "boolean",
			"default": true,
			"description": "Indicates if self-signed SSL certificates are accepted. Default value: **false**.",
			"routing": {
				"send": {
					"property": "acceptsSelfSignedCertificate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks Merchant Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Webhooks Webhook ID"
					]
				}
			}
		},
		{
			"displayName": "Accepts Untrusted Root Certificate",
			"name": "acceptsUntrustedRootCertificate",
			"type": "boolean",
			"default": true,
			"description": "Indicates if untrusted SSL certificates are accepted. Default value: **false**.",
			"routing": {
				"send": {
					"property": "acceptsUntrustedRootCertificate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks Merchant Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Webhooks Webhook ID"
					]
				}
			}
		},
		{
			"displayName": "Active",
			"name": "active",
			"type": "boolean",
			"default": true,
			"description": "Indicates if the webhook configuration is active. The field must be **true** for us to send webhooks about events related an account.",
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
						"Webhooks Merchant Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Webhooks Webhook ID"
					]
				}
			}
		},
		{
			"displayName": "Additional Settings",
			"name": "additionalSettings",
			"type": "json",
			"default": "{\n  \"includeEventCodes\": [\n    null\n  ]\n}",
			"description": "Additional shopper and transaction information to be included in your [standard notifications](https://docs.adyen.com/development-resources/webhooks/understand-notifications#event-codes). Find out more about the available [additional settings](https://docs.adyen.com/development-resources/webhooks/additional-settings).",
			"routing": {
				"send": {
					"property": "additionalSettings",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks Merchant Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Webhooks Webhook ID"
					]
				}
			}
		},
		{
			"displayName": "Communication Format",
			"name": "communicationFormat",
			"type": "options",
			"default": "http",
			"description": "Format or protocol for receiving webhooks. Possible values:\n* **soap**\n* **http**\n* **json** ",
			"options": [
				{
					"name": "HTTP",
					"value": "http"
				},
				{
					"name": "JSON",
					"value": "json"
				},
				{
					"name": "Soap",
					"value": "soap"
				}
			],
			"routing": {
				"send": {
					"property": "communicationFormat",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks Merchant Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Webhooks Webhook ID"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"description": "Your description for this webhook configuration.",
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
						"Webhooks Merchant Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Webhooks Webhook ID"
					]
				}
			}
		},
		{
			"displayName": "Network Type",
			"name": "networkType",
			"type": "options",
			"default": "LOCAL",
			"description": "Network type for Terminal API notification webhooks. Possible values:\n* **public**\n* **local**\n\nDefault Value: **public**.",
			"options": [
				{
					"name": "LOCAL",
					"value": "LOCAL"
				},
				{
					"name": "PUBLIC",
					"value": "PUBLIC"
				}
			],
			"routing": {
				"send": {
					"property": "networkType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks Merchant Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Webhooks Webhook ID"
					]
				}
			}
		},
		{
			"displayName": "Password",
			"name": "password",
			"type": "string",
			"default": "",
			"description": "Password to access the webhook URL.",
			"routing": {
				"send": {
					"property": "password",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks Merchant Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Webhooks Webhook ID"
					]
				}
			}
		},
		{
			"displayName": "Populate Soap Action Header",
			"name": "populateSoapActionHeader",
			"type": "boolean",
			"default": true,
			"description": "Indicates if the SOAP action header needs to be populated. Default value: **false**.\n\nOnly applies if `communicationFormat`: **soap**.",
			"routing": {
				"send": {
					"property": "populateSoapActionHeader",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks Merchant Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Webhooks Webhook ID"
					]
				}
			}
		},
		{
			"displayName": "SSL Version",
			"name": "sslVersion",
			"type": "options",
			"default": "HTTP",
			"description": "SSL version to access the public webhook URL specified in the `url` field. Possible values:\n* **TLSv1.3**\n* **TLSv1.2**\n* **HTTP** - Only allowed on Test environment.\n\nIf not specified, the webhook will use `sslVersion`: **TLSv1.2**.",
			"options": [
				{
					"name": "HTTP",
					"value": "HTTP"
				},
				{
					"name": "SSL",
					"value": "SSL"
				},
				{
					"name": "SS Lv 3",
					"value": "SSLv3"
				},
				{
					"name": "TLS",
					"value": "TLS"
				},
				{
					"name": "TL Sv 1",
					"value": "TLSv1"
				},
				{
					"name": "TL Sv 1 1",
					"value": "TLSv1.1"
				},
				{
					"name": "TL Sv 1 2",
					"value": "TLSv1.2"
				},
				{
					"name": "TL Sv 1 3",
					"value": "TLSv1.3"
				}
			],
			"routing": {
				"send": {
					"property": "sslVersion",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks Merchant Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Webhooks Webhook ID"
					]
				}
			}
		},
		{
			"displayName": "URL",
			"name": "url",
			"type": "string",
			"default": "",
			"description": "Public URL where webhooks will be sent, for example **https://www.domain.com/webhook-endpoint**.",
			"routing": {
				"send": {
					"property": "url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks Merchant Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Webhooks Webhook ID"
					]
				}
			}
		},
		{
			"displayName": "Username",
			"name": "username",
			"type": "string",
			"default": "",
			"description": "Username to access the webhook URL.",
			"routing": {
				"send": {
					"property": "username",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks Merchant Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Webhooks Webhook ID"
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
						"Webhooks Merchant Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Webhooks Webhook ID"
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
						"Webhooks Merchant Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Webhooks Webhook ID"
					]
				}
			}
		},
		{
			"displayName": "POST /merchants/{merchantId}/webhooks/{webhookId}/generateHmac",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Webhooks Webhook ID Generate Hmac"
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
						"Webhooks Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Webhooks Webhook ID Generate Hmac"
					]
				}
			}
		},
		{
			"displayName": "Webhook ID",
			"name": "webhookId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Webhooks Webhook ID Generate Hmac"
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
						"Webhooks Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Webhooks Webhook ID Generate Hmac"
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
						"Webhooks Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Webhooks Webhook ID Generate Hmac"
					]
				}
			}
		},
		{
			"displayName": "POST /merchants/{merchantId}/webhooks/{webhookId}/test",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Webhooks Webhook ID Test"
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
						"Webhooks Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Webhooks Webhook ID Test"
					]
				}
			}
		},
		{
			"displayName": "Webhook ID",
			"name": "webhookId",
			"required": true,
			"description": "Unique identifier of the webhook configuration.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Webhooks Webhook ID Test"
					]
				}
			}
		},
		{
			"displayName": "Notification",
			"name": "notification",
			"type": "json",
			"default": "{\n  \"amount\": {}\n}",
			"description": "Custom test notification object. Required when the [`types`](https://docs.adyen.com/api-explorer/#/ManagementService/v1/post/companies/{companyId}/webhooks/{webhookId}/test__reqParam_types) list contains **CUSTOM**.",
			"routing": {
				"send": {
					"property": "notification",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Webhooks Webhook ID Test"
					]
				}
			}
		},
		{
			"displayName": "Types",
			"name": "types",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "List of event codes for which to send test notifications. Only the webhook types below are supported. \n\nPossible values if webhook `type`: **standard**:\n\n* **AUTHORISATION**\n* **CHARGEBACK_REVERSED**\n* **ORDER_CLOSED**\n* **ORDER_OPENED**\n* **PAIDOUT_REVERSED**\n* **PAYOUT_THIRDPARTY**\n* **REFUNDED_REVERSED**\n* **REFUND_WITH_DATA**\n* **REPORT_AVAILABLE**\n* **CUSTOM** - set your custom notification fields in the [`notification`](https://docs.adyen.com/api-explorer/#/ManagementService/v1/post/companies/{companyId}/webhooks/{webhookId}/test__reqParam_notification) object.\n\nPossible values if webhook `type`: **banktransfer-notification**:\n\n* **PENDING**\n\nPossible values if webhook `type`: **report-notification**:\n\n* **REPORT_AVAILABLE**\n\nPossible values if webhook `type`: **ideal-notification**:\n\n* **AUTHORISATION**\n\nPossible values if webhook `type`: **pending-notification**:\n\n* **PENDING**\n",
			"routing": {
				"send": {
					"property": "types",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Webhooks Webhook ID Test"
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
						"Webhooks Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Webhooks Webhook ID Test"
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
						"Webhooks Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Webhooks Webhook ID Test"
					]
				}
			}
		},
];
