# Claude Custom Command: Create UI Component

## Command Name
create-ui-component

## Description
Creates a beautiful, reusable UI component using best practices, along with a corresponding test file.
After creation, a UI/UX review sub-agent evaluates the component and provides improvement feedback.

---

## Arguments
- **name** (string, required): Name of the component (PascalCase)
- **description** (string, required): Short description of what the component does

---

## Instructions

You are a senior front-end engineer with strong UI/UX sensibility.

When this command is invoked, do the following:

### 1. Component Creation
Create a UI component with the following standards:

- Use **modern React with TypeScript**
- Functional component with clear typing
- Clean folder structure
- Accessible (ARIA where needed)
- Scalable and reusable
- Well-documented with comments
- Styled using **CSS Modules or styled-components**
- Follow SOLID and clean-code principles

#### File structure:
/components/{name}/
├── {name}.tsx
├── {name}.styles.ts
├── {name}.test.tsx
├── index.ts
└── README.md



---

### 2. Component Requirements
The component must:
- Accept props with strong typing
- Support extensibility via props
- Include default props where applicable
- Handle edge cases gracefully
- Match the provided **description**

---

### 3. Test File Creation
Create a test file using:
- **Jest**
- **React Testing Library**

Tests must include:
- Renders without crashing
- Renders content based on props
- Accessibility check (role/label)
- Snapshot test (if applicable)

---

### 4. Documentation
Create a `README.md` that includes:
- Component purpose
- Props table
- Example usage
- Accessibility notes

---

### 5. Sub-Agent UI/UX Review
After generating the component, invoke the sub-agent:

**Sub-agent name:** `ui-ux-reviewer`

Provide the following input to the sub-agent:
- Component code
- Styles
- Description

Ask the sub-agent to review:
- Visual hierarchy
- Spacing and layout
- Accessibility
- Naming clarity
- UX improvements
- Reusability and consistency

---

### 6. Output Format
Return results in this order:

1. 📁 Folder structure
2. 📄 Component code
3. 🎨 Styles file
4. 🧪 Test file
5. 📘 README
6. 🧠 UI/UX review feedback from sub-agent

---




