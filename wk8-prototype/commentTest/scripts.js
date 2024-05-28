// Initialize Parse
Parse.initialize("OIRMnHSubP72gcTqiOWWksDMceFEx75Gx1oxx9YF", "yVLvstuECWXTgC8Z4k2Ohzn92RZT2HK7mJUjJhF4");
Parse.serverURL = 'https://parseapi.back4app.com/';

// Function to fetch and display comments
async function fetchComments() {
    const commentsQuery = new Parse.Query('Comments');
    commentsQuery.descending('time');
    const results = await commentsQuery.find();
    const commentsDiv = document.getElementById('comments');
    commentsDiv.innerHTML = '';
    results.forEach(comment => {
        const commentElement = document.createElement('div');
        commentElement.className = 'comment';
        commentElement.innerHTML = `
            <h4>${comment.get('username')}</h4>
            <p>${comment.get('comment')}</p>
        `;
        commentsDiv.appendChild(commentElement);
    });
}

// Function to submit a new comment
async function submitComment(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const comment = document.getElementById('comment').value;
    const Comment = Parse.Object.extend('Comments');
    const newComment = new Comment();
    newComment.set('username', username);
    newComment.set('comment', comment);
    await newComment.save();
    document.getElementById('comment-form').reset();
    fetchComments();
}

document.getElementById('comment-form').addEventListener('submit', submitComment);

// Fetch comments on page load
fetchComments();
