window.onload = function() {
    document.querySelector('.about-content').classList.add('show');
};

window.addEventListener('load', () => {
    document.querySelector('#contact-section').classList.add('show');
    document.querySelector('.contact-container').classList.add('show');
    document.querySelector('.contact-form-container').classList.add('show');
    document.querySelector('.map-container').classList.add('show');
});

window.addEventListener('load', () => {
    document.querySelector('#projects-section').classList.add('show');
    document.querySelector('.section-title').classList.add('show');
    document.querySelector('.projects-grid').classList.add('show');
    
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('show');
        }, index * 800); 
    });
});


const programmingData = {
    x: ['Python', 'Java', 'C++', 'C', 'R'],
    y: [90, 85, 80, 75, 70],
    type: 'bar',
    marker: { color: '#1f77b4' },
  };
  
  const webDevelopmentData = {
    x: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    y: [95, 90, 85, 80],
    type: 'bar',
    marker: { color: '#2ca02c' },
  };
  
  const toolsData = {
    x: ['GitHub', 'VS Code', 'Construct 3', 'StarUML'],
    y: [85, 90, 70, 80],
    type: 'bar',
    marker: { color: '#d62728' },
  };
  
  const analyticsData = {
    x: ['Power BI', 'Tableau', 'Machine Learning', 'Gen AI'],
    y: [85, 80, 70, 75],
    type: 'bar',
    marker: { color: '#9467bd' },
  };
  
  const communicationData = {
    labels: ['Presentation', 'Active Listening'],
    values: [60, 40],
    type: 'pie',
    marker: { colors: ['#ff7f0e', '#1f77b4'] },
    hole: 0.3,
  };
  
  const problemSolvingData = {
    labels: ['Analytical Thinking', 'Innovative Solution', 'Critical Thinking'],
    values: [35, 40, 25],
    type: 'pie',
    marker: { colors: ['#bcbd22', '#17becf', '#e377c2'] },
    hole: 0.3,
  };
  
  const leadershipData = {
    labels: ['Collaboration', 'Decision-Making', 'Multitasking'],
    values: [40, 30, 30],
    type: 'pie',
    marker: { colors: ['#7f7f7f', '#bcbd22', '#8c564b'] },
    hole: 0.3,
  };
  
  const barLayout = (title) => ({
    title,
    xaxis: { title: 'Skills' },
    yaxis: { title: 'Proficiency (%)', range: [0, 100] },
    paper_bgcolor: '#f9f9f9',
    plot_bgcolor: '#f9f9f9',
    margin: { t: 40, b: 50 },
  });
  
  const pieLayout = (title) => ({
    title,
    paper_bgcolor: '#f9f9f9',
    margin: { t: 40, b: 40 },
  });
  
  Plotly.newPlot('bar-programming', [programmingData], barLayout('Programming Languages'));
  Plotly.newPlot('bar-web', [webDevelopmentData], barLayout('Web Development'));
  Plotly.newPlot('bar-tools', [toolsData], barLayout('Tools'));
  
  Plotly.newPlot('pie-communication', [communicationData], pieLayout('Communication Skills'));
  Plotly.newPlot('pie-problem-solving', [problemSolvingData], pieLayout('Problem Solving Skills'));
  Plotly.newPlot('pie-leadership', [leadershipData], pieLayout('Leadership and Teamwork'));
  