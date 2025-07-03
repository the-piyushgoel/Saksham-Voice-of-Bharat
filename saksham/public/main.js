// Success Stories Data
const successStories = [
    {
        name: "Stephen Hawking",
        title: "Theoretical Physicist & Cosmologist",
        preview: "Diagnosed with ALS at 21, Stephen Hawking became one of the most brilliant minds in physics, revolutionizing our understanding of black holes and the universe.",
        achievement: "Groundbreaking Physics Research",
        fullStory: "Stephen Hawking was diagnosed with amyotrophic lateral sclerosis (ALS) at the age of 21 and given just two years to live. Despite this devastating diagnosis, he went on to live for 55 more years and became one of the most celebrated physicists of our time. His work on black holes, particularly Hawking radiation, revolutionized our understanding of the universe. He authored the bestselling book 'A Brief History of Time' and held the prestigious Lucasian Chair of Mathematics at Cambridge University for 30 years. Hawking's determination to continue his research despite his physical limitations inspired millions worldwide and proved that the human mind knows no boundaries.",
        initials: "SH"
    },
    {
        name: "Helen Keller",
        title: "Author, Activist & Lecturer",
        preview: "Deaf and blind from infancy, Helen Keller became the first deafblind person to earn a Bachelor of Arts degree and a powerful advocate for disability rights.",
        achievement: "First Deafblind College Graduate",
        fullStory: "Helen Keller lost her sight and hearing at 19 months old due to illness. With the help of her teacher Anne Sullivan, she learned to communicate and went on to become the first deafblind person to earn a Bachelor of Arts degree from Radcliffe College. She became a prolific author, writing 14 books and numerous articles. Keller was also a fierce advocate for people with disabilities, women's suffrage, and social justice. She traveled to over 40 countries, giving lectures and inspiring people worldwide. Her autobiography 'The Story of My Life' remains a classic, and her legacy continues to inspire people to overcome seemingly impossible obstacles.",
        initials: "HK"
    },
    {
        name: "Nick Vujicic",
        title: "Motivational Speaker & Entrepreneur",
        preview: "Born without arms and legs, Nick Vujicic has become a world-renowned motivational speaker, inspiring millions with his message of hope and determination.",
        achievement: "Global Inspirational Leader",
        fullStory: "Nick Vujicic was born with tetra-amelia syndrome, a rare disorder characterized by the absence of arms and legs. Despite facing severe bullying and depression in his youth, he found purpose in inspiring others. He founded the non-profit organization Life Without Limbs and has spoken to over 6 million people across 57 countries. Nick has written several bestselling books, including 'Life Without Limits' and 'Unstoppable.' He's also a successful entrepreneur, husband, and father of four children. His story demonstrates that physical limitations cannot limit the human spirit's capacity for achievement and impact.",
        initials: "NV"
    },
    {
        name: "Temple Grandin",
        title: "Animal Scientist & Autism Advocate",
        preview: "Living with autism, Temple Grandin revolutionized animal welfare in agriculture and became a leading advocate for autism awareness and acceptance.",
        achievement: "Revolutionary Animal Welfare Expert",
        fullStory: "Temple Grandin was diagnosed with autism at a time when little was understood about the condition. She channeled her unique way of thinking into groundbreaking work in animal science. Her designs for livestock handling facilities are used worldwide and have significantly improved animal welfare in the agriculture industry. She holds a PhD in Animal Science and is a professor at Colorado State University. Grandin has written numerous books about autism and animal behavior, including 'Thinking in Pictures.' Her life story was depicted in an Emmy-winning HBO biographical film. She continues to advocate for both animal welfare and autism acceptance, showing how neurodiversity can be a strength.",
        initials: "TG"
    },
    {
        name: "Marla Runyan",
        title: "Paralympic & Olympic Athlete",
        preview: "Legally blind due to Stargardt's disease, Marla Runyan became the first legally blind athlete to compete in the Olympics, breaking barriers in track and field.",
        achievement: "First Blind Olympic Competitor",
        fullStory: "Marla Runyan was diagnosed with Stargardt's disease at age 9, which gradually took away most of her vision. Rather than letting this stop her athletic dreams, she excelled in track and field, becoming a Paralympic champion in the heptathlon and long jump. In 2000, she made history by becoming the first legally blind athlete to compete in the Olympics, finishing 8th in the 1500 meters. She also competed in the 2004 Olympics and won multiple Paralympic gold medals. Beyond athletics, Runyan earned a master's degree in education and has worked as a teacher. Her achievements have opened doors for other visually impaired athletes and challenged perceptions about what's possible.",
        initials: "MR"
    },
    {
        name: "John Nash",
        title: "Nobel Prize-Winning Mathematician",
        preview: "Despite battling schizophrenia, John Nash made groundbreaking contributions to mathematics and economics, earning him the Nobel Prize in Economic Sciences.",
        achievement: "Nobel Prize Winner",
        fullStory: "John Nash was a brilliant mathematician who made fundamental contributions to game theory, differential geometry, and partial differential equations. However, his career was interrupted by a decades-long struggle with schizophrenia, which began in his late twenties. Despite the challenges of his mental illness, Nash continued his mathematical work and eventually recovered enough to return to academic life. In 1994, he was awarded the Nobel Prize in Economic Sciences for his pioneering work in game theory. His life story was depicted in the Academy Award-winning film 'A Beautiful Mind.' Nash's journey demonstrates the possibility of recovery and continued achievement even while living with serious mental illness.",
        initials: "JN"
    }
];

// DOM Elements
const storiesGrid = document.getElementById('storiesGrid');
const modal = document.getElementById('storyModal');
const modalBody = document.getElementById('modalBody');

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    renderStories();
    setupEventListeners();
});

// Render success stories
function renderStories() {
    storiesGrid.innerHTML = '';
    
    successStories.forEach((story, index) => {
        const storyCard = createStoryCard(story, index);
        storiesGrid.appendChild(storyCard);
    });
}

// Create individual story card
function createStoryCard(story, index) {
    const card = document.createElement('div');
    card.className = 'story-card';
    card.onclick = () => openModal(story);
    
    card.innerHTML = `
        <div class="story-image">${story.initials}</div>
        <h3 class="story-name">${story.name}</h3>
        <p class="story-title">${story.title}</p>
        <p class="story-preview">${story.preview}</p>
        <span class="story-achievement">${story.achievement}</span>
    `;
    
    // Add animation delay for staggered entrance
    card.style.animationDelay = `${index * 0.1}s`;
    
    return card;
}

// Open modal with story details
function openModal(story) {
    modalBody.innerHTML = `
        <div class="modal-header">
            <h2 class="modal-name">${story.name}</h2>
            <p class="modal-title">${story.title}</p>
        </div>
        <div class="modal-body">
            <p>${story.fullStory}</p>
            <div class="modal-achievement">
                <strong>Key Achievement:</strong> ${story.achievement}
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Scroll to stories section
function scrollToStories() {
    document.getElementById('stories').scrollIntoView({
        behavior: 'smooth'
    });
}

// Setup event listeners
function setupEventListeners() {
    // Close modal when clicking outside
    window.onclick = function(event) {
        if (event.target === modal) {
            closeModal();
        }
    };
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add scroll effect to header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(102, 126, 234, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            header.style.backdropFilter = 'none';
        }
    });
}

// Add entrance animations
function addEntranceAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe story cards for entrance animation
    document.querySelectorAll('.story-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Initialize entrance animations after DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(addEntranceAnimations, 100);
});