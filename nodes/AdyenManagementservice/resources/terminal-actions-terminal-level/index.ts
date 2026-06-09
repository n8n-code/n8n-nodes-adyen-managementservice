import type { INodeProperties } from 'n8n-workflow';

export const terminalActionsTerminalLevelDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Actions Terminal Level"
					]
				}
			},
			"options": [
				{
					"name": "Post Terminals Schedule Actions",
					"value": "Post Terminals Schedule Actions",
					"action": "Create a terminal action",
					"description": "Schedules a [terminal action](https://docs.adyen.com/point-of-sale/automating-terminal-management/terminal-actions-api) by specifying the action and the terminals that the action must be applied to. \n\nThe following restrictions apply:\n* You can schedule only one action at a time. For example, to install a new app version and remove an old app version, you have to make two API requests. \n* The maximum number of terminals in a request is **100**. For example, to apply an action to 250 terminals, you have to divide the terminals over three API requests. \n* If there is an error with one or more terminal IDs in the request, the action is scheduled for none of the terminals. You need to fix the error and try again. \n\nTo make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Management API—Terminal actions read and write",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/terminals/scheduleActions"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /terminals/scheduleActions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Actions Terminal Level"
					],
					"operation": [
						"Post Terminals Schedule Actions"
					]
				}
			}
		},
		{
			"displayName": "Action Details",
			"name": "actionDetails",
			"type": "json",
			"default": "{\n  \"type\": \"InstallAndroidApp\"\n}",
			"routing": {
				"send": {
					"property": "actionDetails",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Actions Terminal Level"
					],
					"operation": [
						"Post Terminals Schedule Actions"
					]
				}
			}
		},
		{
			"displayName": "Scheduled At",
			"name": "scheduledAt",
			"type": "string",
			"default": "",
			"description": "The date and time when the action should happen. \nFormat: [RFC 3339](https://www.rfc-editor.org/rfc/rfc3339), but without the **Z** before the time offset. For example, **2021-11-15T12:16:21+01:00** \nThe action is sent with the first [maintenance call](https://docs.adyen.com/point-of-sale/automating-terminal-management/terminal-actions-api#when-actions-take-effect) after the specified date and time in the time zone of the terminal. \nAn empty value causes the action to be sent as soon as possible: at the next maintenance call.",
			"routing": {
				"send": {
					"property": "scheduledAt",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Actions Terminal Level"
					],
					"operation": [
						"Post Terminals Schedule Actions"
					]
				}
			}
		},
		{
			"displayName": "Store Id",
			"name": "storeId",
			"type": "string",
			"default": "",
			"description": "The unique ID of the [store](https://docs.adyen.com/api-explorer/#/ManagementService/latest/get/stores). If present, all terminals in the `terminalIds` list must be assigned to this store.",
			"routing": {
				"send": {
					"property": "storeId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Actions Terminal Level"
					],
					"operation": [
						"Post Terminals Schedule Actions"
					]
				}
			}
		},
		{
			"displayName": "Terminal Ids",
			"name": "terminalIds",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "A list of unique IDs of the terminals to apply the action to. You can extract the IDs from the [GET `/terminals`](https://docs.adyen.com/api-explorer/#/ManagementService/latest/get/terminals) response. Maximum length: 100 IDs.",
			"routing": {
				"send": {
					"property": "terminalIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Terminal Actions Terminal Level"
					],
					"operation": [
						"Post Terminals Schedule Actions"
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
						"Terminal Actions Terminal Level"
					],
					"operation": [
						"Post Terminals Schedule Actions"
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
						"Terminal Actions Terminal Level"
					],
					"operation": [
						"Post Terminals Schedule Actions"
					]
				}
			}
		},
];
