const request = require('supertest');
const app = require('./app');

describe('Aplikacja Express - Testy', () => {
    
    describe('GET /', () => {
        test('powinien zwrócić informacje o projekcie', async () => {
            const response = await request(app)
                .get('/')
                .expect(200);
            
            expect(response.body).toHaveProperty('message');
            expect(response.body).toHaveProperty('author', 'Eryk');
            expect(response.body).toHaveProperty('version', '1.0.0');
            expect(response.body.message).toContain('Projekt zaliczeniowy');
        });
    });

    describe('GET /health', () => {
        test('powinien zwrócić status zdrowia aplikacji', async () => {
            const response = await request(app)
                .get('/health')
                .expect(200);
            
            expect(response.body).toHaveProperty('status', 'OK');
            expect(response.body).toHaveProperty('timestamp');
            expect(response.body).toHaveProperty('uptime');
            expect(response.body).toHaveProperty('version');
        });
    });

    describe('GET /api/todos', () => {
        test('powinien zwrócić listę zadań', async () => {
            const response = await request(app)
                .get('/api/todos')
                .expect(200);
            
            expect(Array.isArray(response.body)).toBe(true);
            expect(response.body.length).toBeGreaterThan(0);
            
            // Sprawdzenie struktury pierwszego zadania
            const firstTodo = response.body[0];
            expect(firstTodo).toHaveProperty('id');
            expect(firstTodo).toHaveProperty('title');
            expect(firstTodo).toHaveProperty('completed');
        });
    });

    describe('POST /api/todos', () => {
        test('powinien utworzyć nowe zadanie', async () => {
            const newTodo = {
                title: 'Test zadanie'
            };

            const response = await request(app)
                .post('/api/todos')
                .send(newTodo)
                .expect(201);
            
            expect(response.body).toHaveProperty('id');
            expect(response.body).toHaveProperty('title', 'Test zadanie');
            expect(response.body).toHaveProperty('completed', false);
        });

        test('powinien zwrócić błąd 400 gdy brak title', async () => {
            const response = await request(app)
                .post('/api/todos')
                .send({})
                .expect(400);
            
            expect(response.body).toHaveProperty('error', 'Title is required');
        });
    });

    describe('GET /about', () => {
        test('powinien zwrócić informacje o projekcie', async () => {
            const response = await request(app)
                .get('/about')
                .expect(200);
            
            expect(response.body).toHaveProperty('project');
            expect(response.body).toHaveProperty('technologies');
            expect(response.body).toHaveProperty('features');
            expect(response.body).toHaveProperty('lab_topics');
            
            expect(Array.isArray(response.body.technologies)).toBe(true);
            expect(response.body.technologies).toContain('Node.js');
            expect(response.body.technologies).toContain('Express');
        });
    });

    describe('404 Handler', () => {
        test('powinien zwrócić 404 dla nieistniejących endpointów', async () => {
            const response = await request(app)
                .get('/nieistniejacy-endpoint')
                .expect(404);
            
            expect(response.body).toHaveProperty('error', 'Endpoint not found');
        });
    });
}); 