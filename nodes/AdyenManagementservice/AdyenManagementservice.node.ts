import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { apiKeyMerchantLevelDescription } from './resources/api-key-merchant-level';
import { accountMerchantLevelDescription } from './resources/account-merchant-level';
import { allowedOriginsCompanyLevelDescription } from './resources/allowed-origins-company-level';
import { apiKeyCompanyLevelDescription } from './resources/api-key-company-level';
import { clientKeyCompanyLevelDescription } from './resources/client-key-company-level';
import { usersCompanyLevelDescription } from './resources/users-company-level';
import { terminalActionsTerminalLevelDescription } from './resources/terminal-actions-terminal-level';
import { terminalSettingsTerminalLevelDescription } from './resources/terminal-settings-terminal-level';
import { payoutSettingsMerchantLevelDescription } from './resources/payout-settings-merchant-level';
import { webhooksMerchantLevelDescription } from './resources/webhooks-merchant-level';
import { clientKeyMerchantLevelDescription } from './resources/client-key-merchant-level';
import { terminalOrdersCompanyLevelDescription } from './resources/terminal-orders-company-level';
import { allowedOriginsMerchantLevelDescription } from './resources/allowed-origins-merchant-level';
import { apiCredentialsMerchantLevelDescription } from './resources/api-credentials-merchant-level';
import { usersMerchantLevelDescription } from './resources/users-merchant-level';
import { terminalActionsCompanyLevelDescription } from './resources/terminal-actions-company-level';
import { paymentMethodsMerchantLevelDescription } from './resources/payment-methods-merchant-level';
import { myApiCredentialDescription } from './resources/my-api-credential';
import { terminalSettingsMerchantLevelDescription } from './resources/terminal-settings-merchant-level';
import { webhooksCompanyLevelDescription } from './resources/webhooks-company-level';
import { terminalsTerminalLevelDescription } from './resources/terminals-terminal-level';
import { accountStoreLevelDescription } from './resources/account-store-level';
import { terminalSettingsCompanyLevelDescription } from './resources/terminal-settings-company-level';
import { apiCredentialsCompanyLevelDescription } from './resources/api-credentials-company-level';
import { terminalOrdersMerchantLevelDescription } from './resources/terminal-orders-merchant-level';
import { accountCompanyLevelDescription } from './resources/account-company-level';
import { terminalSettingsStoreLevelDescription } from './resources/terminal-settings-store-level';

export class AdyenManagementservice implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Adyen Managementservice',
		name: 'N8nDevAdyenManagementservice',
		icon: { light: 'file:./adyen-managementservice.svg', dark: 'file:./adyen-managementservice.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Configure Adyen company, merchant accounts, stores, and payment terminals.',
		defaults: { name: 'Adyen Managementservice' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevAdyenManagementserviceApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "API Key Merchant Level",
					"value": "API Key Merchant Level",
					"description": ""
				},
				{
					"name": "Account Merchant Level",
					"value": "Account Merchant Level",
					"description": ""
				},
				{
					"name": "Allowed Origins Company Level",
					"value": "Allowed Origins Company Level",
					"description": ""
				},
				{
					"name": "API Key Company Level",
					"value": "API Key Company Level",
					"description": ""
				},
				{
					"name": "Client Key Company Level",
					"value": "Client Key Company Level",
					"description": ""
				},
				{
					"name": "Users Company Level",
					"value": "Users Company Level",
					"description": ""
				},
				{
					"name": "Terminal Actions Terminal Level",
					"value": "Terminal Actions Terminal Level",
					"description": ""
				},
				{
					"name": "Terminal Settings Terminal Level",
					"value": "Terminal Settings Terminal Level",
					"description": ""
				},
				{
					"name": "Payout Settings Merchant Level",
					"value": "Payout Settings Merchant Level",
					"description": ""
				},
				{
					"name": "Webhooks Merchant Level",
					"value": "Webhooks Merchant Level",
					"description": ""
				},
				{
					"name": "Client Key Merchant Level",
					"value": "Client Key Merchant Level",
					"description": ""
				},
				{
					"name": "Terminal Orders Company Level",
					"value": "Terminal Orders Company Level",
					"description": ""
				},
				{
					"name": "Allowed Origins Merchant Level",
					"value": "Allowed Origins Merchant Level",
					"description": ""
				},
				{
					"name": "API Credentials Merchant Level",
					"value": "API Credentials Merchant Level",
					"description": ""
				},
				{
					"name": "Users Merchant Level",
					"value": "Users Merchant Level",
					"description": ""
				},
				{
					"name": "Terminal Actions Company Level",
					"value": "Terminal Actions Company Level",
					"description": ""
				},
				{
					"name": "Payment Methods Merchant Level",
					"value": "Payment Methods Merchant Level",
					"description": ""
				},
				{
					"name": "My API Credential",
					"value": "My API Credential",
					"description": ""
				},
				{
					"name": "Terminal Settings Merchant Level",
					"value": "Terminal Settings Merchant Level",
					"description": ""
				},
				{
					"name": "Webhooks Company Level",
					"value": "Webhooks Company Level",
					"description": ""
				},
				{
					"name": "Terminals Terminal Level",
					"value": "Terminals Terminal Level",
					"description": ""
				},
				{
					"name": "Account Store Level",
					"value": "Account Store Level",
					"description": ""
				},
				{
					"name": "Terminal Settings Company Level",
					"value": "Terminal Settings Company Level",
					"description": ""
				},
				{
					"name": "API Credentials Company Level",
					"value": "API Credentials Company Level",
					"description": ""
				},
				{
					"name": "Terminal Orders Merchant Level",
					"value": "Terminal Orders Merchant Level",
					"description": ""
				},
				{
					"name": "Account Company Level",
					"value": "Account Company Level",
					"description": ""
				},
				{
					"name": "Terminal Settings Store Level",
					"value": "Terminal Settings Store Level",
					"description": ""
				}
			],
			"default": ""
		},
		...apiKeyMerchantLevelDescription,
		...accountMerchantLevelDescription,
		...allowedOriginsCompanyLevelDescription,
		...apiKeyCompanyLevelDescription,
		...clientKeyCompanyLevelDescription,
		...usersCompanyLevelDescription,
		...terminalActionsTerminalLevelDescription,
		...terminalSettingsTerminalLevelDescription,
		...payoutSettingsMerchantLevelDescription,
		...webhooksMerchantLevelDescription,
		...clientKeyMerchantLevelDescription,
		...terminalOrdersCompanyLevelDescription,
		...allowedOriginsMerchantLevelDescription,
		...apiCredentialsMerchantLevelDescription,
		...usersMerchantLevelDescription,
		...terminalActionsCompanyLevelDescription,
		...paymentMethodsMerchantLevelDescription,
		...myApiCredentialDescription,
		...terminalSettingsMerchantLevelDescription,
		...webhooksCompanyLevelDescription,
		...terminalsTerminalLevelDescription,
		...accountStoreLevelDescription,
		...terminalSettingsCompanyLevelDescription,
		...apiCredentialsCompanyLevelDescription,
		...terminalOrdersMerchantLevelDescription,
		...accountCompanyLevelDescription,
		...terminalSettingsStoreLevelDescription
		],
	};
}
