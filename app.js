const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Endpoint główny
app.get('/', (req, res) => {
    res.json({
        message: 'Projekt zaliczeniowy - Lab 1-3',
        author: 'Eryk',
        version: '1.0.0',
        description: 'Aplikacja demonstrująca umiejętności Git/GitHub, workflow i CI/CD'
    });
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'OK',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        version: process.env.npm_package_version || '1.0.0'
    });
});

// API endpoint - lista zadań
let todos = [
    { id: 1, title: 'Stworzenie aplikacji Express', completed: true },
    { id: 2, title: 'Dodanie testów', completed: false },
    { id: 3, title: 'Konfiguracja CI/CD', completed: false }
];

app.get('/api/todos', (req, res) => {
    res.json(todos);
});

app.post('/api/todos', (req, res) => {
    const { title } = req.body;
    if (!title) {
        return res.status(400).json({ error: 'Title is required' });
    }
    
    const newTodo = {
        id: todos.length + 1,
        title,
        completed: false
    };
    
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

// Endpoint informacyjny o projekcie
app.get('/about', (req, res) => {
    res.json({
        project: 'Lab Projekt Zaliczenie',
        technologies: ['Node.js', 'Express', 'Jest', 'Docker', 'GitHub Actions'],
        features: [
            'Git workflow z gałęziami i PR',
            'Automatyczne testy',
            'CI/CD pipeline',
            'Containerization',
            'Deployment w chmurze'
        ],
        lab_topics: [
            'Lab 1: Podstawy Git/GitHub',
            'Lab 2: Zaawansowany Git workflow',
            'Lab 3: CI/CD i deployment'
        ]
    });
});

app.get('/api/info', (req, res) => {
    res.json({
        app: 'Lab Projekt',
        status: 'active',
        lastUpdate: new Date().toISOString()
    });
});

// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({ error: 'Endpoint not found' });
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Serwer działa na porcie ${PORT}`);
        console.log(`Odwiedź: http://localhost:${PORT}`);
    });
}

module.exports = app; 