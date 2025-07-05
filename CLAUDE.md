# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based demo application showcasing a comprehensive restaurant management system for Polpetta, an Italian restaurant chain. The project consists of five standalone React component demos that demonstrate an integrated restaurant operations platform.

## Project Setup Requirements

**Note**: This project currently lacks build configuration. To run these components, you need to:
1. Initialize a React project (Create React App or Vite)
2. Install dependencies: `react`, `react-dom`, `lucide-react`
3. Configure Tailwind CSS (the components use Tailwind utility classes)
4. Import and render the demo components

## Architecture

The codebase consists of five independent demo components, each showcasing a different aspect of the restaurant management system:

- **customer-journey-demo.tsx**: 6-stage customer lifecycle automation with WhatsApp/Email touchpoints
- **inventory-supplier-demo.tsx**: Real-time inventory tracking with predictive ordering
- **marketing-lead-generation-demo.tsx**: Social media and review management automation
- **multi-location-dashboard.tsx**: Centralized monitoring for multiple restaurant branches
- **whatsapp-reservation-demo.tsx**: Conversational booking system with automated confirmations

## Code Patterns

All components follow consistent patterns:
- Use React hooks (`useState`, `useEffect`) for state management
- Mock data is embedded within each component
- Gradient-based design system with amber/orange color scheme
- Card-based layouts with hover effects and shadows
- Tab navigation for multiple views within components

## South African Context

The demos include South African market considerations:
- Load shedding monitoring in the multi-location dashboard
- References to local areas (Morningside, George, Sea Point)
- Rand (R) currency formatting
- WhatsApp as primary communication channel