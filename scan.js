const wifi = require('node-wifi');

wifi.init({
    iface: null 
  });

  wifi.scan((error, networks) => {
    if (error) {
      console.log(error);
    } else {
      for (var i=0;i<Object.keys(networks).length ;i++) {
        var scanNetworks = networks[i].ssid;
        var scanNetworksQuality = networks[i].quality
        var scanNetworksSecurity = networks[i].security
        var scanNetworksMac = networks[i].mac
        var scanNetworksSecFlags = networks[i].security_flags

        var scanMap = {
          "Network Name" : scanNetworks,
          "MAC Address" : scanNetworksMac,
          "Network Security" : scanNetworksSecurity,
          "Network Quality" : scanNetworksQuality,
          "Security Flags" : scanNetworksSecFlags,

        }

      console.log(scanMap)
      }

      console.log(Object.keys(networks).length + ' network found.')

    }
  });