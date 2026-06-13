import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AdyenManagementserviceApi implements ICredentialType {
        name = 'N8nDevAdyenManagementserviceApi';

        displayName = 'Adyen Managementservice API';

        icon: Icon = { light: 'file:../nodes/AdyenManagementservice/adyen-managementservice.svg', dark: 'file:../nodes/AdyenManagementservice/adyen-managementservice.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://management-test.adyen.com/v1',
                        required: true,
                        placeholder: 'https://management-test.adyen.com/v1',
                        description: 'The base URL of your Adyen Managementservice API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-API-Key': '={{$credentials.apiKey}}',
                        },
                },
        };


}
