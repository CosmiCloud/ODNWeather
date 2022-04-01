# ODNWeather

This script pulls the latest weather observations from 1/500 randomly selected stations from weather.gov and publishes it to the Origintrail V6 Beta testnet. Big thanks to @zeroxbt for contributing. 

Currently, SSL needs to be disabled to use this script.

Running Origintrail V6 Beta 1 testnode required.

Run: sudo git clone https://github.com/CosmiCloud/ODNWeather.git && cd ODNWeather && sudo npm install axios && sudo npm install dkg-client@beta.1 && cp weather.service /etc/systemd/system && systemctl daemon-reload && systemctl start weather && systemctl enable weather && journalctl -f -u weather

You can now close out of the terminal. Make sure you mumbai funds stay stocked.

NOTICE: If you get a 404 error while running, that is ok, that is the weather.gov api failing to return results for that call.


