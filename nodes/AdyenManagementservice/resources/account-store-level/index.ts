import type { INodeProperties } from 'n8n-workflow';

export const accountStoreLevelDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Account Store Level"
					]
				}
			},
			"options": [
				{
					"name": "Get Merchants Merchant ID Stores",
					"value": "Get Merchants Merchant ID Stores",
					"action": "Get a list of stores",
					"description": "Returns a list of stores for the merchant account identified in the path. The list is grouped into pages as defined by the query parameters.\n\nTo make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—Stores read\n* Management API—Stores read and write",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/merchants/{{$parameter[\"merchantId\"]}}/stores"
						}
					}
				},
				{
					"name": "Post Merchants Merchant ID Stores",
					"value": "Post Merchants Merchant ID Stores",
					"action": "Create a store",
					"description": "Creates a store for the merchant account identified in the path.\n\nTo make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—Stores read and write",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/merchants/{{$parameter[\"merchantId\"]}}/stores"
						}
					}
				},
				{
					"name": "Get Merchants Merchant ID Stores Store ID",
					"value": "Get Merchants Merchant ID Stores Store ID",
					"action": "Get a store",
					"description": "Returns the details of the store identified in the path.\n\nTo make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—Stores read\n* Management API—Stores read and write",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/merchants/{{$parameter[\"merchantId\"]}}/stores/{{$parameter[\"storeId\"]}}"
						}
					}
				},
				{
					"name": "Patch Merchants Merchant ID Stores Store ID",
					"value": "Patch Merchants Merchant ID Stores Store ID",
					"action": "Update a store",
					"description": "Updates the store identified in the path. You can only update some store parameters.\n\nTo make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—Stores read and write",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/merchants/{{$parameter[\"merchantId\"]}}/stores/{{$parameter[\"storeId\"]}}"
						}
					}
				},
				{
					"name": "Get Stores",
					"value": "Get Stores",
					"action": "Get a list of stores",
					"description": "Returns a list of stores. The list is grouped into pages as defined by the query parameters.\n\nTo make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—Stores read\n* Management API—Stores read and write",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/stores"
						}
					}
				},
				{
					"name": "Post Stores",
					"value": "Post Stores",
					"action": "Create a store",
					"description": "Creates a store for the merchant account specified in the request.\n\nTo make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—Stores read and write",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/stores"
						}
					}
				},
				{
					"name": "Get Stores Store ID",
					"value": "Get Stores Store ID",
					"action": "Get a store",
					"description": "Returns the details of the store identified in the path.\n\nTo make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—Stores read\n* Management API—Stores read and write",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/stores/{{$parameter[\"storeId\"]}}"
						}
					}
				},
				{
					"name": "Patch Stores Store ID",
					"value": "Patch Stores Store ID",
					"action": "Update a store",
					"description": "Updates the store identified in the path.\nYou can only update some store parameters.\n\nTo make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—Stores read and write",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/stores/{{$parameter[\"storeId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /merchants/{merchantId}/stores",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account Store Level"
					],
					"operation": [
						"Get Merchants Merchant ID Stores"
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
						"Account Store Level"
					],
					"operation": [
						"Get Merchants Merchant ID Stores"
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
						"Account Store Level"
					],
					"operation": [
						"Get Merchants Merchant ID Stores"
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
						"Account Store Level"
					],
					"operation": [
						"Get Merchants Merchant ID Stores"
					]
				}
			}
		},
		{
			"displayName": "Reference",
			"name": "reference",
			"description": "The reference of the store.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "reference",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Store Level"
					],
					"operation": [
						"Get Merchants Merchant ID Stores"
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
						"Account Store Level"
					],
					"operation": [
						"Get Merchants Merchant ID Stores"
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
						"Account Store Level"
					],
					"operation": [
						"Get Merchants Merchant ID Stores"
					]
				}
			}
		},
		{
			"displayName": "POST /merchants/{merchantId}/stores",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account Store Level"
					],
					"operation": [
						"Post Merchants Merchant ID Stores"
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
						"Account Store Level"
					],
					"operation": [
						"Post Merchants Merchant ID Stores"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Address",
			"name": "address",
			"type": "json",
			"default": "{}",
			"description": "The address of the store.",
			"routing": {
				"send": {
					"property": "address",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Store Level"
					],
					"operation": [
						"Post Merchants Merchant ID Stores"
					]
				}
			}
		},
		{
			"displayName": "Business Line Ids",
			"name": "businessLineIds",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The unique identifiers of the [business lines](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/businesslines__resParam_id) that the store is associated with.\nIf not specified, the business line of the merchant account is used. Required when there are multiple business lines under the merchant account.",
			"routing": {
				"send": {
					"property": "businessLineIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Store Level"
					],
					"operation": [
						"Post Merchants Merchant ID Stores"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"description": "Your description of the store.",
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
						"Account Store Level"
					],
					"operation": [
						"Post Merchants Merchant ID Stores"
					]
				}
			}
		},
		{
			"displayName": "External Reference ID",
			"name": "externalReferenceId",
			"type": "string",
			"default": "",
			"description": "When using the Zip payment method: The location ID that Zip has assigned to your store.",
			"routing": {
				"send": {
					"property": "externalReferenceId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Store Level"
					],
					"operation": [
						"Post Merchants Merchant ID Stores"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Phone Number",
			"name": "phoneNumber",
			"type": "string",
			"default": "",
			"description": "The phone number of the store, including '+' and country code.",
			"routing": {
				"send": {
					"property": "phoneNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Store Level"
					],
					"operation": [
						"Post Merchants Merchant ID Stores"
					]
				}
			}
		},
		{
			"displayName": "Reference",
			"name": "reference",
			"type": "string",
			"default": "",
			"description": "Your reference to recognize the store by. Also known as the store code.\n Allowed characters: Lowercase and uppercase letters without diacritics, numbers 0 through 9, hyphen (-), and underscore (_).",
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
						"Account Store Level"
					],
					"operation": [
						"Post Merchants Merchant ID Stores"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Shopper Statement",
			"name": "shopperStatement",
			"type": "string",
			"default": "",
			"description": "The store name to be shown on the shopper's bank or credit card statement and on the shopper receipt.\nMaximum length: 22 characters; can't be all numbers.",
			"routing": {
				"send": {
					"property": "shopperStatement",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Store Level"
					],
					"operation": [
						"Post Merchants Merchant ID Stores"
					]
				}
			}
		},
		{
			"displayName": "Split Configuration",
			"name": "splitConfiguration",
			"type": "json",
			"default": "{}",
			"description": "The configuration of the split.",
			"routing": {
				"send": {
					"property": "splitConfiguration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Store Level"
					],
					"operation": [
						"Post Merchants Merchant ID Stores"
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
						"Account Store Level"
					],
					"operation": [
						"Post Merchants Merchant ID Stores"
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
						"Account Store Level"
					],
					"operation": [
						"Post Merchants Merchant ID Stores"
					]
				}
			}
		},
		{
			"displayName": "GET /merchants/{merchantId}/stores/{storeId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account Store Level"
					],
					"operation": [
						"Get Merchants Merchant ID Stores Store ID"
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
						"Account Store Level"
					],
					"operation": [
						"Get Merchants Merchant ID Stores Store ID"
					]
				}
			}
		},
		{
			"displayName": "Store ID",
			"name": "storeId",
			"required": true,
			"description": "The unique identifier of the store.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Account Store Level"
					],
					"operation": [
						"Get Merchants Merchant ID Stores Store ID"
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
						"Account Store Level"
					],
					"operation": [
						"Get Merchants Merchant ID Stores Store ID"
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
						"Account Store Level"
					],
					"operation": [
						"Get Merchants Merchant ID Stores Store ID"
					]
				}
			}
		},
		{
			"displayName": "PATCH /merchants/{merchantId}/stores/{storeId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account Store Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Stores Store ID"
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
						"Account Store Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Stores Store ID"
					]
				}
			}
		},
		{
			"displayName": "Store ID",
			"name": "storeId",
			"required": true,
			"description": "The unique identifier of the store.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Account Store Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Stores Store ID"
					]
				}
			}
		},
		{
			"displayName": "Address",
			"name": "address",
			"type": "json",
			"default": "{}",
			"description": "The address of the store. It is not possible to update the country of the store.",
			"routing": {
				"send": {
					"property": "address",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Store Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Stores Store ID"
					]
				}
			}
		},
		{
			"displayName": "Business Line Ids",
			"name": "businessLineIds",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The unique identifiers of the [business lines](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/businesslines__resParam_id) that the store is associated with.",
			"routing": {
				"send": {
					"property": "businessLineIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Store Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Stores Store ID"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"description": "The description of the store.",
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
						"Account Store Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Stores Store ID"
					]
				}
			}
		},
		{
			"displayName": "External Reference ID",
			"name": "externalReferenceId",
			"type": "string",
			"default": "",
			"description": "When using the Zip payment method: The location ID that Zip has assigned to your store.",
			"routing": {
				"send": {
					"property": "externalReferenceId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Store Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Stores Store ID"
					]
				}
			}
		},
		{
			"displayName": "Split Configuration",
			"name": "splitConfiguration",
			"type": "json",
			"default": "{}",
			"description": "Rules for Adyen for Platform merchants to split commission fees.",
			"routing": {
				"send": {
					"property": "splitConfiguration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Store Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Stores Store ID"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "options",
			"default": "active",
			"description": "The status of the store. Possible values are:\n\n- **active**: This value is assigned automatically when a store is created. \n- **inactive**: The maximum [transaction limits and number of Store-and-Forward transactions](https://docs.adyen.com/point-of-sale/determine-account-structure/configure-features#payment-features) for the store are set to 0. This blocks new transactions, but captures are still possible.\n- **closed**: The terminals of the store are reassigned to the merchant inventory, so they can't process payments.\n\nYou can change the status from **active** to **inactive**, and from **inactive** to **active** or **closed**. \nOnce **closed**, a store can't be reopened.",
			"options": [
				{
					"name": "Active",
					"value": "active"
				},
				{
					"name": "Closed",
					"value": "closed"
				},
				{
					"name": "Inactive",
					"value": "inactive"
				}
			],
			"routing": {
				"send": {
					"property": "status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Store Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Stores Store ID"
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
						"Account Store Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Stores Store ID"
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
						"Account Store Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Stores Store ID"
					]
				}
			}
		},
		{
			"displayName": "GET /stores",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account Store Level"
					],
					"operation": [
						"Get Stores"
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
						"Account Store Level"
					],
					"operation": [
						"Get Stores"
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
						"Account Store Level"
					],
					"operation": [
						"Get Stores"
					]
				}
			}
		},
		{
			"displayName": "Reference",
			"name": "reference",
			"description": "The reference of the store.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "reference",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Store Level"
					],
					"operation": [
						"Get Stores"
					]
				}
			}
		},
		{
			"displayName": "Merchant ID",
			"name": "merchantId",
			"description": "The unique identifier of the merchant account.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "merchantId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Store Level"
					],
					"operation": [
						"Get Stores"
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
						"Account Store Level"
					],
					"operation": [
						"Get Stores"
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
						"Account Store Level"
					],
					"operation": [
						"Get Stores"
					]
				}
			}
		},
		{
			"displayName": "POST /stores",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account Store Level"
					],
					"operation": [
						"Post Stores"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Address",
			"name": "address",
			"type": "json",
			"default": "{}",
			"description": "The address of the store.",
			"routing": {
				"send": {
					"property": "address",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Store Level"
					],
					"operation": [
						"Post Stores"
					]
				}
			}
		},
		{
			"displayName": "Business Line Ids",
			"name": "businessLineIds",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The unique identifiers of the [business lines](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/businesslines__resParam_id) that the store is associated with.\nIf not specified, the business line of the merchant account is used. Required when there are multiple business lines under the merchant account.",
			"routing": {
				"send": {
					"property": "businessLineIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Store Level"
					],
					"operation": [
						"Post Stores"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"description": "Your description of the store.",
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
						"Account Store Level"
					],
					"operation": [
						"Post Stores"
					]
				}
			}
		},
		{
			"displayName": "External Reference ID",
			"name": "externalReferenceId",
			"type": "string",
			"default": "",
			"description": "When using the Zip payment method: The location ID that Zip has assigned to your store.",
			"routing": {
				"send": {
					"property": "externalReferenceId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Store Level"
					],
					"operation": [
						"Post Stores"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Merchant ID",
			"name": "merchantId",
			"type": "string",
			"default": "",
			"description": "The unique identifier of the merchant account that the store belongs to.",
			"routing": {
				"send": {
					"property": "merchantId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Store Level"
					],
					"operation": [
						"Post Stores"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Phone Number",
			"name": "phoneNumber",
			"type": "string",
			"default": "",
			"description": "The phone number of the store, including '+' and country code.",
			"routing": {
				"send": {
					"property": "phoneNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Store Level"
					],
					"operation": [
						"Post Stores"
					]
				}
			}
		},
		{
			"displayName": "Reference",
			"name": "reference",
			"type": "string",
			"default": "",
			"description": "Your reference to recognize the store by. Also known as the store code.\n Allowed characters: Lowercase and uppercase letters without diacritics, numbers 0 through 9, hyphen (-), and underscore (_).",
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
						"Account Store Level"
					],
					"operation": [
						"Post Stores"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Shopper Statement",
			"name": "shopperStatement",
			"type": "string",
			"default": "",
			"description": "The store name to be shown on the shopper's bank or credit card statement and on the shopper receipt.\nMaximum length: 22 characters; can't be all numbers.",
			"routing": {
				"send": {
					"property": "shopperStatement",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Store Level"
					],
					"operation": [
						"Post Stores"
					]
				}
			}
		},
		{
			"displayName": "Split Configuration",
			"name": "splitConfiguration",
			"type": "json",
			"default": "{}",
			"description": "The configuration of the split.",
			"routing": {
				"send": {
					"property": "splitConfiguration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Store Level"
					],
					"operation": [
						"Post Stores"
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
						"Account Store Level"
					],
					"operation": [
						"Post Stores"
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
						"Account Store Level"
					],
					"operation": [
						"Post Stores"
					]
				}
			}
		},
		{
			"displayName": "GET /stores/{storeId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account Store Level"
					],
					"operation": [
						"Get Stores Store ID"
					]
				}
			}
		},
		{
			"displayName": "Store ID",
			"name": "storeId",
			"required": true,
			"description": "The unique identifier of the store.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Account Store Level"
					],
					"operation": [
						"Get Stores Store ID"
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
						"Account Store Level"
					],
					"operation": [
						"Get Stores Store ID"
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
						"Account Store Level"
					],
					"operation": [
						"Get Stores Store ID"
					]
				}
			}
		},
		{
			"displayName": "PATCH /stores/{storeId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account Store Level"
					],
					"operation": [
						"Patch Stores Store ID"
					]
				}
			}
		},
		{
			"displayName": "Store ID",
			"name": "storeId",
			"required": true,
			"description": "The unique identifier of the store.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Account Store Level"
					],
					"operation": [
						"Patch Stores Store ID"
					]
				}
			}
		},
		{
			"displayName": "Address",
			"name": "address",
			"type": "json",
			"default": "{}",
			"description": "The address of the store. It is not possible to update the country of the store.",
			"routing": {
				"send": {
					"property": "address",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Store Level"
					],
					"operation": [
						"Patch Stores Store ID"
					]
				}
			}
		},
		{
			"displayName": "Business Line Ids",
			"name": "businessLineIds",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The unique identifiers of the [business lines](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/businesslines__resParam_id) that the store is associated with.",
			"routing": {
				"send": {
					"property": "businessLineIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Store Level"
					],
					"operation": [
						"Patch Stores Store ID"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"description": "The description of the store.",
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
						"Account Store Level"
					],
					"operation": [
						"Patch Stores Store ID"
					]
				}
			}
		},
		{
			"displayName": "External Reference ID",
			"name": "externalReferenceId",
			"type": "string",
			"default": "",
			"description": "When using the Zip payment method: The location ID that Zip has assigned to your store.",
			"routing": {
				"send": {
					"property": "externalReferenceId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Store Level"
					],
					"operation": [
						"Patch Stores Store ID"
					]
				}
			}
		},
		{
			"displayName": "Split Configuration",
			"name": "splitConfiguration",
			"type": "json",
			"default": "{}",
			"description": "Rules for Adyen for Platform merchants to split commission fees.",
			"routing": {
				"send": {
					"property": "splitConfiguration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Store Level"
					],
					"operation": [
						"Patch Stores Store ID"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "options",
			"default": "active",
			"description": "The status of the store. Possible values are:\n\n- **active**: This value is assigned automatically when a store is created. \n- **inactive**: The maximum [transaction limits and number of Store-and-Forward transactions](https://docs.adyen.com/point-of-sale/determine-account-structure/configure-features#payment-features) for the store are set to 0. This blocks new transactions, but captures are still possible.\n- **closed**: The terminals of the store are reassigned to the merchant inventory, so they can't process payments.\n\nYou can change the status from **active** to **inactive**, and from **inactive** to **active** or **closed**. \nOnce **closed**, a store can't be reopened.",
			"options": [
				{
					"name": "Active",
					"value": "active"
				},
				{
					"name": "Closed",
					"value": "closed"
				},
				{
					"name": "Inactive",
					"value": "inactive"
				}
			],
			"routing": {
				"send": {
					"property": "status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Store Level"
					],
					"operation": [
						"Patch Stores Store ID"
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
						"Account Store Level"
					],
					"operation": [
						"Patch Stores Store ID"
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
						"Account Store Level"
					],
					"operation": [
						"Patch Stores Store ID"
					]
				}
			}
		},
];
