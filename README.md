# 🧪 QA Automation con Playwright y TypeScript

[![TypeScript](https://img.shields.io/badge/TypeScript-TS-blue?logo=typescript)](https://www.typescriptlang.org) [![Playwright](https://img.shields.io/badge/Playwright-Test-purple?logo=playwright)](https://playwright.dev) [![Node.js](https://img.shields.io/badge/Node.js-LTS-green?logo=node.js)](https://nodejs.org) [![Status](https://img.shields.io/badge/Status-In%20progress-orange)]()

> **Repositorio personal de aprendizaje y práctica en automatización de pruebas.**  
> Documenta mi avance y ejercicios del taller **QA Automation con Playwright y TypeScript**, orientado a desarrollar habilidades prácticas y buenas prácticas como **QA Automation Engineer**.

---

## 🎯 Objetivo del Proyecto

Registrar y versionar mi aprendizaje en automatización E2E con **Playwright + TypeScript**, construyendo pruebas robustas, mantenibles y ejecutables en CI. El foco es:
- Aprender patrones (POM) y organización de suites.
- Integrar pruebas UI + API + mocks.
- Implementar reporting y CI/CD.
- Añadir pruebas de accesibilidad, visuales y performance cuando aplique.

---

## 🧭 Temario del Taller (ampliado)

| # | Módulo | Descripción | Progreso |
|---:|:--|:--|:--:|
| 1 | **Fundamentos y Primera Automatización** | Configuración del entorno, primer test con Playwright, estructura básica. | ![100%](https://img.shields.io/badge/Progreso-100%25-brightgreen) |
| 2 | **Page Object Model y Casos de Login** | Implementación del POM, reuso de componentes, autenticación y manejo de sesiones. | ![0%](https://img.shields.io/badge/Progreso-0%25-lightgrey) |
| 3 | **Pruebas de API y Mocking** | Tests de servicios REST, intercepts, y mocks para aislar dependencias externas. | ![0%](https://img.shields.io/badge/Progreso-0%25-lightgrey) |
| 4 | **Escenarios Avanzados y Múltiples Usuarios** | Flujos complejos, paralelismo de pruebas y manejo de múltiples sesiones/usuarios. | ![0%](https://img.shields.io/badge/Progreso-0%25-lightgrey) |
| 5 | **CI/CD y Proyecto Final** | Integración de la suite en pipelines (GitHub Actions / Jenkins), ejecución automática y gating. | ![0%](https://img.shields.io/badge/Progreso-0%25-lightgrey) |
| 6 | **Pruebas Visuales / Regresión Visual** | Integración de comparaciones visuales (screenshots/diff) para detectar regresiones UI. | ![0%](https://img.shields.io/badge/Progreso-0%25-lightgrey) |
| 7 | **Accesibilidad (a11y)** | Auditorías automáticas de accesibilidad y checks de cumplimiento (WCAG basics). | ![0%](https://img.shields.io/badge/Progreso-0%25-lightgrey) |
| 8 | **Pruebas de Rendimiento y Carga (básico)** | Checks preliminares de latencia y carga para endpoints críticos. | ![0%](https://img.shields.io/badge/Progreso-0%25-lightgrey) |
| 9 | **Integración, Reportes y Observabilidad** | Generación de reports (Allure / HTML), logs, trazabilidad y analítica de fallos. | ![0%](https://img.shields.io/badge/Progreso-0%25-lightgrey) |
|10 | **Buenas Prácticas y Estrategias de Testing** | Diseño de casos, flujos de test, criterios de aceptación y mantenimiento a largo plazo. | ![0%](https://img.shields.io/badge/Progreso-0%25-lightgrey) |

---

## 🧰 Tecnologías y Herramientas

- **Playwright** — E2E testing moderno  
- **TypeScript** — Tipado y robustez en las pruebas  
- **Node / npm** — Gestión de dependencias y scripts  
- **Git & GitHub** — Versionado y hosting del repo  
- **CI/CD** — GitHub Actions, Jenkins (ejemplos)  
- **Allure / HTML Reports** — Reportes legibles para el equipo  
- Herramientas adicionales: intercepts/mocks, herramientas de visual testing y a11y (axe, lighthouse)

---
##📁 Estructura recomendada del repositorio

qa-automation-playwright/
├── tests/                    # Casos de prueba organizados por feature
│   ├── ui/
│   └── api/
├── pages/                    # Page Object Models
├── visual-tests/             # Config y snapshots para pruebas visuales
├── perf/                     # Scripts / configs para pruebas de carga
├── reports/                  # Resultados y reportes (Allure/HTML)
├── fixtures/                 # Datos de prueba / test-data
├── utils/                    # Helpers y utilidades
├── playwright.config.ts
├── package.json
└── README.md

##🧙‍♂️ Autor

Leandro Bouza — QA Engineer en formación.
Apasionado por calidad, automatización y diseño de pruebas escalables.

“La automatización no reemplaza al tester, lo potencia.” ⚡

## 🚀 Quick start

```bash
# clona repo
git clone git@github.com:tu-usuario/qa-automation-playwright.git
cd qa-automation-playwright

# instala dependencias
npm install

# instala navegadores para Playwright
npx playwright install

# ejecutar tests
npx playwright test

# ejecutar un test en modo headed
npx playwright test tests/login.spec.ts --headed
---

