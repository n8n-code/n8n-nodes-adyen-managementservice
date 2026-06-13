import type { INodeProperties } from 'n8n-workflow';

export const accountMerchantLevelDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Account Merchant Level"
					]
				}
			},
			"options": [
				{
					"name": "Get Merchants",
					"value": "Get Merchants",
					"action": "Get a list of merchant accounts",
					"description": "Returns the list of merchant accounts that your API credential has access to. The list is grouped into pages as defined by the query parameters. \n\nTo make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—Account read",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/merchants"
						}
					}
				},
				{
					"name": "Post Merchants",
					"value": "Post Merchants",
					"action": "Create a merchant account",
					"description": "Creates a merchant account for the company account specified in the request.\n\nUse this endpoint if your integration requires it, such as Adyen for Platforms Manage. Your Adyen contact will set up your access.\n\nTo make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—Accounts read and write",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/merchants"
						}
					}
				},
				{
					"name": "Get Merchants Merchant ID",
					"value": "Get Merchants Merchant ID",
					"action": "Get a merchant account",
					"description": "Returns the merchant account specified in the path. Your API credential must have access to the merchant account.\n\nTo make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—Account read",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/merchants/{{$parameter[\"merchantId\"]}}"
						}
					}
				},
				{
					"name": "Post Merchants Merchant ID Activate",
					"value": "Post Merchants Merchant ID Activate",
					"action": "Request to activate a merchant account",
					"description": "Sends a request to activate the merchant account identified in the path.\n\nYou get the result of the activation asychronously through a [`merchant.updated`](https://docs.adyen.com/api-explorer/ManagementNotification/latest/post/merchant.updated) webhook. Once the merchant account is activated, you can start using it to accept payments and payouts.\n\nUse this endpoint if your integration requires it, such as Adyen for Platforms Manage. Your Adyen contact will set up your access.\n\nTo make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—Accounts read and write",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/merchants/{{$parameter[\"merchantId\"]}}/activate"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /merchants",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account Merchant Level"
					],
					"operation": [
						"Get Merchants"
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
						"Account Merchant Level"
					],
					"operation": [
						"Get Merchants"
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
						"Account Merchant Level"
					],
					"operation": [
						"Get Merchants"
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
						"Account Merchant Level"
					],
					"operation": [
						"Get Merchants"
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
						"Account Merchant Level"
					],
					"operation": [
						"Get Merchants"
					]
				}
			}
		},
		{
			"displayName": "POST /merchants",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account Merchant Level"
					],
					"operation": [
						"Post Merchants"
					]
				}
			}
		},
		{
			"displayName": "Business Line ID",
			"name": "businessLineId",
			"type": "string",
			"default": "",
			"description": "The unique identifier of the [business line](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/businessLines). Required for an Adyen for Platforms Manage integration.",
			"routing": {
				"send": {
					"property": "businessLineId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Merchant Level"
					],
					"operation": [
						"Post Merchants"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Company ID",
			"name": "companyId",
			"type": "string",
			"default": "",
			"description": "The unique identifier of the company account.",
			"routing": {
				"send": {
					"property": "companyId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Merchant Level"
					],
					"operation": [
						"Post Merchants"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"description": "Your description for the merchant account, maximum 300 characters.",
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
						"Account Merchant Level"
					],
					"operation": [
						"Post Merchants"
					]
				}
			}
		},
		{
			"displayName": "Legal Entity ID",
			"name": "legalEntityId",
			"type": "string",
			"default": "",
			"description": "The unique identifier of the [legal entity](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/legalEntities). Required for an Adyen for Platforms Manage integration.",
			"routing": {
				"send": {
					"property": "legalEntityId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Merchant Level"
					],
					"operation": [
						"Post Merchants"
					]
				}
			}
		},
		{
			"displayName": "Pricing Plan",
			"name": "pricingPlan",
			"type": "string",
			"default": "",
			"description": "Sets the pricing plan for the merchant account. Required for an Adyen for Platforms Manage integration. Your Adyen contact will provide the values that you can use.",
			"routing": {
				"send": {
					"property": "pricingPlan",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Merchant Level"
					],
					"operation": [
						"Post Merchants"
					]
				}
			}
		},
		{
			"displayName": "Reference",
			"name": "reference",
			"type": "string",
			"default": "",
			"description": "Your reference for the merchant account. To make this reference the unique identifier of the merchant account, your Adyen contact can set up a template on your company account. The template can have 6 to 255 characters with upper- and lower-case letters, underscores, and numbers. When your company account has a template, then the `reference` is required and must be unique within the company account.",
			"routing": {
				"send": {
					"property": "reference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Merchant Level"
					],
					"operation": [
						"Post Merchants"
					]
				}
			}
		},
		{
			"displayName": "Sales Channels",
			"name": "salesChannels",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "List of sales channels that the merchant will process payments with",
			"routing": {
				"send": {
					"property": "salesChannels",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Merchant Level"
					],
					"operation": [
						"Post Merchants"
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
						"Account Merchant Level"
					],
					"operation": [
						"Post Merchants"
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
						"Account Merchant Level"
					],
					"operation": [
						"Post Merchants"
					]
				}
			}
		},
		{
			"displayName": "GET /merchants/{merchantId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant ID"
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
						"Account Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant ID"
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
						"Account Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant ID"
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
						"Account Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant ID"
					]
				}
			}
		},
		{
			"displayName": "POST /merchants/{merchantId}/activate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Activate"
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
						"Account Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Activate"
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
						"Account Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Activate"
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
						"Account Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Activate"
					]
				}
			}
		},
];
