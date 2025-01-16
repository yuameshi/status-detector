# Status Detector App

[Demo](https://status.yuameshi.top/)

## Getting Started

- Install dependencies

    - `npm install`

- Create environment variables
    - Create a `.env` file in the root directory and add the following environment variables to the `.env` file or export them to the terminal
    - Rules:
        - EXTERNAL_LINKS: Underscore separated list of external links to be displayed in the footer, each link should be in the format `name|url`
        - SHOW_LINKS: Boolean(`true`/`false`) value to show or hide the external links
        - MAX_DAYS: Maximum number of days to show the status of the services
        - API_KEYS: Comma separated list of `Monitor-specific API keys` for the statuspage. You can get it from [dashboard of uptime robot](https://dashboard.uptimerobot.com/integrations).

```
EXTERNAL_LINKS=name|url
SHOW_LINKS=true
MAX_DAYS=60
API_KEYS=key1,key2,key3
```

- Build App
    - `npm run build`
- Start App
    - `npm run start`
