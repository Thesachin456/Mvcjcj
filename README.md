# EduVibe - Next Toppers Educational Platform

## Overview
This repository contains a complete import of the educational website from `https://edu-vibe-nt.vercel.app/`. EduVibe (branded as "Next Toppers") is a comprehensive online learning platform designed for Indian students, particularly focusing on classes 9th, 10th, and 11th across different streams.

## Website Structure

### Core Files
- `index.html` - Main HTML file with React app container
- `static/js/main.7f851856.js` - Main React application bundle (1.1MB)
- `static/css/main.00f2a385.css` - Complete stylesheet (54KB)
- `NTapp.png` - Application logo/favicon (28KB)
- `pushClient.js` - Push notification client
- `sw.js` - Service worker for notifications

### Technology Stack
- **Frontend**: React.js with React Router
- **Build Tool**: Create React App (CRA)
- **Styling**: Custom CSS with responsive design
- **Video Player**: Video.js with HLS support
- **Notifications**: Web Push API with service worker
- **Analytics**: Google Analytics (G-P0WZ4K2WQ4)

## Key Features Identified

### 1. Multi-Class Support
- **Class 9th**: Science, SST, Maths
- **Class 10th**: Science, SST, Maths, Tests
- **Class 11th**: 
  - Science stream
  - Commerce stream  
  - Arts/Humanities stream

### 2. Content Types
- **Live Classes**: Real-time streaming lectures
- **Recorded Lectures**: On-demand video content
- **Notes**: PDF documents and study materials
- **Tests**: Interactive quizzes and assessments
- **DPP (Daily Practice Problems)**: Regular practice sets

### 3. Video Streaming
- HLS (HTTP Live Streaming) support
- Multiple quality levels
- CloudFront CDN integration
- Live streaming capabilities

### 4. Interactive Testing System
- Multiple choice questions
- Timer-based tests
- Instant feedback and explanations
- Score tracking
- Subject-wise categorization

## API Endpoints Discovered

### Primary APIs
- `https://php-pearl.vercel.app/api/` - Main API for 10th/11th class content
- `https://automation9thphp.vercel.app/api/` - 9th class specific API

### API Parameters
- `token=my_secret_key_123` - Authentication token
- `view=` - Content type (live, upcoming, completed, notes, etc.)
- `api=` - Subject identifier

### Content Categories
- **Live Classes**: `view=live`
- **Upcoming Classes**: `view=upcoming` 
- **Completed Classes**: `view=completed`
- **Notes**: `view={subject}notes`
- **Recordings**: `view={subject}`

## Subject Mappings

### Class 9th
- Maths, Science, SST
- English, Grammar, Writing Skills, Reading Comprehension
- Hindi, AI, IT, Sanskrit

### Class 10th  
- Maths, Science, SST
- Live classes with multiple teachers per subject

### Class 11th
- **Science**: Physics, Chemistry, Maths, Biology
- **Commerce**: Accounts, Economics, Business Studies
- **Arts**: History, Geography, Political Science, Economics

## Test System Structure

The application includes a comprehensive testing system with:

### Question Types
- Multiple choice questions (MCQ)
- Image-based questions
- Pre-formatted text questions
- Assertion-reasoning questions

### Subjects Covered
- **Mathematics**: Quadratic equations, algebra, geometry
- **Science**: Physics, chemistry, biology topics
- **Social Studies**: History, geography, civics
- **AI/IT**: Computer science fundamentals

### Features
- 20-minute timer per test
- Instant feedback with explanations
- Score calculation
- Unattempted question tracking
- Navigation between questions

## Video Player Integration

### Supported Formats
- HLS streaming (.m3u8)
- Multiple quality levels
- Live streaming support

### CDN Providers
- CloudFront (AWS)
- Custom streaming servers

### Player Features
- Quality selector
- Playback speed control
- Full-screen support
- Mobile-responsive design

## Push Notifications

### Implementation
- Service worker based (`sw.js`)
- VAPID public key: `BFQe3gbumuWcVGq-HwzVlCz72z0VE_m6D2AlQFYl8IFwNpqGP2bTWwSJIqur9toFk4nK6Cc52S_x93YeERrMrm4`
- Subscription endpoint: `/api/subscribe`

### Features
- Class notifications
- Assignment reminders
- Live class alerts

## Authentication System

### Login Process
- Phone number based authentication
- OTP verification
- Session management via localStorage
- Protected routes implementation

### Security
- Token-based API authentication
- Route protection
- Session validation

## Responsive Design

### Mobile Support
- Touch-friendly interface
- Responsive grid layouts
- Mobile-optimized video player
- Adaptive font sizes

### Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px  
- Desktop: > 1024px

## Content Protection

### Security Measures
- Right-click disabled (`oncontextmenu="return!1"`)
- Copy/paste disabled (`oncopy="return!1"`)
- Text selection disabled
- Developer tools detection

## Installation & Usage

### Prerequisites
- Modern web browser with JavaScript enabled
- Internet connection for API calls
- Push notification permissions (optional)

### Local Development
1. Serve the files using a local web server
2. Ensure HTTPS for push notifications to work
3. Configure API endpoints if needed

### Deployment Considerations
- CDN for static assets
- HTTPS requirement for service worker
- API rate limiting
- Content delivery optimization

## File Structure
```
edu-vibe-nt.vercel.app/
├── index.html              # Main HTML file
├── sw.js                   # Service worker
├── pushClient.js           # Push notification client
├── NTapp.png              # App logo/favicon
├── robots.txt.html        # Robots file
└── static/
    ├── css/
    │   └── main.00f2a385.css    # Main stylesheet
    └── js/
        └── main.7f851856.js     # React application bundle
```

## Important Notes

### Content Ownership
- This is an educational platform owned by Next Toppers
- Content includes copyrighted material
- Respect intellectual property rights

### API Usage
- APIs require authentication tokens
- Rate limiting may apply
- Some endpoints may be restricted

### Browser Compatibility
- Modern browsers required
- ES6+ JavaScript features used
- Service worker support needed for notifications

## Contact Information
Based on the imported content, this appears to be developed by Next Toppers educational platform.

---

*This documentation was generated from the complete website import performed on the EduVibe platform.*