module.exports = {
    formatBrMonth(date) {
        const dateParts = date.split('-');
        const months = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'];

        return months[parseInt(dateParts[1] - 1)];

    }
};
