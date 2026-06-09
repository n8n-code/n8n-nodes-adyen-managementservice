import type { INodeProperties } from 'n8n-workflow';

export const terminalActionsCompanyLevelDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Actions Company Level"
					]
				}
			},
			"options": [
				{
					"name": "Get Companies Company Id Android Apps",
					"value": "Get Companies Company Id Android Apps",
					"action": "Get a list of Android apps",
					"description": "Returns a list of the Android apps that are available for the company identified in the path. \nThese apps have been uploaded to Adyen and can be installed or uninstalled on Android payment terminals through [terminal actions](https://docs.adyen.com/point-of-sale/automating-terminal-management/terminal-actions-api).\n\nTo make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—Terminal actions read\n* Management API—Terminal actions read and write",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/companies/{{$parameter[\"companyId\"]}}/androidApps"
						}
					}
				},
				{
					"name": "Get Companies Company Id Android Certificates",
					"value": "Get Companies Company Id Android Certificates",
					"action": "Get a list of Android certificates",
					"description": "Returns a list of the Android certificates that are available for the company identified in the path.\nTypically, these certificates enable running apps on Android payment terminals. The certifcates in the list have been uploaded to Adyen and can be installed or uninstalled on Android terminals through [terminal actions](https://docs.adyen.com/point-of-sale/automating-terminal-management/terminal-actions-api).\n\nTo make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—Terminal actions read\n* Management API—Terminal actions read and write",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/companies/{{$parameter[\"companyId\"]}}/androidCertificates"
						}
					}
				},
				{
					"name": "Get Companies Company Id Terminal Actions",
					"value": "Get Companies Company Id Terminal Actions",
					"action": "Get a list of terminal actions",
					"description": "Returns the [terminal actions](https://docs.adyen.com/point-of-sale/automating-terminal-management/terminal-actions-api) that have been scheduled for the company identified in the path.The response doesn't include actions that are scheduled by Adyen.\nTo make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—Terminal actions read\n* Management API—Terminal actions read and write",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/companies/{{$parameter[\"companyId\"]}}/terminalActions"
						}
					}
				},
				{
					"name": "Get Companies Company Id Terminal Actions Action Id",
					"value": "Get Companies Company Id Terminal Actions Action Id",
					"action": "Get terminal action",
					"description": "Returns the details of the [terminal action](https://docs.adyen.com/point-of-sale/automating-terminal-management/terminal-actions-api) identified in the path.\nTo make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—Terminal actions read\n* Management API—Terminal actions read and write",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/companies/{{$parameter[\"companyId\"]}}/terminalActions/{{$parameter[\"actionId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /companies/{companyId}/androidApps",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Actions Company Level"
					],
					"operation": [
						"Get Companies Company Id Android Apps"
					]
				}
			}
		},
		{
			"displayName": "Company Id",
			"name": "companyId",
			"required": true,
			"description": "The unique identifier of the company account.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Actions Company Level"
					],
					"operation": [
						"Get Companies Company Id Android Apps"
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
						"Terminal Actions Company Level"
					],
					"operation": [
						"Get Companies Company Id Android Apps"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "pageSize",
			"description": "The number of items to have on a page, maximum 100. The default is 20 items on a page.",
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
						"Terminal Actions Company Level"
					],
					"operation": [
						"Get Companies Company Id Android Apps"
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
						"Terminal Actions Company Level"
					],
					"operation": [
						"Get Companies Company Id Android Apps"
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
						"Terminal Actions Company Level"
					],
					"operation": [
						"Get Companies Company Id Android Apps"
					]
				}
			}
		},
		{
			"displayName": "GET /companies/{companyId}/androidCertificates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Actions Company Level"
					],
					"operation": [
						"Get Companies Company Id Android Certificates"
					]
				}
			}
		},
		{
			"displayName": "Company Id",
			"name": "companyId",
			"required": true,
			"description": "The unique identifier of the company account.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Actions Company Level"
					],
					"operation": [
						"Get Companies Company Id Android Certificates"
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
						"Terminal Actions Company Level"
					],
					"operation": [
						"Get Companies Company Id Android Certificates"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "pageSize",
			"description": "The number of items to have on a page, maximum 100. The default is 20 items on a page.",
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
						"Terminal Actions Company Level"
					],
					"operation": [
						"Get Companies Company Id Android Certificates"
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
						"Terminal Actions Company Level"
					],
					"operation": [
						"Get Companies Company Id Android Certificates"
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
						"Terminal Actions Company Level"
					],
					"operation": [
						"Get Companies Company Id Android Certificates"
					]
				}
			}
		},
		{
			"displayName": "GET /companies/{companyId}/terminalActions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Actions Company Level"
					],
					"operation": [
						"Get Companies Company Id Terminal Actions"
					]
				}
			}
		},
		{
			"displayName": "Company Id",
			"name": "companyId",
			"required": true,
			"description": "The unique identifier of the company account.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Actions Company Level"
					],
					"operation": [
						"Get Companies Company Id Terminal Actions"
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
						"Terminal Actions Company Level"
					],
					"operation": [
						"Get Companies Company Id Terminal Actions"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "pageSize",
			"description": "The number of items to have on a page, maximum 100. The default is 20 items on a page.",
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
						"Terminal Actions Company Level"
					],
					"operation": [
						"Get Companies Company Id Terminal Actions"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"description": "Returns terminal actions with the specified status. \nAllowed values: **pending**, **successful**, **failed**, **cancelled**, **tryLater**.",
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
						"Terminal Actions Company Level"
					],
					"operation": [
						"Get Companies Company Id Terminal Actions"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"description": "Returns terminal actions of the specified type. \nAllowed values: **InstallAndroidApp**, **UninstallAndroidApp**, **InstallAndroidCertificate**, **UninstallAndroidCertificate**.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Actions Company Level"
					],
					"operation": [
						"Get Companies Company Id Terminal Actions"
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
						"Terminal Actions Company Level"
					],
					"operation": [
						"Get Companies Company Id Terminal Actions"
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
						"Terminal Actions Company Level"
					],
					"operation": [
						"Get Companies Company Id Terminal Actions"
					]
				}
			}
		},
		{
			"displayName": "GET /companies/{companyId}/terminalActions/{actionId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Actions Company Level"
					],
					"operation": [
						"Get Companies Company Id Terminal Actions Action Id"
					]
				}
			}
		},
		{
			"displayName": "Company Id",
			"name": "companyId",
			"required": true,
			"description": "The unique identifier of the company account.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Actions Company Level"
					],
					"operation": [
						"Get Companies Company Id Terminal Actions Action Id"
					]
				}
			}
		},
		{
			"displayName": "Action Id",
			"name": "actionId",
			"required": true,
			"description": "The unique identifier of the terminal action.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Actions Company Level"
					],
					"operation": [
						"Get Companies Company Id Terminal Actions Action Id"
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
						"Terminal Actions Company Level"
					],
					"operation": [
						"Get Companies Company Id Terminal Actions Action Id"
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
						"Terminal Actions Company Level"
					],
					"operation": [
						"Get Companies Company Id Terminal Actions Action Id"
					]
				}
			}
		},
];
