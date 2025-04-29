const form = document.getElementById('cpfForm');
const responseDiv = document.getElementById('response');
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const cpfInput = document.getElementById('cpfInput');

// Force numeric input
cpfInput.addEventListener('keypress', (event) => {
  const key = event.key;

  if (key === 'Enter') {
    return; // Allow the Enter key
  }

  if (!/^\d$/.test(key)) {
    event.preventDefault(); // Block non-numeric characters
  }
});

// Theme toggle functionality
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  themeIcon.className = isDark ? 'fas fa-moon' : 'fas fa-lightbulb';
});

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const apiUrl = `http://localhost:7071/api/validateCPF?cpf=${cpfInput.value}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (response.ok) {
      responseDiv.innerHTML = `<p><i class="fas fa-check-circle success-icon"></i> ${data.message}</p>`;
    } else {
      responseDiv.innerHTML = `<p><i class="fas fa-times-circle error-icon"></i> ${data.error}</p>`;
    }
  } catch (error) {
    responseDiv.innerHTML = `<p><i class="fas fa-exclamation-circle error-icon"></i> Error: ${error.message}</p>`;
  }
});
