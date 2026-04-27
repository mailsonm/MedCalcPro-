# MedCalc Pro - Documentation / Documentação / Documentación

MedCalc Pro is a precision clinical tool designed for healthcare professionals to perform medication dosage, drip rates, and dilution calculations with safety and speed.

O MedCalc Pro é uma ferramenta clínica de precisão projetada para profissionais de saúde realizarem cálculos de dosagem, gotejamento e diluição de medicamentos com segurança e rapidez.

MedCalc Pro es una herramienta clínica de precisión diseñada para que los profesionales de la salud realicen cálculos de dosificación, goteo y dilución de medicamentos con seguridad y rapidez.

---

## 🛠 Tech Stack / Stack Tecnológica

- **Framework:** React 19 (Vite)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (via CDN)
- **Icons:** Lucide React
- **Typeface:** Inter

## 📂 Project Structure / Estrutura do Projeto / Estructura del Proyecto

- `App.tsx`: Main entry point & tab navigation / Ponto de entrada e abas / Punto de entrada y pestañas.
- `types.ts`: Enum & Interface definitions / Definições globais / Definiciones globales.
- `components/`: UI and Calculator modules / Módulos de interface e calculadoras / Módulos de interfaz y calculadoras.
    - `calculators/`: Logic for Dosage, Drip, and Dilution / Lógica específica / Lógica específica.
    - `ui/`: Shared UI components / Componentes compartilhados / Componentes compartidos.
- `utils/`: Core conversion and validation logic / Conversão e validação / Conversión y validación.
    - `conversions.ts`: Mass and Time normalization / Normalização / Normalización.

## 🧮 Core Logic / Lógica Central / Lógica Central

### 1. Dosage (Rule of Three) / Dosagem (Regra de Três) / Dosificación (Regla de Tres)
Calculates the volume based on concentration and desired dose.
Calcula o volume baseado na concentração e dose desejada.
Calcula el volumen baseado en la concentración y dosis deseada.
- **Formula:** `(Desired Dose * Available Volume) / Available Concentration`

### 2. Drip Rate / Gotejamento / Goteo
Calculates drops or microdrops per minute.
Calcula gotas ou microgotas por minuto.
Calcula gotas o microgotas por minuto.
- **Microdrops:** `Volume / Time (hours)`
- **Drops:** `Volume / (Time (hours) * 3)`

### 3. Dilution / Diluição / Dilución
Calculates final concentration when adding solvent.
Calcula a concentração final ao adicionar solvente.
Calcula la concentración final al añadir solvente.

## 🚀 Development / Desenvolvimento / Desarrollo

### Build, Run & Test / Execução e Testes
```bash
npm run dev      # Start development server / Iniciar servidor
npm run build    # Build for production / Gerar build
npm test         # Run tests / Executar testes
```

## ⚠️ Caveats & Legacy / Particularidades do Legado

- **Tailwind CSS:** Loaded via CDN in `index.html`. No local `tailwind.config.js` exists; customization is done via an inline script in the HTML header.
- **Dependency Management:** The project uses `importmap` in `index.html` to load React and Lucide-React from `esm.sh`. Standard `node_modules` are used primarily for dev tools (Vite, Vitest).
- **Environment Variables:** `vite.config.ts` is configured to manually load `GEMINI_API_KEY` and inject it into `process.env`.
- **Accessibility:** Ensure `InputGroup` continues to use `React.useId()` for proper label-input linkage, as this was a common point of failure in the original code.

### Standards / Padrões / Estándares
- **Naming:** CamelCase for functions/variables (English).
- **Communication:** Decoupled components using `types.ts`.
- **Validation:** All inputs verified in `utils/conversions.ts`.
- **UI:** Mobile-first, precision-oriented design using Tailwind.
- **Accessibility:** Components like `InputGroup` use `useId()` for label-input association.

---

> [!IMPORTANT]
> **Safety First:** This tool is for educational purposes. Always double-check calculations manually.
> **Segurança:** Esta ferramenta é para fins educacionais. Sempre verifique os cálculos manualmente.
> **Seguridad:** Esta herramienta es para fines educativos. Siempre verifique los cálculos manualmente.
