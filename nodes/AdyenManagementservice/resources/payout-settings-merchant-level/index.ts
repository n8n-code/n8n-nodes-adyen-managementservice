import type { INodeProperties } from 'n8n-workflow';

export const payoutSettingsMerchantLevelDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Payout Settings Merchant Level"
					]
				}
			},
			"options": [
				{
					"name": "Get Merchants Merchant ID Payout Settings",
					"value": "Get Merchants Merchant ID Payout Settings",
					"action": "Get a list of payout settings",
					"description": "Returns the list of payout settings for the merchant account identified in the path.\n\nUse this endpoint if your integration requires it, such as Adyen for Platforms Manage. Your Adyen contact will set up your access.\n\nTo make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—Payout account settings read",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/merchants/{{$parameter[\"merchantId\"]}}/payoutSettings"
						}
					}
				},
				{
					"name": "Post Merchants Merchant ID Payout Settings",
					"value": "Post Merchants Merchant ID Payout Settings",
					"action": "Add a payout setting",
					"description": "Sends a request to add a payout setting for the merchant account specified in the path. A payout setting links the merchant account to the [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments) that contains the details of the payout bank account. Adyen verifies the bank account before allowing and enabling the payout setting.\n\nIf you're accepting payments in multiple currencies, you may add multiple payout settings for the merchant account.\n\nUse this endpoint if your integration requires it, such as Adyen for Platforms Manage. Your Adyen contact will set up your access.\n\nTo make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n\n* Management API—Payout account settings read and write",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/merchants/{{$parameter[\"merchantId\"]}}/payoutSettings"
						}
					}
				},
				{
					"name": "Delete Merchants Merchant ID Payout Settings Payout Settings ID",
					"value": "Delete Merchants Merchant ID Payout Settings Payout Settings ID",
					"action": "Delete a payout setting",
					"description": "Deletes the payout setting identified in the path.\n\nUse this endpoint if your integration requires it, such as Adyen for Platforms Manage. Your Adyen contact will set up your access.\n\nTo make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n\n* Management API—Payout account settings read and write",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/merchants/{{$parameter[\"merchantId\"]}}/payoutSettings/{{$parameter[\"payoutSettingsId\"]}}"
						}
					}
				},
				{
					"name": "Get Merchants Merchant ID Payout Settings Payout Settings ID",
					"value": "Get Merchants Merchant ID Payout Settings Payout Settings ID",
					"action": "Get a payout setting",
					"description": "Returns the payout setting identified in the path.\n\nUse this endpoint if your integration requires it, such as Adyen for Platforms Manage. Your Adyen contact will set up your access.\n\nTo make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—Payout account settings read",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/merchants/{{$parameter[\"merchantId\"]}}/payoutSettings/{{$parameter[\"payoutSettingsId\"]}}"
						}
					}
				},
				{
					"name": "Patch Merchants Merchant ID Payout Settings Payout Settings ID",
					"value": "Patch Merchants Merchant ID Payout Settings Payout Settings ID",
					"action": "Update a payout setting",
					"description": "Updates the payout setting identified in the path. You can enable or disable the payout setting.\n\nUse this endpoint if your integration requires it, such as Adyen for Platforms Manage. Your Adyen contact will set up your access.\n\nTo make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n\n* Management API—Payout account settings read and write",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/merchants/{{$parameter[\"merchantId\"]}}/payoutSettings/{{$parameter[\"payoutSettingsId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /merchants/{merchantId}/payoutSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payout Settings Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant ID Payout Settings"
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
						"Payout Settings Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant ID Payout Settings"
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
						"Payout Settings Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant ID Payout Settings"
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
						"Payout Settings Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant ID Payout Settings"
					]
				}
			}
		},
		{
			"displayName": "POST /merchants/{merchantId}/payoutSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payout Settings Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Payout Settings"
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
						"Payout Settings Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Payout Settings"
					]
				}
			}
		},
		{
			"displayName": "Enabled",
			"name": "enabled",
			"type": "boolean",
			"default": true,
			"description": "Indicates if payouts to this bank account are enabled. Default: **true**.\n\nTo receive payouts into this bank account, both `enabled` and `allowed` must be **true**.",
			"routing": {
				"send": {
					"property": "enabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payout Settings Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Payout Settings"
					]
				}
			}
		},
		{
			"displayName": "Enabled From Date",
			"name": "enabledFromDate",
			"type": "string",
			"default": "",
			"description": "The date when Adyen starts paying out to this bank account.\n\nFormat: [ISO 8601](https://www.w3.org/TR/NOTE-datetime), for example, **2019-11-23T12:25:28Z** or **2020-05-27T20:25:28+08:00**.\n\nIf not specified, the `enabled` field indicates if payouts are enabled for this bank account.\n\nIf a date is specified and:\n\n* `enabled`: **true**, payouts are enabled starting the specified date.\n* `enabled`: **false**, payouts are disabled until the specified date. On the specified date, `enabled` changes to **true** and this field is reset to **null**.",
			"routing": {
				"send": {
					"property": "enabledFromDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payout Settings Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Payout Settings"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Transfer Instrument ID",
			"name": "transferInstrumentId",
			"type": "string",
			"default": "",
			"description": "The unique identifier of the [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments) that contains the details of the bank account.",
			"routing": {
				"send": {
					"property": "transferInstrumentId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payout Settings Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Payout Settings"
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
						"Payout Settings Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Payout Settings"
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
						"Payout Settings Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Payout Settings"
					]
				}
			}
		},
		{
			"displayName": "DELETE /merchants/{merchantId}/payoutSettings/{payoutSettingsId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payout Settings Merchant Level"
					],
					"operation": [
						"Delete Merchants Merchant ID Payout Settings Payout Settings ID"
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
						"Payout Settings Merchant Level"
					],
					"operation": [
						"Delete Merchants Merchant ID Payout Settings Payout Settings ID"
					]
				}
			}
		},
		{
			"displayName": "Payout Settings ID",
			"name": "payoutSettingsId",
			"required": true,
			"description": "The unique identifier of the payout setting.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Payout Settings Merchant Level"
					],
					"operation": [
						"Delete Merchants Merchant ID Payout Settings Payout Settings ID"
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
						"Payout Settings Merchant Level"
					],
					"operation": [
						"Delete Merchants Merchant ID Payout Settings Payout Settings ID"
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
						"Payout Settings Merchant Level"
					],
					"operation": [
						"Delete Merchants Merchant ID Payout Settings Payout Settings ID"
					]
				}
			}
		},
		{
			"displayName": "GET /merchants/{merchantId}/payoutSettings/{payoutSettingsId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payout Settings Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant ID Payout Settings Payout Settings ID"
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
						"Payout Settings Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant ID Payout Settings Payout Settings ID"
					]
				}
			}
		},
		{
			"displayName": "Payout Settings ID",
			"name": "payoutSettingsId",
			"required": true,
			"description": "The unique identifier of the payout setting.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Payout Settings Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant ID Payout Settings Payout Settings ID"
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
						"Payout Settings Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant ID Payout Settings Payout Settings ID"
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
						"Payout Settings Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant ID Payout Settings Payout Settings ID"
					]
				}
			}
		},
		{
			"displayName": "PATCH /merchants/{merchantId}/payoutSettings/{payoutSettingsId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payout Settings Merchant Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Payout Settings Payout Settings ID"
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
						"Payout Settings Merchant Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Payout Settings Payout Settings ID"
					]
				}
			}
		},
		{
			"displayName": "Payout Settings ID",
			"name": "payoutSettingsId",
			"required": true,
			"description": "The unique identifier of the payout setting.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Payout Settings Merchant Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Payout Settings Payout Settings ID"
					]
				}
			}
		},
		{
			"displayName": "Enabled",
			"name": "enabled",
			"type": "boolean",
			"default": true,
			"description": "Indicates if payouts to this bank account are enabled. Default: **true**.\n\nTo receive payouts into this bank account, both `enabled` and `allowed` must be **true**.",
			"routing": {
				"send": {
					"property": "enabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payout Settings Merchant Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Payout Settings Payout Settings ID"
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
						"Payout Settings Merchant Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Payout Settings Payout Settings ID"
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
						"Payout Settings Merchant Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Payout Settings Payout Settings ID"
					]
				}
			}
		},
];
