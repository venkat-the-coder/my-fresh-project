# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Angular 21 todo application with CRUD functionality, localStorage persistence, and filtering capabilities.

## Commands

```bash
npm start          # Start dev server at http://localhost:4200
npm run build      # Production build to dist/todo-app
npm test           # Run unit tests with Vitest
ng generate component <name>  # Scaffold new component
```

## Architecture

### Structure
- `src/app/core/` - Singleton services and models used app-wide
- `src/app/features/` - Feature modules organized by domain (e.g., `todo/`)
- `src/app/shared/` - Reusable components and pipes

### State Management
Uses Angular Signals for reactive state. The `TodoService` maintains a private signal with public readonly accessors and computed signals for filtered views (completed, pending, counts).

### Data Flow
Components use `input()` and `output()` for parent-child communication. The `TodoListComponent` orchestrates child components (`TodoFormComponent`, `TodoItemComponent`) and delegates to `TodoService` for state mutations.

### Persistence
Data persists to localStorage under key `todos`. The service handles serialization/deserialization of Date objects.

## Code Conventions

- Standalone components (no NgModules)
- SCSS for styling with component-scoped styles
- Barrel exports via `index.ts` in core directories
- DTOs for create/update operations (`CreateTodoDto`, `UpdateTodoDto`)
- Prettier: 100 char width, single quotes
