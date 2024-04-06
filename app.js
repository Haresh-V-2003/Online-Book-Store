// Function to buy a book
function buyBook(bookId) {
    // Example endpoint to buy a book
    const endpoint = `http://localhost:3000/buy/${bookId}`;

    // Make a POST request to buy the book
    fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            // You may need to include additional headers if required by your backend
        },
        // You can include additional data in the request body if needed
        body: JSON.stringify({ bookId: bookId })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to buy book');
        }
        // Book successfully bought
        return response.json();
    })
    .then(data => {
        // Handle successful response from the server
        console.log('Book bought successfully:', data);
        // You can update the UI here, for example, display a success message
    })
    .catch(error => {
        // Handle errors
        console.error('Error buying book:', error.message);
        // Display an error message to the user
    });
}
