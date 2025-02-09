document.getElementById("recommendation-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Recommendation submitted successfully!");
    document.getElementById("recommendation").value = "";  // Clear the form
});
// Array to hold recommendations
let recommendations = [
    {
        text: "Mohamed Aziz Jallali is a dedicated and hardworking individual who always brings new ideas to the table.",
        author: "Mohammed Chedli Kouka"
    },
    {
        text: "I had the pleasure of working with Mohamed on multiple projects, and his technical expertise is unmatched.",
        author: "Ahmed Bensaid"
    },
    {
        text: "Mohamed's creativity and problem-solving skills are exceptional. He always delivers high-quality work.",
        author: "TELECOM FOR FUTURE"
    }
];

// Function to display recommendations
function displayRecommendations() {
    const container = document.getElementById("recommendations-container");
    container.innerHTML = ''; // Clear existing recommendations

    recommendations.forEach(function (recommendation) {
        const card = document.createElement('div');
        card.classList.add('recommendation-card');
        card.innerHTML = `
            <p class="recommendation-text">${recommendation.text}</p>
            <p class="recommendation-author">- ${recommendation.author}</p>
        `;
        container.appendChild(card);
    });
}

document.getElementById('recommendation-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const recommendationText = document.getElementById('recommendation-input').value;
    const authorName = document.getElementById('author-input').value;

    recommendations.push({
        text: recommendationText,
        author: authorName
    });

    document.getElementById('recommendation-input').value = '';
    document.getElementById('author-input').value = '';

    displayRecommendations();

    alert('Your recommendation has been submitted!');
});

// Initial display of recommendations
displayRecommendations();
