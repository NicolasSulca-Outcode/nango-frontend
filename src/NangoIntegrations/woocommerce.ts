import Nango from '@nangohq/frontend';

export type WoocommerceProps = {
    integrationId: string;
    connectionId: string;
    consumer_key: string,
    consumer_secret: string,
    subdomain: string
};

export const WooCommerceIntegration = ({integrationId, connectionId, consumer_key, consumer_secret, subdomain}: WoocommerceProps) => {
    let nango = new Nango({ host: import.meta.env.VITE_NANGO_URL, publicKey: 'ceda8ff7-3119-4331-beab-9bd19b92970f' });
    nango
        .auth(integrationId, connectionId, {
            credentials: {
                username: consumer_key,
                password: consumer_secret
            },
            params: {
                subdomain: subdomain
            }
        })
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.log(error);
    });
};
