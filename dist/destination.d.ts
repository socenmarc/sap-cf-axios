export declare function readDestination(destinationName: string): Promise<IDestinationConfiguration>;
export interface IDestinationConfiguration {
    Name: string;
    Type: string;
    URL: string;
    Authentication: "BasicAuthentication" | "OAuth2UserTokenExchange";
    ProxyType: string;
    Description: string;
    User: string;
    Password: string;
    tokenServiceURLType: string;
    clientId: string;
    saml2_audience: string;
    tokenServiceURL: string;
    clientSecret: string;
    WebIDEUsage: string;
    WebIDEEnabled: string;
}