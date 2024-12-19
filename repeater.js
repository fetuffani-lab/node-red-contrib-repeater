module.exports = function (RED) {
    function RepeaterNode(config) {
        RED.nodes.createNode(this, config);
        const node = this;

        // Configuration for the interval (defined by the user in the editor)
        let interval = parseInt(config.interval) * 1000 || 1000; // Time in ms
        let timer = null; // Timer reference
        let lastMessage = null; // Stores the last received msg

        // Function to propagate the last data
        function propagate() {
            if (lastMessage !== null) {
                node.send(lastMessage);
            }
        }

        // When receiving a new "msg" as input
        node.on('input', function (msg) {
            lastMessage = msg; // Save the last received data
            
            // Restart the timer
            if (timer) clearInterval(timer);
            timer = setInterval(propagate, interval);
        });

        // When the node is closed (e.g., Node-RED restarts)
        node.on('close', function () {
            if (timer) clearInterval(timer);
        });
    }

    // Register the node with Node-RED
    RED.nodes.registerType('repeater-node', RepeaterNode);
};
