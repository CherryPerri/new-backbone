
# 1 - Overview
	A [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications) endpoint is available to receive public data. This allows you to receive new data without having to poll the server. The WebSocket socket will onmessage a `stream` event when new data is available. The received JSON data contains one or more of the properties listed below, depending on what was updated.

	
# 2 - Notes
## 2.1 - Data type & Data length on memory address
|Data type | Data length
---|---
byte|1
unsigned_integer_16|2
unsigned_integer_32|4
float|4
integer_16|2
integer_32|4
string| `The length depend on definitions`
hexa|`The length depend on definitions`

## 2.2 - Get Hostname of device(iConnector) info
![image info](https://filerun.daviteq.com/wl/?id=RFQTgWFCzzEuAYUnoQNwu2IhfO2xA7TA)
## 2.3 - Get address info of parameter
![image info](https://filerun.daviteq.com/wl/?id=HT2fwsoHKLzvzJT9P998GMyNhiT1jWVx)
![image info](https://filerun.daviteq.com/wl/?id=DUSasscCYYINpsh6CAvU91R4BMwlT5rF)
![image info](https://filerun.daviteq.com/wl/?id=1HY2YmOcpgsnwUirk8HPsssf6IK97Bs1)

# 3 - Realtime streaming data

### WS  
URI | 
---|
`ws://dataengine.globiots.com/data-engine/realtime`

### WSS  
URI | 
---|
`wss://dataengine.globiots.com:443/data-engine/realtime`

You can download the Globiots PEM certificate for TLS [here](https://filerun.daviteq.com/wl/?id=pR3dYJXq4dadnLniSAmRM1Jri7dbz8rn).


## 3.1 - Request of realtime-streaming-data
```json
{
    "updateTime": 5,
    "timezone": "",
    "objects": [
        {
            "hostname": "x.x.x.1",
            "addresses": [
                {
                    "address": "",
                    "dataType": "",
                    "length": ""
                }
            ]
        },
        {
            "hostname": "x.x.x.2",
            "addresses": [
                {
                    "address": "",
                    "dataType": "",
                    "length": ""
                }
            ]
        }
    ]
}
```
## 3.2 - Response of realtime-streaming-data
```json
{
	"updateTime": 5,
	"timezone": "",
	"timestamp": 1451380750978,
	"sessionId": "",
	"objects": [{
			"hostname": "x.x.x.1",
			"addresses": [{
					"address": "",
					"dataType": "",
					"length": 0,
					"value": "",
					"changeOfValue": "INCREASE"
				},
				{
					"address": "",
					"dataType": "",
					"length": 0,
					"value": "",
					"changeOfValue": "UNCHNAGED"
				},
				{
					"address": "",
					"dataType": "",
					"length": 0,
					"value": "",
					"changeOfValue": "DECREASE"
				}
			]
		},
		{
			"hostname": "x.x.x.2",
			"addresses": [{
					"address": "",
					"dataType": "",
					"length": 0,
					"value": "",
					"changeOfValue": "INCREASE"
				},
				{
					"address": "",
					"dataType": "",
					"length": 0,
					"value": "",
					"changeOfValue": "UNCHNAGED"
				},
				{
					"address": "",
					"dataType": "",
					"length": 0,
					"value": "",
					"changeOfValue": "DECREASE"
				}
			]
		}
	]
}
```

## 3.3 - Examples
```javascript
	var GLOBIOTS_WEBSOCKET_REALTIME_DATA_URI = 'wss://dataengine.globiots.com:443/data-engine/realtime';
	var wsRealtimeData = null;
	var dataRealtimeRequestDataJson = {
		"updateTime": 5,
		"timezone": "GMT+07:00",
		"objects": [
			{
				"hostname": "0.0.0.0",
				"addresses": [
					{
						"address": "6000",
						"dataType": "integer_16",
						"length": "2"
					}
				]
			}
		]
	};
	try {
		wsRealtimeData = new WebSocket(GLOBIOTS_WEBSOCKET_REALTIME_DATA_URI);
		wsRealtimeData.onopen = function(element) {
			// the message receive when connect to server seccess
			console.log("Realtime websocket is connected...");
			wsRealtimeData.send(JSON.stringify(dataRealtimeRequestDataJson));
		};
		
		wsRealtimeData.onmessage = function(element) {
			console.log("Response realtime from server to client:: ");
			var responseRealtimeData = JSON.parse(element.data);
		}
		
		wsRealtimeData.onclose = function(element) {
			console.warn("GLOBIOTS_WEBSOCKET_REALTIME_DATA close websocket");
		};
	} catch(ex) {
		console.warn(ex);
	}
```



# 4 - Set value

### WS  
URI | 
---|
`ws://dataengine.globiots.com/data-engine/set-data`

### WSS  
URI | 
---|
`wss://dataengine.globiots.com:443/data-engine/set-data`
 
 
You can download the Globiots PEM certificate for TLS [here](https://filerun.daviteq.com/wl/?id=pR3dYJXq4dadnLniSAmRM1Jri7dbz8rn).


## 4.1 - Request set data:
```json
{
    "services": {
        "serviceName": "set-data",
        "objects": [
            {
                "type": "any-data",
                "hostname": "x.x.x.x",
                "addresses": [
                    {
                        "address": "xxxx",
                        "value": "float",
                        "dataType": "float",
                        "length": "4"
                    }
                ]
            }
        ]
    }
}
```

## 4.2 - Response set data:
```json
{
    "sessionId": "",
    "services": {
        "serviceName": "set-data",
        "objects": [
            {
                "type": "any-data",
                "hostname": "x.x.x.x",
                "addresses": [
                    {
                        "address": "xxxx",
                        "value": "byte",
                        "dataType": "byte",
                        "responseCode": "10",
                        "responseMessage": "Sets value to the device[0A000006] is timeout."
                    }
                ]
            }
        ]
    }
}
```


|Response Code | Mapping
---|---
<b>00</b>|<b>Sets value to the device is Successful</b>.
<b>01</b>|Sets value to the device is failured [`Device Identify is not found`].
<b>06</b>|Sets value to the device is failured [`unknown error`].
<b>08</b>|Sets value to the device is failured [`Memmory Area is not allowed writing`].
<b>10</b>|Sets value to the device is failured [`Timeout`].
<b>0A</b>|Sets value to the device is failured [`Device has beed locked`].
<b>0B</b>|Sets value to the device is failured [`Device has been deattached`].
<b>0E</b>|Sets value to the device is failured [`Device is unattached`].

## 4.3 - Examples

```javascript
	var GLOBIOTS_WEBSOCKET_SET_REALTIME_DATA_URI = 'wss://dataengine.globiots.com:443/data-engine/set-data';
	var wsSetDataRealtime = null;
	var setDataRequestDataJson = {
		"services": {
			"serviceName": "set-data",
			"objects": [
				{
					"type": "any-data",
					"hostname": "0.0.0.0",
					"addresses": [
						{
							"address": "2010",
							"value": "3.3",
							"dataType": "float",
							"length": "4"
						}
					]
				}
			]
		}
	};
	try {
		wsSetDataRealtime = new WebSocket(GLOBIOTS_WEBSOCKET_SET_REALTIME_DATA_URI);
		wsSetDataRealtime.onopen = function(element) {
			// the message receive when connect to server seccess
			console.log("Set data realtime websocket closed.");
			wsSetDataRealtime.send(JSON.stringify(setDataRequestDataJson));
		};
		wsSetDataRealtime.onmessage = function(element) {
		
			console.log("Response set data from server to client:: ");
			var responseRealtimeData = JSON.parse(element.data);
			var services = responseRealtimeData.services;
			var objects = services.objects;
			var objectRespone = objects[0];
			var addresses = objectRespone.addresses;
			
			var responseMessageOfAddress = addresses[0];
			var responseMessage = responseMessageOfAddress.responseMessage;
			var responseCode = responseMessageOfAddress.responseCode;
		};
		wsSetDataRealtime.onclose = function(element) {
			console.log("Set data realtime websocket closed.");
			console.warn("GLOBIOTS_WEBSOCKET_SET_REALTIME_DATA_URI close websocket");
		};
	} catch(ex) {
		console.warn(ex);
	}
```