// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    loadLectures();
});

// Function to load lectures from JSON file
async function loadLectures() {
    try {
        const response = await fetch('lectures.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const lectures = await response.json();
        renderLectures(lectures);
    } catch (error) {
        console.error('Error loading lectures:', error);
        showError('Failed to load lectures. Please try again later.');
    }
}

// Function to render lectures in the DOM
function renderLectures(lectures) {
    const container = document.getElementById('lectures-container');
    
    // Clear loading message
    container.innerHTML = '';
    
    if (!lectures || lectures.length === 0) {
        container.innerHTML = '<div class="loading"><p>No lectures available at the moment.</p></div>';
        return;
    }
    
    // Create lecture cards
    lectures.forEach(lecture => {
        const lectureCard = createLectureCard(lecture);
        container.appendChild(lectureCard);
    });
}

// Function to create a lecture card element
function createLectureCard(lecture) {
    const card = document.createElement('div');
    card.className = 'lecture-card';
    
    // Build the card HTML
    let cardHTML = `
        <h3 class="lecture-title">${escapeHtml(lecture.title)}</h3>
        <p class="lecture-description">${escapeHtml(lecture.description)}</p>
    `;
    
    // Add video content
    if (lecture.videoUrl) {
        if (isYouTubeUrl(lecture.videoUrl)) {
            const embedUrl = getYouTubeEmbedUrl(lecture.videoUrl);
            cardHTML += `
                <div class="video-container">
                    <iframe src="${embedUrl}" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                    </iframe>
                </div>
            `;
        } else {
            cardHTML += `
                <a href="${escapeHtml(lecture.videoUrl)}" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   class="video-link">
                    📺 Watch Video
                </a>
            `;
        }
    }
    
    // Add notes section
    if (lecture.notes) {
        cardHTML += '<div class="lecture-notes"><h4>📝 Notes</h4>';
        
        if (Array.isArray(lecture.notes)) {
            // Render as bullet points
            cardHTML += '<ul>';
            lecture.notes.forEach(note => {
                cardHTML += `<li>${escapeHtml(note)}</li>`;
            });
            cardHTML += '</ul>';
        } else {
            // Render as paragraph
            cardHTML += `<p>${escapeHtml(lecture.notes)}</p>`;
        }
        
        cardHTML += '</div>';
    }
    
    card.innerHTML = cardHTML;
    return card;
}

// Function to check if URL is a YouTube URL
function isYouTubeUrl(url) {
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+/;
    return youtubeRegex.test(url);
}

// Function to convert YouTube URL to embed URL
function getYouTubeEmbedUrl(url) {
    let videoId = '';
    
    // Handle different YouTube URL formats
    if (url.includes('youtube.com/watch?v=')) {
        videoId = url.split('v=')[1].split('&')[0];
    } else if (url.includes('youtu.be/')) {
        videoId = url.split('youtu.be/')[1].split('?')[0];
    } else if (url.includes('youtube.com/embed/')) {
        return url; // Already an embed URL
    }
    
    return `https://www.youtube.com/embed/${videoId}`;
}

// Function to escape HTML to prevent XSS
function escapeHtml(text) {
    if (typeof text !== 'string') return '';
    
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Function to show error message
function showError(message) {
    const container = document.getElementById('lectures-container');
    container.innerHTML = `
        <div class="loading">
            <p style="color: #ff6b6b;">⚠️ ${escapeHtml(message)}</p>
        </div>
    `;
}

// Add some animation when cards are loaded
function animateCards() {
    const cards = document.querySelectorAll('.lecture-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Call animation after cards are rendered
const originalRenderLectures = renderLectures;
renderLectures = function(lectures) {
    originalRenderLectures(lectures);
    setTimeout(animateCards, 100);
};