const scion = require('C:/Users/renie/AppData/Roaming/npm/node_modules/scion');
const fs = require('fs');

// Charge le fichier SCXML
const scxmlContent = fs.readFileSync('st.scxml', 'utf-8');

scion.Statechart.fromXML(scxmlContent, function (err, stateMachine) {
    if (err) {
        console.error('Erreur lors du chargement du SCXML :', err);
        return;
    }

    // Initialise et démarre le SCXML
    stateMachine.start();
    console.log('SCXML démarré avec succès !');
});
