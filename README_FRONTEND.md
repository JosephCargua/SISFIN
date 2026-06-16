# Frontend SISFIN - Angular

## Estructura del Proyecto

```
src/
├── app/
│   ├── components/
│   │   └── layout/              # Layout principal con navegación
│   ├── pages/
│   │   ├── dashboard/           # Dashboard principal
│   │   ├── accounts/            # Plan de Cuentas
│   │   ├── journal-entries/     # Libro Diario
│   │   ├── general-ledger/      # Libro Mayor
│   │   ├── electronic-invoices/ # Facturación Electrónica
│   │   └── reports/             # Reportes
│   ├── core/
│   │   └── services/           # Servicios para comunicación con API
│   ├── models/                 # Interfaces TypeScript
│   └── app.routes.ts           # Rutas de la aplicación
├── environments/               # Configuración de entornos
└── styles.scss                 # Estilos globales
```

## Componentes Implementados

### ✅ Completados

1. **Layout Component** (`components/layout/`)
   - Sidebar con navegación
   - Menú principal con todas las secciones
   - Diseño responsive

2. **Dashboard** (`pages/dashboard/`)
   - Estadísticas generales
   - Contadores de cuentas y asientos

3. **Plan de Cuentas** (`pages/accounts/`)
   - Listado de cuentas
   - Formulario de creación
   - Vista jerárquica
   - Filtros por tipo

4. **Libro Diario** (`pages/journal-entries/`)
   - Creación de asientos contables
   - Validación de partida doble
   - Listado de asientos
   - Posteo y anulación de asientos
   - Filtros por estado

5. **Libro Mayor** (`pages/general-ledger/`)
   - Consulta por cuenta
   - Filtros de fecha
   - Visualización de movimientos y saldos

6. **Facturación Electrónica** (`pages/electronic-invoices/`)
   - Estructura base conectada al backend

7. **Reportes** (`pages/reports/`)
   - Generación de Balance General
   - Generación de Estado de Resultados
   - Descarga en PDF y Excel

## Servicios

- **ApiService**: Servicio base para comunicación HTTP
- **AccountService**: Gestión de cuentas contables
- **JournalEntryService**: Gestión de asientos contables

## Modelos

- **Account**: Modelo de cuenta contable
- **JournalEntry**: Modelo de asiento contable
- **JournalEntryLine**: Modelo de línea de asiento

## Configuración

### Variables de Entorno

El archivo `src/environments/environment.ts` contiene la URL del backend:

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000',
};
```

## Instalación y Ejecución

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm start

# Compilar para producción
npm run build
```

La aplicación se ejecutará en `http://localhost:4200`

## Rutas Disponibles

- `/dashboard` - Dashboard principal
- `/accounts` - Plan de Cuentas
- `/journal-entries` - Libro Diario
- `/general-ledger` - Libro Mayor
- `/electronic-invoices` - Facturación Electrónica
- `/reports` - Reportes

## Próximos Pasos

- [ ] Completar formulario de Facturación Electrónica
- [ ] Crear componentes de Retenciones y ATS
- [ ] Crear componentes de Inventario
- [ ] Crear componentes de Cuentas por Cobrar/Pagar
- [ ] Crear componentes de Bancos y Caja
- [ ] Crear componentes de Centros de Costo
- [ ] Crear componentes de Cierre de Período
- [ ] Implementar autenticación y autorización
- [ ] Agregar manejo de errores global
- [ ] Agregar loading states
- [ ] Mejorar validaciones de formularios

