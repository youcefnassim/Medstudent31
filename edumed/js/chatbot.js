class MedEduChatbot {
    // Course data - Comprehensive medical topics
    courses = {
        'biochemistry': {
            'krebs_cycle': {
                summary: 'Le cycle de Krebs (cycle de l\'acide citrique) est une série de réactions chimiques utilisées par tous les organismes aérobies pour générer de l\'énergie à travers l\'oxydation de l\'acétyl-CoA dérivé des glucides, des lipides et des protéines. Il produit ATP, NADH et FADH2.',
                resources: [
                    { type: 'pdf', title: 'Notes détaillées sur le cycle de Krebs', url: 'courses.html#biochemistry' },
                    { type: 'video', title: 'Animation du cycle de Krebs', url: 'courses.html#biochemistry' },
                    { type: 'quiz', title: 'Quiz sur le cycle de Krebs', url: 'exmens.html' }
                ]
            },
            'glycolysis': {
                summary: 'La glycolyse est la voie métabolique qui convertit le glucose en pyruvate, générant de l\'ATP et du NADH. C\'est la première étape de la respiration cellulaire.',
                resources: [
                    { type: 'pdf', title: 'Guide complet sur la glycolyse', url: 'courses.html#biochemistry' },
                    { type: 'video', title: 'Mécanismes de la glycolyse', url: 'courses.html#biochemistry' }
                ]
            },
            'protein_synthesis': {
                summary: 'La synthèse des protéines est le processus par lequel les cellules construisent des protéines à partir d\'acides aminés, guidé par l\'information contenue dans l\'ADN et l\'ARN.',
                resources: [
                    { type: 'pdf', title: 'Synthèse protéique', url: 'courses.html#biochemistry' },
                    { type: 'quiz', title: 'Test sur la synthèse protéique', url: 'exmens.html' }
                ]
            }
        },
        'anatomy': {
            'cranial_nerves': {
                summary: 'Les 12 paires de nerfs crâniens sont : I. Olfactif, II. Optique, III. Oculomoteur, IV. Trochléaire, V. Trijumeau, VI. Abducens, VII. Facial, VIII. Vestibulocochléaire, IX. Glossopharyngien, X. Vague, XI. Accessoire, XII. Hypoglosse.',
                mnemonic: 'On Occupe Un Terrain Très Agité, Fort Vague, Grand Vapeur, Ah !',
                resources: [
                    { type: 'pdf', title: 'Guide des nerfs crâniens', url: 'courses.html#anatomy' },
                    { type: 'quiz', title: 'Quiz sur les nerfs crâniens', url: 'exmens.html' },
                    { type: 'flashcard', title: 'Cartes mémoires', url: 'exmens.html' }
                ]
            },
            'heart_anatomy': {
                summary: 'Le cœur est un organe musculaire creux composé de 4 cavités : 2 oreillettes et 2 ventricules. Il assure la circulation sanguine en pompant le sang à travers les vaisseaux sanguins.',
                resources: [
                    { type: 'pdf', title: 'Anatomie du cœur', url: 'courses.html#anatomy' },
                    { type: 'video', title: 'Fonctionnement du cœur', url: 'courses.html#anatomy' }
                ]
            },
            'skeletal_system': {
                summary: 'Le système squelettique humain comprend 206 os chez l\'adulte. Il fournit structure, protection des organes, production de cellules sanguines et stockage de minéraux.',
                resources: [
                    { type: 'pdf', title: 'Système squelettique', url: 'courses.html#anatomy' },
                    { type: 'quiz', title: 'Quiz sur le squelette', url: 'exmens.html' }
                ]
            }
        },
        'pharmacology': {
            'antibiotics': {
                summary: 'Les antibiotiques sont des substances qui tuent ou inhibent la croissance des bactéries. Classes principales : Pénicillines, Céphalosporines, Macrolides, Fluoroquinolones, Tétracyclines.',
                resources: [
                    { type: 'pdf', title: 'Guide des antibiotiques', url: 'courses.html#pharmacology' },
                    { type: 'quiz', title: 'Quiz sur les antibiotiques', url: 'exmens.html' }
                ]
            },
            'cardiovascular_drugs': {
                summary: 'Médicaments cardiovasculaires : Bêta-bloquants (réduisent la pression), Inhibiteurs de l\'ECA (vasodilatateurs), Diurétiques (éliminent l\'eau), Antagonistes calciques.',
                resources: [
                    { type: 'pdf', title: 'Pharmacologie cardiovasculaire', url: 'courses.html#pharmacology' },
                    { type: 'case_study', title: 'Cas cliniques', url: 'exmens.html' }
                ]
            },
            'analgesics': {
                summary: 'Les analgésiques sont des médicaments qui soulagent la douleur. Types : Opioïdes (douleur sévère), AINS (douleur/inflammation), Paracétamol (douleur/fièvre).',
                resources: [
                    { type: 'pdf', title: 'Guide des analgésiques', url: 'courses.html#pharmacology' }
                ]
            }
        },
        'physiology': {
            'respiratory_system': {
                summary: 'Le système respiratoire permet les échanges gazeux entre l\'organisme et l\'environnement. Composants : Voies aériennes, Poumons, Alvéoles, Diaphragme. Processus : Ventilation, Diffusion, Perfusion.',
                resources: [
                    { type: 'pdf', title: 'Physiologie respiratoire', url: 'courses.html#physiology' },
                    { type: 'video', title: 'Mécanique ventilatoire', url: 'courses.html#physiology' }
                ]
            },
            'cardiovascular_system': {
                summary: 'Le système cardiovasculaire comprend le cœur et les vaisseaux sanguins. Il transporte l\'oxygène, les nutriments, les hormones et élimine les déchets métaboliques.',
                resources: [
                    { type: 'pdf', title: 'Physiologie cardiovasculaire', url: 'courses.html#physiology' },
                    { type: 'quiz', title: 'Test sur le système CV', url: 'exmens.html' }
                ]
            },
            'renal_system': {
                summary: 'Le système rénal filtre le sang, régule l\'équilibre hydrique et électrolytique, maintient le pH sanguin et produit des hormones (érythropoïétine, rénine).',
                resources: [
                    { type: 'pdf', title: 'Physiologie rénale', url: 'courses.html#physiology' }
                ]
            }
        },
        'pathology': {
            'diabetes': {
                summary: 'Le diabète est une maladie chronique caractérisée par une hyperglycémie. Type 1 : destruction auto-immune des cellules β. Type 2 : résistance à l\'insuline. Complications : neuropathie, rétinopathie, néphropathie.',
                resources: [
                    { type: 'pdf', title: 'Guide du diabète', url: 'courses.html#pathology' },
                    { type: 'case_study', title: 'Étude de cas: Diabète', url: 'exmens.html' }
                ]
            },
            'hypertension': {
                summary: 'L\'hypertension artérielle est une pression sanguine élevée (≥140/90 mmHg). Facteurs de risque : obésité, stress, alimentation, génétique. Complications : AVC, infarctus, insuffisance rénale.',
                resources: [
                    { type: 'pdf', title: 'Hypertension artérielle', url: 'courses.html#pathology' }
                ]
            },
            'inflammation': {
                summary: 'L\'inflammation est la réponse du système immunitaire à une lésion ou infection. Signes : rougeur, chaleur, gonflement, douleur, perte de fonction. Types : aiguë et chronique.',
                resources: [
                    { type: 'pdf', title: 'Processus inflammatoire', url: 'courses.html#pathology' },
                    { type: 'quiz', title: 'Quiz sur l\'inflammation', url: 'exmens.html' }
                ]
            }
        }
    };

    // Exam questions by subject - Comprehensive MCQ database
    examQuestions = {
        'anatomy': [
            {
                question: 'Quel nerf crânien est responsable de la vision ?',
                options: ['I. Olfactif', 'II. Optique', 'III. Oculomoteur', 'IV. Trochléaire'],
                answer: 1,
                explanation: 'Le nerf optique (II) est responsable de la vision.',
                difficulty: 'Moyen',
                category: 'Neuroanatomie'
            },
            {
                question: 'Quelle structure sépare le ventricule gauche du ventricule droit ?',
                options: ['Septum interventriculaire', 'Valve mitrale', 'Valve tricuspide', 'Péricarde'],
                answer: 0,
                explanation: 'Le septum interventriculaire est la paroi musculaire qui sépare les deux ventricules du cœur.',
                difficulty: 'Facile',
                category: 'Cardiologie'
            },
            {
                question: 'Combien d\'os composent le crâne humain adulte ?',
                options: ['18', '22', '26', '30'],
                answer: 1,
                explanation: 'Le crâne humain adulte est composé de 22 os (8 os crâniens et 14 os faciaux).',
                difficulty: 'Moyen',
                category: 'Ostéologie'
            },
            {
                question: 'Quel muscle est le principal responsable de l\'inspiration ?',
                options: ['Intercostaux externes', 'Diaphragme', 'Sternocléidomastoïdien', 'Scalènes'],
                answer: 1,
                explanation: 'Le diaphragme est le principal muscle respiratoire responsable de l\'inspiration.',
                difficulty: 'Facile',
                category: 'Anatomie respiratoire'
            }
        ],
        'physiology': [
            {
                question: 'Quelle est la fonction principale des alvéoles pulmonaires ?',
                options: ['Filtrer le sang', 'Échanger les gaz', 'Produire du mucus', 'Stocker l\'oxygène'],
                answer: 1,
                explanation: 'Les alvéoles pulmonaires sont le site principal des échanges gazeux entre l\'air et le sang.',
                difficulty: 'Facile',
                category: 'Respiratoire'
            },
            {
                question: 'Quelle valeur de pH sanguin est considérée comme normale ?',
                options: ['6.8 - 7.0', '7.35 - 7.45', '7.8 - 8.0', '8.2 - 8.4'],
                answer: 1,
                explanation: 'Le pH sanguin normal se situe entre 7.35 et 7.45.',
                difficulty: 'Moyen',
                category: 'Équilibre acido-basique'
            },
            {
                question: 'Quel hormone régule le taux de glucose dans le sang ?',
                options: ['Cortisol', 'Insuline', 'Thyroxine', 'Adrénaline'],
                answer: 1,
                explanation: 'L\'insuline, produite par le pancréas, régule le taux de glucose sanguin en facilitant son absorption cellulaire.',
                difficulty: 'Facile',
                category: 'Endocrinologie'
            },
            {
                question: 'Quelle est la pression artérielle normale chez un adulte au repos ?',
                options: ['100/60 mmHg', '120/80 mmHg', '140/90 mmHg', '160/100 mmHg'],
                answer: 1,
                explanation: 'La pression artérielle normale est d\'environ 120/80 mmHg.',
                difficulty: 'Facile',
                category: 'Cardiovasculaire'
            }
        ],
        'biochemistry': [
            {
                question: 'Combien de molécules d\'ATP sont produites par molécule de glucose lors de la glycolyse ?',
                options: ['2', '4', '6', '8'],
                answer: 0,
                explanation: 'La glycolyse produit un gain net de 2 molécules d\'ATP par molécule de glucose.',
                difficulty: 'Moyen',
                category: 'Métabolisme'
            },
            {
                question: 'Quel est le produit final du cycle de Krebs par tour ?',
                options: ['2 ATP, 6 NADH, 2 FADH2', '1 ATP, 3 NADH, 1 FADH2', '4 ATP, 8 NADH, 4 FADH2', '2 ATP, 4 NADH, 2 FADH2'],
                answer: 1,
                explanation: 'Chaque tour du cycle de Krebs produit 1 ATP (ou GTP), 3 NADH et 1 FADH2.',
                difficulty: 'Difficile',
                category: 'Métabolisme'
            },
            {
                question: 'Quelle enzyme catalyse la conversion du glucose en glucose-6-phosphate ?',
                options: ['Phosphofructokinase', 'Hexokinase', 'Pyruvate kinase', 'Aldolase'],
                answer: 1,
                explanation: 'L\'hexokinase catalyse la phosphorylation du glucose en glucose-6-phosphate, première étape de la glycolyse.',
                difficulty: 'Moyen',
                category: 'Enzymologie'
            }
        ],
        'pharmacology': [
            {
                question: 'Quelle classe de médicaments est utilisée pour traiter l\'hypertension en bloquant les récepteurs bêta-adrénergiques ?',
                options: ['Diurétiques', 'Bêta-bloquants', 'Inhibiteurs de l\'ECA', 'Antagonistes calciques'],
                answer: 1,
                explanation: 'Les bêta-bloquants bloquent les récepteurs bêta-adrénergiques, réduisant la fréquence cardiaque et la pression artérielle.',
                difficulty: 'Moyen',
                category: 'Cardiovasculaire'
            },
            {
                question: 'Quel antibiotique inhibe la synthèse de la paroi cellulaire bactérienne ?',
                options: ['Tétracycline', 'Érythromycine', 'Pénicilline', 'Gentamicine'],
                answer: 2,
                explanation: 'La pénicilline et les autres bêta-lactamines inhibent la synthèse de la paroi cellulaire bactérienne.',
                difficulty: 'Moyen',
                category: 'Antimicrobiens'
            },
            {
                question: 'Quel est le mécanisme d\'action des AINS (Anti-Inflammatoires Non Stéroïdiens) ?',
                options: ['Inhibition de la COX', 'Blocage des récepteurs H1', 'Inhibition de l\'ECA', 'Blocage des canaux calciques'],
                answer: 0,
                explanation: 'Les AINS inhibent la cyclo-oxygénase (COX), réduisant ainsi la production de prostaglandines inflammatoires.',
                difficulty: 'Moyen',
                category: 'Anti-inflammatoires'
            }
        ],
        'pathology': [
            {
                question: 'Quel type de diabète est caractérisé par une résistance à l\'insuline ?',
                options: ['Type 1', 'Type 2', 'Gestationnel', 'Insipide'],
                answer: 1,
                explanation: 'Le diabète de type 2 est caractérisé par une résistance à l\'insuline et une production insuffisante.',
                difficulty: 'Facile',
                category: 'Endocrinologie'
            },
            {
                question: 'Quels sont les 5 signes cardinaux de l\'inflammation ?',
                options: ['Rougeur, chaleur, gonflement, douleur, perte de fonction', 'Fièvre, frissons, nausée, fatigue, douleur', 'Toux, dyspnée, douleur, fièvre, fatigue', 'Œdème, rougeur, chaleur, pâleur, douleur'],
                answer: 0,
                explanation: 'Les 5 signes cardinaux de l\'inflammation sont : rougeur (rubor), chaleur (calor), gonflement (tumor), douleur (dolor) et perte de fonction (functio laesa).',
                difficulty: 'Facile',
                category: 'Inflammation'
            }
        ]
    };

    // Study plan templates - Comprehensive scheduling
    studyPlans = {
        'daily': {
            'anatomy': '2h : Révision des groupes musculaires et voies nerveuses',
            'biochemistry': '1h30 : Étude des voies métaboliques et enzymes',
            'pharmacology': '1h : Révision des classes médicamenteuses et mécanismes',
            'physiology': '1h30 : Systèmes physiologiques (cardiovasculaire, respiratoire)',
            'pathology': '1h : Étude des maladies courantes et pathogenèse'
        },
        'weekly': {
            'lundi': 'Anatomie: Membre supérieur et innervation (3h)',
            'mardi': 'Physiologie: Système cardiovasculaire et hémodynamique (2h30)',
            'mercredi': 'Biochimie: Métabolisme glucidique et lipidique (2h)',
            'jeudi': 'Pharmacologie: Système nerveux autonome et cardiovasculaire (2h)',
            'vendredi': 'Pathologie: Inflammation et réparation tissulaire (2h)',
            'samedi': 'QCM et examens blancs - Révision générale (3h)',
            'dimanche': 'Révision ciblée des points faibles + Repos (1-2h)'
        },
        'exam_prep_4weeks': {
            'semaine1': 'Révision complète de l\'anatomie et physiologie - 20h',
            'semaine2': 'Biochimie approfondie et pharmacologie de base - 20h',
            'semaine3': 'Pathologies courantes et cas cliniques - 18h',
            'semaine4': 'Tests blancs intensifs et révisions finales - 25h'
        },
        'exam_prep_1month': {
            'week1': {
                'focus': 'Anatomie et Physiologie',
                'hours': 20,
                'topics': ['Système nerveux', 'Système cardiovasculaire', 'Système respiratoire'],
                'goals': 'Maîtriser les bases anatomophysiologiques'
            },
            'week2': {
                'focus': 'Biochimie et Métabolisme',
                'hours': 18,
                'topics': ['Glycolyse', 'Cycle de Krebs', 'Chaîne respiratoire', 'Métabolisme lipidique'],
                'goals': 'Comprendre les voies métaboliques essentielles'
            },
            'week3': {
                'focus': 'Pharmacologie et Pathologie',
                'hours': 18,
                'topics': ['Classes médicamenteuses', 'Mécanismes d\'action', 'Pathologies courantes'],
                'goals': 'Intégrer pharmacologie et pathophysiologie'
            },
            'week4': {
                'focus': 'Révision intensive et tests',
                'hours': 25,
                'topics': ['QCM tous sujets', 'Cas cliniques', 'Points faibles'],
                'goals': 'Optimiser les performances et combler les lacunes'
            }
        }
    };

    // User progress tracking - Enhanced tracking system
    userProgress = {
        lastStudied: {
            'anatomy': new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
            'biochemistry': new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
            'pharmacology': new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
            'physiology': new Date(Date.now() - 5 * 24 * 60 * 60 * 1000) // 5 days ago
        },
        quizScores: {
            'anatomy': [85, 78, 92, 88, 90],
            'biochemistry': [72, 88, 85, 90],
            'pharmacology': [65, 70, 75, 80, 82],
            'physiology': [80, 85, 88, 92],
            'pathology': [75, 80, 85]
        },
        studyStreak: 12,
        totalStudyHours: 156,
        totalQuizzesTaken: 47,
        averageScore: 83.5,
        upcomingExams: [
            { 
                subject: 'Anatomie', 
                date: '2025-11-15', 
                topic: 'Système nerveux central et périphérique',
                daysLeft: 25,
                prepared: 65
            },
            { 
                subject: 'Biochimie', 
                date: '2025-11-20', 
                topic: 'Métabolisme énergétique',
                daysLeft: 30,
                prepared: 55
            },
            { 
                subject: 'Pharmacologie', 
                date: '2025-11-28', 
                topic: 'Système cardiovasculaire et rénal',
                daysLeft: 38,
                prepared: 40
            }
        ],
        flashcards: {
            'cranial_nerves': {
                total: 12,
                mastered: 10,
                toReview: 2,
                lastPracticed: '2 jours'
            },
            'pharmacology_drugs': {
                total: 50,
                mastered: 38,
                toReview: 12,
                lastPracticed: '1 jour'
            },
            'biochemistry_pathways': {
                total: 25,
                mastered: 18,
                toReview: 7,
                lastPracticed: '3 jours'
            },
            'anatomy_bones': {
                total: 206,
                mastered: 150,
                toReview: 56,
                lastPracticed: '5 jours'
            }
        },
        weakAreas: ['Pharmacologie cardiovasculaire', 'Neuroanatomie', 'Métabolisme lipidique'],
        strongAreas: ['Anatomie cardiaque', 'Physiologie respiratoire', 'Glycolyse']
    };

    // Motivational messages - Inspiring quotes for medical students
    motivationalMessages = [
        "Continuez votre excellent travail ! Chaque minute d'étude compte.",
        "Vous faites de grands progrès ! N'oubliez pas de faire des pauses régulières.",
        "L'expert en quoi que ce soit a un jour été un débutant. Continuez comme ça !",
        "Votre travail acharné portera ses fruits lors de vos examens et au-delà !",
        "Une petite pensée positive le matin peut changer toute votre journée !",
        "La persévérance est la clé de la réussite en médecine. Ne lâchez rien !",
        "Chaque jour d'étude vous rapproche de votre rêve de devenir médecin.",
        "Les difficultés d'aujourd'hui seront vos forces de demain.",
        "La médecine est une science, mais aussi un art que vous maîtriserez avec le temps.",
        "Chaque patient que vous aiderez un jour mérite votre meilleure version.",
        "Votre détermination aujourd'hui sauvera des vies demain.",
        "Le succès n'est pas final, l'échec n'est pas fatal : c'est le courage de continuer qui compte.",
        "Vous êtes plus fort(e) que vous ne le pensez. Croyez en vous !",
        "Chaque QCM résolu est un pas de plus vers votre réussite.",
        "La médecine n'est pas facile, mais vous êtes capable de la maîtriser !",
        "Prenez soin de votre santé mentale autant que de vos études.",
        "Votre engagement envers vos études reflète votre futur engagement envers vos patients.",
        "Les meilleurs médecins sont ceux qui n'ont jamais cessé d'apprendre.",
        "Transformez votre stress en motivation pour exceller.",
        "Rappelez-vous pourquoi vous avez choisi la médecine quand les temps sont durs."
    ];

    // Study tips - Evidence-based learning strategies
    studyTips = [
        "💡 Utilisez la technique Pomodoro : 25 minutes d'étude, 5 minutes de pause.",
        "🗺️ Créez des cartes mentales pour les sujets complexes et visualisez les connexions.",
        "👨‍🏫 Expliquez ce que vous avez appris à quelqu'un d'autre pour mieux mémoriser.",
        "🧠 Utilisez la récupération active au lieu de la lecture passive.",
        "📅 Espacez vos sessions d'étude pour une meilleure rétention à long terme.",
        "📝 Faites des fiches de révision synthétiques pour chaque cours important.",
        "🎯 Utilisez des moyens mnémotechniques pour mémoriser les listes et séquences.",
        "✅ Pratiquez avec des QCM régulièrement pour vous familiariser avec le format d'examen.",
        "🔗 Créez des associations d'idées pour mieux comprendre les concepts complexes.",
        "🌙 Revoyez vos notes le soir même pour consolider votre mémoire à court terme.",
        "📆 Mettez en place un planning de révision réaliste et tenez-vous y rigoureusement.",
        "❓ N'hésitez pas à demander de l'aide à vos professeurs ou à vos pairs.",
        "😴 Prenez soin de votre sommeil : 7-8h par nuit pour une meilleure mémorisation.",
        "🔄 Variez les matières pour maintenir votre intérêt et votre concentration.",
        "📊 Utilisez des schémas et diagrammes pour visualiser les processus complexes.",
        "🎧 Testez différentes méthodes d'apprentissage pour trouver celle qui vous convient.",
        "💪 Faites de l'exercice physique régulier pour améliorer votre concentration.",
        "🥗 Maintenez une alimentation équilibrée pour optimiser vos capacités cognitives.",
        "🧘 Pratiquez la méditation ou la respiration profonde pour gérer le stress.",
        "📱 Limitez les distractions (réseaux sociaux, notifications) pendant les sessions d'étude.",
        "🎯 Fixez-vous des objectifs SMART (Spécifiques, Mesurables, Atteignables, Réalistes, Temporels).",
        "📖 Alternez entre lecture active, exercices pratiques et révisions espacées.",
        "🏆 Récompensez-vous après avoir atteint vos objectifs d'étude quotidiens.",
        "👥 Rejoignez ou créez un groupe d'étude pour bénéficier de l'intelligence collective.",
        "🔬 Appliquez vos connaissances à des cas cliniques réels pour mieux comprendre."
    ];
    
    // Session state variables
    constructor() {
        this.isOpen = false;
        this.messages = [];
        this.currentQuiz = null;
        this.currentFlashcardSession = null;
        this.initializeChatbot();
        this.initializeEventListeners();
        this.addWelcomeMessage();
    }

    initializeChatbot() {
        // Create chatbot container
        const chatbotHTML = `
        <div id="mededu-chatbot" class="chatbot-container">
            <div class="chatbot-header">
                <h3>MedEdu Assistant</h3>
                <button class="chatbot-close">×</button>
            </div>
            <div class="chatbot-messages"></div>
            <div class="chatbot-input-container">
                <input type="text" class="chatbot-input" placeholder="Posez votre question...">
                <button class="chatbot-send">
                    <i class="fas fa-paper-plane"></i>
                </button>
            </div>
        </div>
        <button class="chatbot-toggle">
            <i class="fas fa-robot"></i>
        </button>`;

        document.body.insertAdjacentHTML('beforeend', chatbotHTML);
        this.chatbotElement = document.getElementById('mededu-chatbot');
        this.toggleButton = document.querySelector('.chatbot-toggle');
    }

    initializeEventListeners() {
        // Toggle chat
        this.toggleButton.addEventListener('click', () => this.toggleChat());
        document.querySelector('.chatbot-close').addEventListener('click', () => this.toggleChat());
        
        // Send message on button click or Enter key
        const input = document.querySelector('.chatbot-input');
        const sendButton = document.querySelector('.chatbot-send');
        
        sendButton.addEventListener('click', () => this.handleUserInput(input));
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.handleUserInput(input);
        });
    }

    toggleChat() {
        this.isOpen = !this.isOpen;
        this.chatbotElement.style.display = this.isOpen ? 'flex' : 'none';
        this.toggleButton.style.display = this.isOpen ? 'none' : 'flex';
        
        if (this.isOpen) {
            document.querySelector('.chatbot-input').focus();
        }
    }

    async handleUserInput(input) {
        const message = input.value.trim();
        if (!message) return;

        // Add user message to chat
        this.addMessage('user', message);
        input.value = '';

        try {
            // Show typing indicator
            this.showTypingIndicator();
            
            // Get bot response
            const response = await this.getBotResponse(message);
            
            // Remove typing indicator and show response
            this.hideTypingIndicator();
            this.addMessage('bot', response);
            
        } catch (error) {
            console.error('Error:', error);
            this.addMessage('bot', 'Désolé, une erreur est survenue. Veuillez réessayer plus tard.');
        }
    }

    async getBotResponse(message) {
        const lowerMessage = message.toLowerCase().trim();
        
        // Course Q&A - French and English
        if (lowerMessage.includes('explique') || lowerMessage.includes('explain') || 
            lowerMessage.includes('qu\'est-ce que') || lowerMessage.includes('what is') || 
            lowerMessage.includes('quels sont') || lowerMessage.includes('what are') ||
            lowerMessage.includes('définis') || lowerMessage.includes('define') || 
            lowerMessage.includes('parle-moi de') || lowerMessage.includes('tell me about') ||
            lowerMessage.includes('cycle de krebs') || lowerMessage.includes('nerf') ||
            lowerMessage.includes('glycolyse') || lowerMessage.includes('cœur') ||
            lowerMessage.includes('antibiotique') || lowerMessage.includes('diabète')) {
            return this.handleCourseQA(message);
        }
        
        // Exam preparation
        if (lowerMessage.includes('examen') || lowerMessage.includes('exam') || 
            lowerMessage.includes('quiz') || lowerMessage.includes('pratique') || 
            lowerMessage.includes('practice') || lowerMessage.includes('qcm') || 
            lowerMessage.includes('mcq') || lowerMessage.includes('question') ||
            lowerMessage.includes('teste-moi') || lowerMessage.includes('test me') ||
            lowerMessage.includes('évalue') || lowerMessage.includes('évaluation')) {
            return this.handleExamPreparation(message);
        }
        
        // Study planner
        if (lowerMessage.includes('plan') || lowerMessage.includes('planning') || 
            lowerMessage.includes('emploi du temps') || lowerMessage.includes('study schedule') || 
            lowerMessage.includes('que dois-je étudier') || lowerMessage.includes('what should i study') ||
            lowerMessage.includes('programme') || lowerMessage.includes('révision') ||
            lowerMessage.includes('prépare') || lowerMessage.includes('préparation')) {
            return this.handleStudyPlanner(message);
        }
        
        // Flashcards & Quick Review
        if (lowerMessage.includes('flashcard') || lowerMessage.includes('carte') || 
            lowerMessage.includes('révision rapide') || lowerMessage.includes('quick review') || 
            lowerMessage.includes('teste-moi') || lowerMessage.includes('test me') ||
            lowerMessage.includes('interroge-moi') || lowerMessage.includes('quiz me') ||
            lowerMessage.includes('mémorisation')) {
            return this.handleFlashcards(message);
        }
        
        // Resource Navigator
        if (lowerMessage.includes('ressource') || lowerMessage.includes('resource') || 
            lowerMessage.includes('trouve') || lowerMessage.includes('find') || 
            lowerMessage.includes('montre-moi') || lowerMessage.includes('show me') || 
            lowerMessage.includes('où puis-je trouver') || lowerMessage.includes('where can i find') ||
            lowerMessage.includes('pdf') || lowerMessage.includes('vidéo') || 
            lowerMessage.includes('cours') || lowerMessage.includes('document')) {
            return this.handleResourceNavigation(message);
        }
        
        // Progress tracking
        if (lowerMessage.includes('progrès') || lowerMessage.includes('progress') || 
            lowerMessage.includes('comment je me débrouille') || lowerMessage.includes('how am i doing') || 
            lowerMessage.includes('mes scores') || lowerMessage.includes('my scores') || 
            lowerMessage.includes('suivi') || lowerMessage.includes('track') ||
            lowerMessage.includes('performance') || lowerMessage.includes('statistiques')) {
            return this.handleProgressTracking();
        }
        
        // Motivation & Tips
        if (lowerMessage.includes('motivation') || lowerMessage.includes('conseil') || 
            lowerMessage.includes('tip') || lowerMessage.includes('astuce') ||
            lowerMessage.includes('advice') || lowerMessage.includes('aide-moi à étudier') ||
            lowerMessage.includes('help me study') || lowerMessage.includes('encouragement')) {
            return this.handleMotivationAndTips();
        }
        
        // QCM Help
        if (lowerMessage.includes('qcm') || lowerMessage.includes('choix multiple')) {
            return this.getQCMHelp();
        }
        
        // Website Navigation
        if (lowerMessage.includes('navigation') || lowerMessage.includes('site') || 
            lowerMessage.includes('où est') || lowerMessage.includes('comment accéder')) {
            return this.getWebsiteGuidance();
        }
        
        // Greetings
        if (lowerMessage.includes('bonjour') || lowerMessage.includes('salut') || 
            lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
            return "Bonjour ! 👋 Je suis votre assistant d'apprentissage MedEdu. Comment puis-je vous aider aujourd'hui ?\n\n" +
                   "Je peux vous aider avec :\n" +
                   "📚 Résumés de cours et explications\n" +
                   "📝 QCM et examens blancs\n" +
                   "📌 Plans d'étude personnalisés\n" +
                   "🧠 Cartes mémoires interactives\n" +
                   "📂 Navigation des ressources\n" +
                   "📊 Suivi de progression\n" +
                   "💪 Conseils et motivation";
        }
        
        // Default response
        return "Je suis l'assistant MedEdu. Je peux vous aider avec :\n\n" +
               "📚 **Résumés de cours** - Expliquez-moi un concept médical\n" +
               "📝 **QCM et Examens** - Testez vos connaissances\n" +
               "📌 **Plans d'étude** - Organisez vos révisions\n" +
               "🧠 **Cartes mémoires** - Mémorisation interactive\n" +
               "📂 **Ressources** - Trouvez PDFs, vidéos, cours\n" +
               "📊 **Progression** - Suivez vos performances\n" +
               "💪 **Motivation** - Conseils et encouragements\n\n" +
               "**Exemples de questions :**\n" +
               "- \"Explique-moi le cycle de Krebs\"\n" +
               "- \"Teste-moi en anatomie\"\n" +
               "- \"Montre-moi mon planning de la semaine\"\n" +
               "- \"Donne-moi un conseil d'étude\"";
    }

    async handleCourseQA(message) {
        const lowerMessage = message.toLowerCase();
        
        // Check for specific course topics
        if (lowerMessage.includes('cycle de krebs') || lowerMessage.includes('krebs') || 
            lowerMessage.includes('citric') || lowerMessage.includes('acide citrique')) {
            const krebs = this.courses.biochemistry.krebs_cycle;
            let response = `**📚 Cycle de Krebs**\n\n${krebs.summary}\n\n`;
            response += '**📂 Ressources disponibles :**\n';
            krebs.resources.forEach(resource => {
                response += `▪️ ${resource.title} - [Accéder](${resource.url})\n`;
            });
            return response;
        }
        
        if (lowerMessage.includes('glycolyse') || lowerMessage.includes('glycolysis')) {
            const glycolysis = this.courses.biochemistry.glycolysis;
            let response = `**📚 Glycolyse**\n\n${glycolysis.summary}\n\n`;
            response += '**📂 Ressources disponibles :**\n';
            glycolysis.resources.forEach(resource => {
                response += `▪️ ${resource.title} - [Accéder](${resource.url})\n`;
            });
            return response;
        }
        
        if (lowerMessage.includes('synthèse') && (lowerMessage.includes('protéine') || lowerMessage.includes('protein'))) {
            const protein = this.courses.biochemistry.protein_synthesis;
            let response = `**📚 Synthèse des Protéines**\n\n${protein.summary}\n\n`;
            response += '**📂 Ressources disponibles :**\n';
            protein.resources.forEach(resource => {
                response += `▪️ ${resource.title} - [Accéder](${resource.url})\n`;
            });
            return response;
        }
        
        if (lowerMessage.includes('nerf') && (lowerMessage.includes('crânien') || lowerMessage.includes('cranial'))) {
            const cranialNerves = this.courses.anatomy.cranial_nerves;
            let response = `**📚 Nerfs Crâniens**\n\n${cranialNerves.summary}\n\n`;
            response += `**💡 Moyen mnémotechnique :** ${cranialNerves.mnemonic}\n\n`;
            response += '**📂 Ressources disponibles :**\n';
            cranialNerves.resources.forEach(resource => {
                response += `▪️ ${resource.title} - [Accéder](${resource.url})\n`;
            });
            return response;
        }
        
        if (lowerMessage.includes('cœur') || lowerMessage.includes('cardiaque') || lowerMessage.includes('heart')) {
            const heart = this.courses.anatomy.heart_anatomy;
            let response = `**📚 Anatomie du Cœur**\n\n${heart.summary}\n\n`;
            response += '**📂 Ressources disponibles :**\n';
            heart.resources.forEach(resource => {
                response += `▪️ ${resource.title} - [Accéder](${resource.url})\n`;
            });
            return response;
        }
        
        if (lowerMessage.includes('squelette') || lowerMessage.includes('os') || lowerMessage.includes('skeletal')) {
            const skeletal = this.courses.anatomy.skeletal_system;
            let response = `**📚 Système Squelettique**\n\n${skeletal.summary}\n\n`;
            response += '**📂 Ressources disponibles :**\n';
            skeletal.resources.forEach(resource => {
                response += `▪️ ${resource.title} - [Accéder](${resource.url})\n`;
            });
            return response;
        }
        
        if (lowerMessage.includes('antibiotique') || lowerMessage.includes('antibiotic')) {
            const antibiotics = this.courses.pharmacology.antibiotics;
            let response = `**📚 Antibiotiques**\n\n${antibiotics.summary}\n\n`;
            response += '**📂 Ressources disponibles :**\n';
            antibiotics.resources.forEach(resource => {
                response += `▪️ ${resource.title} - [Accéder](${resource.url})\n`;
            });
            return response;
        }
        
        if (lowerMessage.includes('cardiovasculaire') && lowerMessage.includes('médicament')) {
            const cvDrugs = this.courses.pharmacology.cardiovascular_drugs;
            let response = `**📚 Médicaments Cardiovasculaires**\n\n${cvDrugs.summary}\n\n`;
            response += '**📂 Ressources disponibles :**\n';
            cvDrugs.resources.forEach(resource => {
                response += `▪️ ${resource.title} - [Accéder](${resource.url})\n`;
            });
            return response;
        }
        
        if (lowerMessage.includes('analgésique') || lowerMessage.includes('antidouleur') || lowerMessage.includes('analgesic')) {
            const analgesics = this.courses.pharmacology.analgesics;
            let response = `**📚 Analgésiques**\n\n${analgesics.summary}\n\n`;
            response += '**📂 Ressources disponibles :**\n';
            analgesics.resources.forEach(resource => {
                response += `▪️ ${resource.title} - [Accéder](${resource.url})\n`;
            });
            return response;
        }
        
        if (lowerMessage.includes('respiratoire') || lowerMessage.includes('respiration') || lowerMessage.includes('respiratory')) {
            const respiratory = this.courses.physiology.respiratory_system;
            let response = `**📚 Système Respiratoire**\n\n${respiratory.summary}\n\n`;
            response += '**📂 Ressources disponibles :**\n';
            respiratory.resources.forEach(resource => {
                response += `▪️ ${resource.title} - [Accéder](${resource.url})\n`;
            });
            return response;
        }
        
        if (lowerMessage.includes('cardiovasculaire') && !lowerMessage.includes('médicament')) {
            const cardiovascular = this.courses.physiology.cardiovascular_system;
            let response = `**📚 Système Cardiovasculaire**\n\n${cardiovascular.summary}\n\n`;
            response += '**📂 Ressources disponibles :**\n';
            cardiovascular.resources.forEach(resource => {
                response += `▪️ ${resource.title} - [Accéder](${resource.url})\n`;
            });
            return response;
        }
        
        if (lowerMessage.includes('rénal') || lowerMessage.includes('rein') || lowerMessage.includes('kidney')) {
            const renal = this.courses.physiology.renal_system;
            let response = `**📚 Système Rénal**\n\n${renal.summary}\n\n`;
            response += '**📂 Ressources disponibles :**\n';
            renal.resources.forEach(resource => {
                response += `▪️ ${resource.title} - [Accéder](${resource.url})\n`;
            });
            return response;
        }
        
        if (lowerMessage.includes('diabète') || lowerMessage.includes('diabetes')) {
            const diabetes = this.courses.pathology.diabetes;
            let response = `**📚 Diabète**\n\n${diabetes.summary}\n\n`;
            response += '**📂 Ressources disponibles :**\n';
            diabetes.resources.forEach(resource => {
                response += `▪️ ${resource.title} - [Accéder](${resource.url})\n`;
            });
            return response;
        }
        
        if (lowerMessage.includes('hypertension') || lowerMessage.includes('tension')) {
            const hypertension = this.courses.pathology.hypertension;
            let response = `**📚 Hypertension Artérielle**\n\n${hypertension.summary}\n\n`;
            response += '**📂 Ressources disponibles :**\n';
            hypertension.resources.forEach(resource => {
                response += `▪️ ${resource.title} - [Accéder](${resource.url})\n`;
            });
            return response;
        }
        
        if (lowerMessage.includes('inflammation') || lowerMessage.includes('inflammatoire')) {
            const inflammation = this.courses.pathology.inflammation;
            let response = `**📚 Inflammation**\n\n${inflammation.summary}\n\n`;
            response += '**📂 Ressources disponibles :**\n';
            inflammation.resources.forEach(resource => {
                response += `▪️ ${resource.title} - [Accéder](${resource.url})\n`;
            });
            return response;
        }
        
        // General response if no specific topic matched
        return "Je peux vous aider à comprendre divers concepts médicaux ! 📚\n\n" +
               "**Sujets disponibles :**\n\n" +
               "**🧪 Biochimie :**\n" +
               "▪️ Cycle de Krebs\n" +
               "▪️ Glycolyse\n" +
               "▪️ Synthèse des protéines\n\n" +
               "**🫀 Anatomie :**\n" +
               "▪️ Nerfs crâniens\n" +
               "▪️ Anatomie du cœur\n" +
               "▪️ Système squelettique\n\n" +
               "**💊 Pharmacologie :**\n" +
               "▪️ Antibiotiques\n" +
               "▪️ Médicaments cardiovasculaires\n" +
               "▪️ Analgésiques\n\n" +
               "**⚕️ Physiologie :**\n" +
               "▪️ Système respiratoire\n" +
               "▪️ Système cardiovasculaire\n" +
               "▪️ Système rénal\n\n" +
               "**🏥 Pathologie :**\n" +
               "▪️ Diabète\n" +
               "▪️ Hypertension\n" +
               "▪️ Inflammation\n\n" +
               "**Essayez par exemple :** \"Explique-moi le cycle de Krebs\" ou \"Parle-moi des nerfs crâniens\"";
    }
    
    async handleExamPreparation(message = '') {
        const lowerMessage = message.toLowerCase();
        const subjects = Object.keys(this.examQuestions);
        
        // Check if asking for a specific subject
        for (const subject of subjects) {
            if (lowerMessage.includes(subject.toLowerCase()) || 
                lowerMessage.includes(this.translateSubject(subject))) {
                return this.getExamQuestion(subject);
            }
        }
        
        // Default response with subject list
        let response = '**📝 Mode Préparation aux Examens**\n\n';
        response += 'Je peux vous aider à vous préparer pour les examens dans ces matières :\n\n';
        subjects.forEach(subject => {
            const questionCount = this.examQuestions[subject]?.length || 0;
            const frenchSubject = this.translateSubject(subject);
            response += `▪️ **${frenchSubject}** (${questionCount} questions disponibles)\n`;
        });
        
        response += '\n**💡 Commandes disponibles :**\n';
        response += '▪️ "Teste-moi en anatomie"\n';
        response += '▪️ "Donne-moi un QCM sur la biochimie"\n';
        response += '▪️ "Question sur la pharmacologie"\n';
        response += '▪️ "Examen blanc complet"\n\n';
        response += '**Essayez :** "Teste-moi en anatomie" ou "Donne-moi un QCM sur la physiologie"';
        
        return response;
    }
    
    getExamQuestion(subject) {
        const questions = this.examQuestions[subject];
        if (!questions || questions.length === 0) {
            return `Désolé, aucune question disponible pour ${this.translateSubject(subject)}.`;
        }
        
        // Get a random question
        const question = questions[Math.floor(Math.random() * questions.length)];
        this.currentQuiz = {
            subject: subject,
            question: question,
            answered: false
        };
        
        let response = `**📝 Question de ${this.translateSubject(subject)}**\n\n`;
        response += `**Difficulté :** ${question.difficulty}\n`;
        response += `**Catégorie :** ${question.category}\n\n`;
        response += `**Question :** ${question.question}\n\n`;
        response += '**Options :**\n';
        question.options.forEach((option, index) => {
            response += `${String.fromCharCode(65 + index)}. ${option}\n`;
        });
        response += '\n💡 Répondez avec la lettre de votre choix (A, B, C, ou D)';
        
        return response;
    }
    
    translateSubject(subject) {
        const translations = {
            'anatomy': 'Anatomie',
            'physiology': 'Physiologie',
            'biochemistry': 'Biochimie',
            'pharmacology': 'Pharmacologie',
            'pathology': 'Pathologie'
        };
        return translations[subject] || subject;
    }
    
    async handleStudyPlanner(message = '') {
        const lowerMessage = message.toLowerCase();
        
        // Check for specific plan types
        if (lowerMessage.includes('quotidien') || lowerMessage.includes('aujourd\'hui') || 
            lowerMessage.includes('journalier') || lowerMessage.includes('daily')) {
            return this.getDailyStudyPlan();
        }
        
        if (lowerMessage.includes('hebdomadaire') || lowerMessage.includes('semaine') || 
            lowerMessage.includes('semainier') || lowerMessage.includes('weekly')) {
            return this.getWeeklyStudyPlan();
        }
        
        if (lowerMessage.includes('examen') || lowerMessage.includes('préparation') ||
            lowerMessage.includes('4 semaines') || lowerMessage.includes('1 mois')) {
            return this.getExamPreparationPlan();
        }
        
        // Default response with plan options
        let response = '**📌 Planificateur d\'Étude**\n\n';
        response += 'Je peux vous aider à organiser votre temps d\'étude. Voici les options disponibles :\n\n';
        response += '📅 **Plan Quotidien** - Programme d\'étude pour aujourd\'hui\n';
        response += '🗓️ **Plan Hebdomadaire** - Organisation de votre semaine\n';
        response += '📆 **Plan de Préparation** - Révision intensive (4 semaines)\n\n';
        response += '**💡 Commandes disponibles :**\n';
        response += '▪️ "Montre-moi mon planning de la semaine"\n';
        response += '▪️ "J\'ai besoin d\'un plan de révision"\n';
        response += '▪️ "Quel est le programme d\'étude pour aujourd\'hui ?"\n\n';
        response += '🔔 Je peux aussi vous rappeler vos sessions d\'étude !';
        
        return response;
    }
    
    getDailyStudyPlan() {
        let response = '**📅 Plan d\'Étude Quotidien**\n\n';
        response += '**Programme d\'aujourd\'hui :**\n\n';
        Object.entries(this.studyPlans.daily).forEach(([subject, plan]) => {
            const frenchSubject = this.capitalizeFirstLetter(this.translateSubject(subject));
            response += `▪️ **${frenchSubject}** - ${plan}\n`;
        });
        response += '\n**⏰ Total : environ 7-8 heures d\'étude**\n\n';
        response += '💡 **Conseil du jour :** N\'oubliez pas de faire des pauses de 10 minutes toutes les heures !';
        return response;
    }
    
    getWeeklyStudyPlan() {
        let response = '**🗓️ Plan d\'Étude Hebdomadaire**\n\n';
        Object.entries(this.studyPlans.weekly).forEach(([day, plan]) => {
            response += `**${this.capitalizeFirstLetter(day)} :**\n${plan}\n\n`;
        });
        response += '**📊 Total hebdomadaire : 15-18 heures**\n\n';
        response += '💡 **Rappel :** Maintenez un équilibre entre étude, repos et loisirs pour une meilleure performance !';
        return response;
    }
    
    getExamPreparationPlan() {
        let response = '**📆 Plan de Préparation aux Examens (4 semaines)**\n\n';
        Object.entries(this.studyPlans.exam_prep_1month).forEach(([week, details]) => {
            response += `**${week.replace('week', 'Semaine ')} - ${details.focus}**\n`;
            response += `⏱️ Volume : ${details.hours} heures\n`;
            response += `📚 Sujets : ${details.topics.join(', ')}\n`;
            response += `🎯 Objectif : ${details.goals}\n\n`;
        });
        response += '**🔔 Rappels programmés :**\n';
        this.userProgress.upcomingExams.forEach(exam => {
            response += `▪️ ${exam.subject} - ${exam.date} (dans ${exam.daysLeft} jours)\n`;
        });
        return response;
    }
    
    async handleFlashcards(message = '') {
        const lowerMessage = message.toLowerCase();
        
        let response = '**🧠 Cartes Mémoires Interactives**\n\n';
        response += 'Pratiquez avec des cartes mémoires pour une mémorisation efficace !\n\n';
        response += '**📚 Paquets disponibles :**\n\n';
        
        Object.entries(this.userProgress.flashcards).forEach(([deck, stats]) => {
            const deckName = this.formatFlashcardDeckName(deck);
            const progress = ((stats.mastered / stats.total) * 100).toFixed(0);
            response += `▪️ **${deckName}**\n`;
            response += `   📊 Progrès : ${progress}% (${stats.mastered}/${stats.total})\n`;
            response += `   🔄 À revoir : ${stats.toReview} cartes\n`;
            response += `   ⏰ Dernière pratique : il y a ${stats.lastPracticed}\n\n`;
        });
        
        response += '**💡 Comment utiliser :**\n';
        response += '1. Tapez "Commence les flashcards sur [sujet]"\n';
        response += '2. Lisez la question et réfléchissez à la réponse\n';
        response += '3. Tapez "Montre la réponse" pour voir la correction\n';
        response += '4. Évaluez votre connaissance (Facile/Moyen/Difficile)\n\n';
        response += '🎯 **Essayez :** "Commence les flashcards sur les nerfs crâniens"';
        
        return response;
    }
    
    formatFlashcardDeckName(deck) {
        const names = {
            'cranial_nerves': 'Nerfs Crâniens',
            'pharmacology_drugs': 'Médicaments de base',
            'biochemistry_pathways': 'Voies métaboliques',
            'anatomy_bones': 'Os et squelette'
        };
        return names[deck] || deck;
    }
    
    async handleResourceNavigation(message) {
        const lowerMessage = message.toLowerCase();
        
        let response = '**📂 Navigateur de Ressources**\n\n';
        response += 'Je peux vous aider à trouver des ressources d\'étude !\n\n';
        
        response += '**📚 Types de ressources disponibles :**\n\n';
        response += '📄 **PDF et Documents**\n';
        response += '   ▪️ Cours complets\n';
        response += '   ▪️ Fiches de révision\n';
        response += '   ▪️ Annales d\'examens\n\n';
        
        response += '🎥 **Vidéos Pédagogiques**\n';
        response += '   ▪️ Explications animées\n';
        response += '   ▪️ Démonstrations pratiques\n';
        response += '   ▪️ Cours enregistrés\n\n';
        
        response += '✅ **QCM et Exercices**\n';
        response += '   ▪️ Tests d\'auto-évaluation\n';
        response += '   ▪️ Examens blancs\n';
        response += '   ▪️ Questions corrigées\n\n';
        
        response += '**🔍 Recherche par matière :**\n';
        response += '▪️ [Anatomie](courses.html#anatomy)\n';
        response += '▪️ [Physiologie](courses.html#physiology)\n';
        response += '▪️ [Biochimie](courses.html#biochemistry)\n';
        response += '▪️ [Pharmacologie](courses.html#pharmacology)\n';
        response += '▪️ [Pathologie](courses.html#pathology)\n\n';
        
        response += '**💡 Essayez :** "Trouve-moi des PDF sur la cardiologie" ou "Montre-moi les vidéos d\'anatomie"';
        
        return response;
    }
    
    async handleProgressTracking() {
        let response = '**📊 Votre Progression d\'Étude**\n\n';
        
        // Recent Activity
        response += '**📅 Activité Récente**\n';
        Object.entries(this.userProgress.lastStudied).forEach(([subject, date]) => {
            const hoursAgo = Math.round((Date.now() - date) / (1000 * 60 * 60));
            const timeStr = hoursAgo < 24 ? `il y a ${hoursAgo}h` : `il y a ${Math.round(hoursAgo/24)} jours`;
            response += `▪️ ${this.translateSubject(subject)} : ${timeStr}\n`;
        });
        response += `▪️ Série d\'étude : ${this.userProgress.studyStreak} jours 🔥\n`;
        response += `▪️ Total d\'heures : ${this.userProgress.totalStudyHours}h\n\n`;
        
        // Quiz Performance
        response += '**📈 Performance aux QCM**\n';
        Object.entries(this.userProgress.quizScores).forEach(([subject, scores]) => {
            const avg = (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(1);
            const last = scores[scores.length - 1];
            const trend = scores.length > 1 && last > scores[scores.length - 2] ? '📈' : 
                         scores.length > 1 && last < scores[scores.length - 2] ? '📉' : '➡️';
            response += `▪️ ${this.translateSubject(subject)} : ${avg}% (moyenne) ${trend}\n`;
            response += `   Dernier score : ${last}% (${scores.length} tentatives)\n`;
        });
        response += `\n▪️ Score moyen global : ${this.userProgress.averageScore}%\n\n`;
        
        // Upcoming Exams
        response += '**🎯 Examens à Venir**\n';
        this.userProgress.upcomingExams.forEach(exam => {
            const preparationBar = '█'.repeat(Math.floor(exam.prepared / 10)) + '░'.repeat(10 - Math.floor(exam.prepared / 10));
            response += `▪️ **${exam.subject}** - ${exam.date}\n`;
            response += `   ${exam.topic}\n`;
            response += `   ⏰ Dans ${exam.daysLeft} jours\n`;
            response += `   📊 Préparation : ${preparationBar} ${exam.prepared}%\n\n`;
        });
        
        // Strengths and Weaknesses
        response += '**💪 Points Forts**\n';
        this.userProgress.strongAreas.forEach(area => {
            response += `▪️ ${area}\n`;
        });
        
        response += '\n**🎯 À Améliorer**\n';
        this.userProgress.weakAreas.forEach(area => {
            response += `▪️ ${area}\n`;
        });
        
        response += '\n💡 **Recommandation :** Concentrez-vous sur vos points faibles tout en maintenant vos acquis !';
        
        return response;
    }
    
    async handleMotivationAndTips() {
        const randomTip = this.studyTips[Math.floor(Math.random() * this.studyTips.length)];
        const randomMessage = this.motivationalMessages[Math.floor(Math.random() * this.motivationalMessages.length)];
        
        let response = `**💪 ${randomMessage}**\n\n`;
        response += '**💡 Conseil d\'Étude du Jour**\n';
        response += `${randomTip}\n\n`;
        response += '**🎯 Citation Médicale**\n';
        response += '"La médecine est l\'art de soigner, mais aussi la science de comprendre."\n\n';
        response += '**📚 Ressources Utiles :**\n';
        response += '▪️ [Cours complets](courses.html)\n';
        response += '▪️ [Examens blancs](exmens.html)\n';
        response += '▪️ [À propos](about.html)\n\n';
        response += 'Besoin d\'aide ? Posez-moi n\'importe quelle question sur un sujet médical ! 🩺';
        
        return response;
    }
    
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    getQCMHelp(question) {
        return "**📝 Conseils pour Réussir les QCM**\n\n" +
               "**🎯 Stratégies Générales :**\n" +
               "1️⃣ **Lisez attentivement** - Analysez bien l'énoncé avant de regarder les options\n" +
               "2️⃣ **Éliminez les erreurs** - Supprimez les réponses manifestement fausses\n" +
               "3️⃣ **Mots-clés** - Repérez les termes importants (toujours, jamais, sauf, etc.)\n" +
               "4️⃣ **Formulations négatives** - Attention aux questions avec \"NE...PAS\", \"SAUF\"\n" +
               "5️⃣ **Gestion du temps** - Ne restez pas bloqué sur une question difficile\n\n" +
               "**💡 Techniques Spécifiques :**\n" +
               "▪️ **Anatomie** : Visualisez les structures mentalement\n" +
               "▪️ **Biochimie** : Dessinez les voies métaboliques si nécessaire\n" +
               "▪️ **Pharmacologie** : Pensez aux mécanismes d'action\n" +
               "▪️ **Pathologie** : Reliez symptômes et physiopathologie\n\n" +
               "**✅ Après le QCM :**\n" +
               "▪️ Revoyez TOUTES les réponses (correctes et incorrectes)\n" +
               "▪️ Comprenez pourquoi vous vous êtes trompé\n" +
               "▪️ Notez les concepts à revoir\n\n" +
               "💪 **Essayez :** \"Teste-moi en [matière]\" pour pratiquer !";
    }

    getWebsiteGuidance() {
        return "**🗺️ Guide de Navigation du Site**\n\n" +
               "**📚 Sections Principales :**\n\n" +
               "**1. [Accueil](index.html)** 🏠\n" +
               "   ▪️ Vue d'ensemble de la plateforme\n" +
               "   ▪️ Statistiques et actualités\n" +
               "   ▪️ Cours populaires\n\n" +
               "**2. [Cours](courses.html)** 📖\n" +
               "   ▪️ Tous les cours par matière\n" +
               "   ▪️ Anatomie, Physiologie, Biochimie\n" +
               "   ▪️ Pharmacologie, Pathologie\n" +
               "   ▪️ PDFs téléchargeables\n\n" +
               "**3. [Examens](exmens.html)** ✅\n" +
               "   ▪️ QCM par matière\n" +
               "   ▪️ Examens blancs\n" +
               "   ▪️ Tests chronométrés\n" +
               "   ▪️ Correction détaillée\n\n" +
               "**4. [À Propos](about.html)** ℹ️\n" +
               "   ▪️ Notre mission\n" +
               "   ▪️ L'équipe pédagogique\n" +
               "   ▪️ Méthodologie d'enseignement\n\n" +
               "**5. [Contact](contact.html)** 📧\n" +
               "   ▪️ Formulaire de contact\n" +
               "   ▪️ Support technique\n" +
               "   ▪️ Questions fréquentes\n\n" +
               "**🎯 Fonctionnalités :**\n" +
               "▪️ Recherche de cours par mots-clés\n" +
               "▪️ Téléchargement de ressources\n" +
               "▪️ Suivi de progression\n" +
               "▪️ Chatbot d'aide (moi ! 🤖)\n\n" +
               "💬 Besoin d'aide pour trouver quelque chose ? Demandez-moi !";
    }

    addMessage(sender, text) {
        const messagesContainer = document.querySelector('.chatbot-messages');
        const messageElement = document.createElement('div');
        messageElement.className = `chatbot-message ${sender}-message`;
        messageElement.innerHTML = `<div class="message-content">${this.formatMessage(text)}</div>`;
        
        messagesContainer.appendChild(messageElement);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    formatMessage(text) {
        // Simple markdown-like formatting
        return text
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')  // Bold
            .replace(/\n/g, '<br>')  // New lines
            .replace(/^- (.*?)(<br>|$)/g, '• $1<br>');  // Bullet points
    }

    showTypingIndicator() {
        const messagesContainer = document.querySelector('.chatbot-messages');
        const typingElement = document.createElement('div');
        typingElement.className = 'chatbot-message bot-message typing-indicator';
        typingElement.innerHTML = '<div class="typing"><span></span><span></span><span></span></div>';
        messagesContainer.appendChild(typingElement);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    hideTypingIndicator() {
        const typingElement = document.querySelector('.typing-indicator');
        if (typingElement) {
            typingElement.remove();
        }
    }

    addWelcomeMessage() {
        const welcomeMsg = "👋 **Bienvenue sur MedEdu !**\n\n" +
                          "Je suis votre assistant d'apprentissage intelligent. Je peux vous aider avec :\n\n" +
                          "📚 **Cours & Explications** - Comprenez les concepts médicaux\n" +
                          "📝 **QCM & Examens** - Testez vos connaissances\n" +
                          "📌 **Plans d'Étude** - Organisez vos révisions\n" +
                          "🧠 **Cartes Mémoires** - Mémorisez efficacement\n" +
                          "📂 **Ressources** - Trouvez cours, PDFs et vidéos\n" +
                          "📊 **Suivi de Progression** - Analysez vos performances\n" +
                          "💪 **Motivation** - Restez motivé et concentré\n\n" +
                          "**💡 Essayez par exemple :**\n" +
                          "▪️ \"Explique-moi le cycle de Krebs\"\n" +
                          "▪️ \"Teste-moi en anatomie\"\n" +
                          "▪️ \"Montre-moi ma progression\"\n" +
                          "▪️ \"Donne-moi un conseil d'étude\"\n\n" +
                          "Comment puis-je vous aider aujourd'hui ? 😊";
        this.addMessage('bot', welcomeMsg);
    }
}

// Initialize chatbot when the page loads
document.addEventListener('DOMContentLoaded', () => {
    window.medEduChatbot = new MedEduChatbot();
});
