# API Documentation - EduVibe Platform

## Overview
This document details the API endpoints and data structures discovered from the EduVibe educational platform.

## Base URLs

### Primary API (Classes 10 & 11)
```
https://php-pearl.vercel.app/api/
```

### Secondary API (Class 9)
```
https://automation9thphp.vercel.app/api/
```

### Third-party APIs
```
https://automation9thphp.vercel.app/api/api.php
```

## Authentication

### Token-based Authentication
All API requests require a token parameter:
```
token=my_secret_key_123
```

## Core Endpoints

### 1. Live Classes
**Endpoint:** `/api/api.php`
**Method:** GET
**Parameters:**
- `token`: Authentication token
- `view`: Content type (`live`, `upcoming`, `completed`)

**Example:**
```
GET https://php-pearl.vercel.app/api/api.php?token=my_secret_key_123&view=live
```

**Response Structure:**
```json
{
  "status": true,
  "data": {
    "list": [
      {
        "id": "string",
        "title": "string",
        "start_date": "timestamp",
        "end_date": "timestamp",
        "video_type": "7|8", // 7=recorded, 8=live
        "live_status": "0|1",
        "file_url": "string",
        "thumbnail_url": "string",
        "video_duration": "seconds",
        "payload": {
          "topic_id": "35848|35849|35850" // Maths|SST|Science
        }
      }
    ]
  },
  "time": "timestamp"
}
```

### 2. Subject-specific Content
**Endpoint:** `/api/{subject}`
**Method:** GET

**Subject Codes:**
- `maths` - Mathematics
- `science` - Science
- `sst` - Social Studies
- `physics` - Physics
- `chemistry` - Chemistry
- `biology` - Biology

**Example:**
```
GET https://php-pearl.vercel.app/api/maths
```

### 3. Notes and Documents
**Endpoint:** `/api/api.php`
**Method:** GET
**Parameters:**
- `token`: Authentication token
- `view`: `{subject}notes` (e.g., `mathnotes`, `sciencenotes`)

**Example:**
```
GET https://php-pearl.vercel.app/api/api.php?token=my_secret_key_123&view=mathnotes
```

**Response Structure:**
```json
{
  "status": true,
  "data": {
    "list": [
      {
        "id": "string",
        "title": "string",
        "file_type": "1", // PDF documents
        "file_url": "string",
        "created": "timestamp"
      }
    ]
  }
}
```

### 4. Class 9 Specific API
**Endpoint:** `/api/nine`
**Method:** GET
**Parameters:**
- `api`: Subject identifier

**Subject Identifiers:**
- `maths` - Mathematics
- `science` - Science  
- `sst` - Social Studies

**Example:**
```
GET https://php-pearl.vercel.app/api/nine?api=maths
```

**Response Structure:**
```json
{
  "videos": [
    {
      "name": "string",
      "m3u8Url": "string",
      "youtubeUrl": "string" // optional
    }
  ],
  "notes": [
    {
      "title": "string",
      "url": "string"
    }
  ]
}
```

### 5. Class 10 Recordings API
**Endpoint:** `/api/rcl`
**Method:** GET
**Parameters:**
- `api`: Subject identifier

**Subject Identifiers:**
- `en` - English
- `gm` - Grammar
- `ws` - Writing Skills
- `rc` - Reading Comprehension
- `hn` - Hindi
- `ai` - AI/IT
- `it` - Information Technology
- `sn` - Sanskrit

**Example:**
```
GET https://php-pearl.vercel.app/api/rcl?api=en
```

### 6. Class 11 Index API
**Endpoint:** `/api/index`
**Method:** GET
**Parameters:**
- `api`: Subject identifier

**Subject Identifiers:**
- `gm` - Grammar
- `ws` - Writing Skills
- `hb` - Hornbill
- `hn` - Hindi
- `am` - Applied Mathematics
- `ar` - Aroh
- `sn` - Snapshot

## Video Streaming

### HLS Streaming URLs
Videos are served via HLS (HTTP Live Streaming) format with `.m3u8` extension.

**CDN Providers:**
- CloudFront: `https://d133w6ldrek1er.cloudfront.net/`
- CloudFront Alt: `https://dga9kme080o0w.cloudfront.net/`
- Custom CDN: `https://dxixtlyravvxx.cloudfront.net/`

**URL Structure:**
```
https://cdn-domain/out/v1/{stream-id}/index.m3u8
```

**Time-based URLs:**
For live streams, timestamp parameter is added:
```
{base_url}?start={unix_timestamp}
```

## Subject-Teacher Mappings

### Class 10 Live Classes
```json
{
  "Science": {
    "Prashant sir": "stream_url_1",
    "Tapur Ma'am": "stream_url_2"
  },
  "SST": {
    "DSR": "stream_url_3",
    "Teacher": "stream_url_4"
  },
  "Maths": {
    "Shobhit Bhaiya": "stream_url_5",
    "Kuldeep Sir": "stream_url_6"
  }
}
```

### Topic ID Mappings
```json
{
  "35848": "Maths",
  "35850": "Science", 
  "35849": "SST"
}
```

## Schedule System

### Weekly Schedule Structure
```json
{
  "Monday": {
    "17:00": "Science",
    "20:00": "SST"
  },
  "Tuesday": {
    "17:00": "Science", 
    "20:00": "SST"
  },
  "Wednesday": {
    "17:00": "SST",
    "20:00": "Science"
  },
  "Thursday": {
    "17:00": "SST",
    "20:00": "Maths"
  },
  "Friday": {
    "17:00": "Maths"
  },
  "Saturday": {
    "17:00": "Maths"
  }
}
```

## Error Handling

### Common Error Responses
```json
{
  "status": false,
  "message": "Error description",
  "data": null
}
```

### HTTP Status Codes
- `200` - Success
- `400` - Bad Request
- `401` - Unauthorized
- `404` - Not Found
- `500` - Internal Server Error

## Rate Limiting
- API calls may be rate limited
- Implement appropriate delays between requests
- Use caching where possible

## Content Types

### Video Types
- `7` - Recorded video
- `8` - Live stream

### File Types  
- `1` - PDF document
- `7` - Video file
- `8` - Live stream

### Live Status
- `0` - Not live
- `1` - Currently live

## Data Formats

### Timestamps
All timestamps are Unix timestamps in seconds.

### Durations
Video durations are provided in seconds.

### URLs
All file URLs are absolute URLs with HTTPS protocol.

## Security Considerations

### API Keys
- The token `my_secret_key_123` appears to be a shared key
- Implement proper authentication in production
- Consider rotating API keys regularly

### CORS
- APIs may have CORS restrictions
- Verify allowed origins for cross-domain requests

### Content Protection
- Video URLs may have time-based expiration
- Implement proper access controls

## Usage Examples

### Fetching Live Classes
```javascript
const response = await fetch(
  'https://php-pearl.vercel.app/api/api.php?token=my_secret_key_123&view=live'
);
const data = await response.json();
console.log(data.data.list);
```

### Getting Subject Videos
```javascript
const response = await fetch(
  'https://php-pearl.vercel.app/api/nine?api=maths'
);
const data = await response.json();
console.log(data.videos);
```

### Fetching Notes
```javascript
const response = await fetch(
  'https://php-pearl.vercel.app/api/api.php?token=my_secret_key_123&view=mathnotes'
);
const data = await response.json();
console.log(data.data.list);
```

---

*This API documentation was extracted from the EduVibe platform import and may be subject to changes by the platform owners.*