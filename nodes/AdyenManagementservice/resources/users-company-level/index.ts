import type { INodeProperties } from 'n8n-workflow';

export const usersCompanyLevelDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Users Company Level"
					]
				}
			},
			"options": [
				{
					"name": "Get Companies Company ID Users",
					"value": "Get Companies Company ID Users",
					"action": "Get a list of users",
					"description": "Returns the list of users for the `companyId` identified in the path.\n\nTo make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—Users read and write\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/companies/{{$parameter[\"companyId\"]}}/users"
						}
					}
				},
				{
					"name": "Post Companies Company ID Users",
					"value": "Post Companies Company ID Users",
					"action": "Create a new user",
					"description": "Creates the user for the `companyId` identified in the path.\n\nTo make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—Users read and write\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/companies/{{$parameter[\"companyId\"]}}/users"
						}
					}
				},
				{
					"name": "Get Companies Company ID Users User ID",
					"value": "Get Companies Company ID Users User ID",
					"action": "Get user details",
					"description": "Returns user details for the `userId` and the `companyId` identified in the path.\n\nTo make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—Users read and write\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/companies/{{$parameter[\"companyId\"]}}/users/{{$parameter[\"userId\"]}}"
						}
					}
				},
				{
					"name": "Patch Companies Company ID Users User ID",
					"value": "Patch Companies Company ID Users User ID",
					"action": "Update user details",
					"description": "Updates user details for the `userId` and the `companyId` identified in the path.\n\nTo make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—Users read and write\n",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/companies/{{$parameter[\"companyId\"]}}/users/{{$parameter[\"userId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /companies/{companyId}/users",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Company Level"
					],
					"operation": [
						"Get Companies Company ID Users"
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
						"Users Company Level"
					],
					"operation": [
						"Get Companies Company ID Users"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "The number of the page to return.",
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
						"Users Company Level"
					],
					"operation": [
						"Get Companies Company ID Users"
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
						"Users Company Level"
					],
					"operation": [
						"Get Companies Company ID Users"
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
						"Users Company Level"
					],
					"operation": [
						"Get Companies Company ID Users"
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
						"Users Company Level"
					],
					"operation": [
						"Get Companies Company ID Users"
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
						"Users Company Level"
					],
					"operation": [
						"Get Companies Company ID Users"
					]
				}
			}
		},
		{
			"displayName": "POST /companies/{companyId}/users",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Company Level"
					],
					"operation": [
						"Post Companies Company ID Users"
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
						"Users Company Level"
					],
					"operation": [
						"Post Companies Company ID Users"
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
						"Users Company Level"
					],
					"operation": [
						"Post Companies Company ID Users"
					]
				}
			}
		},
		{
			"displayName": "Associated Merchant Accounts",
			"name": "associatedMerchantAccounts",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The list of [merchant accounts](https://docs.adyen.com/account/account-structure#merchant-accounts) associated with this user.",
			"routing": {
				"send": {
					"property": "associatedMerchantAccounts",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Company Level"
					],
					"operation": [
						"Post Companies Company ID Users"
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
						"Users Company Level"
					],
					"operation": [
						"Post Companies Company ID Users"
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
						"Users Company Level"
					],
					"operation": [
						"Post Companies Company ID Users"
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
						"Users Company Level"
					],
					"operation": [
						"Post Companies Company ID Users"
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
						"Users Company Level"
					],
					"operation": [
						"Post Companies Company ID Users"
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
						"Users Company Level"
					],
					"operation": [
						"Post Companies Company ID Users"
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
						"Users Company Level"
					],
					"operation": [
						"Post Companies Company ID Users"
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
						"Users Company Level"
					],
					"operation": [
						"Post Companies Company ID Users"
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
						"Users Company Level"
					],
					"operation": [
						"Post Companies Company ID Users"
					]
				}
			}
		},
		{
			"displayName": "GET /companies/{companyId}/users/{userId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Company Level"
					],
					"operation": [
						"Get Companies Company ID Users User ID"
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
						"Users Company Level"
					],
					"operation": [
						"Get Companies Company ID Users User ID"
					]
				}
			}
		},
		{
			"displayName": "User ID",
			"name": "userId",
			"required": true,
			"description": "The unique identifier of the user.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Company Level"
					],
					"operation": [
						"Get Companies Company ID Users User ID"
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
						"Users Company Level"
					],
					"operation": [
						"Get Companies Company ID Users User ID"
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
						"Users Company Level"
					],
					"operation": [
						"Get Companies Company ID Users User ID"
					]
				}
			}
		},
		{
			"displayName": "PATCH /companies/{companyId}/users/{userId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Company Level"
					],
					"operation": [
						"Patch Companies Company ID Users User ID"
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
						"Users Company Level"
					],
					"operation": [
						"Patch Companies Company ID Users User ID"
					]
				}
			}
		},
		{
			"displayName": "User ID",
			"name": "userId",
			"required": true,
			"description": "The unique identifier of the user.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Company Level"
					],
					"operation": [
						"Patch Companies Company ID Users User ID"
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
						"Users Company Level"
					],
					"operation": [
						"Patch Companies Company ID Users User ID"
					]
				}
			}
		},
		{
			"displayName": "Active",
			"name": "active",
			"type": "boolean",
			"default": true,
			"description": "Indicates whether this user is active.",
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
						"Users Company Level"
					],
					"operation": [
						"Patch Companies Company ID Users User ID"
					]
				}
			}
		},
		{
			"displayName": "Associated Merchant Accounts",
			"name": "associatedMerchantAccounts",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The list of [merchant accounts](https://docs.adyen.com/account/account-structure#merchant-accounts) to associate the user with.",
			"routing": {
				"send": {
					"property": "associatedMerchantAccounts",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Company Level"
					],
					"operation": [
						"Patch Companies Company ID Users User ID"
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
						"Users Company Level"
					],
					"operation": [
						"Patch Companies Company ID Users User ID"
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
						"Users Company Level"
					],
					"operation": [
						"Patch Companies Company ID Users User ID"
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
						"Users Company Level"
					],
					"operation": [
						"Patch Companies Company ID Users User ID"
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
						"Users Company Level"
					],
					"operation": [
						"Patch Companies Company ID Users User ID"
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
						"Users Company Level"
					],
					"operation": [
						"Patch Companies Company ID Users User ID"
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
						"Users Company Level"
					],
					"operation": [
						"Patch Companies Company ID Users User ID"
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
						"Users Company Level"
					],
					"operation": [
						"Patch Companies Company ID Users User ID"
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
						"Users Company Level"
					],
					"operation": [
						"Patch Companies Company ID Users User ID"
					]
				}
			}
		},
];
