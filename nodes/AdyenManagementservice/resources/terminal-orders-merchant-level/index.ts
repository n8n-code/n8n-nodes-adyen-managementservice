import type { INodeProperties } from 'n8n-workflow';

export const terminalOrdersMerchantLevelDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Orders Merchant Level"
					]
				}
			},
			"options": [
				{
					"name": "Get Merchants Merchant Id Billing Entities",
					"value": "Get Merchants Merchant Id Billing Entities",
					"action": "Get a list of billing entities",
					"description": "Returns the billing entities of the merchant account identified in the path.\nA billing entity is a legal entity where we charge orders to. An order for terminal products must contain the ID of a billing entity.\n\nTo make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—Terminal ordering read\n* Management API—Terminal ordering read and write",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/merchants/{{$parameter[\"merchantId\"]}}/billingEntities"
						}
					}
				},
				{
					"name": "Get Merchants Merchant Id Shipping Locations",
					"value": "Get Merchants Merchant Id Shipping Locations",
					"action": "Get a list of shipping locations",
					"description": "Returns the shipping locations for the merchant account identified in the path.\nA shipping location includes the address where orders can be delivered, and an ID which you need to specify when ordering terminal products.\n\nTo make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—Terminal ordering read\n* Management API—Terminal ordering read and write",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/merchants/{{$parameter[\"merchantId\"]}}/shippingLocations"
						}
					}
				},
				{
					"name": "Post Merchants Merchant Id Shipping Locations",
					"value": "Post Merchants Merchant Id Shipping Locations",
					"action": "Create a shipping location",
					"description": "Creates a shipping location for the merchant account identified in the path. A shipping location defines an address where orders can be shipped to. \n\nTo make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—Terminal ordering read and write",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/merchants/{{$parameter[\"merchantId\"]}}/shippingLocations"
						}
					}
				},
				{
					"name": "Get Merchants Merchant Id Terminal Models",
					"value": "Get Merchants Merchant Id Terminal Models",
					"action": "Get a list of terminal models",
					"description": "Returns the payment terminal models that merchant account identified in the path has access to. The response includes the terminal model ID, which can be used as a query parameter when getting a list of terminals or a list of products for ordering.\n\nTo make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—Terminal ordering read\n* Management API—Terminal ordering read and write",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/merchants/{{$parameter[\"merchantId\"]}}/terminalModels"
						}
					}
				},
				{
					"name": "Get Merchants Merchant Id Terminal Orders",
					"value": "Get Merchants Merchant Id Terminal Orders",
					"action": "Get a list of orders",
					"description": "Returns a list of terminal products orders for the merchant account identified in the path.\n\nTo make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—Terminal ordering read\n* Management API—Terminal ordering read and write",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/merchants/{{$parameter[\"merchantId\"]}}/terminalOrders"
						}
					}
				},
				{
					"name": "Post Merchants Merchant Id Terminal Orders",
					"value": "Post Merchants Merchant Id Terminal Orders",
					"action": "Create an order",
					"description": "Creates an order for payment terminal products for the merchant account identified in the path.\n\nTo make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—Terminal ordering read and write",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/merchants/{{$parameter[\"merchantId\"]}}/terminalOrders"
						}
					}
				},
				{
					"name": "Get Merchants Merchant Id Terminal Orders Order Id",
					"value": "Get Merchants Merchant Id Terminal Orders Order Id",
					"action": "Get an order",
					"description": "Returns the details of the terminal products order identified in the path.\n\nTo make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—Terminal ordering read\n* Management API—Terminal ordering read and write",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/merchants/{{$parameter[\"merchantId\"]}}/terminalOrders/{{$parameter[\"orderId\"]}}"
						}
					}
				},
				{
					"name": "Patch Merchants Merchant Id Terminal Orders Order Id",
					"value": "Patch Merchants Merchant Id Terminal Orders Order Id",
					"action": "Update an order",
					"description": "Updates the terminal products order identified in the path.\nUpdating is only possible while the order has the status **Placed**.\n\nThe request body only needs to contain what you want to change. \nHowever, to update the products in the `items` array, you must provice the entire array. For example, if the array has three items:\n To remove one item, the array must include the remaining two items. Or to add one item, the array must include all four items.\n\nTo make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—Terminal ordering read and write",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/merchants/{{$parameter[\"merchantId\"]}}/terminalOrders/{{$parameter[\"orderId\"]}}"
						}
					}
				},
				{
					"name": "Post Merchants Merchant Id Terminal Orders Order Id Cancel",
					"value": "Post Merchants Merchant Id Terminal Orders Order Id Cancel",
					"action": "Cancel an order",
					"description": "Cancels the terminal products order identified in the path.\nCancelling is only possible while the order has the status **Placed**.\nTo cancel an order, make a POST call without a request body. The response returns the full order details, but with the status changed to **Cancelled**.\n\nTo make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—Terminal ordering read and write",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/merchants/{{$parameter[\"merchantId\"]}}/terminalOrders/{{$parameter[\"orderId\"]}}/cancel"
						}
					}
				},
				{
					"name": "Get Merchants Merchant Id Terminal Products",
					"value": "Get Merchants Merchant Id Terminal Products",
					"action": "Get a list of terminal products",
					"description": "Returns a country-specific list of payment terminal packages and parts that the merchant account identified in the path has access to.\n\nTo make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—Terminal ordering read\n* Management API—Terminal ordering read and write",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/merchants/{{$parameter[\"merchantId\"]}}/terminalProducts"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /merchants/{merchantId}/billingEntities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Orders Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant Id Billing Entities"
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
						"Terminal Orders Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant Id Billing Entities"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "The name of the billing entity.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Orders Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant Id Billing Entities"
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
						"Terminal Orders Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant Id Billing Entities"
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
						"Terminal Orders Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant Id Billing Entities"
					]
				}
			}
		},
		{
			"displayName": "GET /merchants/{merchantId}/shippingLocations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Orders Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant Id Shipping Locations"
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
						"Terminal Orders Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant Id Shipping Locations"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "The name of the shipping location.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Orders Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant Id Shipping Locations"
					]
				}
			}
		},
		{
			"displayName": "Offset",
			"name": "offset",
			"description": "The number of locations to skip.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "offset",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Orders Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant Id Shipping Locations"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "The number of locations to return.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Orders Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant Id Shipping Locations"
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
						"Terminal Orders Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant Id Shipping Locations"
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
						"Terminal Orders Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant Id Shipping Locations"
					]
				}
			}
		},
		{
			"displayName": "POST /merchants/{merchantId}/shippingLocations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Orders Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant Id Shipping Locations"
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
						"Terminal Orders Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant Id Shipping Locations"
					]
				}
			}
		},
		{
			"displayName": "Address",
			"name": "address",
			"type": "json",
			"default": "{}",
			"description": "The address details of the shipping location.",
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
						"Terminal Orders Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant Id Shipping Locations"
					]
				}
			}
		},
		{
			"displayName": "Contact",
			"name": "contact",
			"type": "json",
			"default": "{}",
			"description": "The contact details for the shipping location.",
			"routing": {
				"send": {
					"property": "contact",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Orders Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant Id Shipping Locations"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "",
			"description": "The unique identifier of the shipping location, for use as `shippingLocationId` when creating an order.",
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
						"Terminal Orders Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant Id Shipping Locations"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "The unique name of the shipping location.",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Orders Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant Id Shipping Locations"
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
						"Terminal Orders Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant Id Shipping Locations"
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
						"Terminal Orders Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant Id Shipping Locations"
					]
				}
			}
		},
		{
			"displayName": "GET /merchants/{merchantId}/terminalModels",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Orders Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant Id Terminal Models"
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
						"Terminal Orders Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant Id Terminal Models"
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
						"Terminal Orders Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant Id Terminal Models"
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
						"Terminal Orders Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant Id Terminal Models"
					]
				}
			}
		},
		{
			"displayName": "GET /merchants/{merchantId}/terminalOrders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Orders Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant Id Terminal Orders"
					]
				}
			}
		},
		{
			"displayName": "Merchant Id",
			"name": "merchantId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Orders Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant Id Terminal Orders"
					]
				}
			}
		},
		{
			"displayName": "Customer Order Reference",
			"name": "customerOrderReference",
			"description": "Your purchase order number.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "customerOrderReference",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Orders Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant Id Terminal Orders"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"description": "The order status. Possible values (not case-sensitive): Placed, Confirmed, Cancelled, Shipped, Delivered.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "status",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Orders Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant Id Terminal Orders"
					]
				}
			}
		},
		{
			"displayName": "Offset",
			"name": "offset",
			"description": "The number of orders to skip.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "offset",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Orders Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant Id Terminal Orders"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "The number of orders to return.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Orders Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant Id Terminal Orders"
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
						"Terminal Orders Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant Id Terminal Orders"
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
						"Terminal Orders Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant Id Terminal Orders"
					]
				}
			}
		},
		{
			"displayName": "POST /merchants/{merchantId}/terminalOrders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Orders Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant Id Terminal Orders"
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
						"Terminal Orders Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant Id Terminal Orders"
					]
				}
			}
		},
		{
			"displayName": "Billing Entity Id",
			"name": "billingEntityId",
			"type": "string",
			"default": "",
			"description": "The identification of the billing entity to use for the order.",
			"routing": {
				"send": {
					"property": "billingEntityId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Orders Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant Id Terminal Orders"
					]
				}
			}
		},
		{
			"displayName": "Customer Order Reference",
			"name": "customerOrderReference",
			"type": "string",
			"default": "",
			"description": "The merchant-defined purchase order reference.",
			"routing": {
				"send": {
					"property": "customerOrderReference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Orders Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant Id Terminal Orders"
					]
				}
			}
		},
		{
			"displayName": "Items",
			"name": "items",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "The products included in the order.",
			"routing": {
				"send": {
					"property": "items",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Orders Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant Id Terminal Orders"
					]
				}
			}
		},
		{
			"displayName": "Shipping Location Id",
			"name": "shippingLocationId",
			"type": "string",
			"default": "",
			"description": "The identification of the shipping location to use for the order.",
			"routing": {
				"send": {
					"property": "shippingLocationId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Orders Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant Id Terminal Orders"
					]
				}
			}
		},
		{
			"displayName": "Tax Id",
			"name": "taxId",
			"type": "string",
			"default": "",
			"description": "The tax number of the billing entity.",
			"routing": {
				"send": {
					"property": "taxId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Orders Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant Id Terminal Orders"
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
						"Terminal Orders Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant Id Terminal Orders"
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
						"Terminal Orders Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant Id Terminal Orders"
					]
				}
			}
		},
		{
			"displayName": "GET /merchants/{merchantId}/terminalOrders/{orderId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Orders Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant Id Terminal Orders Order Id"
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
						"Terminal Orders Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant Id Terminal Orders Order Id"
					]
				}
			}
		},
		{
			"displayName": "Order Id",
			"name": "orderId",
			"required": true,
			"description": "The unique identifier of the order.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Orders Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant Id Terminal Orders Order Id"
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
						"Terminal Orders Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant Id Terminal Orders Order Id"
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
						"Terminal Orders Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant Id Terminal Orders Order Id"
					]
				}
			}
		},
		{
			"displayName": "PATCH /merchants/{merchantId}/terminalOrders/{orderId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Orders Merchant Level"
					],
					"operation": [
						"Patch Merchants Merchant Id Terminal Orders Order Id"
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
						"Terminal Orders Merchant Level"
					],
					"operation": [
						"Patch Merchants Merchant Id Terminal Orders Order Id"
					]
				}
			}
		},
		{
			"displayName": "Order Id",
			"name": "orderId",
			"required": true,
			"description": "The unique identifier of the order.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Orders Merchant Level"
					],
					"operation": [
						"Patch Merchants Merchant Id Terminal Orders Order Id"
					]
				}
			}
		},
		{
			"displayName": "Billing Entity Id",
			"name": "billingEntityId",
			"type": "string",
			"default": "",
			"description": "The identification of the billing entity to use for the order.",
			"routing": {
				"send": {
					"property": "billingEntityId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Orders Merchant Level"
					],
					"operation": [
						"Patch Merchants Merchant Id Terminal Orders Order Id"
					]
				}
			}
		},
		{
			"displayName": "Customer Order Reference",
			"name": "customerOrderReference",
			"type": "string",
			"default": "",
			"description": "The merchant-defined purchase order reference.",
			"routing": {
				"send": {
					"property": "customerOrderReference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Orders Merchant Level"
					],
					"operation": [
						"Patch Merchants Merchant Id Terminal Orders Order Id"
					]
				}
			}
		},
		{
			"displayName": "Items",
			"name": "items",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "The products included in the order.",
			"routing": {
				"send": {
					"property": "items",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Orders Merchant Level"
					],
					"operation": [
						"Patch Merchants Merchant Id Terminal Orders Order Id"
					]
				}
			}
		},
		{
			"displayName": "Shipping Location Id",
			"name": "shippingLocationId",
			"type": "string",
			"default": "",
			"description": "The identification of the shipping location to use for the order.",
			"routing": {
				"send": {
					"property": "shippingLocationId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Orders Merchant Level"
					],
					"operation": [
						"Patch Merchants Merchant Id Terminal Orders Order Id"
					]
				}
			}
		},
		{
			"displayName": "Tax Id",
			"name": "taxId",
			"type": "string",
			"default": "",
			"description": "The tax number of the billing entity.",
			"routing": {
				"send": {
					"property": "taxId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Orders Merchant Level"
					],
					"operation": [
						"Patch Merchants Merchant Id Terminal Orders Order Id"
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
						"Terminal Orders Merchant Level"
					],
					"operation": [
						"Patch Merchants Merchant Id Terminal Orders Order Id"
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
						"Terminal Orders Merchant Level"
					],
					"operation": [
						"Patch Merchants Merchant Id Terminal Orders Order Id"
					]
				}
			}
		},
		{
			"displayName": "POST /merchants/{merchantId}/terminalOrders/{orderId}/cancel",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Orders Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant Id Terminal Orders Order Id Cancel"
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
						"Terminal Orders Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant Id Terminal Orders Order Id Cancel"
					]
				}
			}
		},
		{
			"displayName": "Order Id",
			"name": "orderId",
			"required": true,
			"description": "The unique identifier of the order.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Orders Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant Id Terminal Orders Order Id Cancel"
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
						"Terminal Orders Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant Id Terminal Orders Order Id Cancel"
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
						"Terminal Orders Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant Id Terminal Orders Order Id Cancel"
					]
				}
			}
		},
		{
			"displayName": "GET /merchants/{merchantId}/terminalProducts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Orders Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant Id Terminal Products"
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
						"Terminal Orders Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant Id Terminal Products"
					]
				}
			}
		},
		{
			"displayName": "Country",
			"name": "country",
			"required": true,
			"description": "The country to return products for, in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. For example, **US**",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "country",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Orders Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant Id Terminal Products"
					]
				}
			}
		},
		{
			"displayName": "Terminal Model Id",
			"name": "terminalModelId",
			"description": "The terminal model to return products for. Use the ID returned in the [GET `/terminalModels`](https://docs.adyen.com/api-explorer/#/ManagementService/latest/get/merchants/{merchantId}/terminalModels) response. For example, **Verifone.M400**",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "terminalModelId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Orders Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant Id Terminal Products"
					]
				}
			}
		},
		{
			"displayName": "Offset",
			"name": "offset",
			"description": "The number of products to skip.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "offset",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Orders Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant Id Terminal Products"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "The number of products to return.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Orders Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant Id Terminal Products"
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
						"Terminal Orders Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant Id Terminal Products"
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
						"Terminal Orders Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant Id Terminal Products"
					]
				}
			}
		},
];
