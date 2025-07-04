# Lab Projekt Zaliczenie

![CI/CD Status](https://github.com/USERNAME/REPOSITORY/workflows/CI/CD%20Pipeline/badge.svg)

Projekt zaliczeniowy demonstrujący umiejętności z laboratoriów 1-3: Git/GitHub, zaawansowany workflow oraz CI/CD.

## 📋 Spis treści

- [Opis projektu](#opis-projektu)
- [Technologie](#technologie)
- [Funkcjonalności](#funkcjonalności)
- [Instalacja](#instalacja)
- [Użycie](#użycie)
- [API Endpoints](#api-endpoints)
- [Testowanie](#testowanie)
- [Docker](#docker)
- [CI/CD Pipeline](#cicd-pipeline)
- [Deployment](#deployment)
- [Laboratorium](#laboratorium)

## 🎯 Opis projektu

Prosta aplikacja webowa w Node.js z Express, która demonstruje:

- **Lab 1**: Podstawy Git/GitHub - tworzenie repozytorium, commits, dokumentacja
- **Lab 2**: Zaawansowany Git workflow - gałęzie, pull requesty, rozwiązywanie konfliktów
- **Lab 3**: CI/CD i deployment w chmurze - automatyzacja, testy, wdrażanie

Aplikacja udostępnia REST API do zarządzania zadaniami (todos) oraz informacje o projekcie.

## 🛠️ Technologie

- **Backend**: Node.js, Express.js
- **Testy**: Jest, Supertest
- **Konteneryzacja**: Docker
- **CI/CD**: GitHub Actions
- **Deployment**: GitHub Pages / Heroku / AWS
- **Dokumentacja**: Markdown

## ✨ Funkcjonalności

- ✅ REST API do zarządzania zadaniami
- ✅ Health check endpoint
- ✅ Informacje o projekcie i użytych technologiach
- ✅ Obsługa błędów 404 i 500
- ✅ Automatyczne testy jednostkowe i integracyjne
- ✅ Docker containerization
- ✅ CI/CD pipeline z GitHub Actions
- ✅ Automatyczny deployment

## 🚀 Instalacja

### Lokalnie

```bash
# Klonowanie repozytorium
git clone https://github.com/USERNAME/lab-projekt-zaliczenie.git

# Przejście do katalogu projektu
cd lab-projekt-zaliczenie

# Instalacja zależności
npm install

# Uruchomienie aplikacji
npm start
```

### Docker

```bash
# Budowanie obrazu Docker
docker build -t lab-projekt .

# Uruchomienie kontenera
docker run -p 3000:3000 lab-projekt
```

## 💻 Użycie

Po uruchomieniu aplikacja będzie dostępna pod adresem: `http://localhost:3000`

### Główne endpointy:

- `GET /` - Informacje o projekcie
- `GET /health` - Status zdrowia aplikacji
- `GET /about` - Szczegółowe informacje o technologiach
- `GET /api/todos` - Lista zadań
- `POST /api/todos` - Utworzenie nowego zadania

## 📚 API Endpoints

### GET /
```json
{
  "message": "Projekt zaliczeniowy - Lab 1-3",
  "author": "Eryk",
  "version": "1.0.0",
  "description": "Aplikacja demonstrująca umiejętności Git/GitHub, workflow i CI/CD"
}
```

### GET /health
```json
{
  "status": "OK",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "uptime": 3600,
  "version": "1.0.0"
}
```

### GET /api/todos
```json
[
  {
    "id": 1,
    "title": "Stworzenie aplikacji Express",
    "completed": true
  }
]
```

### POST /api/todos
```bash
curl -X POST http://localhost:3000/api/todos \
  -H "Content-Type: application/json" \
  -d '{"title": "Nowe zadanie"}'
```

## 🧪 Testowanie

```bash
# Uruchomienie testów
npm test

# Testy z obserwowaniem zmian
npm run test:watch

# Pokrycie kodu testami
npm run test:coverage
```

Testy obejmują:
- Testy jednostkowe wszystkich endpointów
- Testy integracyjne API
- Walidację odpowiedzi
- Obsługę błędów

## 🐳 Docker

### Budowanie obrazu
```bash
docker build -t lab-projekt .
```

### Uruchomienie
```bash
docker run -p 3000:3000 lab-projekt
```

### Testowanie kontenera
```bash
# Sprawdzenie health check
curl http://localhost:3000/health
```

## 🔄 CI/CD Pipeline

Pipeline GitHub Actions wykonuje:

1. **Test**: 
   - Testowanie na Node.js 16, 18, 20
   - Uruchomienie testów jednostkowych
   - Generowanie raportu pokrycia

2. **Docker Build**:
   - Budowanie obrazu Docker
   - Testowanie kontenera

3. **Deploy**:
   - Automatyczne wdrożenie na main branch
   - Health check po deployment

## 🚀 Deployment

### GitHub Pages (statyczne pliki)
```bash
# Automatyczne przez GitHub Actions
```

### Heroku
```bash
# Dodanie Heroku remote
heroku git:remote -a nazwa-aplikacji

# Deploy
git push heroku main
```

### AWS/Azure
Szczegóły konfiguracji w `.github/workflows/ci-cd.yml`

## 🎓 Laboratorium

### Lab 1: Podstawy Git/GitHub ✅
- [x] Utworzenie repozytorium
- [x] Podstawowe commits
- [x] Dokumentacja README.md
- [x] Konfiguracja .gitignore

### Lab 2: Zaawansowany Git workflow ✅
- [x] Praca z gałęziami (feature branches)
- [x] Pull requesty i code review
- [x] Rozwiązywanie konfliktów merge
- [x] Tagowanie wersji (semantic versioning)
- [x] Testy automatyczne

### Lab 3: CI/CD i deployment ✅
- [x] GitHub Actions pipeline
- [x] Docker konteneryzacja
- [x] Automatyczne testy w CI
- [x] Deployment w chmurze
- [x] Health checks i monitoring

## 📝 Workflow Git

Projekt wykorzystuje:
- **Main branch** - wersja produkcyjna
- **Develop branch** - wersja deweloperska
- **Feature branches** - nowe funkcjonalności
- **Pull requests** - code review
- **Semantic versioning** - tagowanie wersji

## 🤝 Contributing

1. Fork repozytorium
2. Utwórz feature branch (`git checkout -b feature/nowa-funkcjonalnosc`)
3. Commit zmian (`git commit -m 'feat: dodanie nowej funkcjonalności'`)
4. Push do branch (`git push origin feature/nowa-funkcjonalnosc`)
5. Utwórz Pull Request

## 📄 Licencja

Projekt jest licencjonowany pod [licencją MIT](LICENSE).

## 👨‍💻 Autor

**Eryk** - Projekt zaliczeniowy  
GitHub: [@USERNAME](https://github.com/USERNAME)

## 🙏 Podziękowania

- Materiały z laboratoriów 1-3
- Dokumentacja Express.js, Jest, Docker
- GitHub Actions Community 