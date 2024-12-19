# Node-RED Contrib Repeater

**Node-RED node to propagate the last received message at regular intervals.**  

This node is designed to continuously send the last received message at a user-defined interval. If a new message is received, it resets the timer and propagates the new data.

---

## Features

- Propagates the last received message at a defined interval (in seconds).
- Resets the timer when a new message is received.
- User-configurable interval through the node's settings.

---

## Installation

Install via the Node-RED palette manager, or run the following command in your Node-RED user directory (`~/.node-red`):

```bash
npm install node-red-contrib-repeater
```

---

## Usage
- Drag the Repeater node into your flow.
- Connect it to a data source or inject node.
- Configure the interval in seconds in the node's settings.
- Connect the output to the desired processing or debugging node.

---

## Node Properties
* Name: Optional. Add a label to the node for identification.
* Interval (s): Set the interval in seconds for repeating the last received message.

---

## Example Use Cases
### Case 1: Data Monitoring with Regular Updates
Suppose you are monitoring the status of a sensor that only sends updates when a change occurs. To ensure regular updates to a dashboard or external system, you can use the Repeater node to periodically propagate the last known status.

#### Flow Example:

A sensor sends occasional updates.
The Repeater node propagates the last update every 10 seconds to a dashboard.

### Case 2: Heartbeat Signal in IoT
In an IoT application, you might need to send a regular "heartbeat" message to an external service to indicate that the system is active. Use the Repeater node to continuously send a predefined message at a set interval.

#### Flow Example:

Inject a "heartbeat" message into the Repeater node.
Set the interval to 30 seconds to propagate the "heartbeat" to the external service.

