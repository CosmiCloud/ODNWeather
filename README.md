# ODNWeather

This script pulls the latest weather observations from 1/500 randomly selected stations from weather.gov and publishes it to the Origintrail V6 Phase 2 testnet. Big thanks to @zeroxbt for contributing.

Currently, SSL needs to be disabled to use this script.

Running Origintrail V6 Beta Phase 2 testnode required.

1. Run: sudo git clone https://github.com/CosmiCloud/ODNWeather.git && cd ODNWeather && sudo cp .env-example .env

2. Add wallet info and save.

3. Run: sudo npm install && chmod +x run_weather.sh && sed -i -e 's/\r$//' run_weather.sh && cp weather.service /etc/systemd/system && systemctl daemon-reload && systemctl start weather && systemctl enable weather && journalctl -f -u weather

You can now close out of the terminal. Make sure your otp and trac funds stay stocked.

NOTICE: If you get a 404 error while running, that is ok, that is the weather.gov api failing to return results for that call.
