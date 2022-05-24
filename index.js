let ctx = document.getElementById('myChart').getContext('2d');

let labels = ['Maharashtra', 'Kerala', 'Karnataka', 'Tamil Nadu', 'Andhra Pradesh'];
let colorHex = ['#557B83', '#39AEA9', '#A2D5AB', '#F1E1A6', '#E5EFC1']

let myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        datasets: [{
            data: [7883010, 6551069, 3950652, 3454925, 2319885],
            backgroundColor: colorHex
        }],
        labels: labels
    },
    options: {
        responsive: true,
        legend: {
            position: 'bottom'
        },
    }
})