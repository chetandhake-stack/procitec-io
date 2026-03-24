# ARCHITECTURE.md

## System Overview

procitec.in  → Corporate Website (WordPress)
procitec.io  → Product Platform (Next.js)
*.procitec.io → Applications

## Frontend Stack
- Next.js (App Router)
- React
- Tailwind CSS

## Backend
- FastAPI (separate system)

## Deployment Strategy
- Static export (initial)
- VPS hosting via nginx

## Folder Structure

src/
├─ app/
├─ components/
│  ├─ layout/
│  ├─ sections/
│  └─ ui/
├─ lib/
