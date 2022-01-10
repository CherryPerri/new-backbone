Welcome to Globiots REST API documentation.
Globiots REST API allows for programmatic access to your account resources, including devices, parameters, data log, alarm log, event log and more.

**Abstract**: This document shows the detailed functions of API Serve which are used to served Daviteq’s partners’ projects and can be used as a reference.

**Purpose**: This document provides clients and users with a needed guide to connect and transfer data through API Server.

To interact with <b>Globiots Resources API</b>, we recommend using an `HTTPS` client. Here are a few options:

 * [<b>Insomnia</b>](https://insomnia.rest/): Simple yet powerful REST API Client with cookie management, environment variables, code generation, and authentication for Mac, Windows, and Linux.
 * [<b>Postman</b>](https://www.getpostman.com/): Powerful, simple-to-use GUI that makes API development faster, easier, and better. Comes with API request history, collections, environments, tests, sharing and more.
 * [<b>cURL</b>](https://curl.haxx.se/): Command line HTTP client with an intuitive UI, JSON support, syntax highlighting, wget-like downloads, plugins, and more.
 * [<b>HTTPie</b>](https://httpie.org/): Command line tool for transferring data using various protocols with URL syntax.
 
<h2 id=\"api-urls\"> API URLs</h2>
 
API access can be made over _`HTTP`_ or _`HTTPS`_, using the following endpoints based on your Globiots Account type.
 
**Security Note**: We strongly advise using <b>HTTPS</b> to make sure your data travels encrypted, and avoid exposing your API token and/or sensor data.
 
 
### HTTP
Endpoint | Port
---|---
`http://resources.globiots.com` | 80

### HTTPS
Endpoint | Port
---|---  
`https://resources.globiots.com` | 443
 
You can download the Globiots PEM certificate for TLS [here](https://filerun.daviteq.com/wl/?id=pR3dYJXq4dadnLniSAmRM1Jri7dbz8rn).



