# Managed SOCKS5 Proxy

This repository is managed by Proxy Manager.

The workflow starts a SOCKS5 server on the GitHub runner and exposes it through a reverse SSH tunnel to your VPS.

Required repository secrets:

- VPS_HOST
- VPS_USER
- VPS_SSH_KEY
- VPS_SSH_PORT
- VPS_PROXY_PORT
- PROXY_USER
- PROXY_PASS

Optional:

- RESTART_TOKEN: personal access token used by the workflow to dispatch a fresh run before timeout.
