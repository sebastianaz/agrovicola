const mqtt = require('mqtt');
const sensors = require('../models/sensors')

class MqttHandler {
    constructor(host,username,pass,port) {
        this.mqttClient = null;
        this.host       = host;
        this.username   = username; // mqtt credentials if these are needed to connect
        this.password   = pass;
        this.clientId   = 'mqtt_node'+ Math.random().toString(16).substr(2, 8);
        this.port       = port;
    }
    
    connect() {
        //  1: Connect mqtt with credentials (in case of needed, otherwise we can omit 2nd param)
        this.mqttClient = mqtt.connect(this.host, { username: this.username,
                                                    password: this.password,
                                                    clientId: this.clientId,
                                                    port    : this.port});
        //  2: Mqtt error calback
        this.mqttClient.on('error', (err) => {
        console.log(err);
        this.mqttClient.end();
        });
        //  3: Connection callback
        this.mqttClient.on('connect', () => {
        console.log(`mqtt client connected`);
        });
        //  4: mqtt subscriptions
        this.mqttClient.subscribe('+/#', {qos: 0});

        //  5: When a message arrives, console.log it
        this.mqttClient.on('message', async function (topic, message) {
            const dataAves = new sensors({varSensada:topic.toString(),valor:message.toString()})
            console.log(topic.toString()+' : '+message.toString());
            await dataAves.save();
        });
        //  6: when it need to be closed the connection 
        this.mqttClient.on('close', () => {
        console.log(`mqtt client disconnected`);
        });
    }

    // Sends a mqtt message to topic: mytopic
    sendMessage(message) {
        this.mqttClient.publish('mytopic', message);
    }
}

//app.post("/send-mqtt", function(req, res) {
//    mqttClient.sendMessage(req.body.message);
//    res.status(200).send("Message sent to mqtt");
//});
//https://medium.com/@cri.bh6/in-this-simple-example-im-going-to-show-how-to-write-a-very-simple-expressjs-api-that-uses-mqtt-to-57aa3ecdcd9e

module.exports = MqttHandler;