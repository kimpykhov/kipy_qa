var ctx = document.getElementById('skillsChart').getContext('2d');
var skillsChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Manual Testing', 'Automation', 'Leadership'],
        datasets: [{
            label: 'Skill Level',
            data: [50, 10, 40], // Примерные данные для каждого навыка
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ],
            hoverOffset: 4
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw + '%';
                    }
                }
            }
        },
        onClick: function(evt, element) {
            if (element.length > 0) {
                var index = element[0].index;
                var label = skillsChart.data.labels[index];

                // Показываем описание в зависимости от выбранного навыка
                var descriptionText = "";
                switch(label) {
                    case 'Manual Testing':
                        descriptionText = "Manual Testing: In-depth experience with functional, smoke, and regression testing...";
                        break;
                    case 'API Testing':
                        descriptionText = "API Testing: Proficient with tools like Postman and RestAssured for backend testing...";
                        break;
                    case 'Automation':
                        descriptionText = "Automation: Skilled in automation tools like Selenium, Cypress...";
                        break;
                    case 'Leadership':
                        descriptionText = "Leadership: Extensive experience leading testing teams, mentoring QA engineers...";
                        break;
                }

                // Обновляем текст в блоке и показываем его
                document.getElementById('skills-description').style.display = 'block';
                document.getElementById('skill-detail-text').innerText = descriptionText;
            }
        }
    }
});


  