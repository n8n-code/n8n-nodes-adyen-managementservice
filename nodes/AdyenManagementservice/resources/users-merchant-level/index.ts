import type { INodeProperties } from 'n8n-workflow';

export const usersMerchantLevelDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Users Merchant Level"
					]
				}
			},
			"options": [
				{
					"name": "Get Merchants Merchant ID Users",
					"value": "Get Merchants Merchant ID Users",
					"action": "Get a list of users",
					"description": "Returns a list of users associated with the `merchantId` specified in the path.\n\nTo make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—Users read and write\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/merchants/{{$parameter[\"merchantId\"]}}/users"
						}
					}
				},
				{
					"name": "Post Merchants Merchant ID Users",
					"value": "Post Merchants Merchant ID Users",
					"action": "Create a new user",
					"description": "Creates a user for the `merchantId` specified in the path.\n\nTo make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—Users read and write\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/merchants/{{$parameter[\"merchantId\"]}}/users"
						}
					}
				},
				{
					"name": "Get Merchants Merchant ID Users User ID",
					"value": "Get Merchants Merchant ID Users User ID",
					"action": "Get user details",
					"description": "Returns user details for the `userId` and the `merchantId` specified in the path.\n\nTo make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—Users read and write\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/merchants/{{$parameter[\"merchantId\"]}}/users/{{$parameter[\"userId\"]}}"
						}
					}
				},
				{
					"name": "Patch Merchants Merchant ID Users User ID",
					"value": "Patch Merchants Merchant ID Users User ID",
					"action": "Update a user",
					"description": "Updates user details for the `userId` and the `merchantId` specified in the path.\n\nTo make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—Users read and write\n",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/merchants/{{$parameter[\"merchantId\"]}}/users/{{$parameter[\"userId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /merchants/{merchantId}/users",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant ID Users"
					]
				}
			}
		},
		{
			"displayName": "Merchant ID",
			"name": "merchantId",
			"required": true,
			"description": "Unique identifier of the merchant.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant ID Users"
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
						"Users Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant ID Users"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "pageSize",
			"description": "The number of items to have on a page. Maximum value is **100**. The default is **10** items on a page.",
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
						"Users Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant ID Users"
					]
				}
			}
		},
		{
			"displayName": "Username",
			"name": "username",
			"description": "The partial or complete username to select all users that match.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "username",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant ID Users"
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
						"Users Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant ID Users"
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
						"Users Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant ID Users"
					]
				}
			}
		},
		{
			"displayName": "POST /merchants/{merchantId}/users",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Users"
					]
				}
			}
		},
		{
			"displayName": "Merchant ID",
			"name": "merchantId",
			"required": true,
			"description": "Unique identifier of the merchant.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Users"
					]
				}
			}
		},
		{
			"displayName": "Account Groups",
			"name": "accountGroups",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The list of [account groups](https://docs.adyen.com/account/account-structure#account-groups) associated with this user.",
			"routing": {
				"send": {
					"property": "accountGroups",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Users"
					]
				}
			}
		},
		{
			"displayName": "Authn Apps",
			"name": "authnApps",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Set of authn apps to add to this user",
			"routing": {
				"send": {
					"property": "authnApps",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Users"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Email",
			"name": "email",
			"type": "string",
			"default": "",
			"description": "The email address of the user.",
			"routing": {
				"send": {
					"property": "email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Users"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "json",
			"default": "{}",
			"description": "The user's full name.\n\nAllowed length: 1—80 characters.",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Users"
					]
				}
			}
		},
		{
			"displayName": "Roles",
			"name": "roles",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The list of [roles](https://docs.adyen.com/account/user-roles) for this user.",
			"routing": {
				"send": {
					"property": "roles",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Users"
					]
				}
			}
		},
		{
			"displayName": "Time Zone Code",
			"name": "timeZoneCode",
			"type": "string",
			"default": "",
			"description": "The [tz database name](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) of the time zone of the user. For example, **Europe/Amsterdam**.",
			"routing": {
				"send": {
					"property": "timeZoneCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Users"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Username",
			"name": "username",
			"type": "string",
			"default": "",
			"description": "The username for this user. Allowed length: 255 alphanumeric characters.",
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
						"Users Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Users"
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
						"Users Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Users"
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
						"Users Merchant Level"
					],
					"operation": [
						"Post Merchants Merchant ID Users"
					]
				}
			}
		},
		{
			"displayName": "GET /merchants/{merchantId}/users/{userId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant ID Users User ID"
					]
				}
			}
		},
		{
			"displayName": "Merchant ID",
			"name": "merchantId",
			"required": true,
			"description": "Unique identifier of the merchant.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant ID Users User ID"
					]
				}
			}
		},
		{
			"displayName": "User ID",
			"name": "userId",
			"required": true,
			"description": "Unique identifier of the user.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant ID Users User ID"
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
						"Users Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant ID Users User ID"
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
						"Users Merchant Level"
					],
					"operation": [
						"Get Merchants Merchant ID Users User ID"
					]
				}
			}
		},
		{
			"displayName": "PATCH /merchants/{merchantId}/users/{userId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Merchant Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Users User ID"
					]
				}
			}
		},
		{
			"displayName": "Merchant ID",
			"name": "merchantId",
			"required": true,
			"description": "Unique identifier of the merchant.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Merchant Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Users User ID"
					]
				}
			}
		},
		{
			"displayName": "User ID",
			"name": "userId",
			"required": true,
			"description": "Unique identifier of the user.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Merchant Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Users User ID"
					]
				}
			}
		},
		{
			"displayName": "Account Groups",
			"name": "accountGroups",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The list of [account groups](https://docs.adyen.com/account/account-structure#account-groups) associated with this user.",
			"routing": {
				"send": {
					"property": "accountGroups",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Merchant Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Users User ID"
					]
				}
			}
		},
		{
			"displayName": "Active",
			"name": "active",
			"type": "boolean",
			"default": true,
			"description": "Sets the status of the user to active (**true**) or inactive (**false**).",
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
						"Users Merchant Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Users User ID"
					]
				}
			}
		},
		{
			"displayName": "Authn Apps To Add",
			"name": "authnAppsToAdd",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Set of authn apps to add to this user",
			"routing": {
				"send": {
					"property": "authnAppsToAdd",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Merchant Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Users User ID"
					]
				}
			}
		},
		{
			"displayName": "Authn Apps To Remove",
			"name": "authnAppsToRemove",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Set of authn apps to remove from this user",
			"routing": {
				"send": {
					"property": "authnAppsToRemove",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Merchant Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Users User ID"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"type": "string",
			"default": "",
			"description": "The email address of the user.",
			"routing": {
				"send": {
					"property": "email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Merchant Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Users User ID"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "json",
			"default": "{}",
			"description": "The user's full name.",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Merchant Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Users User ID"
					]
				}
			}
		},
		{
			"displayName": "Roles",
			"name": "roles",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The list of [roles](https://docs.adyen.com/account/user-roles) for this user.",
			"routing": {
				"send": {
					"property": "roles",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Merchant Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Users User ID"
					]
				}
			}
		},
		{
			"displayName": "Time Zone Code",
			"name": "timeZoneCode",
			"type": "string",
			"default": "",
			"description": "The [tz database name](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) of the time zone of the user. For example, **Europe/Amsterdam**.",
			"routing": {
				"send": {
					"property": "timeZoneCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Merchant Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Users User ID"
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
						"Users Merchant Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Users User ID"
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
						"Users Merchant Level"
					],
					"operation": [
						"Patch Merchants Merchant ID Users User ID"
					]
				}
			}
		},
];
