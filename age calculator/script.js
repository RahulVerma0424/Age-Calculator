function calculateAge() {
    const birthDate = document.getElementById('birthDate').value;
    
    if (!birthDate) {
      document.getElementById('result').textContent = "Please select a birth date.";
      return;
    }
    
    const birth = new Date(birthDate);
    const today = new Date();
    
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    const dayDiff = today.getDate() - birth.getDate();
    
    // Adjust for incomplete year
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }
    
    document.getElementById('result').textContent = `Your age is ${age} years old.`;
  }
  