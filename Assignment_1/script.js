document.getElementById('toggle-btn').addEventListener('click', function() {
  const hiddenItems = document.querySelectorAll('.extra');
  hiddenItems.forEach(item => item.classList.toggle('hidden'));
  this.textContent = this.textContent === 'Read More' ? 'Show Less' : 'Read More';
});

document.getElementById('edit-btn').addEventListener('click', function() {
  const editArea = document.getElementById('edit-area');
  const skillsList = document.getElementById('skills-list');

  if (editArea.classList.contains('hidden')) {
    // Show edit area and populate with current skills
    const skills = Array.from(skillsList.children).map(li => li.textContent).join(', ');
    editArea.value = skills;
    editArea.classList.remove('hidden');
    this.textContent = 'Save';
  } else {
    // Save new skills
    const newSkills = editArea.value.split(',').map(s => s.trim()).filter(s => s !== '');
    skillsList.innerHTML = '';
    newSkills.forEach(skill => {
      const li = document.createElement('li');
      li.textContent = skill;
      skillsList.appendChild(li);
    });
    editArea.classList.add('hidden');
    this.textContent = 'Edit';
  }
});
const greetings = ["Hello!", "Welcome to my profile!", "Hi there!", "Namaste!"];
let greetIndex = 0;
const h1 = document.querySelector("h1");

setInterval(() => {
  greetIndex = (greetIndex + 1) % greetings.length;
  h1.textContent = greetings[greetIndex];
}, 3000);
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});





