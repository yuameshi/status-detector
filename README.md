# Status Detector App

[Demo](https://status.yuameshi.top/)

## Getting Started

- Install dependencies

    - `npm install`

- Create environment variables
    - Create a `.env` file in the root directory and add the following environment variables to the `.env` file or export them to the terminal
    - Rules:
        - EXTERNAL_LINKS: Underscore separated list of external links to be displayed in the header, each link should be in the format `name1|url1_name2|url2_...namen|urln`
        - SHOW_LINKS: Boolean(`true`/`false`) value to show or hide the external links
        - MAX_DAYS: Maximum number of days to show the status of the services
        - API_KEYS: Comma separated list of `Monitor-specific API keys` for the statuspage. You can get it from [dashboard of uptime robot](https://dashboard.uptimerobot.com/integrations).
        - REFRESH_INTERVAL: Auto-refresh interval in seconds. The page will automatically refresh status data at this interval. Default is `300` (5 minutes).

```
EXTERNAL_LINKS=name1|url1_name2|url2
SHOW_LINKS=true
MAX_DAYS=60
API_KEYS=key1,key2,key3
REFRESH_INTERVAL=300
```

- Build App
    - `npm run build`
- Start App
    - `npm run start`
