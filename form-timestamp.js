// Set the timestamp value on page load
document.addEventListener('DOMContentLoaded', () => {
    const now = new Date();
    const timestampField = document.getElementById('timestamp');
    const displayField = document.getElementById('display-timestamp');
    
    if (timestampField) {
        timestampField.value = now.toISOString();
    }
    
    if (displayField) {
        displayField.value = now.toLocaleString();
    }
});
