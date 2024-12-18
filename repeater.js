module.exports = function (RED) {
    function RepeaterNode(config) {
        RED.nodes.createNode(this, config);
        const node = this;

        // Configuração do intervalo (definido pelo usuário no editor)
        let interval = parseInt(config.interval) * 1000 || 1000; // Tempo em ms
        let timer = null; // Referência do timer
        let lastMessage = null; // Armazena o último msg recebido

        // Função para propagar o último dado
        function propagate() {
            if (lastMessage !== null) {
                node.send(lastMessage);
            }
        }

        // Ao receber um novo "msg" de entrada
        node.on('input', function (msg) {
            lastMessage = msg; // Salva o último dado recebido
            
            // Reinicia o timer
            if (timer) clearInterval(timer);
            timer = setInterval(propagate, interval);
        });

        // Quando o nó é finalizado (ex: Node-RED reinicia)
        node.on('close', function () {
            if (timer) clearInterval(timer);
        });
    }

    // Registra o nó com o Node-RED
    RED.nodes.registerType('repeater-node', RepeaterNode);
};
