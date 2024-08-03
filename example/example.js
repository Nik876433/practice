const $monthDisplay = $('#attendance-wapper .month-display');
const $prevMonthButton = $(' #attendance-wapper .prev-month');
const $nextMonthButton = $('#attendance-wapper .next-month');
const $monthSelector = $('#attendance-wapper .monthSelector');

let currentDate = new Date();

function updateMonthDisplay() {
    const month = currentDate.toLocaleString('default', { month: 'long' });
    const year = currentDate.getFullYear();

    $monthDisplay.val(`${year}-${String(currentDate.getMonth() + 1).padStart(2, '0')}`); 
}

$prevMonthButton.on('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    console.log(currentDate)
    updateMonthDisplay();
});



$nextMonthButton.on('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    console.log(currentDate)

    updateMonthDisplay();
});

$monthDisplay.on('click', () => {
    $monthSelector.show().focus();
});

$monthSelector.on('change', function () {
    const selectedDate = new Date($(this).val());
    currentDate.setFullYear(selectedDate.getFullYear());
    currentDate.setMonth(selectedDate.getMonth());
    updateMonthDisplay();
});

// Initialize the display
updateMonthDisplay();


   //date range calender
//    $(function () {
//     $('.dateRange').daterangepicker({
//         opens: 'left'
//     }, function (start, end, label) {
//         $('.dateRange').text(start.format('DD MMM YYYY') + ' - ' + end.format('DD MMM YYYY'));
//     });
// });



$(function () {
    function updateDateRange(start, end) {
        $('.dateRange').text(start.format('DD MMM YYYY') + ' - ' + end.format('DD MMM YYYY'));
    }

    // Set default date range to current month start and end
    var start = moment().startOf('month');
    var end = moment().endOf('month');
    updateDateRange(start, end);


    console.log(end);

    // Initialize the date range picker
    $('.dateRange').daterangepicker({
        startDate: start,
        endDate: end,
        opens: 'left'
    }, function (start, end) {
        updateDateRange(start, end);
    });

    // Handle next month click
    $('#next-month').click(function() {
        start.add(1, 'month');
        end.add(1, 'month');
        $('.dateRange').daterangepicker({
            startDate: start,
            endDate: end,
            opens: 'left'
        }, function (start, end) {
            updateDateRange(start, end);
        });
        updateDateRange(start, end);
    });

    // Handle previous month click
    $('#prev-month').click(function() {
        start.subtract(1, 'month');
        end.subtract(1, 'month');
        $('.dateRange').daterangepicker({
            startDate: start,
            endDate: end,
            opens: 'left'
        }, function (start, end) {
            updateDateRange(start, end);
        });
        updateDateRange(start, end);
    });
});