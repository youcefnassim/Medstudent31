// QCM Database - Medical Questions
const qcmDatabase = {
    // Sample QCM for demonstration
    'demo-anatomie': {
        title: 'QCM Anatomie Générale',
        subject: 'Anatomie',
        duration: 20,
        questions: [
            { id: 1, question: "Combien d'os compte le squelette humain adulte ?", answers: [{ text: "186", correct: false }, { text: "206", correct: true }, { text: "216", correct: false }, { text: "196", correct: false }], explanation: "Le squelette humain adulte compte 206 os." },
            { id: 2, question: "Quel est l'os le plus long du corps ?", answers: [{ text: "Tibia", correct: false }, { text: "Fémur", correct: true }, { text: "Humérus", correct: false }, { text: "Radius", correct: false }], explanation: "Le fémur est l'os le plus long." },
            { id: 3, question: "Combien de vertèbres dans la colonne ?", answers: [{ text: "31", correct: false }, { text: "33", correct: true }, { text: "35", correct: false }, { text: "29", correct: false }], explanation: "33 vertèbres au total." },
            { id: 4, question: "Quel est le plus petit os ?", answers: [{ text: "Étrier", correct: true }, { text: "Marteau", correct: false }, { text: "Enclume", correct: false }, { text: "Pisiforme", correct: false }], explanation: "L'étrier dans l'oreille moyenne." },
            { id: 5, question: "Combien de paires de côtes ?", answers: [{ text: "10", correct: false }, { text: "11", correct: false }, { text: "12", correct: true }, { text: "13", correct: false }], explanation: "12 paires de côtes." },
            { id: 6, question: "L'os hyoïde est unique car :", answers: [{ text: "Ne s'articule avec aucun autre os", correct: true }, { text: "Est creux", correct: false }, { text: "Est mobile", correct: false }, { text: "Sans moelle", correct: false }], explanation: "L'os hyoïde est le seul os libre." },
            { id: 7, question: "Combien d'os dans le crâne ?", answers: [{ text: "18", correct: false }, { text: "22", correct: true }, { text: "26", correct: false }, { text: "20", correct: false }], explanation: "22 os composent le crâne." },
            { id: 8, question: "Os du carpe au nombre de :", answers: [{ text: "6", correct: false }, { text: "7", correct: false }, { text: "8", correct: true }, { text: "10", correct: false }], explanation: "8 os carpiens." },
            { id: 9, question: "Fonction de la moelle rouge ?", answers: [{ text: "Production globules rouges", correct: true }, { text: "Stockage calcium", correct: false }, { text: "Production hormones", correct: false }, { text: "Soutien", correct: false }], explanation: "Hématopoïèse." },
            { id: 10, question: "Parties du sternum :", answers: [{ text: "2", correct: false }, { text: "3", correct: true }, { text: "4", correct: false }, { text: "5", correct: false }], explanation: "Manubrium, corps, xiphoïde." },
            { id: 11, question: "Tissu osseux le plus dense ?", answers: [{ text: "Spongieux", correct: false }, { text: "Compact", correct: true }, { text: "Trabéculaire", correct: false }, { text: "Cartilage", correct: false }], explanation: "L'os compact est le plus dense." },
            { id: 12, question: "La clavicule s'articule avec :", answers: [{ text: "Sternum et humérus", correct: false }, { text: "Sternum et scapula", correct: true }, { text: "Scapula et humérus", correct: false }, { text: "Sternum seulement", correct: false }], explanation: "Articulation sternoclaviculaire et acromio-claviculaire." },
            { id: 13, question: "Les fontanelles sont :", answers: [{ text: "Fractures", correct: false }, { text: "Espaces membraneux crâne nourrisson", correct: true }, { text: "Articulations", correct: false }, { text: "Canaux", correct: false }], explanation: "Espaces entre os du crâne bébé." },
            { id: 14, question: "Vertèbre permettant rotation tête :", answers: [{ text: "Atlas C1", correct: false }, { text: "Axis C2", correct: true }, { text: "C3", correct: false }, { text: "C7", correct: false }], explanation: "L'axis avec son apophyse odontoïde." },
            { id: 15, question: "Os du tarse au nombre de :", answers: [{ text: "5", correct: false }, { text: "6", correct: false }, { text: "7", correct: true }, { text: "8", correct: false }], explanation: "7 os tarsiens." },
            { id: 16, question: "Fonction du périoste :", answers: [{ text: "Nourrir l'os", correct: true }, { text: "Produire globules", correct: false }, { text: "Stocker lipides", correct: false }, { text: "Protéger moelle", correct: false }], explanation: "Membrane nourricière de l'os." },
            { id: 17, question: "Formation osseuse s'appelle :", answers: [{ text: "Ostéoporose", correct: false }, { text: "Ossification", correct: true }, { text: "Ostéomalacie", correct: false }, { text: "Ostéogenèse imparfaite", correct: false }], explanation: "Processus d'ossification." },
            { id: 18, question: "Os formant le talon :", answers: [{ text: "Talus", correct: false }, { text: "Calcanéus", correct: true }, { text: "Naviculaire", correct: false }, { text: "Cuboïde", correct: false }], explanation: "Le calcanéus est l'os du talon." },
            { id: 19, question: "Les sutures crâniennes sont :", answers: [{ text: "Articulations mobiles", correct: false }, { text: "Articulations fibreuses", correct: true }, { text: "Articulations cartilagineuses", correct: false }, { text: "Articulations synoviales", correct: false }], explanation: "Articulations fibreuses immobiles." },
            { id: 20, question: "Minéral le plus abondant dans os :", answers: [{ text: "Phosphore", correct: false }, { text: "Calcium", correct: true }, { text: "Magnésium", correct: false }, { text: "Potassium", correct: false }], explanation: "99% du calcium corporel dans les os." }
        ]
    }
};

// Export for use in qcm-script.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = qcmDatabase;
}
